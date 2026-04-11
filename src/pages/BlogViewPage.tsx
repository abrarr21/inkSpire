import { ArrowLeft } from "lucide-react";
import { useBlog } from "../hooks/useBlog";
import { useNavigate, useParams } from "react-router";
import ReactMarkdown from "react-markdown";

const BlogViewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { blogpost } = useBlog();

    const singleBlog = blogpost.filter((elem) => elem.id === id);
    // console.log(singleBlog);

    return (
        <div className="mt-14 flex flex-col gap-2">
            <div
                onClick={() => navigate("/")}
                className="flex cursor-pointer items-center gap-3 font-semibold text-gray-600 hover:text-gray-800"
            >
                <ArrowLeft size={14} />
                <p>Back To Article</p>
            </div>

            <div className="mt-6">
                {/* tags */}
                {singleBlog[0].tags?.map((elem, idx) => {
                    return (
                        <span
                            key={idx}
                            className="mx-1 my-2 rounded-md bg-gray-600 px-2 py-1 text-xs text-white"
                        >
                            {elem}
                        </span>
                    );
                })}

                {/* title */}
                <div className="mt-5 text-5xl font-bold">
                    {singleBlog[0].title}
                </div>

                {/* details */}
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-700">
                    <div>{singleBlog[0].authorName}</div>
                    <div>{singleBlog[0].updatedAt}</div>
                    <div>1 Min Read</div>
                </div>

                {/* excerpt */}
                <div className="mt-6">
                    <p className="text-xl font-semibold">
                        Excerpt:{" "}
                        <span className="text-lg">{singleBlog[0].excerpt}</span>
                    </p>
                </div>

                {/* content */}
                <div className="mt-14 text-2xl">
                    <ReactMarkdown>{singleBlog[0].content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BlogViewPage;
