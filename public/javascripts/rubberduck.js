// JavaScript Document

//
//SETS ALL VARIABLES FOR RubberDucking!
//

$(document).ready(function() {
  $("#message_begin").fadeIn(3000);
  $("#area_main").fadeIn(3000);
  $("#command_line").fadeIn(3000);
  $("form").submit(function() {
    var input = $("#command_line").val();
    answer(input.toLowerCase());

    $("#console").scrollTop($("#console")[0].scrollHeight);
    $("#command_line").val("");
    });
});

function speak(message, voice) {
  var voice = voice || 0;
  var msg = new SpeechSynthesisUtterance(message);
  var voices = speechSynthesis.getVoices();
  msg.voice = voices[voice];
  speechSynthesis.speak(msg);
}

function answer(input) {
  var keyword = words.filter(function(word){return input.indexOf(word) != -1})[0];
  var quote = $("<blockquote>").text(input);
  $("#placeholder").before(quote);
  if (!!keyword) {
    var response = $("#" + keyword);
  } else {
    var response = $(randomItem());
  }
  response.clone().insertBefore("#placeholder").fadeIn(1000);
  speak(response.text(), Math.floor(Math.random() * 10));
}

function randomItem() {
  var list = $("ul li").toArray();
  return list[Math.floor(Math.random() * list.length)];
}

var words = ['regex', 'ruby', 'rails', 'jq']

//speak takes an options second argument
//anytime you want it to speak call the 
//speak function with the text and the voice number
