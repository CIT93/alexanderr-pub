// showOnPage will output on the webpage any content we provide to it.

const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };

//My daily decision is determining if I have time to play video games on a given day.

//This is the global variable that tells me I definitely have time to game on a given day.
let haveHomework = false
let cookDinner = false

showOnPage(
    '<b>This output is based on the following global variable data:</b>'
  );
showOnPage('Do I have homework?----->' + haveHomework)
showOnPage('Do I have to cook dinner?----->' + cookDinner)
showOnPage('<----- End of global variale data ----->')

let message = ''
let hellYeah = 'Time to game'

showOnPage('<b>Time for gaming?</b>');
showOnPage('___________________');

if (haveHomework && cookDinner) {
    hellYeah = hellYeah + currentTime
} else if (haveHomework || cookDinner) {
    message = 'I will have some time to game.'
} else {
    message = 'I will not have much time to game'
}

showOnPage(message);
showOnPage(hellYeah);