var mostRecentScore = localStorage.getItem('mostRecentScore');
document.getElementById('score').innerText= mostRecentScore;

var initials =[];
var highscoresList = document.querySelector("#highscoresList");
var initialsForm = document.querySelector("#initialsForm");
var username = document.querySelector("#username");
function storeInitials() {

    localStorage.setItem("initials", JSON.stringify(initials));
  }
  
    initialsForm.addEventListener("submit", function(event) {
        window.location.assign("./highscores.html")
    var highscoresList = username.value.trim();
    if (highscoresList === "") {
      return;
    }
   initials.push(highscoresList);
    //todoInput.value = "";
   
    storeInitials();
    renderInitials();
  });

  function renderInitials() {
    highscoresList.innerHTML = "";
   for (var i = 0; i < initials.length; i++) {
      var Ini = initials[i];
  
      var li = document.createElement("li");
      li.textContent = Ini;
      li.setAttribute("data-index", i);
  
    
      highscoresList.appendChild(li);
    }
  }