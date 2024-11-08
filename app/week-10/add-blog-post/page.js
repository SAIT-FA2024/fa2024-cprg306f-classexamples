"use client"
import { useState } from "react";
import { dbAddBlogPost } from "../_services/blog-service";
import { useUserAuth } from "../_utils/auth-context";

export default function AddBlogPostPage(){
    const {user} = useUserAuth();
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeContents = (event) => setContents(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        let newBlogPost = {
            title: title,
            contents: contents,
            // avacado: "whatever"
        }
        dbAddBlogPost(user.uid, newBlogPost);
        setTitle("");
        setContents("");
    }

    if (!user) {
        return(
            <main>
                <p>You must be logged in to submit a blog post.</p>
            </main>
        );
    }

    return(
        <main>
            <header>
                <h1>Add a new blog post!</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" onChange={handleChangeTitle} value={title} />
                </div>
                <div>
                    <label>Contents:</label>
                    <textarea onChange={handleChangeContents} value={contents}></textarea>
                </div>
                <div>
                    <button type="submit">Submit Blog Post</button>
                </div>
            </form>
        </main>
    );
}