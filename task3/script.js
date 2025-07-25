const trafficLight1 = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');

function makeGreen1() {
  trafficLight1.style.background = ('green');
  trafficLight2.style.background = ('black');
  trafficLight3.style.background = ('black');
  trafficLight1.addEventListener('click', makeYellow1);
}

function makeGreen2() {
  trafficLight1.style.background = ('green');
  trafficLight2.style.background = ('black');
  trafficLight3.style.background = ('black');
  trafficLight1.addEventListener('click', makeRed1);
}

trafficLight1.addEventListener('click', makeGreen1, true);
trafficLight1.addEventListener('click', makeGreen2, false);

function makeYellow1() {
  trafficLight2.style.background = ('yellow');
  trafficLight1.style.background = ('black');
  trafficLight3.style.background = ('black');
  trafficLight2.addEventListener('click', makeRed1);

}

function makeYellow2() {
  trafficLight2.style.background = ('yellow');
  trafficLight1.style.background = ('black');
  trafficLight3.style.background = ('black');
  trafficLight2.addEventListener('click', makeGreen1);

}

trafficLight2.addEventListener('click', makeYellow1, true);
trafficLight2.addEventListener('click', makeYellow2, false);

function makeRed1() {
  trafficLight3.style.background = ('red');
  trafficLight2.style.background = ('black');
  trafficLight1.style.background = ('black');
  trafficLight3.addEventListener('click', makeGreen1);
}

function makeRed2() {
  trafficLight3.style.background = ('red');
  trafficLight2.style.background = ('black');
  trafficLight1.style.background = ('black');
  trafficLight3.addEventListener('click', makeYellow1);
}

trafficLight3.addEventListener('click', makeRed1, true);
trafficLight3.addEventListener('click', makeRed2, false);