function loopyLighthouse(range, mul, words){
  for (var i = range[0]; i <= range[1]; i++){
    if (i % mul[0] === 0 && i % mul[1] === 0){
      console.log(words[0] + words[1]);
    }
    else if (i % mul[0] === 0){
      console.log(words[0]);
    }
    else if (i % mul[1] === 0){
      console.log(words[1]);
    }
    else {
      console.log(i);
    }
  }
}