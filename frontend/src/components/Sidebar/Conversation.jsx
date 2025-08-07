import Avatar from "./Avatar";
import { useDataContext } from "../../context/DataContext";
import { useEffect } from "react";
import { useSocketContext } from "@/context/SocketContext";

const Conversation = ({ conversation, emoji }) => {
    let { selectedConversation, setSelectedConversation } = useDataContext();
    let {onlineUsers} = useSocketContext();
    let isOnline = onlineUsers.includes(conversation._id); 

    const isSelected = selectedConversation?._id === conversation._id;

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div>
            <div
                className={`h-17   flex flex-row items-center p-2 rounded hover:bg-sky-600 cursor-pointer 
                ${isSelected ? "bg-sky-500" : ""} `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <Avatar src={conversation.profilePic} isOnline={isOnline} />
                <h1 className="font-bold text-[18px] ml-1.5">
                    {conversation.fullName}
                </h1>
                <p className="ml-auto text-lg">{emoji}</p>
            </div>
            <hr className="bg-[rgba(126,125,125,0.1)] h-[1px] rounded-2xl border-0" />
        </div>
    );
};

export default Conversation;
