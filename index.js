const express=require('express');
const app=express();
const PORT= 8080;
const {getProfile}=require('./fyers');
const {login,generateToken} =require("./loginFyers");
//=================for login===================
const cors = require("cors");
const bodyParser = require("body-parser");
var fs = require("fs");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//=========================================

app.get("/",(req,res)=>{
    res.send("Welcome to Fyers V3 services")
})
app.get("/change ",(req,res)=>{
    res.send("changed 12:22")
})
app.get("/order",(req,res)=>{
    res.send("Oder completed")
})

app.get("/getprofile",async(req,res)=>{
    const data= await getProfile();
    console.log(data);
    res.send(data);
})
//============================login process==========================
app.get("/fyers", async (req, res) => {
  const url = req.query;
  const auth_code = url.auth_code;
  const data = await generateToken(auth_code);
  console.log(data);
  var auth_token;
  if (data.s === "ok") {
    auth_token = await data.access_token;
  } else {
    auth_token = "";
  }
  let result = await {
    auth_code: auth_code,
    auth_token: auth_token,
  };
  await fs.writeFile("fyers.txt", JSON.stringify(result), function (err) {
    if (err) return console.log(err);
    console.log("Hello World > fyers.txt");
    const data_result = fs.readFileSync("fyers.txt");
    const data = JSON.parse(data_result);
    console.log(data);
  });
  res.send("done");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});


//=========================
const WebSocket = require("ws");

const wss = new WebSocket.Server({ noServer: true });

const server = app.listen(PORT, () => {
  console.log(
    `Server run at PORT ${PORT} at time ${Date()}=> http://localhost:8080`
  );
});
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("recived:", message.toString());
    // console.log("recived:", message);
    wss.clients.forEach(function (client) {
      if (client != ws) {
        client.send("" + message);
        // client.send( message);
      }
    });
  });

  // ws.send('Hello, client!');
});


