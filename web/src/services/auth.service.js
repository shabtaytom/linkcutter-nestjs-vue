import { ApiService } from "../services/api.service";
import JwtService from "./jwt.service";

export const AuthService = {
    async login(store, username, password) {
        const body = {
            username,
            password,
        }
        const res = await ApiService.post('auth/login', body)
        if (!res || !res.data || !res.data.access_token) {
            store.auth.commit('isLogged', true)
            throw new Error(`couldn't login`)
        }

        store.auth.commit('isLogged', true)
    },
    destroyToken(store) {
        JwtService.destroyToken()
        store.auth.commit('isLogged', false)
    },
}