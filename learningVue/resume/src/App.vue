<template>
  <div id="app">
 <!-- <Image/> -->
 <div>
    <navbar/>
 </div>
    <img src='./assets/fabian-grohs-597395-unsplash.jpg'/>
    <information work-experience="I have worked as a Software Developer"/>
  </div>
</template>

<script>
import information from './components/Bio.vue'
import navbar from './components/Navbar.vue'
import Image from './components/Image.vue'

export default {
  name: 'app',
  components: {
    information,
    navbar,
    Image
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
