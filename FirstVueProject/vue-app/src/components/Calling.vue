<template id="template">
    <div id="calling">
      <h2>Getting your prices for {{cityName}} now! Check back at <router-link :to="{name: 'Results', params: {cityName: cityName }}" class="nav-link" >this link</router-link> in about an hour for the latest prices.</h2>
    </div>
</template>



<script>
  export default {
    name: 'Calling',
    props: {
      cityName: String
    },
    data() {
      return {
        
      };
    },
    
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
@import '../assets/css/main.css';
</style>
