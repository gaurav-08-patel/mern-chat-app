import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { DataContextProvider } from "./context/DataContext.jsx";
import { SocketContextProvider } from "./context/SocketContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <SocketContextProvider>
                    <DataContextProvider>
                        <App />
                    </DataContextProvider>
                </SocketContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </StrictMode>
);
