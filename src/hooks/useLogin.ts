import { useForm } from "react-hook-form";
import type { LoginDataType } from "../types";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";
import { storage } from "../utils/localStorage";

export const useLogin = () => {
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

    const onLoginCommit = (data: LoginDataType) => {
        const user = registeredUser.find(
            (p) => p.email === data.email && p.password === data.password,
        );

        if (!user) {
            // console.error("user not found");
            toast.error("Invalid email and password");
            return;
        }

        const logUser = {
            ...data,
            name: user.name,
            role: user.role,
            createdAt: new Date(),
        };

        // console.log(" log user ->", logUser);
        storage.set("blog-current-user", logUser);
        setLoggedInUser(logUser);
        toast.success("login success", {
            duration: 2000,
            position: "bottom-right",
        });
        navigate("/");
        reset();
    };

    return {
        navigate,
        setLoggedInUser,
        onLoginCommit,
        reset,
        register,
        errors,
        isValid,
        handleSubmit,
        showPasswordToggle,
        setShowPasswordToggle,
        registeredUser,
    };
};
