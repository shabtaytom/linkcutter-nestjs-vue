<template>
  <div>
    <h1 style="margin: 15px;">Login</h1>
    <div class="box">
      <div v-if="!$store.auth.getters.isLogged">
        <b-form-input v-model="username" placeholder="Enter username..." style="margin: 15px;"></b-form-input>
        <b-form-input v-model="password" placeholder="Enter password..." style="margin: 15px;"></b-form-input>
        <button class="btn btn-primary" style="margin: 15px;" @click="login()">Submit</button>
      </div>
      <div v-else>
        <button class="btn btn-secondary" style="margin: 15px;" @click="destroyToken()">Logout</button>
      </div>
      <router-link :to="{ name: 'home-my-feed' }" class="nav-link" active-class="active">Your Feed</router-link>
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
    destroyToken() {
      AuthService.destroyToken(this.$store)
    }
  }
}
</script>

<style scoped>
</style>
