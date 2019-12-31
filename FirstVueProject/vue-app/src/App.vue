<template id="template">
  <router-view >
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

    <div id="loadingParent" v-if="isLoading">
      <div id="loader">
      </div>
      <div id="loadingContent">
        <h2 >Fetching the best nail salons near you...</h2>
        <img src="./assets/images/loading.gif"/>
        <h2 >We'll give you a URL to their prices in a bit!</h2>
      </div>
    </div>

  </div>
  </router-view>
</template>



<script>
  import driver from "./driver";
  import bot from "./bot";
  import router from "./router";
  export default {
    name: 'App',
    data() {
      return {
        show: false,
        data: {
          location: {
            value: "",
            hasError: null
          }
        },
        isLoading:false,
        phoneNumbers: [],
        generalErrorMessage: "Sorry! Couldn't find this city. Did you type it in correctly?"
      };
    },
    
    methods: {
      
      submit() {
        this.isLoading = true;
        return driver.search(this.data)
        .then(response => {
          return driver.phoneNums(response)
            .then(list => {
              this.phoneNumbers = list;
              console.log(list);
              // TODO, send this list of phone numbers to a function that calls all the numbers in it
              this.isLoading = false;
              bot.call(list);
              router.push({ name: 'Calling' });
            })
            .catch(error => {
              this.isLoading = false;
              throw error;
            })
        })
        .catch(error => {
          this.isLoading = false;
          throw error;
        })
        
      },
    },
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
@import 'assets/css/main.css';
</style>
