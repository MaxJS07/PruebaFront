
export const createPost = async (data) =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    if(!res.ok){
        throw new Error("error creando el post")
    }
    return res.json();
}