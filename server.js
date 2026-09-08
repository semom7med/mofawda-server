const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// السماح بقراءة ملفات الواجهة من نفس الفولدر
app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('مستخدم متصل باللعبة');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('السيرفر شغال على البورت ' + PORT);
});
