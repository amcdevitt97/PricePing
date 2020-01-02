<template id="template">
    <div id="results">
       <h1> PricePing</h1>

        <h2> Prices of {{ $route.params.cityName }} Gel Manicures </h2>
        
        <table >
        <tr>
          <th> Name </th>
          <th> Price </th>
          <th> Rating </th>
        </tr>
        <tr>
          <td> a nail salon </td>
          <td> $35 </td>
          <td> 5 stars </td>
        </tr>
        
        </table>

    </div>
</template>



<script>
  export default {
    name: 'Results',
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
