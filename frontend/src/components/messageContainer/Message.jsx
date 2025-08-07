import { useDataContext } from "@/context/DataContext";
import { useAuthContext } from "@/context/AuthContext";
import { extractTime } from "@/utils/extractTime";
import Avatar from "../Sidebar/Avatar";

const Message = ({ message }) => {
    let { authUser } = useAuthContext();
    let { selectedConversation } = useDataContext();
    let senderID = message.senderID;
    let fromMe = selectedConversation?._id !== senderID;
    let senderProfilePic = authUser.profilePic;
    let receiverProfilePic = selectedConversation?.profilePic;
    let formattedTime = extractTime(message.createdAt);
    let shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat   ${fromMe ? "chat-end" : "chat-start"}   `}>
            <div className="chat-image avatar">
                <Avatar
                    src={fromMe ? senderProfilePic : receiverProfilePic}
                    style={{ height: "45px", width: "45px" }}
                />
            </div>

            <div
                className={`chat-bubble   ${
                    fromMe ? "bg-blue-500" : ""
                } break-words ${ shakeClass }`}
            >
                {message.message}
            </div>
            <div className="chat-footer opacity-50">{formattedTime}</div>
        </div>
    );
};

export default Message;
