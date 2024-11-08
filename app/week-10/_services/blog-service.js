import {addDoc, collection} from "firebase/firestore"
import { db } from "../_utils/firebase";

export async function dbAddBlogPost(userId, blogPostObj) {
    try {
        const newBlogPostReference = collection(db, "users", userId, "blog-posts");
        const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
        console.log(newBlogPostPromise.id);
    } catch (error) {
        console.log(error);
    }
}