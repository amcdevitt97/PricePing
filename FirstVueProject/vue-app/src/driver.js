const axios = require('axios');
import config from './config';

export default {
    search: async function(data) {
        

        var placesKey = config.placesKey;
        var query = data.location.value.replace(/ /g, '+')+'+nail+salons';
        
        var response = await axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/xml?query="+query+"&key="+placesKey, { 'headers': { 'X-Requested-With': 'XMLHttpRequest'} }, JSON.stringify(data));
		var xmlString = response.data;
        var parser = new DOMParser();
        var xml = parser.parseFromString(xmlString, "text/xml");
        //console.log(xml);
        var jsonResponse = xmlToJson(xml);
        // TODO: store all names and phone numbers in an array
        var placeIDs = [];
        var names;
        var phoneNumbers;
        for(var i=0; i<20; i++){
           placeIDs[i] = jsonResponse.PlaceSearchResponse.result[i].place_id['#text'];
           //console.log(jsonResponse.PlaceSearchResponse.result[i]);

        }
        return placeIDs;
	},

	phoneNums: async function(placesArray) {
		var phoneNumberArray = [];
        if(placesArray.length!=0){

			for(var i=0; i< placesArray.length; i++){
				var placesKey = config.placesKey;
				var response = await axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id="+placesArray[i]+"&fields=name,rating,formatted_phone_number&key="+placesKey, { 'headers': { 'X-Requested-With': 'XMLHttpRequest'} });
				//console.log(response.data.result);
				phoneNumberArray[i] = response.data.result.formatted_phone_number;
				
			}
			return phoneNumberArray;
		}
		else{
			console.log("not found");
			return 0;
		}
		
        
        // TODO: store all names and phone numbers in an array
        /*var placeIDs = [];
        var names;
        var phoneNumbers;
        for(var i=0; i<20; i++){
           placeIDs[i] = jsonResponse.PlaceSearchResponse.result[i].place_id['#text'];
           console.log(jsonResponse.PlaceSearchResponse.result[i]);

        }*/
        
    },

}


// Changes XML to JSON
// From https://davidwalsh.name/convert-xml-json
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};