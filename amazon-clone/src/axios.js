import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-19882/us-central1/api' // Cloud function UEL

});
export default instance;
