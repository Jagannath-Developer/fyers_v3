// Import required modules

const FyersAPI = require("fyers-api-v3").fyersModel;


//=====================files read=============
var fs = require("fs");
const data_result = fs.readFileSync("fyers.txt");
var auth_code;
var auth_token;
if (data_result.length != 0) {
  const data = JSON.parse(data_result);
  auth_code = data.auth_code;
  auth_token = data.auth_token;
} else {
  console.log("empty json");
}
//===============================
var fyers = new FyersAPI();
fyers.setAppId("T0JAUCU7EV-100");
fyers.setAccessToken(auth_token);


const getProfile = async function () {

  const profile= await fyers.get_profile();
  return (profile)
};
const FyersSocket = require("fyers-api-v3").fyersDataSocket;

var fyersdata = new FyersSocket(auth_token);

function onconnect() {
  fyersdata.subscribe([
    "NSE:BANKNIFTY23NOV43900PE",
  ]); //not subscribing for market depth data
  //   fyersdata.subscribe(["NSE:IDEA-EQ"], true); //subscribing for market depth
  fyersdata.mode(fyersdata.LiteMode); //set data mode to lite mode
  fyersdata.autoreconnect(); //enable auto reconnection mechanism in case of disconnection
}

const ws = require("ws");
var client = new ws("ws://localhost:8080/");
client.on("open", function open() {
  console.log("connected");
});
function onmsg(message) {
    console.log(message);
    // client.send(JSON.stringify(message));
}

function onerror(err) {
  console.log(err);
}

function onclose() {
  console.log("socket closed");
}

fyersdata.on("message", onmsg);
fyersdata.on("connect", onconnect);
fyersdata.on("error", onerror);
fyersdata.on("close", onclose);

fyersdata.connect();

module.exports = {getProfile};
