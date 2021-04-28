const request = require('request');
const config = require('../config.json');
async function handleBotnoiApi(agent) {
    var keyword = agent.query;
    var keyword_encode = encodeURI(keyword);
    var botname = '%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%88%e0%b8%b1%e0%b8%94%e0%b8%ab%e0%b8%b2'
    var options = {
        'method': 'GET',
        'url': 'https://openapi.botnoi.ai/service-api/botnoichitchat?keyword=' + `${keyword_encode}` + '&styleid=1&botname=' + `${botname}`,
        headers: {
            'Authorization': 'Bearer '+ config.botnoiAccessToken
        }
    };

    function botnoi_api(options) {
        return new Promise((resolve, reject) => {
            request(options, (error, response) => {
                if (response) {
                    return resolve(response.body);
                }
                if (error) {
                    return reject(error);
                }
                return undefined;
            });
        });
    }

    let botnoi_reply = await botnoi_api(options);

    agent.add(JSON.parse(botnoi_reply).reply);
    console.log(JSON.parse(botnoi_reply).reply);

}
module.exports = { handleBotnoiApi };