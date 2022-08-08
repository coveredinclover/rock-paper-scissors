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
console.log(randomNumber)
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

getComputerChoice()
console.log(computerChoice)

// Player Input

playerChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors'")
playerChoice = playerChoice.toUpperCase()
console.log(playerChoice)
result = undefined

// Player input vs Computer
// Use switch statement to determine winner

function compareChoices(computerChoice, playerChoice) {
    switch (computerChoice + playerChoice){
        case "ROCKSCISSORS":
        case "SCISSORSPAPER":
        case "PAPERROCK":
        result = "computerWin";
        break;

        case "SCISSORSROCK":
        case "PAPERSCISSORS":
        case "ROCKPAPER":
        result = 'playerWin';
        break;

        case "SCISSORSSCISSORS":
        case "PAPERPAPER":
        case "ROCKROCK":
        result = 'tie';
        break;
    }   


}
compareChoices(computerChoice, playerChoice)
console.log(result)

//Make a function to turn result into an output

function resultConverter(result){
    if(result == "computerWin") {
        console.log("Sorry, you lost!")
    }
    else if(result == "playerWin") {
        console.log("Congrats, you won!")
    }
    else {
        console.log("Oops, that's a tie!")
    }
}

resultConverter(result)