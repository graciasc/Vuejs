<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <information work-experience="I have worked for as  a Software Developer"/>
  </div>
</template>

<script>
import information from './components/Bio.vue'

export default {
  name: 'app',
  components: {
    information
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
