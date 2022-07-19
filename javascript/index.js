const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');

function printTime(minute, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
   secDec.innerHTML = seconds[0];
   secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splits = document.querySelector('#splits ol');
   const splitTime = document.createElement('li');
   splitTime.innerText = chronometer.splitClick();
   splits.appendChild(splitTime)
}

function clearSplits() {
  const splits = document.querySelector('#splits ol');
  splits.innerHTML = ""
}

function setStopBtn() {
  // if (btnLeft.classList.contains('stop')) chronometer.stopClick();
  btnLeft.innerText = 'STOP';
  btnLeft.classList.toggle('btn stop');
  
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.classList.toggle('btn split');
}

function setStartBtn() {
  // if (btnLeft.classList.contains("start")) chronometer.startClick(printTime);
  btnLeft.innerText = 'START';
  btnLeft.classList.toggle('btn start');
  
}

function setResetBtn() {
  // if (btnRight.innerText === 'RESET')
  // minDec.innerText = "0"
  // minUni.innerText = "0"
  // secDec.innerText = "0"
  // secUni.innerText = "0"
  btnRight.innerText = 'RESET';
  btnRight.classList.toggle('btn reset');
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
    // btnLeft.classList.toggle('btn stop')
    // btnLeft.innerText = 'STOP'
    // btnRight.classList.toggle('btn split')
    // btnRight.innerText = 'SPLIT'
  }
  else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    // btnLeft.classList.toggle('btn start')
    // btnLeft.innerText = 'START'
    // btnRight.classList.toggle('btn reset')
    // btnRight.innerText = 'RESET'
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  }
  else {
   chronometer.splitClick();
  }  
});