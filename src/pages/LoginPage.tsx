import { Eye, PenLine } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { UserType } from "./RegisterPage";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

export type LoginDataType = {
    email: string;
    password: string;
    role?: UserType;
    name?: string;
    createdAt: Date;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<LoginDataType>({
        mode: "onChange",
        defaultValues: {
            createdAt: new Date(),
        },
    });

    const navigate = useNavigate();
    const [showPasswordToggle, setShowPasswordToggle] = useState(false);
    const { setLoggedInUser, registeredUser } = useAuth();

    const onCommit = (data: LoginDataType) => {
        const user = registeredUser.find(
            (p) => p.email === data.email && p.password === data.password,
        );

        if (!user) {
            // console.error("user not found");
            toast.error("Invalid email and password");
            return;
        }

        console.log("user found->", user);

        const logUser = {
            ...data,
            name: user.name,
            role: user.role,
            createdAt: new Date(),
        };

        // console.log(" log user ->", logUser);
        localStorage.setItem("blog-current-user", JSON.stringify(logUser));
        setLoggedInUser(logUser);
        toast.success("login success", {
            duration: 2000,
            position: "bottom-right",
        });
        navigate("/");
        reset();
    };

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="w-[90%] rounded-xl border border-gray-300 px-6 py-5 md:w-1/2">
                <div className="text-center">
                    <div className="inline-block rounded-full bg-primary p-3">
                        <PenLine size={30} className="text-white" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold">
                        Welcome Back
                    </h2>
                    <p>Sign in to your account to continue</p>
                </div>

                <form
                    onSubmit={handleSubmit(onCommit)}
                    className="mt-8 flex flex-col gap-6"
                >
                    {/* Email */}
                    <div>
                        <label className="mb-2 block">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter valid email",
                                },
                            })}
                            type="text"
                            placeholder="john@example.com"
                            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-primary focus:outline-primary"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-primary">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* password */}
                    <div>
                        <label className="mb-2 block">Password</label>
                        <div className="flex items-center justify-between rounded-md border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary">
                            <input
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: "Minimum 6 chars",
                                    },
                                })}
                                type={showPasswordToggle ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full p-2 focus:outline-none"
                            />
                            <Eye
                                size={18}
                                className="mr-2"
                                onClick={() => setShowPasswordToggle((p) => !p)}
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-primary">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`cursor-pointer rounded-xl bg-primary p-2 text-center text-white`}
                    >
                        Sign in
                    </button>

                    <div>
                        <p className="text-center">
                            Don't have an accoutn?{" "}
                            <span
                                onClick={() => navigate("/register")}
                                className="cursor-pointer text-primary"
                            >
                                Register
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
