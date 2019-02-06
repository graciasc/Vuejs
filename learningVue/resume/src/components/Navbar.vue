


<template>
  <div class="navbar">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">Home</a>
        <a class="navbar-item" href="#">About Us</a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>
              <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">

        <div class="navbar-end">
          <a href="# " class="navbar-item is-active">Home</a>
          <a href="# " class="navbar-item">Pricing</a>
          <a href="# " class="navbar-item">About us</a>
        </div>
              </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'Navbar',
    data: function() {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
