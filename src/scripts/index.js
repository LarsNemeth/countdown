'use strict';
// Scss
import '../styles/main.scss';

// JavaScript

//? The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

//? The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

//? The clearInterval() method clears a timer set with the setInterval() method.

const endDate = new Date('2021 - 11 - 07').getTime();
const today = new Date();
const difference = endDate - today;
let timer;

console.log(`this is my endDate`, endDate);
console.log(`this is the difference in ms`, difference);

//Calculatio in Seconds / Minutes / Hours / Days

function countdownFunction() {
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // console.log days, hours, etc...
  console.log(`this are the days`, days, hours, minutes, seconds);

  document.getElementById('days').innerHTML = days + ' days ';
  document.getElementById('hours').innerHTML = hours + ' hours ';
  document.getElementById('mins').innerHTML = minutes + ' minutes ';
  document.getElementById('secs').innerHTML = seconds + ' seconds ';

  if (difference < 0) {
    clearInterval(countdownFunction);
    document.getElementById('days').innerHTML = '';
    document.getElementById('hours').innerHTML = '';
    document.getElementById('mins').innerHTML = '';
    document.getElementById('secs').innerHTML = '';
    document.getElementById('end').innerHTML = 'TIME UP!!';
  }
}

timer = setInterval(countdownFunction, 1000);
