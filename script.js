let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/paper.png';

imgArray[2] = new Image();
imgArray[2].src = "assets/scissors.png";

function display (userChoice, computerChoice){
    let user = document.getElementById('user')
    let cpu = document.getElementById('cpu')
    let uChoice = imgArray[userChoice]
    let cChoice = imgArray[computerChoice]
    
    user.setAttribute('src = ${userChoice.src}');
    cpu.setAttribute('src = ${computerChoice}');
}




function rng(){
    return Math.floor(Math.random() * 3);
} 

function checkResult(userChoice){
    let resultDisplay = document.getElementById('result');
    
    let computerChoice = rng()
    
    if (userChoice == computerChoice)
    resultDisplay.innerHTML = "It's a tie";
    
    else if((userChoice == 0 && computerChoice == 1) || (userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 0)){         
        resultDisplay.innerHTML = "You lost to a computer!";
    }
    else if((computerChoice == 0 && userChoice == 1) || (computerChoice == 1 && userChoice == 2) || (computerChoice == 2 && userChoice == 0)){
        resultDisplay.innerHTML = "You won!";
    }
}

