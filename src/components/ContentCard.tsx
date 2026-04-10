import { Calendar, User } from "lucide-react";

const ContentCard = () => {
    return (
        <div className="grid cursor-pointer grid-rows-[auto_auto_1fr_auto] rounded-xl border border-gray-300 px-5 py-7 shadow-md shadow-gray-900/20 transition-colors duration-100 hover:border-primary">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
                <h6 className="rounded-md bg-gray-300 px-2 text-xs whitespace-nowrap">
                    react
                </h6>
                <h6 className="rounded-md bg-gray-300 px-2 text-xs">hello</h6>
                <h6 className="rounded-md bg-gray-300 px-2 text-xs">hello</h6>

                <h6 className="rounded-md bg-gray-300 px-2 text-xs whitespace-nowrap">
                    hello world
                </h6>

                <h6 className="rounded-md bg-gray-300 px-2 text-xs whitespace-nowrap">
                    hello world
                </h6>
            </div>

            {/* Title */}
            <div className="mt-3">
                <h1 className="text-2xl font-bold">Title</h1>
            </div>

            {/* Content */}
            <div className="my-6">
                <p className="text-gray-700">
                    Content is the great piece of information these days. It
                    helps us acquire knowledge in the domain we are interested
                    in.
                </p>
            </div>

            {/* User and Date */}
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <User size={14} />
                    <h5 className="text-xs">User account</h5>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <h5 className="text-xs">User account</h5>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
