// Psuedo code:

// When timer is pressed start a reverse countdown
// Create a 0 for countdown
// When countdown starts, start quiz


var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("time");
var questionDiv = document.getElementById("questionDiv");
var totalSeconds = 60;
var secondsElapsed = 0;
var interval = 0;
var endScreen = document.getElementById("endscreen");
var startButton = document.getElementById("start");

var score =0;
var j = 0;

// Timer code// Create a timer attached to a button with a starting value of 0
var time = 60;
var timerId ;

//starts the countdown timer once user clicks the 'start' button
function start() {
    var startQuiz = document.getElementById("startQuiz");
    startQuiz.setAttribute("class", "hide")
    questionDiv.removeAttribute("class")
    timerId=setInterval(clock, 1000)
    timerEl.textContent=time
    renderQuestions()

}

function clock(){
  time--
  timerEl.textContent=time
  if (time <= 0){
    endQuiz()
  }
}


  // Questions code
var myQuestions = [
  { question: "Commonly used data types DO NOT include ________:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  }, {
    question: "What syntax is used in JavaScript for single line comments?:",
    answers: ["||", "**", "``", "//"],                                          
    correct: "//",
  }, {
    question: "Which of the following is the correct method for outputting information to the console?",
    answers: ["console.print()", "console.write()", "console.log()", "console.output()"],
    correct: "console.log()"
  }, {
    question: "Git is a _______ control system:",
    answers: ["Cloning", "Dynamic", "Gaming", "Version"],
    correct: "Version",
  }, {
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correct: "Parentheses"
  }
];
var questionIndex = 0;

function renderQuestions (){
    var currentQuestion = myQuestions[questionIndex]
    var getQuestion = document.getElementById("questionTitle")
    getQuestion.textContent = currentQuestion.question
    choicesEl.innerHTML = ""
    currentQuestion.answers.forEach(function(choice, i) {
      var createButton = document.createElement("button")
      createButton.setAttribute("class", "choice")
      createButton.setAttribute("value",choice)
      createButton.textContent = choice
      createButton.onclick= questionClick 
      choicesEl.appendChild(createButton)
    })
  
}

function questionClick (){
  if (this.value !== myQuestions[questionIndex].correct){
    resultsContainer.removeAttribute("class")
    time-=10
    resultsContainer.textContent = "Incorrect!"
  }else{
    resultsContainer.removeAttribute("class")
    resultsContainer.textContent = "Correct!"
  }
  questionIndex++;
  if (questionIndex === myQuestions.length){
      endQuiz()
    } else {
      renderQuestions()
    }
}
function endQuiz(){
  clearInterval(timerId)
  endScreen.removeAttribute("class")
  var endScore=document.getElementById("endscore")
  endScore.textContent = "Your Score: "+ time
  questionDiv.setAttribute("class", "hide")

}

// function showResults(){

// }


startButton.onclick=start
