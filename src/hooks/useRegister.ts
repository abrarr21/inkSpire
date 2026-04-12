import { useForm, useWatch } from "react-hook-form";
import type { RegisterDataType } from "../types";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";
import { storage } from "../utils/localStorage";
import toast from "react-hot-toast";

export const useRegister = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid },
    } = useForm<RegisterDataType>({
        mode: "onChange",
        defaultValues: {
            createdAt: new Date(),
        },
    });

    const { setRegisteredUser, registeredUser, setLoggedInUser } = useAuth();
    const password = useWatch({ control, name: "password" });
    const navigate = useNavigate();

    const [showPasswordToggle, setShowPasswordToggle] = useState(false);

    const onRegisterCommit = (data: RegisterDataType) => {
        const createdUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            role: data.role,
            createdAt: new Date(),
        };
        const newUser = [...registeredUser, createdUser];
        storage.set("blog-users", newUser);
        setRegisteredUser(newUser);

        storage.set("blog-current-user", createdUser);
        setLoggedInUser(createdUser);
        // console.log(newUser);
        toast.success("user created", {
            duration: 2000,
            position: "bottom-right",
        });
        navigate("/");
        reset();
    };

    return {
        setRegisteredUser,
        registeredUser,
        setLoggedInUser,
        onRegisterCommit,
        navigate,
        showPasswordToggle,
        setShowPasswordToggle,
        password,
        register,
        handleSubmit,
        control,
        reset,
        errors,
        isValid,
    };
};
