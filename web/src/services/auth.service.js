import { ApiService } from "../services/api.service";
import JwtService from "./jwt.service";

export const AuthService = {
    async login(store, username, password) {
        const body = {
            username,
            password,
        }
        const res = await ApiService.post('auth/login', body)
        const token = res.data.access_token
        JwtService.saveToken(token)
    },
}