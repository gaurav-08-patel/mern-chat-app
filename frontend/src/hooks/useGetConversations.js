import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    let [loading, setLoading] = useState(false);
    let [conversations, setConversations] = useState([]);

    useEffect(() => {
        let getConversations = async () => {
            setLoading(true);
            try {
                let response = await fetch("api/users");
                let data = await response.json();
               

                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
