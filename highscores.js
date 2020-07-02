var hiScores = JSON.parse(window.localStorage.getItem("High Scores")) || [];
var highScoreTarget = document.getElementById("highscores")

console.log(hiScores)
console.log(highScoreTarget)


for (var i = 0; i < hiScores.length; i++){
  console.log(hiScores[i])
  highScoreTarget.innerHTML=`${hiScores[i].name}`
}