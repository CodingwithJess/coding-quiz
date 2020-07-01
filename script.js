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


var myQuestions = [
  { question: "Commonly used data types DO NOT include ________:",
    ans: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
  }, {
    question: "What syntax is used in JavaScript for single line comments?:",
    ans: ["||", "**", "``", "//"],                                          
    answer: "//"
  }, {
    question: "Which of the following is the correct method for outputting information to the console?",
    ans: ["console.print()", "console.write()", "console.log()", "console.output()"],
    answer: "console.log()"
  },{
    question: "Git is a _______ control system:",
    ans: ["Cloning", "Dynamic", "Gaming", "Version"],
    answer: "Version"
  },{
    question: "The condition in an if / else statement is enclosed within ____.",
    ans: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    answer: "Parentheses"

];

function buildQuiz (){

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