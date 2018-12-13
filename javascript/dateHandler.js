//Take 3

// Variable setup

var year = new Date().getFullYear(),
  month = new Date().getMonth(),
  day, date;
var monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var displayMonth = new Date().getMonth();

function getMonthIndex(month) {
  for (var i = 0; i < monthsList.length; i++) {
    if (monthsList[i] == month) {
      return i;
    }
  }
}

function monthLength(y, m) {
  return new Date(y, m + 1, 0).getDate();
}

function getFirstDay(m) {
  return new Date(year, m, 1).getDay();
}

function populateCalendar(index) {
  var selectedMonth = document.getElementById('month_btn').innerText;
  var temp = '';
  var days = monthLength(year, index);
  var blankDays = '',
    firstDay = getFirstDay(index);

  // Getting the day of the first of the month
  for (var i = 0; i < firstDay; i++) {
    blankDays += '<div class="blankDay"></div>\n';
  }

  // Getting the number of days in a month
  for (var x = 1; x <= days; x++) {
    temp += '<div class="day" onclick="clicked(this)">' + x + '</div>\n';
  }
  document.getElementById('calendar').innerHTML = blankDays + temp;
}

document.getElementById('month_btn').addEventListener('click', function() {
  var container = document.getElementById('monthListContainer');
  if (container.style.display == 'block') {
    container.style.display = 'none';
  } else {
    container.style.display = 'block';
  }

  var items = document.getElementsByClassName('item');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
      document.getElementById('month_btn').innerText = this.innerText;
      localStorage.setItem('selectedMonth', this.innerText);
      container.style.display = 'none';
      var ind = getMonthIndex(document.getElementById('month_btn').innerText);
      displayMonth = ind;
      populateCalendar(ind);
    });
  }
});

window.onload = () => {
  document.getElementById('mainHeader').innerText = year + ' Calendar';
  // document.getElementById('month_btn').innerText = monthsList[displayMonth];
  // Testing the local storage
  if (localStorage.getItem('selectedMonth')) {
    document.getElementById('month_btn').innerText = localStorage.getItem('selectedMonth');
  } else {
    document.getElementById('month_btn').innerText = monthsList[displayMonth];
  }
  // Close localStorage test
  var ind = getMonthIndex(document.getElementById('month_btn').innerText);
  populateCalendar(ind);

  // Creating the initial dropDown Menu
  var container = document.getElementById('listOfMonths');
  var items = '';

  for (var i = 0; i < 12; i++) {
    items += '<li class="item">' + monthsList[i] + '</li>\n';
  }
  container.innerHTML = items;
};