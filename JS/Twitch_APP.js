var twitchUser = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
$(document).ready(function() {
  for(var i = 0; i < twitchUser.length; i++) {
    $('#viewerList').append('<li>' + twitchUser[i] + '</li>');
  }
});

var twitchURL = "https://api.twitch.tv/kraken/streams/gpl";
var stream;

/*$.getJSON(twitchURL, function(data) {
    stream = data.stream;
    console.log(stream);
  });*/

  function findStreamer() {
        $.getJSON(twitchURL, function(data, callback) {
          stream = data.stream;
          if(stream == !null){
            isLive(data.stream);
          }
        });
  }

function isLive(data) {
  console.log(data);
}

console.log(findStreamer(isLive()));
