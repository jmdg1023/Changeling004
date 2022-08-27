var mostRecentScore = localStorage.getItem("mostRecentScore");
var score = document.getElementById("score");
score.textContent=mostRecentScore;
//var scoreEl = document.getElementById("mostRecentScore").textContent;
//console.log(scoreEl);
var totalScore = [];
var highscoresList = document.querySelector("#highScoresList");
var initialsForm = document.getElementById("initials");
var username = document.querySelector("#username");
var userN;


var saveScoreBtn=document.getElementById('saveScoreBtn');
saveScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
  userN = username.value.trim();
  if (userN === "") {
    return;
  }
  //console.log(userN);
  
  var name ={initials: userN, score: mostRecentScore};
  totalScore.push(name);
  localStorage.setItem("totalScore", JSON.stringify(totalScore));
   render();
  
});

function render() {
  
  for (var i = 0; i < totalScore.length; i++) {
   
    var list = document.createElement("p");
    list.textContent = userN;

    var highScorer =document.createElement("p")
    highScorer.textContent = mostRecentScore;

    list.setAttribute("data-index", i);
    //highscoresList.appendChild += (userN) + (highScorer);
    highscoresList.appendChild(list);
    highscoresList.appendChild(highScorer);

  }
}

function clearHS(){
  localStorage.clear();
}

