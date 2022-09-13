import axios from "axios";

const instance = axios.create({
    baseURL: 'https://630f9aa536e6a2a04ede043c.mockapi.io/items/'
})

export default instance;