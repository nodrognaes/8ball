let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
let button = document.querySelector("button");

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy, try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 0:
    eightBall = 'Outlook not so good';
    break;
  case 0:
    eightBall = 'Signs point to yes';
    break;
};

//print eightBall into answer div