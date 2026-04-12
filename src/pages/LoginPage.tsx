import { Eye, PenLine } from "lucide-react";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
    const {
        navigate,
        onLoginCommit,
        register,
        errors,
        isValid,
        handleSubmit,
        showPasswordToggle,
        setShowPasswordToggle,
    } = useLogin();

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
                    onSubmit={handleSubmit(onLoginCommit)}
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
                        className={`${isValid ? "bg-primary text-white" : "bg-gray-400 text-black"} cursor-pointer rounded-xl p-2 text-center`}
                    >
                        Sign in
                    </button>

                    <div>
                        <p className="text-center text-sm">
                            Don't have an accoutn?{" "}
                            <span
                                onClick={() => navigate("/register")}
                                className="cursor-pointer font-semibold text-primary"
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
