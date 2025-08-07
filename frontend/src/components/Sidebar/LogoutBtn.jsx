import useLogout from "../../hooks/useLogout";
import { LogOut } from "lucide-react";

const LogoutBtn = () => {
    let { loading, logout } = useLogout();
    return (
        <button
            className="  mt-auto p-2 cursor-pointer"
            title="Logout"
            disabled={loading}
            onClick={logout}
        >
            {loading ? (
                <span className="loading loading-spinner"></span>
            ) : (
                <LogOut className="rotate-[180deg]" size={25} />
            )}
        </button>
    );
};

export default LogoutBtn;
