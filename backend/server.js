import path from 'path'
import express from "express";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


import authRoutes from './routes/auth.routes.js'
import messagesRoutes from './routes/message.routes.js'
import userRoute from './routes/user.routes.js'


let PORT = process.env.PORT ;
 
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/messages',messagesRoutes);
app.use('/api/users',userRoute);



app.use(express.static(path.join(__dirname , "frontend" , "dist")));

app.get(/^\/(.*)$/,(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on PORT ${PORT}`);
});
