import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);


const customFetch = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        Accept: "application/json",
        "Authorization": token ? `Bearer ${JSON.parse(token)}` : "",
    }
})

export default customFetch;