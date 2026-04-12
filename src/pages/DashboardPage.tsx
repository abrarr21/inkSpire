import {
    Ellipsis,
    Eye,
    EyeOff,
    FileText,
    Pen,
    Plus,
    Trash,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useBlog } from "../hooks/useBlog";
import toast from "react-hot-toast";

const DashboardPage = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<string | null>(null);

    const { loggedInUser } = useAuth();
    const { blogpost, setBlogpost } = useBlog();

    const currentAuthor = loggedInUser?.name;

    const totalPublished = blogpost.filter(
        (elem) =>
            elem.published === "True" && elem.authorName === currentAuthor,
    ).length;

    const totalDraft = blogpost.filter(
        (elem) => elem.published === "False",
    ).length;

    const authorBlogs = blogpost.filter(
        (elem) => elem.authorName === currentAuthor,
    );

    const handlePublish = ({ ...elem }) => {
        const reverser = () => {
            if (elem.published === "True") {
                toast.success("Post saved to draft", {
                    duration: 3000,
                    position: "bottom-right",
                });
                return "False";
            }
            toast.success("Post published", {
                duration: 3000,
                position: "bottom-right",
            });
            return "True";
        };

        setBlogpost((prev) =>
            prev.map((item) =>
                item.id === elem.id ? { ...item, published: reverser() } : item,
            ),
        );
    };

    const handleDelete = (id: string) => {
        setBlogpost((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="grid grid-rows-[auto_auto_1fr]">
            {/* Dashboard text */}
            <div className="mt-12 flex items-center justify-between">
                <div>
                    <h3 className="text-3xl font-bold">Dashboard</h3>
                    <p className="mt-1.5 text-sm">
                        Manage your Articles,{" "}
                        {loggedInUser?.name?.toUpperCase()}
                    </p>
                </div>
                <div
                    onClick={() => navigate("/dashboard/new")}
                    className="flex cursor-pointer items-center gap-2 rounded-md bg-primary px-3 py-2 text-white md:gap-4"
                >
                    <Plus size={14} />
                    <button className="text-sm">Add Article</button>
                </div>
            </div>

            {/* Dashboard stats */}
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-gray-300 bg-(--bg-whitecanvas) p-6 shadow-md">
                    <h3 className="text-md">Total Article</h3>
                    <h2 className="mt-2 text-3xl font-semibold">
                        {authorBlogs.length}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-300 bg-(--bg-whitecanvas) p-6 shadow-md">
                    <h3 className="text-md">Published</h3>
                    <h2 className="mt-2 text-3xl font-semibold text-secondary">
                        {totalPublished}
                    </h2>
                </div>

                <div className="rounded-xl border border-gray-300 bg-(--bg-whitecanvas) p-6 shadow-md">
                    <h3 className="text-md">Drafts</h3>
                    <h2 className="mt-2 text-3xl font-semibold">
                        {totalDraft}
                    </h2>
                </div>
            </div>

            {/* Your articles */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold">Your Articles</h2>

                {/* card */}
                {authorBlogs.length === 0 ? (
                    <div className="mt-6 mb-5 flex h-[35vh] flex-col items-center justify-center rounded-xl border border-gray bg-(--bg-whitecanvas) shadow-xl">
                        <FileText size={52} className="text-gray-400" />
                        <h1 className="mt-4 mb-1 text-lg font-semibold">
                            No Article Yet
                        </h1>
                        <p className="text-sm text-gray-800">
                            Start writing your first article
                        </p>
                        <div className="mt-2 flex items-center gap-2 rounded-lg bg-primary p-2 text-white">
                            <Plus size={18} />
                            <button
                                className="cursor-pointer"
                                onClick={() => navigate("/dashboard/new")}
                            >
                                Create Article
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {authorBlogs.map((elem) => {
                            return (
                                <div
                                    key={elem.id}
                                    className="mt-5 grid grid-cols-1"
                                >
                                    <div className="flex items-center justify-between gap-2 rounded-xl border border-gray-300 px-4 py-8">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-3">
                                                <h1 className="text-xl font-semibold">
                                                    {elem.title}
                                                </h1>
                                                <h3 className="rounded-lg bg-primary px-2 text-sm text-white">
                                                    {elem.published === "True"
                                                        ? "published"
                                                        : "Drafted"}
                                                </h3>
                                            </div>
                                            <p>{elem.content}</p>
                                            <h3 className="text-xs text-gray-700">
                                                last updated at:{" "}
                                                {elem.updatedAt}{" "}
                                            </h3>
                                        </div>
                                        <div
                                            className="relative cursor-pointer rounded-lg p-2 hover:bg-secondary hover:text-white"
                                            onClick={() =>
                                                setIsOpen((p) =>
                                                    p === elem.id
                                                        ? null
                                                        : elem.id,
                                                )
                                            }
                                        >
                                            <Ellipsis size={18} />
                                            {isOpen === elem.id && (
                                                <div className="absolute top-full right-1 w-32 rounded-lg border border-gray-300 bg-(--bg-whitecanvas)">
                                                    <div className="mt-1 flex flex-col items-start px-1 text-black">
                                                        {elem.published ===
                                                            "True" && (
                                                            <div
                                                                onClick={() => {
                                                                    navigate(
                                                                        `/blog/${elem.id}`,
                                                                    );
                                                                }}
                                                                className="flex w-full items-center gap-2 rounded-lg p-1 hover:bg-secondary hover:text-white"
                                                            >
                                                                <Eye
                                                                    size={14}
                                                                    className="text-gray-600"
                                                                />
                                                                <h1 className="text-sm">
                                                                    View
                                                                </h1>
                                                            </div>
                                                        )}

                                                        <div
                                                            onClick={() =>
                                                                navigate(
                                                                    `/dashboard/edit/${elem.id}`,
                                                                    {
                                                                        state: elem,
                                                                    },
                                                                )
                                                            }
                                                            className="flex w-full items-center gap-2 rounded-lg p-1 hover:bg-secondary hover:text-white"
                                                        >
                                                            <Pen
                                                                size={14}
                                                                className="text-gray-600"
                                                            />
                                                            <h1 className="text-sm">
                                                                Edit
                                                            </h1>
                                                        </div>

                                                        <div
                                                            onClick={() => {
                                                                handlePublish({
                                                                    ...elem,
                                                                });
                                                            }}
                                                            className="flex w-full items-center gap-2 rounded-lg p-1 hover:bg-secondary hover:text-white"
                                                        >
                                                            {elem.published ===
                                                            "True" ? (
                                                                <EyeOff
                                                                    size={14}
                                                                    className="text-gray-600"
                                                                />
                                                            ) : (
                                                                <Eye
                                                                    size={14}
                                                                    className="text-gray-600"
                                                                />
                                                            )}
                                                            <h1 className="text-sm">
                                                                {elem.published ===
                                                                "True"
                                                                    ? "Unpublish"
                                                                    : "Publish"}
                                                            </h1>
                                                        </div>

                                                        <div
                                                            onClick={() =>
                                                                handleDelete(
                                                                    elem.id,
                                                                )
                                                            }
                                                            className="mb-1 flex w-full items-center gap-2 rounded-lg p-1 hover:bg-secondary hover:text-white"
                                                        >
                                                            <Trash
                                                                size={14}
                                                                className="text-gray-600"
                                                            />
                                                            <h1 className="text-sm text-red-600">
                                                                Delete
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
