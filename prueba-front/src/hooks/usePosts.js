import { useEffect, useState } from "react";

export const usePosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [])


    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")

            if (!response.ok) {
                throw new Error("Error al cargar los posts")
            }

            const data = await response.json();
            setPosts(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const createPost = async (data) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            throw new Error("error creando el post")
        }

        setPosts((prev) => [data, ...prev])

        return res.json();
    }

    const deletePost = async (id) =>{
        const filteredPosts = posts.filter((post) => post.id !== id)

        setPosts(filteredPosts)
    }

    const updatePost = async(editingPost, updatedData) =>{
        const updatedPosts = posts.map((post) => {
            if(post.id === editingPost.id){
                return {
                    ...post,
                    ...updatedData
                }
            }
            
            return post;
        });
        
        setPosts(updatedPosts);
    }

    return {
        posts,
        createPost,
        deletePost,
        updatePost
    }

}