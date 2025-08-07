import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { MessagesSquare } from "lucide-react";
import { useDataContext } from "../../context/DataContext.jsx";
import { useAuthContext } from "@/context/AuthContext";

const MessageContainer = () => {
    let { selectedConversation  } = useDataContext();
    

    return (
        <div className=" w-full flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <Header />
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    let {authUser} = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {authUser.fullName} 👻</p>
                <p>Select a chat to start messaging</p>
                <MessagesSquare size={40} />
            </div>
        </div>
    );
};
