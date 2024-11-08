"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    // console.dir(user);

    return (
        <main className="m-5">
            <header>
                <h1 className="text-center text-3xl">Firebase Auth</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <div>
                        <img src={user.photoURL} className="w-10 h-10" />
                    </div>
                    <Link href="/week-10/add-blog-post/">Add a new blog post!</Link>
                    <section>
                        <h2>My Blog Posts</h2>
                        <ul>

                        </ul>
                    </section>
                    <div>
                    <button
                    type="button"
                    className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    onClick={handleSignOut}
                    >Sign Out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                    type="button"
                    className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    onClick={handleSignIn}
                    >Sign In with GitHub</button>
                </div>
            )}

        </main>
    );
}