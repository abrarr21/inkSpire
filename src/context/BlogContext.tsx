import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useEffect, useState } from "react";
import type { BlogDataType } from "../types";
import { blogs } from "../data/DefaultBlogs";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

type BlogContextDateType = {
    blogpost: BlogDataType[];
    setBlogpost: Dispatch<SetStateAction<BlogDataType[]>>;
};

export const Blog = createContext<BlogContextDateType | null>(null);

const defaultBlogPosts = blogs;

export const BlogContext = ({ children }: { children: ReactNode }) => {
    const [blogpost, setBlogpost] = useState<BlogDataType[]>(() => {
        const state = getLocalStorage("blog-posts");
        return state ? JSON.parse(state) : defaultBlogPosts;
    });

    useEffect(() => {
        setLocalStorage("blog-posts", blogpost);
    }, [blogpost]);

    return (
        <Blog.Provider value={{ blogpost, setBlogpost }}>
            {children}
        </Blog.Provider>
    );
};
