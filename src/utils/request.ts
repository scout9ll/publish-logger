import axios from "axios";

const myAxios = axios.create({
    baseURL:"http://localhost:8795/"
})


export default myAxios