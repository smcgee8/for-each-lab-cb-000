function iterativeLog(array) {
  array.forEach( (element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = ["snow", "snow", "ice"];
  array.forEach(callback);
  return array;
}
