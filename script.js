//array representing the images 
let imgArray = new Array();

imgArray[0] = 'assets/rock.png';
imgArray[1] = 'assets/paper.png';
imgArray[2] = "assets/scissors.png";

var audio = new Audio();

function userSelectOption(choice) {
    var img = document.getElementById("yourchoiceimg");
    img.src = imgArray[choice];
    img.style.display = "block";
}

//function to show what both players chose
function display (userChoice, computerChoice){
    let user = document.getElementById('user')
    let cpu = document.getElementById('cpu')
    let uChoice = imgArray[userChoice]
    let cChoice = imgArray[computerChoice]
    
    user.setAttribute('src = ${userChoice.src}');
    cpu.setAttribute('src = ${computerChoice}');
}

var opponentCount = 0;
var playerCount = 0;

//computer chooses random number 
function rng(){
    return Math.floor(Math.random() * 3);
} 
//function to see if player or computer wins
function checkResult(userChoice){
    
    userSelectOption(userChoice);
    
    let computerChoice = rng();
    
    var img = document.getElementById("computerchoiceimg");
    img.src = imgArray[computerChoice];
    img.style.display = "block";
    
    let resultDisplay = document.getElementById('result');
    let opponentscore = document.getElementById('opponentscore');
    let playerscore = document.getElementById('playerscore');
    
    
    if (userChoice == computerChoice){
        resultDisplay.innerHTML = "It's a tie!";
     
        audio.src = "assets/Round Draw - CSGO Sound Effect.mp3";
       
    }
    else if((userChoice == 0 && computerChoice == 1) || (userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 0)){         
        resultDisplay.innerHTML = "You lost to a computer!";
        opponentCount++;
        opponentscore.innerHTML = opponentCount;
        audio.src = "assets/Lose sound effects.mp3";
 
        
    }
    else if((computerChoice == 0 && userChoice == 1) || (computerChoice == 1 && userChoice == 2) || (computerChoice == 2 && userChoice == 0)){
        resultDisplay.innerHTML = "You won!";
        playerCount++;
        playerscore.innerHTML = playerCount;
        audio.src = "assets/You win sound effect 5.mp3";
    
    }
    audio.play();
}






 
   
   
    //let scoreDisplay = document.getElementId('scores');
    
    
    












