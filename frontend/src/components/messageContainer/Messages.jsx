import Message from "./Message";
import useGetMessages from "@/hooks/useGetMessages";
import { useEffect, useRef } from "react";
import useListenMessage from "@/hooks/useListenMessage";

const Messages = () => {
    useListenMessage();
    let { loading, messages } = useGetMessages();

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth", // Optional: smooth scroll
            });
        }
    }, [messages]); // Scroll on new message

    return (
        <div
            className="h-full overflow-y-scroll custom-scrollbar"
            ref={containerRef}
        >
            {loading ? (
                <div className="flex w-full">
                    <span className="loading loading-dots loading-xl mx-auto mt-2.5"></span>
                </div>
            ) : (
                ""
            )}
            {!loading &&
                messages.map((message) => (
                    <Message key={message._id} message={message} />
                ))}
            {!loading && !messages.length && (
                <p className="text-center mt-2.5">
                    Send a message to start the conversation.
                </p>
            )}
        </div>
    );
};

export default Messages;
