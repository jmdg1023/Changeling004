

// if Start button clicked
var startBtn = document.querySelector("#startBtn");
//startBtn.addEventListener("click", Start);

var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
var currentQuestion ={};
var score = 0;
var questionCounter = 0;
var availableQuestions=[];

var timerEl = document.getElementById('timer');

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;


var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "1. <script>",
        choice2: "2. <javascript>",
        choice3: "3. <js>",
        choice4: "4. <scripting>",
        answer: 1
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "1. <script href='xxx.js'>",
        choice2: "2. <script name='xxx.js'>",
        choice3: "3. <script src='xxx.js'>",
        choice4: "4. <script file='xxx.js'>",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "1. msgBox('Hello World');",
        choice2: "2. alertBox('Hello World');",
        choice3: "3. msg('Hello World');",
        choice4: "4. alert('Hello World');",
        answer: 4
      }
];
// getting questions and options from array
function Start(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    newQuestion();
    
};

function newQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //localStorage.setItem('mostRecentScore', score);
        //go to the end page
        redirect();
    }
    countdown();
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice =>{
    var number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
    
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
}

choices.forEach(choice=>{
    choice.addEventListener("click", e =>{
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        var classToApply =
        selectedAnswer == currentQuestion ? "correct" : "incorrect";


        if (classToApply === 'correct') {
          incrementScore(CORRECT_BONUS);
      }

      selectedChoice.parentElement.classList.add(classToApply);

        newQuestion();
    });
})

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
function redirect() {
    document.location.href = 'https://github.com/jmdg1023/Changeling004/blob/main/gameFin.html';
}

function countdown() {
    var timeLeft = 46;
 
    var timeInterval = setInterval(function () {
      timeLeft--;
      if (timeLeft > 1){
      timerEl.textContent =  "Timer: 00:" + timeLeft;
      }
      else if (timeLeft === 0){
        timerEl.textContent =  "Timer: 00:" + timeLeft ;
      }
      else{
        timerEl.textContent = '';
        clearInterval(timeInterval);
        //displayMessage();
  
      }
  
    }, 1000);
  }

