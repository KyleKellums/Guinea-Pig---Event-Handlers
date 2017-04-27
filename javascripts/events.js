"use strict";

console.log("hello");

//Requirement 1 eventListener "click": runs a for loop through article section, and it's index values.
var articleSection = document.getElementsByClassName("article-section");

for (let i=0; i < articleSection.length; i++) {
	articleSection[i].addEventListener("click", function(event) { //
		console.log("articleSection", articleSection);
		outputTarget.innerHTML = `You clicked on the "${event.target.innerHTML}" section`;
	});
}

//Requirement 2 & 3 "mouseOver and mouseOut": anonymous functions with an output target for the DOM
let outputTarget = document.getElementById('output-target');

let pageTitle = document.getElementById("page-title");
	pageTitle.addEventListener("mouseover", mouseOver);
	pageTitle.addEventListener("mouseout", mouseOut);

function mouseOver() {
	outputTarget.innerHTML = "You moved your mouse over the header";
}

function mouseOut() {
	outputTarget.innerHTML = "You left me!!";
}

//Requirement 4: copy text from input to output
let keyPress = document.getElementById("keypress-input");
	keyPress.addEventListener("keyup", function(event){
	outputTarget.innerHTML = event.target.value;
});


//Requirement 5: add an event listener to the "add-color" submit button. When clicked,
let addColorBtn = document.getElementById("add-color");
let leaveMeAlone = document.getElementById("guinea-pig");
addColorBtn.addEventListener("click", function(){
	leaveMeAlone.classList.toggle("blue"); //use .classList.add to access CSS color
});

//Requirement 6: Hulkify the guinea pig with the click of a button
let makeLarge = document.getElementById("make-large");
makeLarge.addEventListener("click", function(event){
	leaveMeAlone.classList.toggle("largeText");
});

//Requirement 7:click the "Capture it" button, the guinea-pig element should have a border
document.getElementById("add-border").addEventListener("click", function(event){
	leaveMeAlone.classList.toggle("addBorder");
});

//Requirement 8: click the "Rounded" button, the guinea-pig element's border should become rounded
document.getElementById("add-rounding").addEventListener("click", function(event){
	leaveMeAlone.classList.toggle("roundBorder");
});

//Requirement 9:The first section's text should be bold
function textBold() {
	articleSection.item(0).classList.add("makeBold"); //.item() allows access to all the indexes of the classname (e.g. articleSection)
};

textBold();

//Requirement 10: The last section's text should be bold and italicized.
function lastSection() {
	articleSection.item(5).classList.add("boldIt");
};

lastSection();

// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
var button = document.getElementsByTagName("button");

function buttons() {
	for (var i = 0; i < button.length; i++) {
		button[i].classList.add("block");
	}
};

buttons();



























