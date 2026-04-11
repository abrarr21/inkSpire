export type UserType = "Auther" | "Reader";

export type RegisterDataType = LoginDataType & {
    name: string;
    confirmPassword: string;
    role: UserType;
    createdAt: Date;
};

export type LoginDataType = {
    email: string;
    password: string;
    role?: UserType;
    name?: string;
    createdAt: Date;
};

export type BlogDataType = {
    id: string;
    title: string;
    authorName: string;
    content: string;
    excerpt: string;
    published: "True" | "False";
    tags?: string[];
    updatedAt?: string;
    createdAt?: string;
};
