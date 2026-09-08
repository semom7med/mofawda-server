const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // يسمح لأي واجهة بالاتصال بالـ Socket
    methods: ["GET", "POST"]
  }
});

// مسار افتراضي للتأكد أن السيرفر يعمل
app.get('/', (req, res) => {
  res.send('سيرفر مفاودا برو شغال بنجاح على Railway! 🚀');
});

// استقبال اتصالات الـ Socket.io من اللاعبين
io.on('connection', (socket) => {
  console.log('لاعب جديد اتصل بالسيرفر:', socket.id);

  socket.on('disconnect', () => {
    console.log('لاعب غادر السيرفر:', socket.id);
  });
});

// استخدام البورت اللي بتحدده منصة Railway أو بورت محلي 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
