import { Calendar, User } from "lucide-react";
import type { BlogDataType } from "../types";
import { useNavigate } from "react-router";

type PostProp = {
    post: BlogDataType;
};

const ContentCard = ({ post }: PostProp) => {
    const navigate = useNavigate();

    const date = post.updatedAt;
    // console.log(createdAtDate);

    return (
        <div
            onClick={() => navigate(`/blog/${post.id}`)}
            className="grid cursor-pointer grid-rows-[auto_auto_1fr_auto] rounded-xl border border-gray-300 px-5 py-7 shadow-md shadow-gray-900/20 transition-colors duration-100 hover:border-primary"
        >
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
                {post.tags?.map((p, i) => {
                    return (
                        <h6
                            key={i}
                            className="rounded-md bg-gray-300 px-2 text-xs whitespace-nowrap"
                        >
                            {p}
                        </h6>
                    );
                })}
            </div>

            {/* Title */}
            <div className="mt-3">
                <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>

            {/* Content */}
            <div className="my-6">
                <p className="text-gray-700">{post.content}</p>
            </div>

            {/* User and Date */}
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <User size={14} />
                    <h5 className="text-xs">{post.authorName}</h5>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <h5 className="text-xs">{date}</h5>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
