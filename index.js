var katzDeli = [];

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

function currentLine(katzDeliLine) {
  var name = katzDeliLine[0];
  var i = katzDeliLine.length;
  var count = 0;
  while (count < i) {
    count++;
    return `The line is currently: 1. ${name[0]}, 2. ${name[1]}, 3. ${name[2]}.`;
  }
  return "The line is currently empty.";
}
