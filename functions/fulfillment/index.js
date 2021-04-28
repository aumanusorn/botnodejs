const df = require('dialogflow-fulfillment');
const firestore = require('../firestore');
const botnoi = require('./botnoi');

function handler(request, response) {
    const agent = new df.WebhookClient({ request, response });
    // console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    // console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
    // console.log('Dialogflow Request LINEID: ' + JSON.stringify(request.body.originalDetectIntentRequest.payload.data.source.userId));

    const intentMap = new Map();
    intentMap.set('register-user-citizen-id', firestore.handleRegistedRecord);
    intentMap.set('Default Fallback Intent', botnoi.handleBotnoiApi);
    agent.handleRequest(intentMap);
}

module.exports = handler;