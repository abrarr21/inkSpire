import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute.tsx";
import { AuthContext } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import { BlogContext } from "./context/BlogContext.tsx";

createRoot(document.getElementById("root")!).render(
    <AuthContext>
        <BlogContext>
            <AppRoute />
            <Toaster />
        </BlogContext>
    </AuthContext>,
);
