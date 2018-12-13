// Handles the events side of things

// Declaring the variables
var createEvent = document.getElementById('create_event');
var days = document.getElementsByClassName('day');
var count = 0,
  list;

function getMonthIndex(month) {
  for (var i = 0; i < monthsList.length; i++) {
    if (monthsList[i] == month) {
      return i;
    }
  }
}

// var day = new Date(2018, getMonthIndex(document.getElementById('month_btn').innerText), 1).getDay();

// Adding the active class when the day is clicked
function clicked(element) {
  var temp = element;
  temp.classList.toggle('dayActive');
}

document.getElementById('eventsHeader').innerText = day;

console.log(document.getElementById('month_btn').innerText);