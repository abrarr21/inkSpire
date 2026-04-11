import { ArrowLeft, Save, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { BlogDataType } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../hooks/useAuth";
import React, { useState } from "react";
import { useBlog } from "../hooks/useBlog";

const NewArticlePage = () => {
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
            updatedAt: new Date().toString().split("T")[0],
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

    return (
        <div className="grid grid-rows-[auto_1fr]">
            <div
                onClick={() => navigate("/dashboard")}
                className="test-xs my-8 flex w-[90%] cursor-pointer items-center gap-3 place-self-center bg-(--bg-whitecanvas) text-gray hover:text-black"
            >
                <ArrowLeft size={14} />
                <h4>Back To Dashboard</h4>
            </div>
            <div className="mb-5 w-[90%] place-self-center rounded-xl border border-gray p-4">
                <h1 className="text-xl font-semibold">Create New Article</h1>
                <form className="mt-6">
                    {/* title */}
                    <div className="my-7">
                        <label className="mb-2 block font-semibold">
                            Title
                        </label>
                        <input
                            {...register("title")}
                            type="text"
                            placeholder="Enter a compelling title..."
                            className="w-full rounded-md border border-gray p-1"
                        />
                    </div>

                    {/* Excerpt */}
                    <div className="my-7">
                        <label className="mb-2 block font-semibold">
                            Excerpt
                        </label>
                        <textarea
                            {...register("excerpt")}
                            placeholder="Write a brief summary of your article"
                            className="w-full rounded-md border border-gray p-1"
                        />
                        <p className="mt-1 text-sm text-gray">
                            A short description that appears on the blog listing
                        </p>
                    </div>

                    {/* Article Content */}
                    <div className="my-7">
                        <label className="mb-2 block font-semibold">
                            Content
                        </label>
                        <textarea
                            {...register("content")}
                            placeholder="Write your article content here.... (Markdown supported)"
                            className="h-50 w-full rounded-md border border-gray p-1"
                        />
                        <p className="mt-1 text-sm text-gray">
                            Supports Markdown: ## for headers, **bold**,
                            *italic*, `code`, etc.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="my-7">
                        <label className="mb-2 block font-semibold">Tags</label>
                        <div className="flex flex-wrap gap-2">
                            {tagInput.map((tag, i) => (
                                <span
                                    key={i}
                                    className="my-2 rounded-md bg-gray-600 px-2 py-1 text-white"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Add Tags (Press Enter to Add)"
                            className="w-full rounded-md border border-gray p-1"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <p className="mt-1 text-sm text-gray">
                            Add up to 5 tags to help readers find your article
                        </p>
                    </div>

                    {/* buttons */}
                    <div className="flex items-center justify-end gap-5">
                        <div
                            onClick={handleSubmit(onDraft)}
                            className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-300 p-2 px-3 hover:bg-secondary hover:text-white"
                        >
                            <Save size={22} />
                            <button>Save as Draft</button>
                        </div>

                        <div
                            onClick={handleSubmit(onPublish)}
                            className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary p-2 px-3 text-white"
                        >
                            <Send size={22} />
                            <button>Publish</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewArticlePage;
