'use strict';
//when finished add facts
const STORE = [
  {
    question: 'What is my child doing?',
    answers: ['Delaying adulthood', 'Learning how to use the Google', 'Learning part time', 'Spending 40-60 hours weekly in an intensive program to become a junior developer in five months!'],
    correctAnswer: 'Spending 40-60 hours weekly in an intensive program to become a junior developer in five months!',
    fact: 'Thinkful\'s engineering immersion program is a rigorous online program that supplements a up-to-date curriculum with robust instruction and support.'
  },
  {
    question: 'Is this profitable?',
    answers: ['Absolutely no', 'Depends. If profitability is my kid being on the computer all day then yes.', 'This bootcamp was expensive. I sure hope it is.', 'Absolutely yes'],
    correctAnswer: 'Absolutely yes',
    fact: `The <a href="https://www.thinkful.com/outcomes/">average salary</a> increase reported by Thinkful grads is $19,613!`
  },
  {
    question: 'What if it\'s not best for my child (and they decide to pursue something else)?',
    answers: ['My child will lose all the money they paid.', 'My child will pursue their dream in becoming a cowboy/cowgirl astronaut racecar driver.', 'My child will switch to being an Uber driver.', 'My child can get a refund for the remainder of the program.'],
    correctAnswer: 'My child can get a refund for the remainder of the program.',
    fact: `Depending on the student\'s payment plan and meeting qualifications, students can get a refund the unfinished portion of the course.`
  }, //<a href="https://www.thinkful.com/course-catalog/> << this breaks the 'Next' button for some reason... 
  {
    question: 'Will my child get a job afterward?',
    answers: ['Yes, but not as a web/software developer.', 'No', 'Yes, Thinkful guarantees that qualifying graduates get a job in their field six months after graduating.', 'What is a job?'],
    correctAnswer: 'Yes, Thinkful guarantees that qualifying graduates get a job in their field six months after graduating.',
    fact: `If you don't get a job within six months after graduation, Thinkful will <a href="https://tf-assets-prod.s3.amazonaws.com/shoebill/PDFs/thinkful-job-guarantee.pdf">refund the cost of tuition</a>.`
  },
  {
    question: `Complete this for loop by filling in the blank so that it prints the message three times: 
    <p class="code">
    <code> &nbsp; for ________________ {<br>
      &nbsp; &nbsp; console.log('I love you parents!');<br>
      &nbsp; }</code></p>`,
    answers: ['What the heck is a for loop?','For me?', 'For ever', '(let i = 0, i <= 3, i++)'],
    correctAnswer: '(let i = 0, i <= 3, i++)',
    fact: 'A "for loop" is used to tell the code how many times to repeat itself! This for loop would have printed: <br><code>\'I love you parents!\'\'I love you parents!\'\'I love you parents!\'</code> :)'
  }
];