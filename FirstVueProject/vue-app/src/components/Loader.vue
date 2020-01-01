<template id="template">
    <div id="loadingParent">
      <div id="loader">
      </div>
      <div id="loadingContent">
        <h2 >Fetching the best nail salons near you...</h2>
        <img src="../assets/images/loading.gif"/>
        <h2 >We'll give you a URL to their prices in a bit!</h2>
      </div>
    </div>
</template>



<script>
  export default {
    name: 'Loader',
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
