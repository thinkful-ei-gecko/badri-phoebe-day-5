'use strict';
//js-quiz-box

let questionNumber = 0;
let score = 0;

//get the start page
function renderStartPage () {
  console.log('hello');
  $('.js-quiz-box').html(`
    <h1>How Much Do You Know About Your Child's Bootcamp?</h1>
    <p>Yikes! Has your child signed up for a "coding bootcamp"? Have no fear, the internet is here!</p>
    <p>If your child is now in Thinkful's Engineering Immersion program, this brief quiz will check your knowledge on just what your child has gotten into and what they are learning. You may even learn a thing or two about it yourself!</p>
    <button class="startButton">Start the Quiz</button>
    <p id="disclaimer">Disclaimer: This quiz was made by a Thinkful student to fulfill a quiz app project requirement. While the statistics used in the quiz are true, this in no way reflects the views or opinions of Thinkful staff, students, or Thinkful as a whole. Apart from fulfilling course requirements, the developer (me) intended to use it to show off to her parents in a cheeky way and help them understand more of what she's doing. :)</p>
  `);
}

// get the questions and results
function generateQuestion (){
  if (questionNumber < STORE.length) {
    return `<div class="js-quiz-box">
      <h1>Question 1</h1>
      <form class="questionForm">
        <fieldset>
          <label class="answerOption">
            <input type="radio" value="Answer 1" name="answer" required>
            <span>Answer 1</span>
          </label>    
          <label class="answerOption">
            <input type="radio" value="Answer 2" name="answer" required>
            <span>Answer 2</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="Answer 3" name="answer" required>
            <span>Answer 3</span>
          </label>    
          <label class="answerOption">
            <input type="radio" value="Answer 4" name="answer" required>
            <span>Answer 4</span>
          </label>
          <button type="submit" class="submitButton">Submit</button>
        </fieldset>
      </form>
    </div>`
  }
}

function createQuiz () {
  renderStartPage();
}

$(createQuiz);

