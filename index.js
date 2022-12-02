const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's you name ? ")
console.log(chalk.blue("----------------------------------"))
var welcomeMessage = "Welcome " + userName + " to DO YOU KNOW INDIA ? "
console.log(welcomeMessage)

console.log("--------------------------------------------------------")

console.log(chalk.red('Rules & Instructions: '));
console.log('1.', userName + ', There are 5 Questions on India and all are Compulsory.');
console.log('2. You will get 1 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');

console.log("--------------------------------------------------------")

// function 

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes, you are right..")
    score = score + 1;
  } else {
    console.log("Oops ! you are wrong..")
  }
  console.log(chalk.red("current score : " + score))
  console.log(chalk.red("----------------------------"))
}

var question = [
  {
    question : " 1 . Who was the first prime minister of India? ",
    answer : "Jawaharlal Nehru"
  },
  {
    question : " 2 . What is the Hindi name of India ? ",
    answer : "Bharat"
  }
 ,{
   question : " 3 . How many union territories are there in India ? ",
   answer : "7"
  }, 
  {
    question : " 4 . Which is the smallest state in India ? ",
    answer : "Goa"
  },
  {
    question : " 5 . Who is the father of the nation (India)? ",
    answer : "Mahatma Gandhi"
  },
  {
    question : " 6 . Which is the southernmost city of India? ",
    answer : "Kanyakumari"
  }
]


// loop 

for(let i = 0 ; i < question.length ; i++){
  var currentQuestion = question[i]
 play(currentQuestion.question , currentQuestion.answer)
}

console.log(chalk.blue("Your final score is " + score))




