let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let countDownDate = new Date('Jan 1, 2023 00:00:00').getTime();

const daysSpan = document.querySelector('.days');
const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');

daysSpan.innerHTML += `0${days}`;
hoursSpan.innerHTML += `0${hours}`;
minutesSpan.innerHTML += `0${minutes}`;
secondsSpan.innerHTML += `0${seconds}`;

function addLeadingZero(value) {
  if (value < 10) {
    return `0${value}`;
  } else return value;
}

let timer = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerHTML = `${addLeadingZero(days)}`;
  hoursSpan.innerHTML = `${addLeadingZero(hours)}`;
  minutesSpan.innerHTML = `${addLeadingZero(minutes)}`;
  secondsSpan.innerHTML = `${addLeadingZero(seconds)}`;

  if (distance < 0) {
    daysSpan.innerHTML = `00`;
    hoursSpan.innerHTML = `00`;
    minutesSpan.innerHTML = `00`;
    secondsSpan.innerHTML = `00`;
    clearInterval(x);
  }
}, 1000);
