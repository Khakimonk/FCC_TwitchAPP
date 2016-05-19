/*CSS Class list
userList = twitchUser display
twitchList = online status box
ID list
viewerList = ul element
*/

var twitchUser = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "cretetion", "sheevergaming", "ogamingSC2"];
var twitchURL = "https://api.twitch.tv/kraken/streams/";

function streamer(twitchID, game, status, logo) {
    this.twitchID = twitchID;
    this.game = game;
    this.status = status;
    this.logo = logo;
}
var $list = $('#viewerList');
var $viewerContainer = $('#viewerContainer');
console.log($viewerContainer.attr("class"));


function checkOnline() {
    twitchUser.forEach(findStreamer);
}

function findStreamer(twitchUser) {
    twitchURL += twitchUser;
    console.log(twitchURL);
    $.getJSON(twitchURL, function(data) {
        useData(data, twitchUser);
    });
    twitchURL = "https://api.twitch.tv/kraken/streams/";
}

function useData(data, twitchUser) {
    if (data.stream !== null) {
        var twitchUser = new streamer(twitchUser, data.stream.game, "online", data.stream.channel.logo);
    } else {
        var twitchUser = new streamer(twitchUser, null, "offline", null);
    }
    showResult(twitchUser);
    /*$list.append('<div class="panel panel-primary"><div class="panel-heading" id="viewerList"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.game + '</div></div>');*/
    console.log(twitchUser);
}

function showResult(twitchUser) {
    if(twitchUser.status == "offline" && $viewerContainer.attr("class") == "jumbotron all" || $viewerContainer.attr("class") == "jumbotron offline") {
      $list.append('<div class="panel panel-primary"><div class="panel-heading" id="viewerList"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.status + '</div></div>');
    }
    else if (twitchUser.status == "online" && $viewerContainer.attr("class") == "jumbotron all" || $viewerContainer.attr("class") == "jumbotron online") {
      $list.append('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.status + '</div></div>');
    }
    else if (twitchUser.status == "online" && $viewerContainer.attr("class") == "jumbotron all" || $viewerContainer.attr("class") == "jumbotron online") {
      $list.append('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.game + '</div></div>');
    }
}

checkOnline();
