import { useState } from "react";

function Avatar({ src, isOnline , ...props }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="w-15 h-15 rounded-full  relative" {...props} >
            <span
                className={`size-3 bg-green-500 rounded-full absolute top-0 right-1 hidden  ${
                    isOnline ? "online" : ""
                }`}
            ></span>
            {!isLoaded && (
                <div className="animate-pulse bg-gray-300 w-full h-full rounded-full" />
            )}
            <img
                src={src}
                alt="avatar"
                className={`object-cover w-full h-full transition-opacity duration-300 ${
                    isLoaded ? "opacity-100" : "opacity-0 absolute"
                }`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(false)}
            />
        </div>
    );
}

export default Avatar;
