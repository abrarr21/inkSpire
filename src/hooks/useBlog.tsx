import { useContext } from "react";
import { Blog } from "../context/BlogContext";

export const useBlog = () => {
    const context = useContext(Blog);

    if (!context) {
        throw new Error("useBlog must be within blog provider");
    }

    return context;
};
