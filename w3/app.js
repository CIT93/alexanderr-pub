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

  let mintueToHour = function(x = 'undefined'){ //This function takes the mintues and converts it to hours
    hours = x/60
    displayOnPage(`This is ${hours} hours`)
    }
    
    let hourToMintue = function(x){ //converts hours to mintues
        mintues = 60*x
        displayOnPage(`This is ${mintues} mintues`)
        return mintues
    }
    mintueToHour(120)
    mintueToHour()
    let currentTime = hourToMintue(.5)
    let futuretime = hourToMintue(1)