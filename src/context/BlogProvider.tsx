import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { BlogDataType } from "../types";
import { blogs } from "../data/DefaultBlogs";
import { storage } from "../utils/localStorage";
import { Blog } from "./blogContext";

const defaultBlogPosts = structuredClone(blogs);

export const BlogContext = ({ children }: { children: ReactNode }) => {
    const [blogpost, setBlogpost] = useState<BlogDataType[]>(() => {
        const data = storage.get("blog-posts");
        return data ?? defaultBlogPosts;
    });

    useEffect(() => {
        storage.set("blog-posts", blogpost);
    }, [blogpost]);

    return (
        <Blog.Provider value={{ blogpost, setBlogpost }}>
            {children}
        </Blog.Provider>
    );
};
