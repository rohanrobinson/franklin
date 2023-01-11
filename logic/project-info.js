// declare elements and initialize values
let projectNames = ["Levels Glucose Monitor", "Protein Folding Display"];

let trackingStatusDisplay = document.querySelector("#trackingStatus");
let trackingBtn = document.querySelector("#trackingBtn");
trackingStatusDisplay.innerHTML = "Tracked";

let projectArrow = document.querySelector("#projectArrow");
let projectNameDisplay = document.querySelector("#projectNameDisplay");
let counter = 0;

// arrow initially points right
let arrowDirection = '&#8594;';

projectArrow.innerHTML = arrowDirection;
projectNameDisplay.innerHTML = projectNames[counter];

// back and forth arrow for featured projects (2 right now)
projectArrow.addEventListener("click", () => {

    if (counter === 0) {
      counter += 1;
      arrowDirection = '&#8592;';
    } 

    else {
        counter -= 1;
        arrowDirection = '&#8594;';
    }

    projectNameDisplay.innerHTML = projectNames[counter];
    projectArrow.innerHTML = arrowDirection;

});

// toggle trackingStatus 
trackingBtn.addEventListener("click", () => {
    if (trackingStatusDisplay.innerHTML === "Tracked") {
        trackingStatusDisplay.innerHTML = "NOT tracked";
    }

    else {
        trackingStatusDisplay.innerHTML = "Tracked";
    }
})

