var num1 = document.getElementById('k1');
var num2 = document.getElementById('k2');
var num3 = document.getElementById('k3');
var num4 = document.getElementById('k4');
var num5 = document.getElementById('k5');
var num6 = document.getElementById('k6');
var num7 = document.getElementById('k7');
var num8 = document.getElementById('k8');
var num9 = document.getElementById('k9');
var num0 = document.getElementById('k0');
var numC = document.getElementById('kC');
var numRavno = document.getElementById('ravno');
var numAp = document.getElementById('kAp');
var numMinus = document.getElementById('kMinus');
var numPlus = document.getElementById('kPlus');
var value = document.getElementById('value1');
var opera = "";
var resVal = 0;
var result = false;
var valueS = document.getElementById('last_value');
num1.onclick=function(){
  value.value += num1.innerHTML;
}
num2.onclick=function(){
  value.value += num2.innerHTML;
}
num3.onclick=function(){
  value.value += num3.innerHTML;
}
num4.onclick=function(){
  value.value += num4.innerHTML;
}
num5.onclick=function(){
  value.value += num5.innerHTML;
}
num6.onclick=function(){
  value.value += num6.innerHTML;
}
num7.onclick=function(){
  value.value += num7.innerHTML;
}
num8.onclick=function(){
  value.value += num8.innerHTML;
}
num9.onclick=function(){
  value.value += num9.innerHTML;
}
num0.onclick=function(){
  value.value += num0.innerHTML;
}
numC.onclick=function(){
  value.value = "";
}
numPlus.onclick=function(){
  opera = "plus";
  resVal = value.value;
  value.value = "";
}
numMinus.onclick=function(){
  opera = "minus";
  resVal = value.value;
  value.value = "";
}
numRavno.onclick=function(){
  if( opera == "plus" ){
    result = +resVal + +value.value;
    value.value = result;
    opera = "";
  }
  else if( opera == "minus" ){
    result = +resVal - +value.value;
    value.value = result;
    opera = "";
  }
  result = valueS;
}