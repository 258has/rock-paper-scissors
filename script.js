const getComputerChoice = () => {
    let randomNumber = Math.round(Math.random()*2)
    if (randomNumber === 0) {
        return "paper"
    } else if (randomNumber === 1) {
        return "scissors"
    } else { //if randomNumber === 2
        return "rock"
    }
}

const gameRPC = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" ) {
        return `You win! ${playerSelection} beats ${computerSelection}`         
    
    } else if (playerSelection === computerSelection) {
        return `Draw! You selected ${playerSelection} and computer also selected ${computerSelection}`
    } 

    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "paper"
const computerSelection = getComputerChoice()

console.log(gameRPC(playerSelection, computerSelection))
// console.log(gameRPC("paper", getComputerChoice())) - alternative way to run function

// function game() {
//     let w = 0 //this is to keep a record for number of wins
//     let l = 0 //this is to keep a record for number of loses
//     for (let i = 1; i <=5; i = i + 1) {
//         const computerSelection = getComputerChoice()
//         const result = `Round ${i}: ${gameRPC(playerSelection, computerSelection)}` 
//         console.log(result)
        
//         if (result.includes("win")) {
//             w = w + 1
//             // console.log(j)
//         } else if (result.includes("lose")) {
//             l = l + 1
//         }
//     }
    
//     if (w > l) {
//         return `You won! ${w} out of 5 games`
//     } else if (w < l) {
//         return `You lose! ${l} out of 5 games`
//     } else {
//         return "It was a draw!"
//     }
    
// }