// global constants
const cluePauseTime = 100; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const clueHoldTime = 100; //how long to hold each clue's light/sound

//Global Variables
/* 
pattern- keeps track of secret button press pattern using integers 1-4
progress- used with pattern array to track player progress
gamepPlaying- boolean value to determine whether game is active
*/

var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.3;  //must be between 0.0 and 1.0
var guessCounter = 0;

function generatePattern(){
  pattern = [0, 0, 0, 0, 0, 0, 0, 0];
  for(let i = 0; i < 8; i++){
    pattern[i] += ((Math.floor(Math.random() * 6)) + 1); // adds 8 random integer values from 1-6 to pattern array
  }
  console.log("The sequence is: " + pattern.toString())
}

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //added generatePattern to make random pattern
  generatePattern();
  //added playClueSequence() to start game + first clue
  playClueSequence();
}

function stopGame(){
    //set var gamePlaying to false to end game 
    gamePlaying = false;
    // reswap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    for(let i=0;i<=progress;i++){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    }
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn) {
    //Correct guess 
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //if progress is equal to last array element, win game
        winGame();
      }
      else {
        //if pattern is correct but not end of sequence, add next segment
        progress++;
        playClueSequence()
      }
    }
    else {
        guessCounter++;
      }
  }
  else{
    //incorrect guess -> game over
    loseGame();
  }

}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Nice memory! You won the game! :D");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6, //C note
  2: 329.6, //E note
  3: 392.0, //G note
  4: 440.0, //A note
  5: 493.9, //B note
  6: 523.3, //C note step higher
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
