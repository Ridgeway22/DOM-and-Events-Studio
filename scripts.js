// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const direction = document.getElementsByClassName("direction");
  const takeOff = document.getElementById("takeoff");
  const landing = document.getElementById("landing");
  const missionAbort = document.getElementById("missionAbort");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  takeOff.addEventListener('click', function (event) {
    const yes = confirm("Confirm that the shuttle is ready for takeoff.");
    if (yes){
     document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";
    document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
    
  });

  landing.addEventListener('click', function (event) {
    alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    document.getElementById("rocket").style.paddingTop = 0;
    document.getElementById("rocket").style.paddingBottom = 0;
    document.getElementById("rocket").style.paddingLeft = 0;
    document.getElementById("rocket").style.paddingRight = 0;
});

missionAbort.addEventListener('click', function (event) {
  const yes = confirm("Confirm that you want to abort the mission." );
  if (yes){
   document.getElementById("flightStatus").innerHTML = "Mission aborted.";
  document.getElementById("shuttleBackground").style.backgroundColor = "";
  document.getElementById("spaceShuttleHeight").innerHTML = 0;
}
document.getElementById("rocket").style.paddingTop = 0;
    document.getElementById("rocket").style.paddingBottom = 0;
    document.getElementById("rocket").style.paddingLeft = 0;
    document.getElementById("rocket").style.paddingRight = 0;
});

let paddingD = 0;
let paddingR = 0;
let paddingU = 0;
let paddingL = 0;


let shuttleHeight = Number(spaceShuttleHeight.innerHTML);

up.addEventListener('click', function(){
  paddingU += 10;
  shuttleHeight += 10000;
  spaceShuttleHeight.innerHTML = `${shuttleHeight}`
document.getElementById("rocket").style.paddingBottom = `${paddingU}px`;

});


down.addEventListener('click', function(){
  paddingD += 10;
  shuttleHeight -= 10000;
  spaceShuttleHeight.innerHTML = `${shuttleHeight}`
document.getElementById("rocket").style.paddingTop = `${paddingD}px`;
});

left.addEventListener('click', function(event){
  paddingL += 10;
document.getElementById("rocket").style.paddingRight = `${paddingL}px`;
});

right.addEventListener('click', function(event){
  paddingR += 10;
document.getElementById("rocket").style.paddingLeft = `${paddingR}px`;
});
}
  window.addEventListener("load", init);