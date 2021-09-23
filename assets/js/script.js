let eightBall = '';
let button = document.querySelector("button");
let answer = document.querySelector("#answer");
let triangle = document.querySelector(".triangle");
let input = document.querySelector("input");
let question = '';

console.log(question);

$("#question").keyup(function(event) {
  if (event.keyCode === 13) {
      $(button).click();
  }
});

button.addEventListener("click", function() {
  question = document.querySelector("#question").value;
  console.log(question);

  if (question === '') {alert("Please enter a question!")
} else {
  let randomNumber = Math.floor(Math.random() * 8);

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
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  };

  answer.innerHTML = eightBall;
  answer.style.opacity = "1";
  answer.style.display = "block";
  triangle.style.display = "block";
  triangle.style.opacity = "1";
  }
});

input.addEventListener("click", function() {
  answer.style.opacity = '0';
  triangle.style.opacity = "0";
});

input.addEventListener("keydown", function() {
  answer.style.opacity = "0";
  triangle.style.opacity = "0";
});
