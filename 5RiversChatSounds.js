// ==UserScript==
// @name        5RiversChatSounds - protradingroom.com
// @namespace   Violentmonkey Scripts
// @match       https://chat.protradingroom.com/?id=63ef8a6607762a108381d21f
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2023, 9:30:49 AM
// ==/UserScript==

var audioAlert = new Audio('https://github.com/btoInc/5RiversChatSounds/blob/main/wet-431.mp3');
audioAlert.volume = 0.35;
var audioAlertAdmin = new Audio('https://github.com/btoInc/5RiversChatSounds/blob/main/ti-na-83.mp3');
audioAlertAdmin.volume = 0.5;
var audioAlertStock = new Audio('https://github.com/btoInc/5RiversChatSounds/blob/main/coins.mp3');
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
