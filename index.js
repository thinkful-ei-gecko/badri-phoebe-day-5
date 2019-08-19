'use strict';
//js-quiz-box

let questionNumber = 1;
let score = 0;
let userInput = '';

//get the start page
function renderStartPage () {
  console.log('rendered start page');
  $('.js-quiz-box').html(`
    <h1 class = "quizTitle">How Much Do You Know About Your Child's Bootcamp?</h1>
    <p class = "quizText">Yikes! Has your child signed up for a "coding bootcamp"? Have no fear, the internet is here!</p>
    <p class = "quizText">If your child is now in Thinkful's Engineering Immersion program, this brief quiz will check your knowledge on just what your child has gotten into and what they are learning. You may even learn a thing or two about it yourself!</p>
    <button type="button" class="next-question">Start the Quiz</button>
    <p id="disclaimer">Disclaimer: This quiz was made by a Thinkful student to fulfill a quiz app project requirement. While the statistics used in the quiz are true, this in no way reflects the views or opinions of Thinkful staff, students, or Thinkful as a whole. Apart from fulfilling course requirements, the developer (me) intended to use it to show off to her parents in a cheeky way and help them understand more of what she's doing. :)</p>
  `);
}

//Renders next question


// get the questions and results
function generateQuestion (){
  if (questionNumber < STORE.length) {
    return `<div>
      <h1>${STORE[questionNumber - 1].question} </h1>
      <form class="questionForm">
        <fieldset>
          <label class="answerOption">
            <input type="radio" value="Answer 1" name="answer" required>
            <span>${STORE[questionNumber - 1].answers[0]}</span>
          </label>    
          <label class="answerOption">
            <input type="radio" value="Answer 2" name="answer" required>
            <span>${STORE[questionNumber - 1].answers[1]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="Answer 3" name="answer" required>
            <span>${STORE[questionNumber - 1].answers[2]}</span>
          </label>    
          <label class="answerOption">
            <input type="radio" value="Answer 4" name="answer" required>
            <span>${STORE[questionNumber - 1].answers[3]}</span>
          </label>
          <button type="submit" class="submit-button">Submit</button>
        </fieldset>
      </form>
    </div>`
  }
}

function renderQuestion() {
  console.log('test');
  $('.js-quiz-box').html(generateQuestion);
}

function generateResultsView() {
  if (userInput === STORE[questionNumber - 1].correctAnswer) {
    score++;
    renderCorrectResultsView();
  } else {
    renderIncorrectResultsView();
  }
}

function renderCorrectResultsView() {
  $('.js-quiz-box').html(`
    <div>
      <h1> 🎉 Hooray!! 🎉</h1>
      <p> You got it right! Good job. 🍪</p>
      <p> ${STORE[questionNumber - 1].fact} </p>
      <button type="button" class="next-question">Next</button>
    </div>
  `)
  questionNumber++;
}

function renderIncorrectResultsView() {
  $('.js-quiz-box').html(`
    <div> 
      <h1> 😭😭😭 </h1>
        <p> Sorry! That wasn't quite right... </p>
        <p> The correct answer is: ${STORE[questionNumber - 1].correctAnswer} </p>
      <button type="button" class="next-question">Next</button>
    </div>
    `)
  questionNumber++;
}

function renderEndPage() {
  $('.js-quiz-box').html(`
  <div> 
    <h1> Not bad... </h1>
      <p> Final Score: ${score}/${STORE.length} </p>
    <button class="restart">Try Again?</button> 
  </div>
  `)
}

function createQuiz () {
  console.log('quiz created');
  renderStartPage();
  
  //Display next question on "next question clicked"
  $('.js-quiz-box').on('click', '.next-question', event => {
    $('.js-quiz-box').empty();
    if (questionNumber === 5) {
      renderEndPage();
    } else {
      renderQuestion();
    }
  });
  
  //Display result on "submit" click
  $('form').on('submit', event => {
    event.preventDefault();
    userInput = $('input:checked').val();
    $('.js-quiz-box').empty();
    generateResultsView();
  });
  
  //Restart quiz button (refresh question number, score, userInput and run createQuiz())
  $('.js-quiz-box').on('click', '.restart', event => {
    $('.js-quiz-box').empty();
    questionNumber = 1;
    score = 0;
    userInput = '';
    renderStartPage();
  });
}

$(renderStartPage);