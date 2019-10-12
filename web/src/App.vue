<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <!-- 
    <router-view></router-view>
    <Auth/>
    <Link v-if="$store.auth.getters.isLogged" /> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Link from './components/Link.vue'
import Auth from './components/Auth.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Link,
    Auth
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.box {
  border: #2c3e50 solid 1px;
  width: 80%;
  margin: 20px auto;
  padding: 15px;
}
</style>
