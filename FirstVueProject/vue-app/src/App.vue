<template id="template">
  <div id="app" >
    <h1> PricePing</h1>

    <div id="mycontent" v-if="!isCalling">
      <h3> Get the price of a gel manicure in your area. No BS. </h3>
      <a href="https://vuejs.org" target="_blank" rel="noopener">How it works</a>
      <h2>Enter your ZIP code below</h2>
      <div >
        <input type="text" v-model="zipCode" placeholder="17404" v-on:keyup.enter="submit()"/>
      </div>
      <p>{{error}}</p>
    </div>

    <Loader v-if="isLoading" />
    <Calling :cityName="cityName" :zipCode="zipCode"  v-if="isCalling"/>


  </div>
</template>



<script>

  // COMPONENTS
  import Loader from './components/Loader.vue'
  import Calling from './components/Calling.vue'

  // SCRIPTS
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
        zipCode: "",
        cityName:"",
        error:"",
        isLoading:false,
        isCalling:false,
        phoneNumbers: [],
        generalErrorMessage: "Sorry! Couldn't find this city. Did you type it in correctly?"
      };
    },
    
    methods: {
      
      submit() {
        var us = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
        var uk = new RegExp(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/);
        
        // If its a US City, get its zip code and call the salons
        if(us.test(this.zipCode)){
          // get city name US
          return driver.findUSCity(this.zipCode)
            .then(cityName => {
              this.cityName = cityName;
              // start loader
              this.isLoading = true;

              return driver.search(this.zipCode)
              .then(response => {
                // search for salon phone numbers
                return driver.phoneNums(response)
                  .then(list => {
                    this.phoneNumbers = list;
                    // take away loader
                    this.isLoading = false;
                    // send this list of phone numbers to a function that calls all the numbers in it
                    bot.call(list);
                    // let user know we are calling their salons
                    this.isCalling = true;
                  })
                  .catch(error => {
                    this.isLoading = false;
                    this.error = error;
                    throw error;
                  })
              })
              .catch(error => {
                this.isLoading = false;
                this.error = error;
                throw error;
              })

            })
            .catch(error => {
              this.isLoading = false;
              this.error = error;
              throw error;
            })
        }

        // If its a UK City, get its zip code and call the salons
        else if(uk.test(this.zipCode)){
          // get city name UK
          return driver.findUKCity(this.zipCode)
            .then(cityName => {
              this.cityName = cityName;
              // start loader
              this.isLoading = true;

              return driver.search(this.zipCode)
              .then(response => {
                // search for salon phone numbers
                return driver.phoneNums(response)
                  .then(list => {
                    this.phoneNumbers = list;
                    // take away loader
                    this.isLoading = false;
                    // send this list of phone numbers to a function that calls all the numbers in it
                    bot.call(list);
                    // let user know we are calling their salons
                    this.isCalling = true;
                  })
                  .catch(error => {
                    this.isLoading = false;
                    this.error = error;
                    throw error;
                  })
              })
              .catch(error => {
                this.isLoading = false;
                this.error = error;
                throw error;
              })

            })
            .catch(error => {
              this.isLoading = false;
              this.error = error;
              throw error;
            })
        }
        else{
          // let user know to change their input to a zip code
          this.error = "Sorry, we only allow US and UK post codes at the time being. Make sure you entered an appropriate post code. \n Want to add other countries? Help contribute to this project at https://github.com/amcdevitt97/PricePing";
        }
        
      },
    },
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
@import 'assets/css/main.css';
</style>
