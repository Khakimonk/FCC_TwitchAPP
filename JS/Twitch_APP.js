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
    if ($viewerContainer.attr("class") === "jumbotron all") {
        showAll(twitchUser);
    } else if ($viewerContainer.attr("class") === "jumbotron offline") {
        showOffline(twitchUser);
    } else if ($viewerContainer.attr("class") === "jumbotron online") {
        showOnline(twitchUser);
    }
}

function showAll(twitchUser) {
    if (twitchUser.status === "offline") {
        $list.append('<div class="panel panel-primary"><div class="panel-heading" id="viewerList"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.status + '</div></div>');
    } else if (twitchUser.game != null) {
        $list.append('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.game + '</div></div>');
    } else if (twitchUser.status == "online") {
        $list.append('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.status + '</div></div>');
    }
}

function showOffline(twitchUser) {
  if (twitchUser.status === "offline") {
      $list.append('<div class="panel panel-primary"><div class="panel-heading" id="viewerList"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.status + '</div></div>');
  }
}

function showOnline(twitchUser) {
  if (twitchUser.game != null) {
      $list.append('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.game + '</div></div>');
  } else if (twitchUser.status == "online") {
      $list.append('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + twitchUser.twitchID + '</h3></div><div class="panel-body">' + twitchUser.status + '</div></div>');
  }

}

$(document).ready(function() {
      checkOnline();
      $('#all').click(function() {
            if($viewerContainer.attr("class") === "jumbotron offline") {
              $viewerContainer.removeClass("jumbotron offline").addClass("jumbotron all");
            }
            else if($viewerContainer.attr("class") === "jumbotron online") {
              $viewerContainer.removeClass("jumbotron online").addClass("jumbotron all");
            }
            console.log($viewerContainer.attr("class"));
            $list.empty();
            checkOnline();
      });
      $('#offline').click(function() {
            if($viewerContainer.attr("class") === "jumbotron all") {
              $viewerContainer.removeClass("jumbotron all").addClass("jumbotron offline");
            }
            else if($viewerContainer.attr("class") === "jumbotron online") {
              $viewerContainer.removeClass("jumbotron online").addClass("jumbotron offline");
            }
            console.log($viewerContainer.attr("class"));
            $list.empty();
            checkOnline();
      });
      $('#online').click(function() {
            if($viewerContainer.attr("class") === "jumbotron offline") {
              $viewerContainer.removeClass("jumbotron offline").addClass("jumbotron online");
            }
            else if($viewerContainer.attr("class") === "jumbotron all") {
              $viewerContainer.removeClass("jumbotron all").addClass("jumbotron online");
            }
            console.log($viewerContainer.attr("class"));
            $list.empty();
            checkOnline();
      });
   });
