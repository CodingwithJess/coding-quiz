// Psuedo code:

// When timer is pressed start a reverse countdown
// Create a 0 for countdown
// When countdown starts, start quiz


var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

var secondsDisplay = document.getElementById("timer");
var totalSeconds = 60;
var secondsElapsed = 0;
var interval = 0;

var startButton = document.getElementById("start");

var score =0;
var j = 0;

// Timer code// Create a timer attached to a button with a starting value of 0
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {
    var startQuiz = document.getElementById("startQuiz");
    startQuiz.setAttribute("class", "hide")
    var questionDiv = document.getElementById("questionDiv");
    questionDiv.removeAttribute("class")

    renderQuestions()

    // timeLeft = 75;
    // document.getElementById("timer").innerHTML = timeLeft;

    // timer = setInterval(function() {
    //     timeLeft--;
    //     document.getElementById("timer").innerHTML = timeLeft;
    //     //proceed to end the game function when timer is below 0 at any time
    //     if (timeLeft <= 0) {
    //         clearInterval(timer);
    //         endGame(); 
    //     }
    // }, 1000);

    // next();
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

    currentQuestion.answers.forEach(function(choice, i) {
      var createButton = document.createElement("button")
      createButton.setAttribute("class", "choice")
      createButton.setAttribute("value",choice)
      createButton.textContent = choice
      var choicesEl = document.getElementById("choices")
      choicesEl.appendChild(createButton)
    })
  
}

function questionClick (){
    questionIndex++;
    if (questionIndex === myQuestions.length){
      // call end quiz function
    } else {
      renderQuestions()
    }
}


function showResults(){

}
startButton.onclick=start
