var accountSid = require('./config/config.js').accountSid;
var authToken = require('./config/config.js').authToken;

console.log(accountSid + "   " + authToken);
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://www.alyssamcdevitt.me/twilio-test/twiml.xml',
         to: require('./config/config.js').myNum,
         from: require('./config/config.js').twilioNum,
         method:'GET',
       })
      .then(call => console.log(call.response.toString()));


      

const VoiceResponse = require('twilio').twiml.VoiceResponse;
const response = new VoiceResponse();
response.gather();





// const VoiceResponse = require('twilio').twiml.VoiceResponse;


// const response = new VoiceResponse();
// const gather = response.gather({
//   input: 'speech',
//   action: '/completed'
// });
    
// gather.play({
//   loop: 1,
// }, 'https://api.twilio.com/cowbell.mp3');
