// ==UserScript==
// @name        5RiversChatMusicSuppress - protradingroom.com
// @namespace   Violentmonkey Scripts
// @match       https://chat.protradingroom.com/?id=63ef8a6607762a108381d21f
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2023, 9:30:49 AM
// ==/UserScript==



function removeAudio(){
  //findAudio();
  $('#mp3player').parent().empty();
  console.log("removed mp3player");
  //findAudio();
}

function findAudio(){
  var audio = $('audio');
  audio.each(function(i, k){
    console.log($(this));
  });
}


setTimeout(removeAudio, 9000);
