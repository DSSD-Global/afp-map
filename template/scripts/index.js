let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.2707, lng: -76.7075 },
        zoom: 12,
        mapTypeId: "terrain",
    });

    // Create a <script> tag and set the USGS URL as the source.
    const script = document.createElement("script");

    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src =
        "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
    for (let i = 0; i < results.features.length; i++) {
        const coords = results.features[i].geometry.coordinates;
        const latLng = new google.maps.LatLng(coords[1], coords[0]);

        new google.maps.Marker({
            position: latLng,
            map: map,
        });
    }
};

// Client ID and API key from the Developer Console
var CLIENT_ID = '459903889875-61v97luptt5b258jvahvffo4nmb85885.apps.googleusercontent.com';
var API_KEY = 'AIzaSyD8lCxi6u-p62TJvDKW7AnrQ_jrQuHyMOA';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";


var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

function handleClientLoad() {

    gapi.load('client:auth2', initClient);
  }

function initClient(){

  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.

    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    document.getElementById('authorize_button').onclick = handleAuthClick;
    document.getElementById('signout_button').onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

function updateSigninStatus(isSignedIn) {

  if (isSignedIn) {
    document.getElementById('authorize_button').style.display = 'none';
    document.getElementById('signout_button').style.display = 'block';
    listMembers();
  } else {
    document.getElementById('authorize_button').style.display = 'block';    
    document.getElementById('signout_button').style.display = 'none';

  }
}


/**
       *  Sign in the user upon button click.
       */
 function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}


function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

  function listMembers() {
    gapi.client.sheets.spreadsheets.values.get({
  
      spreadsheetId: '1Vfzjkiib0ZfwszfKoRdedp9QzXMopccnd2OZIwzqxvs',
      range: 'B2:O136',
    }).then(function(response) {
      var range = response.result;
      if (range.values.length > 0) {
        for (i = 0; i < range.values.length; i++) {
          var row = range.values[i];
          for(j=0; j < row.length; j++){
            console.log(row[j]);
          }
          console.log("");
        }
      } else {
        appendPre('No data found.');
      }
    }, function(response) {
      
      appendPre('Error: ' + response.result.error.message);
    });
  }
