
// declare elements and initialize values
let featuredProjectNames = ["Levels Glucose Monitor", "Protein Folding Display"];
let arrow = document.querySelector("#arrow");
let projectNameDisplay = document.querySelector("#projectName");
let counter = 0
let arrowDirection = '&#8594;'
arrow.innerHTML = arrowDirection;
projectNameDisplay.innerHTML = featuredProjectNames[counter];
//

// back and forth arrow for featured projects (2 right now)
arrow.addEventListener("click", () => {

    if (counter === 0) {
      counter += 1;
      arrowDirection = '&#8592;';
    } 

    else {
        counter -= 1;
        arrowDirection = '&#8594;';
    }

    projectNameDisplay.innerHTML = featuredProjectNames[counter];
    arrow.innerHTML = arrowDirection;

});

