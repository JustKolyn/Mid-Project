const inputs = ["1", "2", "3"];
const welcomeMessage = "Welcome to the Rock, Paper and Scissors game! To play the game type one of three given inputs: rock, paper or scissors. Good Luck!";
const pickOption = "Pick one: 1) Rock, 2) Paper, 3) Scissors";
const failedInput = "Wrong input, try again";
let tryAgain = true;

while(tryAgain){
    let playerOne = prompt("Player 1\n" + pickOption);
    while (!inputs.includes(playerOne)) {
        alert(failedInput);
        playerOne = prompt("Player 1\n" + pickOption);
        if(playerOne===null){
            break;
        }
      }

    let playerTwo = prompt("Player 2\n" + pickOption);
    while (!inputs.includes(playerTwo)) {
        alert(failedInput);
        playerTwo = prompt("Player 2\n" + pickOption);
        if(playerTwo===null){
            break;
        }
      }

    if (playerOne === playerTwo) {
    alert("Result is a tie");
    } else if (
        (playerOne === "2" && playerTwo === "1") ||
        (playerOne === "3" && playerTwo === "2") ||
        (playerOne === "1" && playerTwo === "3")
    ) {
        alert("Player 1 won!");
    } else {
        alert("Player 2 won!");
    }

    tryAgain = confirm("Try again?");
} 



