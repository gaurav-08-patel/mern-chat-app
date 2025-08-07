import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketID } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    let { message } = req.body;
    let { id: receiverID } = req.params;
    let senderID = req.user._id;
     

    let conversation = await Conversation.findOne({
        participants: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderID, receiverID],
            messages: [],
        });
    }

    const newMessage = new Message({
        senderID,
        receiverID,
        message,
    });

    await newMessage.save();

    conversation.messages.push(newMessage._id);
    await conversation.save();

    //SOCKET IO functionality 
    const receiverSocketID = getReceiverSocketID(receiverID);
    if(receiverSocketID){
        //io.to(<socket_id>).emit is used to send event to specific client
        io.to(receiverSocketID).emit("newMessage",newMessage);
    }

    res.status(201).json(newMessage);
};

export const getMessages = async (req, res) => {
    let { id: idToChatWith } = req.params;
    let senderID = req.user._id;

     

    let conversation = await Conversation.findOne({
        participants: { $all: [senderID, idToChatWith] },
    }).populate("messages");

    let messages = conversation?.messages || [];

    res.status(200).json(messages);
};
