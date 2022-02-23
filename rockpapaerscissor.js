let userScore = 0;
let computerScore = 0;
const userScoreSpam = document.getElementById("user-score");
const compScoreSpam = document.getElementById("compu-score");
const scoreDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result >p");
const rDiv = document.getElementById("r");
const pDiv = document.getElementById("p");
const sDiv = document.getElementById("s");

function getCompOption(){
    const options = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random()*3);
    
    return options[randomNumber];
}

function conver(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";


}

function win(userOption, computerOption){
    userScore++;
    userScoreSpam.innerHTML = userScore;
    compScoreSpam.innerHTML = computerScore;
    resultDiv.innerHTML = " Win " + conver( userOption ) + " beats " + conver(computerOption) + " You Win 🔥!";


}

function lose(userOption, computerOption){
    computerScore++;
    
    compScoreSpam.innerHTML = computerScore;
    userScoreSpam.innerHTML = userScore;
    resultDiv.innerHTML = "Lose "  +  conver (userOption)  + " is less than " + conver(computerOption)+ " You Lose! 👨‍🦯";

}

function draw(userOption, computerOption){
    compScoreSpam.innerHTML = computerScore;
    userScoreSpam.innerHTML = userScore;
    resultDiv.innerHTML = " Drawe " +  conver( userOption) + " equals " + conver(computerOption) + " You Drawe!🍕";


}
function game(opcion){
    const computerOpcion = getCompOption();
    switch (opcion + computerOpcion){
        case "rs":
        case "sp":
        case "pr":
            win(opcion, computerOpcion);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(opcion, computerOpcion); 
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(opcion, computerOpcion);
            console.log("It is a draw ");
            break;
        


    }

}

function  main(){
    rDiv.addEventListener('click', function(){
        game("r"); 
        
    })
    
    pDiv.addEventListener('click', function(){
        game("p");
        
    })
    sDiv.addEventListener('click', function(){
        game("s");
        
    })
    

}
main();


