<template>
  <div>
    <h1 style="margin: 15px;">Login</h1>
    <div class="box">
      <!-- <p>Count: {{ $store.auth.getters.count }}</p> -->
      <!-- <b-form-input v-model="findId" placeholder="Enter id..." style="margin: 15px;"></b-form-input> -->
      <!-- <button class="btn btn-primary" style="margin: 15px;" @click="getLink()">Get Link</button> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  props: {},
  data() {
    return {
      link: '',
    }
  },
  methods: {
    // async postLink() {
    //   await LinkService.postLink(this.$store, this.link)
    //   this.link = ''
    // },
  }
}
</script>

<style scoped>
</style>
