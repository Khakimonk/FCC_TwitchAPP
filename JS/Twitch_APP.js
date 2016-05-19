var twitchUser = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion"];
/*$(document).ready(function() {
    for (var i = 0; i < twitchUser.length; i++) {
        $('#viewerList').append('<li class="userList">' + twitchUser[i] + '<div>' + '</div></li>');
    }
});*/

var twitchURL = "https://api.twitch.tv/kraken/streams/";
var stream;

/*$.getJSON(twitchURL, function(data) {
    stream = data.stream;
    console.log(stream);
  });*/

function checkOnline() {
    for (var i = 0; i < twitchUser.length; i++) {
        findStreamer(twitchUser[i]);
    }
}

function findStreamer(twitchUser) {
    twitchURL += twitchUser;
    console.log(twitchURL);
    $.getJSON(twitchURL, function(data) {
        useData(data, twitchUser);
        //console.log(stream);
    });
    twitchURL = "https://api.twitch.tv/kraken/streams/";
}

function useData(data, twitchUser) {
    var notOnline = [];
    var online = [];
    var stream = data;
    if (stream.stream == null) {
        notOnline.push(twitchUser);
    } else if (stream.stream !== null) {
        online.push(twitchUser);
    }
    console.log(notOnline);
    console.log(online);
    setOnline(online);
    setOffline(notOnline);
}


function setOnline(online) {
  for(var i = 0; i < online.length; i ++) {
    $('#viewerList').append('<li class="userList">' + online[i] + '<div class="twitchList"><p>Online</p></div></li>');
  }
}

function setOffline(notOnline) {
  for(var i = 0; i < notOnline.length; i ++) {
    $('#viewerList').append('<li class="userList">' + notOnline[i] + '<div class="twitchList"><p>Offline</p></div></li>');
  }
}

checkOnline();
