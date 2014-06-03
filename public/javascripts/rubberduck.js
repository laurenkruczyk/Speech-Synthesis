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

    if (input.toLowerCase().indexOf("regex") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#regex").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input.toLowerCase().indexOf("ruby") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#ruby").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input.toLowerCase().indexOf("rails") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#rails").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input.toLowerCase().indexOf("jq") > -1) {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $("#jquery").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    else if (input != "jargon") {
      var quote = $("<blockquote>").text(input);
      $("#placeholder").before(quote);
      $(randomitem).clone().insertBefore("#placeholder").fadeIn(1000);
    }

    var msg = new SpeechSynthesisUtterance($(randomitem).text());
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
      msg.voice = voices[10]; // Note: some voices don't support altering params
      msg.voiceURI = 'native';
      msg.volume = 1; // 0 to 1
      msg.rate = 2; // 0.1 to 10
      msg.pitch = 2; //0 to 2
      msg.text = 'Hello World';
      msg.lang = 'en-US';
      window.speechSynthesis.speak(msg);
      var voices = window.speechSynthesis.getVoices();

     speechSynthesis.getVoices().forEach(function(voice) {
      console.log(voice.name, voice.default ? '(default)' :'');
    });
   
    speechSynthesis.speak(msg);

      msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    // try {
    // var msg = new SpeechSynthesisUtterance($(randomitem).text());
    // window.speechSynthesis.speak(msg);
    // } catch(e) {
    //   console.log('oh ho')
    // }

    $("#console").scrollTop($("#console")[0].scrollHeight);
    $("#command_line").val("");
    });

  // $(randomitem).css("display", "block");
});



