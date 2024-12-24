const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "kFw20S4Z#Ex1dcPhkPYxHU93KByAFKxazlPXlrVhirTHLeLTjTRo",
MONGODB: process.env.MONGODB || "mongodb://mongo:GXnDtfReMrrkAsGLikUiQeiqQueUHpcL@autorack.proxy.rlwy.net:40505"
};
