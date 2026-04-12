import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute.tsx";
import { AuthContext } from "./context/AuthProvider.tsx";
import { Toaster } from "react-hot-toast";
import { BlogContext } from "./context/BlogProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <AuthContext>
        <BlogContext>
            <AppRoute />
            <Toaster />
        </BlogContext>
    </AuthContext>,
);
