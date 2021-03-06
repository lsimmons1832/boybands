var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;
for (var i = 1; i <= bands.length; i++) {
	loopCount = i;
	console.log("Loop Count ", i);
}
// Keep track of which band we're on in the loop
var currentBand = "";
for (var i = 0; i < bands.length; i++) {
	currentBand = i;
	console.log("Current Band: ", bands[i]);
}
// Keep track of which veggie we're on in the loop
var currentVeggie = "";
for (var i = 0; i < vegetables.length; i++) {
	currentVeggie = i;
	console.log("Current Veggie: ", vegetables[i]);
}
// // Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById('boy-bands');

// // Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById('vegetables');

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
currentBand = bandElement.innerHTML;
currentBand += "<ul>";
for (var i = 0; i < bands.length; i++) {
	currentBand += "<li>" + bands[i] +"</li>";
}
currentBand += "</ul>";
bandElement.innerHTML = currentBand;

  // Add the veggie names into the correct <div>
currentVeggie = veggieElement.innerHTML;
currentVeggie += "<ul>";
for (var i = 0; i < vegetables.length; i++) {
	currentVeggie += "<li>" + vegetables[i] +"</li>";
}
currentVeggie += "</ul>";
veggieElement.innerHTML = currentVeggie;



// Loop through the two arrays provided (bands and vegetables) and output 
// each element in the arrays into their corresponding HTML <div> element. 
// Ensure that each item is in a block element (e.g. li, div, p. etc...)