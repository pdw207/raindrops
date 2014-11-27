function calculate_height(d){
  var newHeight = 0;

  if (dictionary[d] >= 0){
    dictionary[d] += 1;
    newHeight = height - margin - dictionary[d] * 2 * r
    return newHeight;

  } else {
    dictionary[d] = 0;
    newHeight = height - margin;
    return newHeight;
  }
  return newHeight;
}

//Random Number Generation

function rnd_snd() {
	return (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
}

function random_number_bell_curve(range) {
  var mean = range / 2;
  var stdev = range * .8;
	return Math.round(rnd_snd() * stdev + mean * 5)/5;
}

//Create Dataset

function create_dataset(iterations){
  var data = [];
  for (var i=1; i<=iterations; i++){
    var entry = [], size = 0;

    // build entry of random size
    for (var j=0; j<=size; j++){
      entry.push( random_number_bell_curve(range))
    }

    data.push(entry);
  }
  return data;
}
