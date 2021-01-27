import {API} from "../../backend";

export const createCategory = (userId, token, category) => {
    return fetch (`${API}/category/create/${userId}`, {
        method: "POST",
        headers:{
            accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response =>{
        return response.json()
    }).catch(console.log(err))
}