import axios from "axios"
import { config } from "../config/config";

const API_URL = config.apiUrl

export const ApiService = {
    async getParams(route,params) {
        return this.get(`${route}/${params}`)
    },
    async get(route) {
        const url = `${API_URL}/${route}`
        console.log(`GET ${url}`)
        return axios.get(url)
    },
    async post(route, body) {
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