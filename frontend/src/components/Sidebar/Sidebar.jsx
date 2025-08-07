import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import useGetConversations from "../../hooks/useGetConversations";
import { useState, useEffect } from "react";

const Sidebar = () => {
    let [search, setSearch] = useState("");
    let { loading, conversations } = useGetConversations();
    const [filteredConversation, setFilteredConversation] = useState([]);

    useEffect(() => {
        let filtered = conversations.filter((c) =>
            c.fullName.toLowerCase().includes(search.trim().toLowerCase())
        );

        setFilteredConversation(filtered);
    }, [search]);

    return (
        <div className="flex flex-col  w-1/2   h-full border-r-2 border-[#80808056]">
            <SearchInput search={search} setSearch={setSearch} />
            <hr className="bg-[rgba(0,0,0,0.1)] h-[1px] rounded-2xl my-4 border-0" />
            <Conversations
                loading={loading}
                conversations={
                    search.trim().length > 0
                        ? filteredConversation
                        : conversations
                }
            />
            <LogoutBtn />
        </div>
    );
};

export default Sidebar;
