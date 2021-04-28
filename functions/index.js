'use strict';
const line = require('@line/bot-sdk');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const config = require('./config.json');
const dialogflow = require('./dialogflow');
const fulfillment = require('./fulfillment');
const firestore = require('./firestore')
const soappr_flex = require('./soappr_flex');
const flex = require('./flex');
const client = new line.Client(config);
const fs = require('fs');
const path = require('path')
const os = require('os')
const credentials = require('./pclinechatbot-7c92ceaca788.json');

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client_gg = new vision.ImageAnnotatorClient({ credentials });

async function handleEvent(req, event) {
    switch (event.type) {
        case 'message': {
            const message = event.message;
            switch (message.type) {
                case 'text': {
                    const registed_flag = await firestore.handleCheckRegistered(event.source.userId);
                    let vyyy = 1;
                    if ((event.message.text.substring(0, 2) === 'xx') && ((event.message.text.length === 15 || event.message.text.length === 16))) {
                        const vxxx = event.message.text.substr(3, event.message.text.search('-') - 3);

                        if (event.message.text.length === 15) {
                            vyyy = event.message.text.substr(-1);
                        } else {
                            vyyy = event.message.text.substr(-2);
                        }
                        console.log(vxxx, vyyy);
                        console.log('bypass format PR OK!!');
                        // return client.replyMessage(event.replyToken, { type: 'text', text: await soappr.handleSoapPR(vxxx,vyyy) });
                        return client.replyMessage(event.replyToken, {
                            type: 'flex',
                            altText: 'this is a flex message',
                            contents: await soappr_flex.handleSoapPR_Flex(vxxx, vyyy)
                        });
                    } else if (registed_flag && (event.message.text.length === 12 || event.message.text.length === 13) && (event.message.text.substring(10, 11) === '-') && (event.message.text.substring(0, 2) === '11' || event.message.text.substring(0, 2) === '18' || event.message.text.substring(0, 2) === '19')) {
                        const vxxx = event.message.text.substr(0, event.message.text.search('-'));

                        if (event.message.text.length === 12) {
                            vyyy = event.message.text.substr(-1);
                        } else {
                            vyyy = event.message.text.substr(-2);
                        }
                        console.log(vxxx, vyyy);
                        console.log('format PR OK and already check register flag OK!!');
                        // return client.replyMessage(event.replyToken, { type: 'text', text: await soappr.handleSoapPR(vxxx,vyyy) });
                        return client.replyMessage(event.replyToken, {
                            type: 'flex',
                            altText: 'flex message from  PC Chatbot',
                            contents: await soappr_flex.handleSoapPR_Flex(vxxx, vyyy)
                        });
                    } else {
                        return handleText(req, message, event);
                    }
                }
                case 'image':
                    return handleImage(req, message, event);
                default:
                    throw new Error(`Unknown message: ${JSON.stringify(message)}`);
            }
        }
        case 'follow': {
            const profile = await client.getProfile(event.source.userId);
            const followText = `สวัสดีคุณ ${profile.displayName} ยินดีต้อนรับเข้าสู่บริการ PC Chatbot ค่ะ`;
            await firestore.handleFollowerRecord(event.source.userId, profile.displayName)
            return client.replyMessage(event.replyToken, { type: 'text', text: followText });
        }
        case 'unfollow': {
            return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);
        }

        default:
            throw new Error(`Unknown event: ${JSON.stringify(event)}`);
    }
}

async function handleText(req, message, event) {
    return dialogflow.postToDialogflow(req);
}

async function handleImage(req, message, event) {
    const messages = [message];
    let filename = `${message.id}.jpg`;
    let tempLocalFile = path.join(os.tmpdir(), filename);
    const stream = await client.getMessageContent(message.id);
    var writeStream = fs.createWriteStream(tempLocalFile);
    stream.pipe(writeStream);
    writeStream.on('finish', async () => {
        const text_ocr = await googleOCR1(`${tempLocalFile}`);
        const re = /([11,18,19]{2}[0-9]{8}[-]{1}[1-9]{1})/g;
        const pr_regex = Array.from(new Set(text_ocr.match(re))); //remove duplicate array
        fs.unlinkSync(tempLocalFile);
        console.log('Get PR format from image OK!!');
        console.log(pr_regex);
        const flex_ocr = flex.flex_type_pr_from_ocr(pr_regex)
        console.log(JSON.stringify(flex_ocr))
        // return client.replyMessage(event.replyToken, { type: 'text', text: String(pr_regex) });
        return client.replyMessage(event.replyToken,[
            {
                type: 'text',
                text: 'กรุณาเลือกเลขที่ PR ที่ต้องการ'
            },
            {
                type: 'flex',
                altText: 'flex message from  PC Chatbot',
                contents: flex_ocr
            }

        ]);
    })
}


async function googleOCR(file) {

    const [result] = await client_gg.textDetection(`${file}`);
    const labels = result.textAnnotations;
    // console.log(labels[0].description)
    return String(labels[0].description)
    // labels.forEach(label => console.log(label.description));
}

async function googleOCR1(file) {
    try{
        const client_gg = new vision.ImageAnnotatorClient({ credentials });
        const [result] = await client_gg.textDetection(`${file}`)
        const text = result.textAnnotations;
        // console.log(text[0].description);
        return String(text[0].description)
    } catch (error) {
        console.log(error)
    }
    return undefined
    
    // try{
    //     await client_gg.documentTextDetection(`${file}`)
    //     .then(([result])=> {
    //         const text = result.fullTextAnnotation.text;
    //         console.log(result);
    //         text_output = text[0].description
    //         console.log(2)
    //         return text_output
    //     })
    //     .catch(err => {
    //         console.error('ERROR:', err);
    //         return text_output
    //     })
        
    // } catch(e) {
    //     console.log("Error on get cloud vision api", e)
    //     return text_output
    // }
}

const app = express();
app.use(cors())
app.post('/webhook', line.middleware(config), (req, res) => {
    if (!Array.isArray(req.body.events)) {
        return res.status(500).end();
    }
    Promise.all(req.body.events.map(event => {
        console.log('event', event);
        if (event.source.userId === 'Udeadbeefdeadbeefdeadbeefdeadbeef') {
            return undefined;
        }
        return handleEvent(req, event);
    }))
        .then(() => res.end())
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
    return undefined;
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/fulfillment', fulfillment);

app.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}`);
});
exports.pclinechatbotgroup = functions.region('asia-east2').https.onRequest(app)