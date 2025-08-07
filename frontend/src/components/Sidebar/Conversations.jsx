import Conversation from "./Conversation";

import { getRandomEmoji } from "../../utils/emoji";

const Conversations = ({ loading, conversations }) => {
   

    return (
        <div className="flex flex-col overflow-y-scroll max-h-100% gap-2.5   flex-1 custom-scrollbar">
            {conversations.map((conversation) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                />
            ))}

            {loading ? (
                <span className="loading loading-spinner loading-lg mx-auto"></span>
            ) : null}
            {
               !loading && !conversations.length && (
                    <p className="text-center mt-1.5"> No users found ! </p>
                )
            }
        </div>
    );
};

export default Conversations;
