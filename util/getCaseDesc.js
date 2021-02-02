const p =  require('path')
const fs =  require('fs')
const hostname = require('../config/host')

// parse test data 
exports.getCaseData= name => {
   data = fs.readFileSync(p.resolve(__dirname + "/../" + name), 'utf8');
   data = data.replace(/{host}/g,hostname.host)
   const jsonData = JSON.parse(data);
   return jsonData;
}
