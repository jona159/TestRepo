const { OpenEO } = require('@openeo/js-client');

OpenEO.connect("https://earthengine.openeo.org").then(function(con) {
  // Success
}).catch(function(error) {
  // Error
});

async function tryConnect(){
try {
  const con = await OpenEO.connect("https://earthengine.openeo.org");
  console.log('con');
  // Success
} catch (error) {
  // Error
}}

var con = tryConnect();

var info = con.capabilities();