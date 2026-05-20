import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { SquarePen, Trash } from "lucide-react";
import { set } from "react-hook-form";

const PostPage = () => {
    const navigate = useNavigate();
    const { posts, createPost } = usePosts();

    const [formData, setFormData] = useState({
        title: "",
        body: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }
    }, []);

    const addPost = async () =>{
        //Verificar campos vacíos
        if(formData.title === "" || formData.body === ""){
            alert("Llene todos los campos")
        }else{
            const res = await createPost(formData);
            console.log(res)
            alert("Post creado")
        }
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between p-3 gap-5">
                <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-3">
                    <p className="text-5xl font-bold">Posts</p>
                    <p>Administre los posts de la página</p>
                </div>

            </div>

            <div className="flex flex-col gap-4 p-3">
                <input type="text" placeholder="Título del post" className="input min-w-full" value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                <input type="text" placeholder="Cuerpo del post" className="input min-w-full" value={formData.body}
                onChange={(e) => setFormData({...formData, body: e.target.value})}/>
                <button className="btn btn-primary" onClick={addPost}>Agregar post</button>
            </div>

            <div className="flex flex-col min-w-full p-4 gap-4">

                {posts.map((post) => (
                    <div className="bg-gray-400 shadow-xl min-w-full p-3 rounded-xl flex flex-col" key={post.id}>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col">
                                <p className="font-bold text-md">
                                    Título:<span className="font-normal"> {post.title}</span>
                                </p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <button className="btn bg-blue-400 ">
                                    <SquarePen />
                                </button>
                                <button className="btn btn-error">
                                    <Trash />
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-md">
                                Cuerpo:<span className="font-normal"> {post.body}</span>
                            </p>
                        </div>
                    </div>
                ))}

            
            </div>
        </div>
    );
};

export default PostPage;
