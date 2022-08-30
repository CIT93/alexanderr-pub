const displayOnPage = function (text) {
  let newParagraph = document.createElement("p")
  newParagraph.innerHTML = text
  let outputDiv = document.getElementById("output")
  outputDiv.append(newParagraph)
}


let areTheDishesWashed = true  
let hasDinnerBeenCooked = true


if(areTheDishesWashed){ // If statement
  displayOnPage("Nice, the dishes have been taken care of.")

}else if(areTheDishesWashed === false){ // If else statement
  displayOnPage('Go get your chore done bum.')
}


if(areTheDishesWashed && hasDinnerBeenCooked) //and operator
{
  displayOnPage('<b>Go to sleep then, I guess you earned it.</b>')
}

if(!areTheDishesWashed || !hasDinnerBeenCooked ){
  displayOnPage("Dude, what the hell?")
}

let time = howMuchTime(5) //global variable 

let timeConverter = function(x){ //This function takes the mintues and converts it to hours
hours = x/75
displayOnPage(hours)
}

timeConverter(600)


//displayOnPage(output)