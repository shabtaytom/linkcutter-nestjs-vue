import axios from "axios"
import { config } from "../config/config";
import JwtService from "./jwt.service";

const API_URL = config.apiUrl

export const ApiService = {
    async getParams(route, params) {
        this.setHeader()
        return this.get(`${route}/${params}`)
    },
    setHeader() {
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${JwtService.getToken()}`;
    },
    async get(route) {
        this.setHeader()
        const url = `${API_URL}/${route}`
        console.log(`GET ${url}`)
        return axios.get(url)
    },
    async post(route, body) {
        this.setHeader()
        const url = `${API_URL}/${route}`
        console.log(`POST ${url}`)
        console.log(body)
        const res = await axios.post(url, body)
        console.log({
            data: res.data,
            code: res.status
        })
        return res
    }
}