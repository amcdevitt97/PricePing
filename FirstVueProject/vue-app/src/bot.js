import config from './config.js';

var accountSid = config.accountSid;
var authToken = config.authToken;

/*console.log(accountSid + "   " + authToken);
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
*/

export default {
      call: function(phoneNumbers) {
            console.log("in twilio: ", phoneNumbers);
      }
}


// const VoiceResponse = require('twilio').twiml.VoiceResponse;


// const response = new VoiceResponse();
// const gather = response.gather({
//   input: 'speech',
//   action: '/completed'
// });
    
// gather.play({
//   loop: 1,
// }, 'https://api.twilio.com/cowbell.mp3');
