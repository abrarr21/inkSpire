import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useEffect, useState } from "react";
import type { BlogDataType } from "../types";
import { blogs } from "../data/DefaultBlogs";

type BlogContextDateType = {
    blogpost: BlogDataType[];
    setBlogpost: Dispatch<SetStateAction<BlogDataType[]>>;
};

export const Blog = createContext<BlogContextDateType | null>(null);

const defaultBlogPosts = blogs;

export const BlogContext = ({ children }: { children: ReactNode }) => {
    const [blogpost, setBlogpost] = useState<BlogDataType[]>(() => {
        const state = localStorage.getItem("blog-posts");
        return state ? JSON.parse(state) : defaultBlogPosts;
    });

    useEffect(() => {
        localStorage.setItem("blog-posts", JSON.stringify(blogpost));
    }, [blogpost]);

    return (
        <Blog.Provider value={{ blogpost, setBlogpost }}>
            {children}
        </Blog.Provider>
    );
};
