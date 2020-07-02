var hiScores = JSON.parse(window.localStorage.getItem("High Scores")) || [];
var highScoreTarget = document.getElementById("highscores")


console.log(hiScores)
console.log(highScoreTarget)


for (var i = 0; i < hiScores.length; i++){
  console.log(hiScores[i])
  var liTag = document.createElement("li");
  liTag.textContent = hiScores[i].name + " - " + hiScores[i].score;
  highScoreTarget.appendChild(liTag)
}
