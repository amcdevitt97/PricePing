<template id="template">
  <router-view >
  <div id="app" >
    <h1> PricePing</h1>
    <div id="mycontent">
      <h2>Getting your prices now! Check back at /{URL/> in about an hour for the latest prices.</h2>
      
    </div>

  </div>
  </router-view>
</template>



<script>
  import driver from "./driver";
  export default {
    name: 'Calling',
    data() {
      return {
        show: false,
      };
    },
    
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
@import 'assets/css/main.css';
</style>
