import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { useContext } from "react";

const SocketContext = createContext();

export let SocketContextProvider = ({ children }) => {
    let [socket, setSocket] = useState(null);
    let [onlineUsers, setOnlineUsers] = useState([]);
    let { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            let socket = io("http://localhost:3500", {
                query: {
                    userID: authUser._id,
                },
            });
            setSocket(socket);

            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketContext = () => {
    return useContext(SocketContext);
};
