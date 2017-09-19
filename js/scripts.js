$(document).ready(function() {
  var symbols = ["diamonds", "clubs", "spades", "hearts"]
  var values = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]

  for (var index = 0; index < 4; index += 1){
    for (var index1 = 0; index1 < 13; index1 += 1) {
    $("ul").append("<li>"+values[index1]+" of "+symbols[index]+"</li>");
    };
  };

// symbols.forEach(function(symbol) {
//   values.forEach(function(value) {
//     $("ul").append("<li>"+value+" of "+symbol+"</li>");


});
