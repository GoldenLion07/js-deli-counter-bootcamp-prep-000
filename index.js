var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome" + name + "you are number" + katzDeliLine.length + "in line."
}

function nowServing(p) {
  if (p === 0) { "There is nobody waiting to be served!"} else {
    var name = p[0];
    p.splice(0, 1)
    return "Currently serving " + name "."
  }
    
  }
  
}

function currentLine() {
  
}