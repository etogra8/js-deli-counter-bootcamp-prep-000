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

function currentLine(katzDeliLine) {
  var line = [];
  var i = 0;
  
  while(i<katzDeliLine.length) {
    line.push(' ' +[i + 1]+ '. ' +katzDeliLine[i]+ ' ');
    i++;
  }
  
}