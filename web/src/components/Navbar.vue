<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="#">LinkCutter</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          <b-nav-item :to="{ name: 'login' }">{{ !$store.auth.getters.isLogged ? 'Login' : 'Profile'}}</b-nav-item>
          <b-nav-item :to="{ name: 'link' }" :disabled="!$store.auth.getters.isLogged">Links</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
