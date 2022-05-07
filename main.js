const choices = ["rock", "paper", "scissors"]
const winners = [];

//Funtion to start the game w/ loop for 5 rounds
function game () {
    for (let i = 1; i <= 5; i++) {
    playRound(i);
    }
    logWins();
}

//How each rounds are player, pulls in other functions to this one
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //console.log("Computer has selected", computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

//Outputs instruction for player and allows them to pick
function playerChoice () {
    let input = prompt ("Type rock, paper, or scissors");
    while(input == null) {
        input = prompt ("Type rock, paper, or scissors");
    }
    //Make sure everything is lower case
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
        input = prompt
        ("Type rock, paper , or scissors. Spelling needs to be correct!");
    input = input.toLowerCase();
    //Make sure everything is spelt correctly
    check = validateInput(input);
    }
    //console.log("You have selected", input);
    return input;
}

//Randomize the selection of computer's choice
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

//Validate the selection of the player/spell check
function validateInput(choice){
    return choices.includes(choice)
}

//Calculate the winnner of the round
function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "No one";
    } else if (
        choiceP === 'rock' && choiceC == 'scissors' ||
        choiceP === 'scissors' && choiceC == 'paper' ||
        choiceP === 'paper' && choiceC == 'rock') {
            return "You";
        } else {
            return "Computer"
        }

    }

//End result sum up all of the results
function logWins() {
    let playerWins = winners.filter(item => item == "You").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "No one").length;
    console.log('Results');
    console.log('Player wins:', playerWins);
    console.log('Computer wins:', computerWins);
    console.log('Ties:', ties);
}

//Display rounds, and who won
function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', computerChoice);
    console.log(winner, 'won the round');
    //To help devide between each round played
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}