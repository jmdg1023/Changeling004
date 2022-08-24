

// if Start button clicked
var startBtn = document.querySelector("#startBtn")
startBtn.addEventListener("click", Start);

var question = document.getElementsByClassName('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
var currentQuestion ={};
var score = 0;
var questionCounter = 0;
var availableQuestions=[];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

// var timeLeft = 30;
// var timerEl = document.getElementById('timer');

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
      }
];
// getting questions and options from array
function Start(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    newQuestion();
    console.log(availableQuestions);
    // countdown();
    // timerEl = timeLeft;
    
};

function newQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion['choice' + Number];
    
    choices.forEach(choice =>{
    var number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
    console.log("phase 2");
    })
}

















// function countdown() {
//     // var timeLeft = 30;
  
//     // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//       timeLeft--;
//       if (timeLeft > 1){
//       timerEl.textContent =  "Timer:" + timeLeft;
//       }
//       else if (timeLeft === 1){
//         timerEl.textContent =  "Timer:" + timeLeft;
//       }
//       else{
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//         // displayMessage();
  
//       }
  
//     }, 1000);
//   }
// timer function
// function startTimer(time){
//     counter = setInterval(timer, 1000);
//     function timer(){
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if(time < 9){ //if timer is less than 9
//             let addZero = timeCount.textContent; 
//             timeCount.textContent = "0" + addZero; //add a 0 before time value
//         }
//         if(time < 0){ //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
//             const allOptions = option_list.children.length; //getting all option items
//             let correcAns = questions[que_count].answer; //getting correct answer from array
//             for(i=0; i < allOptions; i++){
//                 if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }
//             }
//             for(i=0; i < allOptions; i++){
//                 option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//             }
            
//         }
//     }
// }