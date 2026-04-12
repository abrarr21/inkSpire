import ContentCard from "../components/ContentCard";
import { useBlog } from "../hooks/useBlog";

const Home = () => {
    const { blogpost } = useBlog();
    // console.log(blogpost);
    const publishedBlogs = blogpost.filter((elem) => elem.published === "True");

    return (
        <div className="mx-auto mt-8 mb-5 grid grid-rows-[auto_1fr]">
            <div className="text-center">
                <h1 className="text-[clamp(1.9rem,5vw,3.4rem)] font-bold">
                    Welcome to <span className="text-primary">InkSpire</span>
                </h1>
                <p className="m-auto w-11/12 text-[clamp(0.4rem,5vw,1.1rem)] lg:w-8/12">
                    Discover thoughtful articles on technology, programming, and
                    software engineering from passionate writers.
                </p>
            </div>

            <div className="mt-12 px-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-[clamp(1.3rem,4vw,1.5rem)] font-semibold">
                        Latest Articles
                    </h2>
                    <h4 className="text-sm font-semibold text-gray-600">
                        {publishedBlogs.length} Articles
                    </h4>
                </div>

                {/* cards */}
                <div className="mt-4 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {publishedBlogs.map((elem) => {
                        return <ContentCard key={elem.id} post={elem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
