import { createContext, type Dispatch, type SetStateAction } from "react";
import type { BlogDataType } from "../types";

type BlogContextDateType = {
    blogpost: BlogDataType[];
    setBlogpost: Dispatch<SetStateAction<BlogDataType[]>>;
};

export const Blog = createContext<BlogContextDateType | null>(null);
