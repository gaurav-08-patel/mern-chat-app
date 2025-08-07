import { useDataContext } from "@/context/DataContext";
import toast from "react-hot-toast";
import { useState } from "react";

const useSendMessage = () => {
    let { messages, setMessages, selectedConversation } = useDataContext();
    let [loading, setLoading] = useState(false);

    let sendMessage = async (message) => {
        setLoading(true);
        try {
            let response = await fetch(
                `api/messages/send/${selectedConversation._id}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({message}),
                }
            );
            let data = await response.json();

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, sendMessage };
};

export default useSendMessage;
