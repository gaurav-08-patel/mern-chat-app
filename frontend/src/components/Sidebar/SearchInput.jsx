import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


const SearchInput = ({search , setSearch}) => {
    
    return (
        <form className="flex gap-2 justify-center items-center pt-2">
            <Input
                placeholder="Search..."
                className="max-w-7/10 bg-gray-900 border-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="size-9 cursor-pointer bg-blue-500 border-2 border-gray-800 rounded-full flex justify-center items-center ">
                <Search size={18} />
            </button>
        </form>
    );
};

export default SearchInput;
