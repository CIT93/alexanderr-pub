const displayOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

const checkList = {

    
    checkDishes: function(x = 'undefined'){
        let dishesWashed
        if(x === "clean"){
            displayOnPage('The dishes are done!')
             dishesWashed = true
        }else {
            displayOnPage('The dishes need to be washed.')
             dishesWashed = false
        
        }
},
    checkDinner: function(x){ 
        let dinnerDone
        if(x === 'complete'){
            displayOnPage('Dinner has been cooked!')
             dinnerDone = true 
        }else {
            displayOnPage("Dinner needs to be cooked.")
             dinnerDone = false
        
        }
    },
    hasFreeTime: function(dishesWashed, dinnerDone){
        if(dishesWashed & dinnerDone){
            displayOnPage('Good job, things are taken care of for today. Go have fun.')
        } else {
            displayOnPage('Wake up Samurai, we got a city to burn.')
        }
        },

}

displayOnPage('<b> Are the dishes done you bum?</b>') 
checkList.checkDishes('clean')
displayOnPage('<b> Is dinner finished yet?</b>') 
checkList.checkDinner('complete')
displayOnPage('<b> Is the day still young?</b>') 
checkList.hasFreeTime(dishesWashed, dinnerDone) 