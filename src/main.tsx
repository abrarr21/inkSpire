import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute.tsx";
import { AuthContext } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
    <AuthContext>
        <AppRoute />
        <Toaster />
    </AuthContext>,
);
