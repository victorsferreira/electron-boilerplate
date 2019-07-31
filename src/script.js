const moment = require("moment");
const http = require("http");

async function foo() {
    const response = await get('http://github.com/');
    const { statusCode } = response;
    const requestTime = moment().format();
    const message = `Request sent at ${requestTime} with status code ${statusCode}`;
    alert(message);
}

function get(url) {
    return new Promise((resolve, reject) => {
        try {
            http.get(url, (res) => {
                resolve(res);
            });
        } catch (err) {
            reject(err);
        }
    });
}