var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + "you are number" + katzDeliLine.length + "in line."
}

function nowServing(p) {
  if (p === 0) { "There is nobody waiting to be served!"} else {
    var name = p[0];
    p.splice(0, 1)
    return "Currently serving " + name + ".";
  }
}

function currentLine(p) {
  let line = []
  if (p.length === 0){
    return "The line is currently empty"
  } else {
    for(var i = 0; i < p.length; i++) {
      line = line.slice(0, line.length-2)
      return "the line is currently: " + line
    }
    
}
}