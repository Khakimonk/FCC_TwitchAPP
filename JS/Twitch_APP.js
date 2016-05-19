var twitchUser = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff"];
/*$(document).ready(function() {
    for (var i = 0; i < twitchUser.length; i++) {
        $('#viewerList').append('<li>' + twitchUser[i] + '</li>');
    }
});*/

var twitchURL = "https://api.twitch.tv/kraken/streams/";
var stream;

/*$.getJSON(twitchURL, function(data) {
    stream = data.stream;
    console.log(stream);
  });*/

function checkOnline() {
  for(var i = 0; i < twitchUser.length; i++) {
    findStreamer(twitchUser[i]);
  }
}

function findStreamer(twitchUser) {
    twitchURL += twitchUser;
    console.log(twitchURL);
    $.getJSON(twitchURL, function(data) {
        showData(data);
        //console.log(stream);
    });
    twitchURL = "https://api.twitch.tv/kraken/streams/";
}

function showData(data) {
    var showUser = [];
    stream = data;
    showUser.push(stream);
    console.log(showUser);
}

checkOnline();
