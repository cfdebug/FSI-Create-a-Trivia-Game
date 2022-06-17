// Tag Definitions
let username = window.prompt("Please Enter Your Name:");
let userscore = 0;
let playagain = true;

// Main Function
function playgame() {
    //Log Username
    console.log("Current User is: "+username);
//For loop to display/answer questions and track score    
for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let useranswer = window.prompt(question.text);
    if(useranswer === question.correctAnswer){
        console.log("Correct");
        userscore = userscore + 10;
    } else {
        console.log("Incorrect")
    };
};
// Score popup
window.alert(username+"'s score is: "+userscore);
}
//Play again popup
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