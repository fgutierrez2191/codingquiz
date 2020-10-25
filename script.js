//variables
var questionIndex = 0;
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


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





//display quiz right away
buildQuiz();

//eventlistener
// submitButton.addEventListener('click', showResults);

