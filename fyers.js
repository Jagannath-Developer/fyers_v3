// Import required modules

const FyersAPI = require("fyers-api-v3").fyersModel;

//=====================files read=============
var fs = require("fs");
const data_result = fs.readFileSync("fyers.txt");
var auth_token;
if (data_result.length != 0) {
  const data = JSON.parse(data_result);
  auth_token = data.auth_token;
} else {
  console.log("empty json");
}
//===============================
var fyers = new FyersAPI();
fyers.setAppId("J4P12HGNB8-100");
fyers.setAccessToken(auth_token);

const getProfile = async function () {
  const profile = await fyers.get_profile();
  return profile;
};
const FyersSocket = require("fyers-api-v3").fyersDataSocket;

var fyersdata = new FyersSocket(auth_token);

function onconnect() {
  fyersdata.subscribe(["MCX:CRUDEOIL23DEC6300PE"]); //not subscribing for market depth data
  //   fyersdata.subscribe(["NSE:IDEA-EQ"], true); //subscribing for market depth
  fyersdata.mode(fyersdata.LiteMode); //set data mode to lite mode
  fyersdata.autoreconnect(); //enable auto reconnection mechanism in case of disconnection
}

// const ws = require("ws");
// var client = new ws("wss://fyers-api-services.onrender.com");
// client.on("open", function open() {
//   console.log("connected");
// });
function onmsg(message) {
  // console.log(message);
  // client.send(JSON.stringify(message));
}

function onerror(err) {
  // console.log(err);
}

function onclose() {
  // console.log("socket closed");
}

fyersdata.on("message", onmsg);
fyersdata.on("connect", onconnect);
fyersdata.on("error", onerror);
fyersdata.on("close", onclose);

fyersdata.connect();

module.exports = { getProfile };
