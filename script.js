// Begin with a function called getComputerChoice that will randomly return either
// Rock, Paper or Scissors.
//
// Going to need a function that can choose one of three numbers
// Going to need a function that interprets the result into a choice
//
// Could instead use .0-.33 as a choice, etc. 
//
// Make a variable that stores Math.random() as a float
// Make an if else that updates a variable based on the third that random occupies
// Determining the computers choice
//
// Make input for player selection
// Make function to compare player selection and computer selection
// Then spits out text saying You won or You lose
//
// Use Prompt to store user input in a string
// toUpperCase to ensure string can be any case
// 
// Write function to compare computer choice and player choice, and output
// Result text

randomNumber = Math.random()

computerChoice = undefined

function getComputerChoice() {
    if (randomNumber <= .33) {
        computerChoice = "ROCK";
    } else if (randomNumber > .33 && randomNumber <= .66) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
}

let playerChoice = undefined

// Player Input
function playerInput() {
    playerChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors'")
    playerChoice = playerChoice.toUpperCase()
}
var result = undefined
let compareCom = 0;
let comparePla = 0;
let compareTie = 0;

// Player input vs Computer
// Use switch statement to determine winner

function compareChoices(computerChoice, playerChoice) {
    switch (computerChoice + playerChoice){
        case "ROCKSCISSORS":
        case "SCISSORSPAPER":
        case "PAPERROCK":
        result = "computerWin";
        compareCom += 1;
        break;

        case "SCISSORSROCK":
        case "PAPERSCISSORS":
        case "ROCKPAPER":
        result = 'playerWin';
        comparePla += 1;
        break;

        case "SCISSORSSCISSORS":
        case "PAPERPAPER":
        case "ROCKROCK":
        result = 'tie';
        compareTie += 1;
        break;
    }   


}

//Make a function to turn result into an output

function resultConverter(result){
    if(result == "computerWin") {
        console.log("Sorry, you lost!")
    }
    else if(result == "playerWin") {
        console.log("Congrats, you won!")
    }
    else if (result == "tie") {
        console.log("Oops, that's a tie!")
    }
}

function play() {
    getComputerChoice();
//    playerInput();

    compareChoices(computerChoice, playerChoice);
//    resultConverter(result);


}

// Make game() play 5 times
// Keep score and report overall winner at the end
//
// Use increasing variables to keep score

// function game() {
//     for(let i = 0; i < 5; i ++){
//         play()}
//     if(compareCom > comparePla) {
//         console.log("The computer wins!")
//     } else if (comparePla > compareCom) {
//         console.log("The player wins! Congrats!")
//     }
//     else {
//         console.log("Oops! Looks like you tied overall!")
//     }
//    console.log("The final score was... Computer: " + compareCom + ". Player: " + comparePla + ".")
// }

// game()

let output = document.querySelector('span')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')


function rockOutput() {
    playerChoice = "ROCK"
    play()
    if (result == "computerWin") {
        output.textContent = "Sorry... You lost!"
    }
    else if (result == "playerWin") {
        output.textContent = "Congrats, you won!"
    }
    else if (result == "tie") {
        output.textContent = "Whoops, that's a tie!"
    }
}

function paperOutput() {
    playerChoice = "PAPER"
    play()
    if (result == "computerWin") {
        output.textContent = "Sorry... You lost!"
    }
    else if (result == "playerWin") {
        output.textContent = "Congrats, you won!"
    }
    else if (result == "tie") {
        output.textContent = "Whoops, that's a tie!"
    }
}

function scissorsOutput() {
    playerChoice = "SCISSORS"
    play()
    if (result == "computerWin") {
        output.textContent = "Sorry... You lost!"
    }
    else if (result == "playerWin") {
        output.textContent = "Congrats, you won!"
    }
    else if (result == "tie") {
        output.textContent = "Whoops, that's a tie!"
    }
}

rock.addEventListener("click", rockOutput)
paper.addEventListener("click", paperOutput)
scissors.addEventListener("click", scissorsOutput)