(function (window) {
  names = ["Jomam", "John", "Jen", "jason", "Paul", "frank", "Larry", "Paula",
    "Laura", "Jim"];
  window.names = names;

})(window);

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) == "J") {
    helloSpeaker.speak (names[i])
  }};