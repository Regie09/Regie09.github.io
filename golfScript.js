function add1 (num) {
var x = document.getElementById(num);
  if(x.children[2].innerHTML == "-"){
    x.children[2].innerHTML = "1";
    x.children[3].innerHTML = "-3";
  } 
  else {
    let currentScore = x.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    x.children[2].innerHTML = currentScore + 1;
    x.children[3].innerHTML = currentScore - 3;
  }
  
  var count = 1;
  var all = 0;
  var par = 0;
  var score = 0;
  var over = 0;
  var curr = document.getElementById("1");
  while(count <= 18){
    curr = document.getElementById(count);
    if(curr.children[2].innerHTML == "-"){
    }
    else{
        all += 1;
        par = par + Number.parseInt(curr.children[1].innerHTML);
        score = score + Number.parseInt(curr.children[2].innerHTML);
        over = over + Number.parseInt(curr.children[3].innerHTML);
    }
    count++;
  }
  
  var z = document.getElementById("19");
  z.children[0].innerHTML = all;
  z.children[1].innerHTML = par;
  z.children[2].innerHTML = score;
  z.children[3].innerHTML = over;  
}

function subtract1 (num2) {
    var y = document.getElementById(num2)
  if(y.children[2].innerHTML == "-"){
     y.children[2].innerHTML = "-1";
     y.children[3].innerHTML = "-5";
  }
  else {
    let currentScore = y.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    y.children[2].innerHTML = currentScore - 1;
    y.children[3].innerHTML = currentScore - 5;
    }
  
  var count2 = 1;
  var all2 = 0;
  var par2= 0;
  var score2 = 0;
  var over2 = 0;
  var currEl = document.getElementById("1");
  while(count2 <= 18){
    currEl = document.getElementById(count2);
    if(currEl.children[2].innerHTML == "-"){
    }
    else{
        all2 += 1;
        par2 = par2 + Number.parseInt(currEl.children[1].innerHTML);
        score2 = score2 + Number.parseInt(currEl.children[2].innerHTML);
        over2 = over2 + Number.parseInt(currEl.children[3].innerHTML);
    }
    count2++;
  }
  
  var j = document.getElementById("19");
  j.children[0].innerHTML = all2;
  j.children[1].innerHTML = par2;
  j.children[2].innerHTML = score2;
  j.children[3].innerHTML = over2;
  }

function clear (num3) {
    console.log("invoked clear");
var elem = document.getElementById(num3);
elem.children[2].innerHTML = "-";
elem.children[3].innerHTML = "-";

  var count3 = 1;
  var all3 = 0;
  var par3= 0;
  var score3 = 0;
  var over3 = 0;
  var currElem = document.getElementById("1");
  while(count3 <= 18){
    currElem = document.getElementById(count3);
    if(currElem.children[2].innerHTML == "-"){

    }
    else{
        all3 += 1;
        par3 = par3 + Number.parseInt(currElem.children[1].innerHTML);
        score3 = score3 + Number.parseInt(currElem.children[2].innerHTML);
        over3 = over3 + Number.parseInt(currElem.children[3].innerHTML);
    }
    count3++;
  }
  var k = document.getElementById("19");
  k.children[0].innerHTML = all3;
  k.children[1].innerHTML = par3;
  k.children[2].innerHTML = score3;
  k.children[3].innerHTML = over3;
}
