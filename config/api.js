import axios from "axios";
const urls = {
    production: "https://proyecto-jardin-392901.rj.r.appspot.com",
    dev: "http://localhost:8080/"
}

const api = axios.create({

    baseURL: urls.production

});

export { api }; 