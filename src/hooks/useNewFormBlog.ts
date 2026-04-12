import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";
import { useBlog } from "./useBlog";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import type { BlogDataType } from "../types";
import { useState } from "react";
import { formatDate } from "../utils/formDate";

export const useNewFormBlog = () => {
    const navigate = useNavigate();
    const { loggedInUser } = useAuth();
    const { setBlogpost } = useBlog();

    const { register, handleSubmit, reset } = useForm<BlogDataType>();

    const [input, setInput] = useState<string>("");
    const [tagInput, setTagInput] = useState<string[]>([]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if (tagInput.length > 4) return;
            if (!input.trim()) return;

            setTagInput((p) => [...p, input.trim()]);
            setInput("");
        }
    };

    const authorName = loggedInUser?.name || "unknown";

    const handleSave = (data: BlogDataType, status: "True" | "False") => {
        const formData = {
            ...data,
            id: uuidv4(),
            authorName: authorName,
            tags: tagInput,
            published: status,
            updatedAt: formatDate(new Date()),
        };
        // console.log(formData);
        setBlogpost((p) => [...p, formData]);
        reset();
        navigate("/dashboard");
    };

    const onDraft = (data: BlogDataType) => {
        handleSave(data, "False");
    };

    const onPublish = (data: BlogDataType) => {
        handleSave(data, "True");
    };

    return {
        onPublish,
        onDraft,
        navigate,
        loggedInUser,
        setBlogpost,
        register,
        handleSubmit,
        reset,
        handleKeyDown,
        input,
        setInput,
        tagInput,
        setTagInput,
    };
};
