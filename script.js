//variables
var questionIndex = 0;
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! You have finished taking the challenge!';
var words = message.split(' ');


const myQuestions = [
    {
        question: "In what year was javascript invented?",
        answers: {
            a: "1991",
            b: "1997",
            c: "1995"
        },
        correctAnswer: "c"
    },
    {
        question: "who invented Javascript?",
        answers: {
            a: "elon musk",
            b: "bill clinton",
            c: "brendan eich"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the word Dom stand for in js?",
        answers: {
            a: "document object model",
            b: "dont order mayo",
            c: "document on mozilla"
        },
        correctAnswer: "a"
    },
    {
        question: "what does an event listener do?",
        answers: {
            a: "store local data on a clients computer",
            b: "observes or listens to the behavior of the user",
            c: "event listener is another name for a concert goer. event listeners are just fanboys"
        },
        correctAnswer: "b"
    },
    {
        question: "what is a callback function?",
        answers: {
            a: "a function passed as an argument to another function",
            b: "a function that belongs to an object",
            c: "the person you call when your significant other breaks up with you"
        },
        correctAnswer: "a"
    }
];


function buildQuiz(){
  countdown();
    quizContainer.innerHTML = ""
    
    const output = [];
    var currentQuestion = myQuestions[questionIndex]

    //for each question
    //myQuestions.forEach(
        //(currentQuestion, questionNumber) => {

            //this will store the possible answers
            const answers = [];
            //for each available answer..
            for(letter in currentQuestion.answers) {

                //html radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionIndex}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                    
                );
            }
        
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
       //}
 //)

quizContainer.innerHTML = output.join('')

submitButton.addEventListener('click', showResults);
}

function showResults(){
    console.log("click")
//collect all answers from quiz
var answerContainers = quizContainer.querySelectorAll('.answers');
console.log(answerContainers)
var currentQuestion = myQuestions[questionIndex]

//keep track of users answers 
let numCorrect = 0;

//for each question
//myQuestions.forEach( (currentQuestion, questionNumber) => 

    //find selected answer
    var answerContainer = answerContainers[0];
    console.log(answerContainer)
    var selector = `input[name=question${questionIndex}]:checked`;
    console.log(selector);
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;
    console.log(userAnswer);
    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[0].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[0].style.color = 'red';
      }

    questionIndex++;
    buildQuiz(); 

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  //timer that counts down from 5
function countdown() {
    var timeLeft = 10;
      // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      //displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function() {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } else {
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 300);
  }
  

//display quiz right away
buildQuiz();

//eventlistener
// submitButton.addEventListener('click', showResults);

