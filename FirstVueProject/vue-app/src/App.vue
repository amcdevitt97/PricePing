<template id="template">
  <!--<router-view></router-view>-->
  <div id="app" >
    <h1> PricePing</h1>
    <div id="mycontent">
      <h3> Get the price of a gel manicure in your area. No BS. </h3>
      <a href="https://vuejs.org" target="_blank" rel="noopener">How it works</a>
      <h2>Enter your City + State/Province/Province below</h2>
      <div >
        <input type="text" v-model="data.location.value" placeholder="York, PA" v-on:keyup.enter="submit()"/>
      </div>
      <p>{{data.hasError}}</p>
    </div>
  </div>
</template>




<script>
  import driver from "./driver";
  export default {
    name: 'app',
    data() {
      return {
        show: false,
        data: {
          location: {
            value: "",
            hasError: null
          }
        },
        generalErrorMessage: "Sorry! Couldn't find this city. Did you type it in correctly?"
      };
    },
    methods: {
      async submit() {
        var result = await driver.search(this.data);
        //console.log(result);
      },
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color:indianred;
}

#app {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
}

#mycontent{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 500;
  font-size: 4rem;
}

h2 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 300;
}

h3 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 200;
}

p, a {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 100;
}
input{
  width:300px;
  border:1px solid black;
  padding: 1rem 1rem;
  font-size: 2rem;
  border-radius: 3px;
  background: #fff;
  margin:0px;
  padding:0px !important;
  height:40px;
}



</style>
