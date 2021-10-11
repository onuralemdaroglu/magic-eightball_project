let userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = "Is it possible to become a successful software developer with an online course?";
console.log(`The user asked: ${userQuestion} What do you think ${userName}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
    
}
console.log(`The Eight Ball answered: ${eightBall}`);

