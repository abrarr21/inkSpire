import { LayoutGrid, LogOut, Moon, PenLine } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { removeLocalStorage } from "../utils/localStorage";

const Navbar = () => {
    const navigate = useNavigate();

    const { loggedInUser, setLoggedInUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const userExist = !!loggedInUser;

    const isAuthor =
        userExist && Object.values(loggedInUser).some((p) => p === "Author");

    const onLogout = () => {
        removeLocalStorage("blog-current-user");
        setLoggedInUser(null);
        toast.success("logout success", {
            duration: 3000,
            position: "bottom-right",
        });
        navigate("/login");
    };

    return (
        <nav className="sticky top-0 w-full border-b border-gray-300 shadow-md backdrop-blur-md">
            <div className="mx-auto flex h-full w-[min(60em,95%)] items-center justify-between">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-1"
                >
                    <PenLine
                        size={32}
                        className="text-primary [filter:drop-shadow(2px_0px_5px_var(--color-primary))]"
                    />
                    <h1 className="text-2xl font-bold">InkSpire</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="inline-flex rounded-lg p-2 transition-colors duration-100 hover:bg-secondary hover:text-white">
                        <Moon size={18} />
                    </div>

                    {userExist ? (
                        <div
                            onClick={() => setIsOpen((p) => !p)}
                            className="relative flex cursor-pointer gap-2 rounded-md px-2 py-1 transition-colors duration-100 hover:bg-secondary hover:text-white"
                        >
                            <p className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                                {loggedInUser.email?.charAt(0).toUpperCase()}
                            </p>
                            <button>{loggedInUser.name?.toUpperCase()}</button>

                            {isOpen && (
                                <div className="absolute top-full right-1 w-40 rounded-lg border border-gray-300 bg-(--bg-whitecanvas) p-2 md:w-56">
                                    <div className="mt-1 text-black">
                                        <h1>{loggedInUser.name}</h1>
                                        <h3 className="text-xs text-gray">
                                            {loggedInUser.email}
                                        </h3>
                                        <p className="text-xs text-gray">
                                            {loggedInUser.role}
                                        </p>
                                    </div>
                                    <hr className="my-1 text-gray-400" />
                                    {isAuthor && (
                                        <>
                                            <div
                                                className="flex items-center gap-3 rounded-lg px-2 py-1 text-sm text-black hover:bg-secondary hover:text-white"
                                                onClick={() =>
                                                    navigate("/dashboard")
                                                }
                                            >
                                                <LayoutGrid size={14} />
                                                <h1>Dashboard</h1>
                                            </div>

                                            <hr className="my-1 text-gray-400" />
                                        </>
                                    )}
                                    <div
                                        className="flex items-center gap-3 rounded-lg px-2 py-1 text-sm text-black hover:bg-secondary"
                                        onClick={onLogout}
                                    >
                                        <LogOut size={14} />
                                        <h1 className="text-red-600">Logout</h1>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate("/login")}
                                className="cursor-pointer rounded-lg px-4 py-2 transition-colors duration-100 hover:bg-secondary hover:text-white"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate("/register")}
                                className="cursor-pointer rounded-lg bg-primary px-4 py-2 whitespace-nowrap text-white"
                            >
                                Sign up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
