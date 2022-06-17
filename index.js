// Your Code Here
let username = window.prompt("Please Enter Your Name:");
let userscore = 0;
let playagain = true;

function playgame() {
for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let useranswer = window.prompt(question.text);
    if(useranswer === question.correctAnswer){
        userscore = userscore + 10;
    };
};

window.alert("Your score is: "+userscore);
}
while (playagain === true){
    playgame();
    let userchoice = window.prompt("Would you like to play the game again? Answer yes or no.");
    if (userchoice === "yes") {
        playagain = true;
    } else {
        playagain = false;
        window.alert("Thanks for playing the game!");
    }
}