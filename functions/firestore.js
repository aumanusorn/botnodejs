const line = require('@line/bot-sdk');
const config = require('./config.json');
const client = new line.Client(config);
const admin = require('firebase-admin');

const serviceAccount = require('./pclinechatbot-7c92ceaca788.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

async function handleRegistedRecord(agent) {
    const userId = agent.originalRequest.payload.data.source.userId;
    const { user_sys_id, user_citizen_id } = agent.parameters;
    const doc_dialogflow = {
        user_sys_id,
        user_citizen_id,
    };

    // [START get_document]
    const db = admin.firestore();
    const user_pc = db.collection('user_pc').doc(String(doc_dialogflow.user_sys_id));
    const doc = await user_pc.get();

    if (!doc.exists) {
        console.log('Not Pre-Registered');
        return agent.add('ปัจจุบันคุณยังไม่ได้แจ้งความประสงค์ขอใช้งาน กรุณาติดต่อพนักงานส่วนจัดหา หากต้องการข้อมูลเพิ่มเติม โทร 2175');

    } else if (doc.exists & (doc_dialogflow.user_citizen_id === doc.data().user_citizen_id)) {
        console.log('Pre-Registered');
        await user_pc.set({ user_id: userId }, { merge: true });
        await user_pc.set({ user_registered: true }, { merge: true });
        await user_pc.set({ user_line_display_name: (await client.getProfile(userId)).displayName }, { merge: true });
        await user_pc.set({ timestamp: admin.firestore.Timestamp.now() }, { merge: true });
        await client.linkRichMenuToUser(userId, 'richmenu-864aae47b173b1bd8705f2c77e5308ef');
        return agent.add('ลงทะเบียนสำเร็จแล้ว');

    } else {
        return agent.add('เลขบัตรประจำตัวประชาชน 4 ตัวท้ายไม่ตรงกับที่แจ้งขอความประสงค์ใช้งานไว้ โปรดติดพนักงานส่วนจัดหา โทร 2175');
    }
}

async function handleCheckRegistered(userId) {
    const db = admin.firestore();
    const userRef = db.collection('user_pc');
    const snapshot = await userRef.where('user_id', '==', userId).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return false;
    }

    snapshot.forEach(doc => {
        console.log(doc.id, '=> user registered: ', doc.data().user_registered);
        
    });
    return true
}

async function handleFollowerRecord(userId,profileDisplayName) {
    const db = admin.firestore();
    const user_follower = db.collection('user_follower').doc(userId);
    await user_follower.set({ user_line_display_name: profileDisplayName }, { merge: true });
    await user_follower.set({ user_id: userId }, { merge: true });
    await user_follower.set({ timestamp: admin.firestore.Timestamp.now() }, { merge: true });
}

module.exports = {
    handleFollowerRecord,
    handleCheckRegistered,
    handleRegistedRecord
}