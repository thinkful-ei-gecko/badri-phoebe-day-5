'use strict';
//js-quiz-box

let questionNumber = 0;
let score = 0;
let userInput = '';

//get the start page
function renderStartPage () {
  $('.js-quiz-box').html(`
    <h1 class = "quizTitle">How Much Do You Know About Your Child's Bootcamp?</h1>
    <p class = "quizText">Yikes! Has your child signed up for a "coding bootcamp"? Have no fear, the internet is here!</p>
    <p class = "quizText">If your child is now in Thinkful's Engineering Immersion program, this brief quiz will check your knowledge on just what your child has gotten into and what they are learning. You may even learn a thing or two about it yourself!</p>
    <button type="button" class="next-question">Start the Quiz</button>
    <p id="disclaimer">Disclaimer: This quiz was made by Thinkful students to fulfill a quiz app project requirement. While the statistics used in the quiz are true, this in no way reflects the views or opinions of Thinkful staff, students, or Thinkful as a whole. Apart from fulfilling course requirements, it was created to show off their new skills to their parents in a cheeky way and help them understand more of the course itself. :)</p>
  `);
  $('.score').html(`Your Score: ${score}`);
  $('.questionNumber').html(`Question: ${questionNumber}/5`);
}

// get the questions and results
function generateQuestion (){
  if (questionNumber -1 < STORE.length) {
    return `<div>
      <h1>${STORE[questionNumber -1].question} </h1>
      <form id="qForm" class="questionForm">
        <fieldset class="answer-options">
          <input type="radio" id="radio-1" class="input" name="quiz" name="quiz" value="${STORE[questionNumber - 1].answers[0]}" required>  
          <label class="answer-option" for="radio-1">${STORE[questionNumber - 1].answers[0]}</label>
          
          <input type="radio" id="radio-2" class="input" name="quiz" value="${STORE[questionNumber - 1].answers[1]}" required>
          <label class="answer-option" for="radio-2">${STORE[questionNumber - 1].answers[1]}</label>

          <input type="radio" id="radio-3" class="input" name="quiz" value="${STORE[questionNumber - 1].answers[2]}" required>
          <label class="answer-option" for="radio-3">${STORE[questionNumber - 1].answers[2]}</label>    

          <input type="radio" id="radio-4" class="input" name="quiz" value="${STORE[questionNumber - 1].answers[3]}" required>
          <label class="answer-option" for="radio-4">${STORE[questionNumber - 1].answers[3]}</label>

          <div class="submit">
            <button type="submit" class="submit-button">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>`
  }
}

function renderQuestion() {
  $('.js-quiz-box').html(generateQuestion);
  $('.score').html(`Your Score: ${score}`);
  $('.questionNum').html(`Question: ${questionNumber}/5`);
}

function generateResultsView() {
  if (userInput === STORE[questionNumber - 1].correctAnswer) {
    score++;
    renderCorrectResultsView();
  } else {
    renderIncorrectResultsView();
  }
  $('.score').html(`Your Score: ${score}`);
  $('.questionNum').html(`Question: ${questionNumber}/5`);
}

function renderCorrectResultsView() {
  $('.js-quiz-box').html(`
    <div>
      <h1> 🎉 Hooray!! 🎉</h1>
      <p> You got it right! Good job. 🍪</p>
      <p class="secondary-p"> ${STORE[questionNumber - 1].fact} </p>
      <button type="button" class="next-question">Next</button>
    </div>
  `)
  $('.score').html(`Your Score: ${score}`);
  $('.questionNum').html(`Question: ${questionNumber}/5`);
}

function renderIncorrectResultsView() {
  $('.js-quiz-box').html(`
    <div> 
      <h1> 😭😭😭 </h1>
        <p> Sorry! That wasn't quite right... </p>
        <p> The correct answer is:</p> 
        <p class="secondary-p">${STORE[questionNumber - 1].correctAnswer}</p>
      <button type="button" class="next-question">Next</button>
    </div>
    `)
  $('.score').html(`Your Score: ${score}`);
  $('.questionNum').html(`Question: ${questionNumber}/5`);
}

function renderEndPage() {
  $('.js-quiz-box').html(`
  <div> 
    <h1> Not bad... </h1>
    <p>Thanks for playing!</p>
    <p class="secondary-p"> Final Score: ${score}/${STORE.length} </p>
    <button type="button" class="restart">Try Again?</button> 
  </div>
  `)
}

//Display next question on "next question clicked"
$('.js-quiz-box').on('click', '.next-question', event => {
  $('.js-quiz-box').empty();
  questionNumber++;
  if (questionNumber > 5) {
    console.log('renderEndPage() should run');
    renderEndPage();
  } else {
    renderQuestion();
  }
});
  
//Display result on "submit" click
$('.js-quiz-box').on('submit', 'form', event=>{
  event.preventDefault();
  userInput = $('input:checked').val();
  $('.js-quiz-box').empty();
  generateResultsView();
});
  
//Restart quiz button (refresh question number, score, userInput and run createQuiz())
$('.js-quiz-box').on('click', '.restart', event => {
  $('.js-quiz-box').empty();
  questionNumber = 0;
  score = 0;
  userInput = '';
  renderStartPage();
});

$(renderStartPage);