let userScore = 0;  //for tracking user score
let compScore = 0;  //for tracking computer score

const choices = document.querySelectorAll(".choice");    //for access choice
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getcompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];               //we send this computer choice to playGame function
};

const drawGame = () => {          //for draw
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `You loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
     
const playGame = (userChoice) => {                      //for comparing user choice and computer choice 
    console.log("user choice =", userChoice);
    const compChoice = getcompChoice();           //get computer choice 
    console.log("comp choice =", compChoice);
    
    if(userChoice === compChoice)     // same choice
    {
       drawGame();  //draw 
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")    //if user choose rock
        {     
            //Then computer have 2 choice paper and scissors if computer choose paper then this will run 
            userWin = compChoice === "paper" ? false : true;
        } 
        else if(userChoice === "paper")    //if user choose paper
        {
            //Then computer have 2 choice rock and scissors if computer choose scissors then this will run
            userWin = compChoice === "scissors" ? false : true;
        }
        else       //if user choose scissors
        {  //Then computer have 2 choice paper and scissors if computer choose rock then this will ru
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {                  //adding event listner 'click' on div(img) 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");     //access id attribute (for selecting user choice)
        playGame(userChoice);                             //call playGame function
    });
});
