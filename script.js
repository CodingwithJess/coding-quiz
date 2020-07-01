// Psuedo code:
// Create a timer attached to a button with a starting value of 0
// When timer is pressed start a reverse countdown
// Create a 0 for countdown
// When countdown starts, start quiz
// Start Quiz will be on appended page

// Append the question: choices
//if the right answer, textcontent "Correct!" and go to next question
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit")

var secondsLeft = 60;
var startQuiz = document.querySelector("#start")

var myQuestions = [
  { question: "Commonly used data types DO NOT include ________:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts"
  }, {
    question: "What syntax is used in JavaScript for single line comments?:",
    answers: ["||", "**", "``", "//"],                                          
    correct: "//"
  }, {
    question: "Which of the following is the correct method for outputting information to the console?",
    answers: ["console.print()", "console.write()", "console.log()", "console.output()"],
    correct: "console.log()"
  },{
    question: "Git is a _______ control system:",
    answers: ["Cloning", "Dynamic", "Gaming", "Version"],
    correct: "Version"
  },{
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correct: "Parentheses"

];

function renderQuestions (){
  document.querySelector(".questions").innerHTML ="";
  startQuiz.setAttribute("style", "display:none");
  document.querySelector(".quiz").setAttribute("style","display:block");

  var q = myQuestions[j].answers;
  var questionEl = document.createElement("h2");
  var ans = myQuestions[j].answers;

  questionEl.textContent = q;
  document.querySelector(".questions").appendChild(questionEl)

  for (var i = 0; i < ans.length; i++){
    var ansBtn = document.createElement("button");
    ansBtn.textContent = ans[i];
    document.querySelector(".questions").appendChild(ansBtn);
    ansBtn.addEventListener("click", checkAnswer);
  }

}

function showResults(){

}

buildQuiz();

submitButton.addEventListener("click", showResults);

// else,  user selects the wrong  answer, textcontent "Wrong!"  and -10 seconds from timer

// Final score will keep track of how many the user got right
// Left over time will be deducted from final score
// Final Score Appended page
// Captures local storage
// Travels to another HTML
// Retrieved highscores