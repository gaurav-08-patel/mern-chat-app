import { Send } from "lucide-react";
import useSendMessage from "@/hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
    let { loading, sendMessage } = useSendMessage();
    let [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form
            className="flex justify-center items-center mx-auto p-1 my-1  bg-slate-600 w-19/20
rounded-xl"
            onSubmit={handleSubmit}
        >
            <div className="w-full ">
                <input
                    type="text"
                    placeholder="Send a message"
                    className="outline-none p-2  w-full  outline-1  outline-accent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button className="cursor-pointer p-1" title="Send">
                {loading ? (
                    <span className="loading loading-spinner"></span>
                ) : (
                    <Send />
                )}
            </button>
        </form>
    );
};

export default MessageInput;
