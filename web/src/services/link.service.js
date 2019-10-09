import { ApiService } from "../services/api.service";

export const LinkService = {
    async getLinks() {
        return ApiService.get('links')
    },
    async getLinksCount(store) {
        const res = await this.getLinks()
        store.link.commit('count', res.data.length)
        return res.data.length
    },
    async postLink(store, link) {
        const body = {
            link
        }
        const res = await ApiService.post('links', body)
        store.link.commit('lastPostedLink', res.data)
    },
    async getLink(store, id) {
        console.log('getLink', id)
        const res = await ApiService.getParams('links', id)
        store.link.commit('findedLink', res && res.data.length > 0 ? res.data[0] : {})
    }
}