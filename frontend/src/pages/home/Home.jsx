import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div
            className="pl-4 bg-frost flex 
                  text-slate-100
                    rounded-2xl shadow-2xl h-[80vh]   w-[900px] overflow-hidden"
        >
            <Sidebar/>
            <MessageContainer/>
        </div>
    );
};

export default Home;
