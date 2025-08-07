import Avatar from "../Sidebar/Avatar.jsx";
import { useDataContext } from "../../context/DataContext.jsx";


const Header = () => {
    let { selectedConversation, setSelectedConversation } = useDataContext();

    return (
        <div className="w-full bg-[#71818aa5]  h-fit   py-1 pl-0.5 flex">
          <Avatar src={selectedConversation.profilePic} isOnline={false} /> 
            <h1 className="my-auto ml-2 text-lg">
                 <span className="text-black font-bold">{selectedConversation.fullName}</span>
            </h1>
        </div>
    );
};

export default Header;
