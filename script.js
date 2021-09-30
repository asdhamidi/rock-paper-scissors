let score = 0;
let comp_score = 0;
let p_score = document.querySelector("#player");
let c_score = document.querySelector("#comp");
let buttons = document.querySelectorAll(".buttons")
let msg = document.querySelector("#msg");
let endmsg = document.getElementById("#endmsg");
let player_choice = document.querySelector("#player-choice");
let comp_choice = document.querySelector("#comp-choice");
let restartMenu = document.querySelector(".restart");

buttons.forEach(button => button.addEventListener("click", function() {
    if (comp_score == 5 || score == 5) return;
    msg.textContent =  play(this, choice());
    update();
    }));

document.querySelector("#restartbtn").addEventListener("click", function() {
    score = 0;
    comp_score = 0;
    update();
    player_choice.src = "";
    comp_choice.src = "";
    msg.textContent = "Welcome! It's race to 5 points.";
    restartMenu.style.display = "none";
})
    
function play(select, comp=choice())
{
    let selection = select.id;
    player_choice.src = select.src;
    comp_choice.src = `./images/${comp}.png`;    

    if (selection == comp)
    {
    return "Tie Game!";
    }
    
    if ((selection == "Rock" && comp == "Scissors") 
    || (selection == "Paper" && comp == "Rock") 
    || (selection == "Scissors" && comp == "Paper")){
    score++;
    return "You Win! " + selection + " beats " + comp + ".";
    }
    
    if ((selection == "Rock" && comp == "Paper") 
    || (selection == "Paper" && comp == "Scissors") 
    || (selection == "Scissors" && comp == "Rock")){
    comp_score++;
    return "You Lose! " + comp + " beats " + selection + ".";
    }
}

function choice() {
    let array = ["Rock", "Paper", "Scissors"];
    let choice = array[Math.floor(Math.random() * array.length)];
    return choice;
}

function update() {
    p_score.textContent = `${score}`;
    c_score.textContent = `${comp_score}`;

    if (score == 5) {
        endmsg.textContent = "You Won! \r\n";
        endmsg.textContent  += `You defeated the machine by ${score} - ${comp_score}! \r\n`;
        endmsg.textContent += "\r\nPlay Again?";
        restartMenu.style.display = "flex"
    }
    
    if (comp_score == 5) {
        endmsg.textContent = "You Lost. \r\n";
        endmsg.textContent  += `Machines won by ${score} - ${comp_score}! \r\n`;
        endmsg.textContent += "\r\nPlay Again?";
        restartMenu.style.display = "flex"
    }
}
