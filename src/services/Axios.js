import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost:8081/editora-livros-api",
    withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});