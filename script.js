var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", function(){
	body.style.background = 
	"linear-gradient(to right, " +
	color1.value+", "
	+color2.value+")"
})

color2.addEventListener("input", function(){
	console.log(color2.value);
})