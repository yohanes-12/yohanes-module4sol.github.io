
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {
let s= names[i].charAt(0);
  if (s=="j" || s=="J") {
    byeSpeaker.speakBuy(names[i]);   
    } 
  else {
    helloSpeaker.speakHello(names[i]);
      }
}