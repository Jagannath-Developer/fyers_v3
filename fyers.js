// Import required modules
const FyersAPI = require("fyers-api-v3").fyersModel;

var fyers = new FyersAPI();
fyers.setAppId("T0JAUCU7EV-100");
// fyers.setRedirectUrl("https://url.xyz")
fyers.setAccessToken(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDA4OTMyNjIsImV4cCI6MTcwMDk1ODYwMiwibmJmIjoxNzAwODkzMjYyLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbFlaSk82NjJidGpmQ2MwanFVU1dXeHhpV1BPcm1ZemFaMWFuT3lIVVRsaExpZ0Nnd0lMaE1TLUdXVGlZd0ZkUFk1ZHdBV1A5SDFwVlBrYmhQSEFmeVg1NGxBMnZJb3RUS28wYjBMdmVvbWN4Q3FGVT0iLCJkaXNwbGF5X25hbWUiOiJBIEpBR0FOTkFUSCIsIm9tcyI6IksxIiwiaHNtX2tleSI6Ijg3ZGRhMmI3YTczY2Q1NDQ5MmM3MWRkYjg2MjcyMDZmYzdiZTRmMWZjNzdmZjhiYzlhM2NkY2JmIiwiZnlfaWQiOiJYQTIxMDY3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.gsz1gOfF3f9w0Cxho8ziMQ89i0Z2m5hZXVQzxPZJhR8"
);

// fyers
//   .get_profile()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const getProfile = async function () {

  const profile= await fyers.get_profile();
  return (profile)
  // await fyers
  //   .get_profile()
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};
// const FyersSocket = require("fyers-api-v3").fyersDataSocket;

// var fyersdata = new FyersSocket(
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDA4OTMyNjIsImV4cCI6MTcwMDk1ODYwMiwibmJmIjoxNzAwODkzMjYyLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbFlaSk82NjJidGpmQ2MwanFVU1dXeHhpV1BPcm1ZemFaMWFuT3lIVVRsaExpZ0Nnd0lMaE1TLUdXVGlZd0ZkUFk1ZHdBV1A5SDFwVlBrYmhQSEFmeVg1NGxBMnZJb3RUS28wYjBMdmVvbWN4Q3FGVT0iLCJkaXNwbGF5X25hbWUiOiJBIEpBR0FOTkFUSCIsIm9tcyI6IksxIiwiaHNtX2tleSI6Ijg3ZGRhMmI3YTczY2Q1NDQ5MmM3MWRkYjg2MjcyMDZmYzdiZTRmMWZjNzdmZjhiYzlhM2NkY2JmIiwiZnlfaWQiOiJYQTIxMDY3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.gsz1gOfF3f9w0Cxho8ziMQ89i0Z2m5hZXVQzxPZJhR8"
// );

// function onconnect() {
//   //   fyersdata.subscribe(["NSE:NIFTY50-INDEX", "NSE:TCS-EQ"]); //not subscribing for market depth data
//   //   fyersdata.subscribe(["MCX:CRUDEOIL23DECFUT"]); //not subscribing for market depth data
//   fyersdata.subscribe([
//     "MCX:CRUDEOIL23DEC6500PE",
//     "MCX:CRUDEOIL23DEC6550PE",
//     "MCX:CRUDEOIL23DEC6600PE",
//     "MCX:CRUDEOIL23DEC6650PE",
//     "MCX:CRUDEOIL23DEC6700PE",
//     "MCX:CRUDEOIL23DEC6750PE",
//   ]); //not subscribing for market depth data
//   //   fyersdata.subscribe(["NSE:IDEA-EQ"], true); //subscribing for market depth
//   fyersdata.mode(fyersdata.LiteMode); //set data mode to lite mode
//   fyersdata.autoreconnect(); //enable auto reconnection mechanism in case of disconnection
// }

// const ws = require("ws");
// var client = new ws("ws://localhost:8000/");
// client.on("open", function open() {
//   console.log("connected");
// });
// function onmsg(message) {
//     console.log(message);
//     // client.send(JSON.stringify(message));
// }

// function onerror(err) {
//   console.log(err);
// }

// function onclose() {
//   console.log("socket closed");
// }

// fyersdata.on("message", onmsg);
// fyersdata.on("connect", onconnect);
// fyersdata.on("error", onerror);
// fyersdata.on("close", onclose);

// fyersdata.connect();

module.exports = {getProfile};
