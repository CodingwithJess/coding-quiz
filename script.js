
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var scoreButton = document.getElementById("submit-button")
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("time");
var questionDiv = document.getElementById("questionDiv");
var endScore=document.getElementById("endscore")
var totalSeconds = 60;
var secondsElapsed = 0;
var interval = 0;
var endScreen = document.getElementById("endscreen");
var startButton = document.getElementById("start");
var score =0;

console.log(highScoreTarget)

// Timer code//
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
// end quiz if timer hits zero
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
    resultsContainer.textContent = "Your last answer was incorrect."
  }else{
    resultsContainer.removeAttribute("class")
    resultsContainer.textContent = "Your last answer was correct!"
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
  endScore.textContent = "Your Score: "+ time
  questionDiv.setAttribute("class", "hide")
  
}


function storeScores (){
  // var score = document.getElementById("endscore").textContent
  var score = time
  console.log(score)
  var userName = document.getElementById("score-name").value.trim();
  var finalScore = {
    score: score,
    name: userName
  };
  console.log(finalScore)

 

  hiScores.push(finalScore);
  window.localStorage.setItem("High Scores", JSON.stringify(hiScores));
}

function displayScores(){
  var hiScores = JSON.parse(window.localStorage.getItem("High Scores")) || [];

  hiScores.forEach(function(score){
    var pTag = document.createElement("p");
    pTag.textContent = score.name + "" + score.score;
    document.querySelector("#high-scores").appendChild(pTag);
  })

}

scoreButton.addEventListener("click", storeScores)
startButton.onclick=start
