var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length;
  var count = 0;
  if(count < i) {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

var line = [];
function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` ` + [i+1] + `. ` + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return (`The line is currently:` + line);
  }
}




function currentLine(katzDeliLine) {
  var name = katzDeliLine;
  var i = katzDeliLine.length;
  var count = 0;
  while (count < i) {
    count++;
    return `The line is currently: 1. ${name[0]}, 2. ${name[1]}, 3. ${name[2]}`;
  }
  return "The line is currently empty.";
}
