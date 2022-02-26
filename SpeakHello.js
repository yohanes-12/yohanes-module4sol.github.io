
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello ";
  helloSpeaker.speakHello = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;

})(window);
