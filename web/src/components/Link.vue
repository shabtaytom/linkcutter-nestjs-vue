<template>
  <div>
    <h1 style="margin: 15px;">Generate Link</h1>
    <div class="box">
      <p>Link ID: {{ $store.link.getters.lastPostedLink.id }}</p>
      <p>Link URL: {{ $store.link.getters.lastPostedLink.link }}</p>
      <b-form-input v-model="link" placeholder="Enter url..." style="margin: 15px;"></b-form-input>
      <button class="btn btn-primary" style="margin: 15px;" @click="postLink()">Post Link</button>
    </div>
    <h1 style="margin: 15px;">Get Link</h1>
    <div class="box">
      <p>Link ID: {{ $store.link.getters.findedLink.id }}</p>
      <p>Link URL: {{ $store.link.getters.findedLink.link }}</p>
      <b-form-input v-model="findId" placeholder="Enter id..." style="margin: 15px;"></b-form-input>
      <button class="btn btn-primary" style="margin: 15px;" @click="getLink()">Get Link</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { LinkService } from "../services/link.service";

export default {
  name: 'Link',
  props: {},
  data() {
    return {
      link: '',
      findId: '',
    }
  },
  methods: {
    async postLink() {
      await LinkService.postLink(this.$store, this.link)
      this.link = ''
    },
    async getLink() {
      await LinkService.getLink(this.$store, this.findId)
    },
    async test() {
      const linkCount = await LinkService.getLinksCount(this.$store)
    }
  }
}
</script>

<style scoped>
</style>
