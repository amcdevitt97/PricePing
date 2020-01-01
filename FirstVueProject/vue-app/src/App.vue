<template id="template">
  <router-view >
  <div id="app" >
    <h1> PricePing</h1>

    <div id="mycontent" v-if="!isCalling">
      <h3> Get the price of a gel manicure in your area. No BS. </h3>
      <a href="https://vuejs.org" target="_blank" rel="noopener">How it works</a>
      <h2>Enter your City + State/Province/Province below</h2>
      <div >
        <input type="text" v-model="data.location.value" placeholder="York, PA" v-on:keyup.enter="submit()"/>
      </div>
      <p>{{data.hasError}}</p>
    </div>

    <Loader v-if="isLoading" />
    <Calling v-if="isCalling"/>


  </div>
  </router-view>
</template>



<script>
  import Loader from './components/Loader.vue'
  import Calling from './components/Calling.vue'

  import driver from "./driver";
  import bot from "./bot";

  export default {
    name: 'App',
    components: {
      Loader,
      Calling,
    },
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
        isCalling:false,
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
              this.isCalling = true;
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
