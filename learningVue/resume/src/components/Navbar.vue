


<template>
  <div class="navbar">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">Home</a>
        <a class="navbar-item" href="#">About Us</a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
