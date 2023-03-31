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

//feature 5
function genRanNum(num) {
    let randomNum = Math.floor(Math.random() * num + 1);
    return randomNum;
}

let name = prompt("What is your name?");

function play() {
let secretNum = genRanNum(15);
let count = 1;

while (true) {
let guess = prompt("Guess The Secret Number");
let number = Number(guess);
let guesses = [];
    if (guess === null) {
        alert("Goodbye");
        break;
        } else if (Number.isNaN(number) || guess === '') {
             alert("Enter an integer EX: 100");
            } else {
            if (number == secretNum) {
                 alert("You Got It " + name + '!' 
                 + '\n'  + "It took you " + count + " attempt(s)!" 
                 + '\n' + "Your guesses where: " + guesses.join(', ') + '!');
        break;
    }  else if(number > secretNum) {
        alert(`Really ${name} guess lower!`);
        guesses.push(number);
        count++
    } else if (number < secretNum){
        alert(`Really ${name} guess higher!`);
        guesses.push(number);
        count++
}
}
}
}
play();






