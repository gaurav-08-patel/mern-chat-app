import { useDataContext } from "@/context/DataContext";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const useGetMessages = () => {
    let { messages, setMessages, selectedConversation } = useDataContext();

    let [loading, setLoading] = useState(false);

    useEffect(() => {
        let getMessages = async () => {
           

            setLoading(true);

            try {
                let res = await fetch(
                    `api/messages/${selectedConversation._id}`
                );
                let data = await res.json();

                setMessages(data);
            } catch (error) {
                 toast.error("get error",error.message);
            } finally {
                setLoading(false);
            }
        };

        getMessages();
    }, [selectedConversation?._id]);

    return { loading, messages };
};

export default useGetMessages;
