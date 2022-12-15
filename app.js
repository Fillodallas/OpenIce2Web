//#region ////////////////// Initialize NodeJS-MDPnP server \\\\\\\\\\\\\\\\\\\\\\\\\

var javaPort = 8080;
var javaServer = require("net").createServer();
var WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 90 });

var fileData;
//#endregion

//#region ////////////////// Initialize NodeJS-WebPage server \\\\\\\\\\\\\\\\\\\\\\\\\
var expressHT = require("express"),
  appHT = expressHT(),
  httpHT = require("http"),
  socketIOHT = require("socket.io"),
  serverHT,
  ioHT;
const { webHOST, webPORT } = require("./public/config/default");

//#endregion

//#region ////////////////////////////// WEB PAGES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//#region ////////////////////////// View engine Setup \\\\\\\\\\\\\\\\\\\\\\\\\
const path = require("path");
const indexRouter = require("./routes/index");

appHT.set("views", path.join(__dirname, "views"));
appHT.engine("html", require("ejs").renderFile);
appHT.set("view engine", "html");

appHT.use("/", indexRouter);

//#endregion

//#region //////////////////// Static Files page \\\\\\\\\\\\\\\\\\\\\\\\\
appHT.use(expressHT.static("public"));
appHT.use("/css", expressHT.static(__dirname + "/public/css"));
appHT.use("/js", expressHT.static(__dirname + "/public/js"));
appHT.use("/img", expressHT.static(__dirname + "/public/img"));
appHT.use("/config", expressHT.static(__dirname + "/public/config"));

//#endregion //////////////////// Static Files page \\\\\\\\\\\\\\\\\\\\\\\\\

//#endregion

console.log("=====================================================");
console.log("Node.js/Java Communication Module");
console.log("=====================================================");

//#region ///////////////////// Data emitter function \\\\\\\\\\\\\\\\\\\\\\\\\\\\
var firstDataListenner = function (data) {
  fileData = data;
  var msg = data.toString();
  ioHT.emit("data", msg);
};

//#endregion

//#region ////////////////// NodeJS-MDPnP server Functions and Initialization\\\\\\\\\\\\\\\\\\\\\\\\\

javaServer.on("listening", function () {
  console.log("Server is listening on " + javaPort + " for OpenICE Data");
});

javaServer.on("error", function (e) {
  console.log("Server error: " + e.code);
});

javaServer.on("close", function () {
  console.log("Server closed");
  console.log("Java " + clientAddress + " disconnected");
});

javaServer.on("end", function () {
  console.log("Server closed");
});

javaServer.on("connection", function (javaSocket) {
  javaSocket.on("data", firstDataListenner);
});

javaServer.listen(javaPort);

//#endregion

//#region ////////////////// NodeJS-WebPage server Functions and Initialization\\\\\\\\\\\\\\\\\\\\\\\\\

serverHT = httpHT.Server(appHT);

serverHT.on("listening", function () {
  console.log("Serving address: " + "http://" + webHOST + ":" + webPORT);
});

serverHT.on("error", function (e) {
  console.log("Server error: " + e.code);
});

serverHT.listen(webPORT, webHOST);

ioHT = socketIOHT(serverHT);

//#endregion
