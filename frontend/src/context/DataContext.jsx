import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export let DataContext = createContext();

export let DataContextProvider = ({ children }) => {
    let [selectedConversation, setSelectedConversation] = useState(null);
    let [messages, setMessages] = useState([]);
    return (
        <DataContext.Provider
            value={{
                selectedConversation,
                setSelectedConversation,
                messages,
                setMessages,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export let useDataContext = () => {
    return useContext(DataContext);
};
