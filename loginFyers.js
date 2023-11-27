const fyers = require("fyers-api-v2");
var fs = require("fs");

const APP_ID = "T0JAUCU7EV-100";
const Secret_ID = "G1Z37O6ASD";

fyers.setAppId(APP_ID);
const login = function () {
  // fyers.setRedirectUrl('https://www.google.com/')
  fyers.setRedirectUrl("http://localhost:8080/fyers");
  fyers.generateAuthCode();
};


var auth_code;
var auth_token;
const data_result = fs.readFileSync("fyers.txt");
let auth_code1;
if (data_result.length != 0) {
    const data = JSON.parse(data_result);
    auth_code1 = data.auth_code;
    auth_code = data.auth_code;
    auth_token = data.auth_token;
    // console.log(auth_code1)
  } else {
    console.log("empty json");
  }

  const reqBody = {
    // auth_code: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE2NzIxNjA4NjAsImV4cCI6MTY3MjE5MDg2MCwibmJmIjoxNjcyMTYwMjYwLCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJkOjJcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJYQTIxMDY3Iiwib21zIjpudWxsLCJub25jZSI6IiIsImFwcF9pZCI6IlQwSkFVQ1U3RVYiLCJ1dWlkIjoiODQwMDllMWFhMGZiNDBkOGI5NzUyZTY3M2JiZmQ4M2IiLCJpcEFkZHIiOiIwLjAuMC4wIiwic2NvcGUiOiIifQ.m7VkZOq1-jKqO2PH8Py4fCHY-JuomXQAF_rbtqNeaAU',
    auth_code: auth_code1,
    secret_key: Secret_ID,
  };

  const generateToken = async function (code) {
    let data = await fyers
      .generate_access_token({ auth_code: code, secret_key: Secret_ID })
      .then((response) => {
        console.log(response);
        return response;
      });
    console.log("data:==>", data);
    return data;
  };

  // generateTokent();
// fyers.setAccessToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2Nzg2ODAyMTEsImV4cCI6MTY3ODc1MzgzMSwibmJmIjoxNjc4NjgwMjExLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCa0RxQ1R6R0dfS2FwRUxZT05qcXNTZUcyTkpvSmROT2pJZ0dfSjRGU2N5ekdySGZrV2xxdy1vek93bVRhWjN2VUhLTVdZSFk4bEZjUUNoNjZXR2ZVaHhKcmFxeUhDNERVYm5PeVJRLThmWTF2UUlXVT0iLCJkaXNwbGF5X25hbWUiOiJBIEpBR0FOTkFUSCIsIm9tcyI6IksxIiwiZnlfaWQiOiJYQTIxMDY3IiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.sn5W4edBucYtsRTxYT0mi9F0etjSXgtJIixkn8Q_bGQ')
fyers.setAccessToken(auth_token);
const getProfile = function () {
  fyers.get_profile().then((response) => {
    console.log(response);
  });
};

module.exports = {
    generateToken,
    login,
  };