import { Eye, PenLine } from "lucide-react";
import { useRegister } from "../hooks/useRegister";

const RegisterPage = () => {
    const {
        onRegisterCommit,
        navigate,
        showPasswordToggle,
        setShowPasswordToggle,
        password,
        register,
        handleSubmit,
        errors,
        isValid,
    } = useRegister();

    return (
        <div className="mt-5 mb-5 flex h-full w-full items-center justify-center md:mt-3">
            <div className="w-[90%] rounded-xl border border-gray-300 px-6 py-5 md:w-1/2">
                <div className="text-center">
                    <div className="inline-block rounded-full bg-primary p-3">
                        <PenLine size={30} className="text-white" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold">
                        Create an account
                    </h2>
                    <p>Join InkSpire to start reading or writing</p>
                </div>

                <form
                    onSubmit={handleSubmit(onRegisterCommit)}
                    className="mt-8 flex flex-col gap-6"
                >
                    {/* Name */}
                    <div>
                        <label className="mb-2 block">Name</label>
                        <input
                            {...register("name", {
                                required: "name is required",
                            })}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-primary focus:outline-primary"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-primary">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

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

                    {/* Pasword */}
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
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 focus:outline-none"
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-primary">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* confirm Pasword */}
                    <div>
                        <label className="mb-2 block">confirm Password</label>
                        <div className="flex items-center justify-between rounded-md border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary">
                            <input
                                {...register("confirmPassword", {
                                    required: "Password must match",
                                    validate: (value) => {
                                        return (
                                            value === password ||
                                            "Passwords do not match"
                                        );
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
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-primary">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* radio option */}
                    <div>
                        <p className="mb-2">Account Type</p>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Reader */}
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    value="Reader"
                                    {...register("role")}
                                    className="peer hidden"
                                />

                                <div className="rounded-xl border border-gray-300 p-4 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/10">
                                    <p className="font-semibold">Reader</p>
                                    <p className="text-sm text-gray-500">
                                        Read articles
                                    </p>
                                </div>
                            </label>

                            {/* Author */}
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    value="Author"
                                    {...register("role")}
                                    className="peer hidden"
                                />

                                <div className="rounded-xl border border-gray-300 p-4 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/10">
                                    <p className="font-semibold">Author</p>
                                    <p className="text-sm whitespace-nowrap text-gray-500">
                                        Write & publish
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`${isValid ? "bg-primary text-white" : "bg-gray-400 text-black"} cursor-pointer rounded-xl p-2 text-center`}
                    >
                        Sign up
                    </button>

                    <div className="">
                        <p className="text-center text-sm">
                            Already have an accoutn?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="cursor-pointer font-semibold text-primary"
                            >
                                Login
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
