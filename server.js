const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Ensure correct import
const path = require('path');
const cors = require('cors'); // Import CORS

const app = express();
const server = http.createServer(app);

// Allow CORS so Vite (Frontend) can connect to the backend
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Allow Vite's frontend to connect
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files if needed

// Handle WebSocket Connections
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("offer", (offer) => {
        socket.broadcast.emit("offer", offer);
    });

    socket.on("answer", (answer) => {
        socket.broadcast.emit("answer", answer);
    });

    socket.on("candidate", (candidate) => {
        socket.broadcast.emit("candidate", candidate);
    });

    socket.on("message", (message) => {
        socket.broadcast.emit("message", message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start Server
server.listen(3000, () => {
    console.log("WebSocket server running on http://localhost:3000");
});
