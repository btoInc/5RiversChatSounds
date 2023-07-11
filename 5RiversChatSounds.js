// ==UserScript==
// @name        New script - protradingroom.com
// @namespace   Violentmonkey Scripts
// @match       https://chat.protradingroom.com/?id=63ef8a6607762a108381d21f
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2023, 9:30:49 AM
// ==/UserScript==

var audioAlert = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-871-wet.ogg');
audioAlert.volume = 0.35;
var audioAlertAdmin = new Audio('https://notificationsounds.com/storage/sounds/file-47_ti-na.ogg');
audioAlertAdmin.volume = 0.35;
var audioAlertStock = new Audio('https://notificationsounds.com/storage/sounds/file-47_ti-na.ogg');
audioAlertStock.volume = 0.35;

function chatCallback(data){
  console.log("chat chatted - DATA: ");
  data.forEach(function(record){
    if(typeof record.target == "object"){
      var parent = $(record.target);
      //console.log(parent);
      if (parent.children().last().find('div.msg-box-adm').length != 0)
        audioAlertAdmin.play();
      else if (parent.children().last().find('span.stockColor').length != 0)
        audioAlertStock.play();
      else
        audioAlert.play();
    }
  });
}

//setInterval(chatCallback, 1000);

function setObserver(){
  console.log(" ** create observer **");
  var obsv = new MutationObserver(chatCallback);
  var config = {
    //attributes: true,
    childList: true
    //,
    //characterData: true
  };
  console.log(" ** setting observer **");
  $("app-chat app-roomscroller div").each(function(){
    obsv.observe(this, config);
  });

  findAudio();
  $('#mp3player').parent().empty();
  console.log("removed mp3player");
  findAudio();
}

function findAudio(){
  var audio = $('audio');
  audio.each(function(i, k){
    console.log($(this));
  });

}
console.log("got to the end")


setTimeout(setObserver, 9000);
/*
function cleanup()
{
 var videos = $('#screensTabsContent').find('video').get(0);
  videos.pause();
  videos.currentTime = 0;
}*/
