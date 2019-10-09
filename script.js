var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
// console.log(css);
// console.log(color1);
// console.log(color2);
 
function setGradient(){
	body.style.background =
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent= body.style.background + ";";
	// it adds text content to the tags
}

color1.addEventListener("input",setGradient);
		

color2.addEventListener("input",setGradient);


const object = {
		player:"bobby",
		experiance: 100,
		wizardLevel: false
}



