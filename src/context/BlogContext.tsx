import type { ReactNode } from "react";
import { createContext, useContext } from "react";

const Blog = createContext<string | null>(null);

export const useBlog = () => {
    const context = useContext(Blog);

    if (!context) {
        throw new Error("useBlog must be within blog provider");
    }

    return context;
};

export const BlogContext = ({ children }: { children: ReactNode }) => {
    return <Blog.Provider value={"ne"}>{children}</Blog.Provider>;
};
