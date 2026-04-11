import type { BlogDataType } from "../types";

export const blogs: BlogDataType[] = [
    {
        id: "1",
        title: "Getting Started with React",
        authorName: "John Doe",
        content: "Full content of the blog...",
        excerpt: "Intro to React basics",
        published: "True",
        tags: ["react", "frontend"],
        createdAt: new Date().toString().split("T")[0],
        updatedAt: new Date().toString().split("T")[0],
    },
    {
        id: "2",
        title: "Understanding TypeScript",
        authorName: "Jane Smith",
        content:
            "TypeScript is a strongly typed superset of JavaScript that helps you catch errors early. It adds static typing, interfaces, generics.",
        excerpt: "Learn TypeScript fundamentals",
        published: "True",
        tags: ["typescript", "javascript"],
        createdAt: new Date().toString().split("T")[0],
    },
    {
        id: "3",
        title: "Advanced CSS Tricks",
        authorName: "Alex Brown",
        content:
            "CSS is more powerful than most developers realize. Beyond basic styling, you can create complex layouts using Grid and Flexbox, build responsive designs.",
        excerpt: "Cool CSS techniques",
        published: "True",
        tags: ["css", "design"],
        createdAt: new Date().toString().split("T")[0],
        updatedAt: new Date().toString().split("T")[0],
    },
];
