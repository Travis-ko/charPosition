function countLetters(str){
  var cleanStr = str.split(" ").join("").toLowerCase();
  var counted = {};
    for (var i = 0; i < cleanStr.length; i++){
      if (counted.hasOwnProperty(cleanStr[i])){
        counted[cleanStr[i]].push([i]);
      } else {
        counted[cleanStr[i]] = [i];
         }
}
  return counted;
}
console.log(countLetters("testy test test test yay"));