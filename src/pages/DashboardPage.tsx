import { Ellipsis, Plus } from "lucide-react";
import { useNavigate } from "react-router";

const DashboardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-rows-[auto_auto_1fr]">
            {/* Dashboard text */}
            <div className="mt-12 flex items-center justify-between">
                <div>
                    <h3 className="text-3xl font-bold">Dashboard</h3>
                    <p className="mt-1.5 text-sm">
                        Manage your Articles, itachi
                    </p>
                </div>
                <div
                    onClick={() => navigate("/dashboard/new")}
                    className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-white md:gap-4"
                >
                    <Plus size={14} />
                    <button className="text-sm">Add Article</button>
                </div>
            </div>

            {/* Dashboard stats */}
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-gray-300 p-6">
                    <h3 className="text-md">Total Article</h3>
                    <h2 className="mt-2 text-3xl font-semibold">3</h2>
                </div>

                <div className="rounded-xl border border-gray-300 p-6">
                    <h3 className="text-md">Published</h3>
                    <h2 className="mt-2 text-3xl font-semibold">3</h2>
                </div>

                <div className="rounded-xl border border-gray-300 p-6">
                    <h3 className="text-md">Drafts</h3>
                    <h2 className="mt-2 text-3xl font-semibold">3</h2>
                </div>
            </div>

            {/* Your articles */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold">Your Articles</h2>

                {/* card */}
                <div className="mt-5 grid grid-cols-1">
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-gray-300 px-4 py-8">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl">Title</h1>
                                <h3 className="rounded-lg bg-primary px-2 text-sm text-white">
                                    Published
                                </h3>
                            </div>
                            <p>content</p>
                            <h3>last updated at: </h3>
                        </div>
                        <Ellipsis size={18} />
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1">
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-gray-300 px-4 py-8">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl">Title</h1>
                                <h3 className="rounded-lg bg-primary px-2 text-sm text-white">
                                    Published
                                </h3>
                            </div>
                            <p>content</p>
                            <h3>last updated at: </h3>
                        </div>
                        <Ellipsis size={18} />
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1">
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-gray-300 px-4 py-8">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl">Title</h1>
                                <h3 className="rounded-lg bg-primary px-2 text-sm text-white">
                                    Published
                                </h3>
                            </div>
                            <p>content</p>
                            <h3>last updated at: </h3>
                        </div>
                        <Ellipsis size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
