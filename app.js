// // feature 1
// let game = prompt("Guess a number");

// let number = Number(game);

// if (number === 5) {
//     alert("Correct!");
// } else if (number > 5) {
//     alert("Lower")
// } else if(number < 5) {
//     alert("Higher")
// } else if(Number.isNaN(number)) {
//     alert("Enter a number!")
// } else {

//}

// // feature 2
// let count = 1;
// while (true) {
// let guess = prompt("Guess The Secret Number");
// let number = Number(guess);
//     if (guess === null) {
//         alert("Goodbye");
//         break;
//     } else if (Number.isNaN(number) || guess === '') {
//         alert("Enter an integer EX: 100");
//     } else {
//        if (number === 5) {
//         alert("You Got It! " + " It took you " + count + " attempt(s)!");
//         break;
//     }  else if(number > 5) {
//         alert("Lower");
//         count++
//     } else if (number < 5){
//         alert("Higher");
//         count++
// }
// }
// }

// //feature 3 & 4
// function genRanNum(num) {
//     let randomNum = Math.floor(Math.random() * num + 1);
//     return randomNum;
// }

// let secretNum = genRanNum(15);
// let count = 1;
// let guesses = [];
// while (true) {
// let guess = prompt("Guess The Secret Number");
// let number = Number(guess);
//     if (guess === null) {
//         alert("Goodbye");
//         break;
//     } else if (Number.isNaN(number) || guess === '') {
//         alert("Enter an integer EX: 100");
//     } else {
//        if (number == secretNum) {
//         alert("You Got It! " 
//         + '\n'  + "It took you " + count + " attempt(s)!" 
//         + '\n' + "Your guesses where: " + guesses.join(', ') + '!');
//         break;
//     }  else if(number > secretNum) {
//         alert("Lower");
//         guesses.push(number);
//         count++
//     } else if (number < secretNum){
//         alert("Higher");
//         guesses.push(number);
//         count++
// }
// }
// }

// //feature 5
// // generates a random number between 1 and num
// function genRanNum(num) {
//     let randomNum = Math.floor(Math.random() * num + 1);
//     return randomNum;
// }

// // prompts player to enter name and stores it for the round
// let name = prompt("What is your name?");

// // created the play function that will start the guessing game
// function play() {
// let secretNum = genRanNum(15);
// let count = 1;

// while (true) {
// let guess = prompt("Guess The Secret Number");
// let number = Number(guess);
// let guesses = [];
//     if (guess === null) {
//         alert("Goodbye");
//         break;
//         } else if (Number.isNaN(number) || guess === '') {
//              alert("Enter an integer EX: 100");
//             } else {
//             if (number == secretNum) {
//                  alert("You Got It " + name + '!' 
//                  + '\n'  + "It took you " + count + " attempt(s)!" 
//                  + '\n' + "Your guesses where: " + guesses.join(', ') + '!');
//         break;
//     }  else if(number > secretNum) {
//         alert(`Really ${name} guess lower!`);
//         guesses.push(number);
//         count++
//     } else if (number < secretNum){
//         alert(`Really ${name} guess higher!`);
//         guesses.push(number);
//         count++
// }
// }
// }
// }
// play();

// creates a random number between 1 and n
function secretNum(n) {
    return Math.floor(Math.random() * n) + 1;
  }
// ensures that we recieve an integer
  function parseInput(string) {
    if (string === "") {
      return NaN;
    } else if (string === null) {
      return null;
    } else {
      return Number(string);
    }
  }
  
// prompts a message to user and ensures that their entry is an integer
  function game(message) {
    let number = parseInput(prompt(message));
  
    while (!Number.isInteger(number) && number !== null) {
      number = parseInput(prompt(`Please enter an integer. EX: 3`));
    }
  
    return number;
  }

// prompts user to enter their name.
// if they click cancel they will be alerted a message
  let name = prompt("Enter your name!");
  if (name === null) {
    alert("Smell you later stinky!");
  }

// stats will store the name and results of the current and previous game
  let stats = {
      name: "",
      score: undefined,
      prevScore: undefined,
  };

// play will run the guessing game
  function play() {

  // if the name variable is null the game will not start
  // if not the game() will run and store the name value in the stats object
    if (name === null) {
      return;
    } else {
      stats.name = name;
    }
    console.log(stats);

  // count is one since the best anyone can do is 1.
    let count = 1;

  // the guess variable runs the game() function
    let guess = game("Guess a number between 1 and 20.");


    let secretNumber = secretNum(20);


    let guesses = [guess];
  
  // if user clicks cancle they will be sent an alert and the play() function will end
    while (guess !== secretNumber) {
      if (guess === null) {
        alert("Goodbye!");
        return;
      }
  
      if (guess < secretNumber) {
        guess =game(`${name}... Geuss higher!`);
        count++;
        
      } else {
        guess = game(`${name}... Geuss lower!`);
        count++;
        
      }
  
      guesses.push(guess);
    }
    if (count === stats.prevScore) {
    stats.prevScore = count;
      alert(`WOW! You did it ${name}!\nIt only took you ${count} attempt(s)!\nYou didn't do better or worse.\nYou guessed: ${guesses}!`);
    } else if (count < stats.prevScore) {
      alert(`WOW! You did it ${name}!\nIt only took you ${count} attempt(s)!\nYou did ${stats.prevScore - count} attempt(s) better!\nYou guessed: ${guesses}!`);
      stats.prevScore = count;
    }  else if (count > stats.prevScore) {
      alert(`WOW! You did it ${name}!\nIt only took you ${count} attempt(s)!\nYou did ${count - stats.prevScore} attempt(s) worse!\nYou guessed: ${guesses}!`);
      stats.prevScore = count;
    } else if(stats.bestScore === undefined) {
      alert("WOW! You did it " + name + "!" + "\n" + "It only took you " + count + " attempt(s)!" + "\n" + "You guessed: " + guesses + "!");
      stats.prevScore = count;
    }
    let playAgain = prompt(`Do you want to play again Y/N?`);
    if (playAgain === 'y' || playAgain === 'Y') {
      stats.prevScore = count;
      stats.bestScore = undefined;
      console.log(stats)
        return play();
    } else if (playAgain == "n" || playAgain === 'N' || playAgain === null) {
        alert(`Goodbye! \nPlay again soon!`);
        stats.bestScore = count;
    } else {
      alert(`${name} :(\nI thought you could read.\nGet your glasses and try again later.`)
    }
  }
  
  play();






