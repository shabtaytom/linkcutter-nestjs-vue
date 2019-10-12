<template>
  <div>
    <h1 style="margin: 15px;">Login</h1>
    <div class="box">
      <p>Count: {{ $store.auth.getters.count }}</p>
      <b-form-input v-model="username" placeholder="Enter username..." style="margin: 15px;"></b-form-input>
      <b-form-input v-model="password" placeholder="Enter password..." style="margin: 15px;"></b-form-input>
      <button class="btn btn-primary" style="margin: 15px;" @click="login()">Submit</button>
    </div>
  </div>
</template>

<script>
import { AuthService } from "../services/auth.service"

export default {
  name: 'Auth',
  props: {},
  data() {
    return {
      username: 'maria',
      password: 'guess',
    }
  },
  methods: {
    async login() {
      await AuthService.login(this.$store, this.username, this.password)
    },
  }
}
</script>

<style scoped>
</style>
