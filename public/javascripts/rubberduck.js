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
    var list = $("ul li").toArray();
    var elemlength = list.length;
    var randomnum = Math.floor(Math.random()*elemlength);
    var randomitem = list[randomnum];
    answer(input.toLowerCase());
    $("#console").scrollTop($("#console")[0].scrollHeight);
    $("#command_line").val("");
    });

  // $(randomitem).css("display", "block");
});

function speak(message, voice) {
  var voice = voice || 0;
  var msg = new SpeechSynthesisUtterance(message);
  var voices = speechSynthesis.getVoices();
  msg.voice = voices[0];
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
  speak(response.text());
}

function randomItem() {
  var list = $("ul li").toArray();
  return list[Math.floor(Math.random() * list.length)];
}

var words = ['regex', 'ruby', 'rails', 'jq']
