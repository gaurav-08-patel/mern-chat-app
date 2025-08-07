import { useDataContext } from "@/context/DataContext";
import { useSocketContext } from "@/context/SocketContext";
import { useEffect } from "react";

const useListenMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useDataContext();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake=true;
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");
    }, [socket, messages]);
};

export default useListenMessage;
