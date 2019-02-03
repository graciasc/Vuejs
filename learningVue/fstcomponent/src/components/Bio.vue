<template>
  <div class="info">
      <h1> Gracias Work Experience  </h1>
    <p>{{workExperience}}</p>
  </div>
</template>



<script>
export default {
  name: "info", //script tags hold the info for the js file
  props: {
workExperience: String
  }
};
</script>
