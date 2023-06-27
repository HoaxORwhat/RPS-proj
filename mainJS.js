
let choices = ['Rock', 'Paper', 'Scissors'];

let click = document.getElementById('btnID');

click.onclick = function(){
    alert(whoWins());
}

function isEnglishAlphabetString(value) {
    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i);
      if (
        (charCode < 65 || charCode > 90) && // Check uppercase A-Z
        (charCode < 97 || charCode > 122) // Check lowercase a-z
      ) {
        return false;
      }
    }
    
    return true;
}

function getComputerChoice(){
    const idx = Math.floor(Math.random() * choices.length);   
    return choices[idx];
}



function whoWins(){
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    playerSelection = window.prompt('Please enter a choice:');
    
    
    
    if(!isEnglishAlphabetString(playerSelection)){
        alert('Error! Please enter a correct string value');
        return whoWins();
    }
    playerSelection = playerSelection.toLowerCase();

    

    window.alert('Computer choice is : ' + computerSelection);

    switch(playerSelection){
        case 'paper':
            if(computerSelection == 'paper'){
                alert('TIE! Play Again.')
                return whoWins();
            }
            if(computerSelection == 'scissors')
                return 'You lose!..';
            return 'You WIIN!! Congrats!';
        case 'scissors':
            if(computerSelection == 'scissors'){
                alert('TIE! Play Again.')
                return whoWins();
            }
            if(computerSelection == 'rock')
                return 'You lose!..';
            return 'You WIIN!! Congrats!';
        case 'rock':
            if(computerSelection == 'rock'){
                alert('TIE! Play Again.')
                return whoWins();
            }
            if(computerSelection == 'paper')
                return 'You lose!..';
            return 'You WIIN!! Congrats!';
        default:
            alert('Wrong value.. Play Again!');
            return whoWins();
    }

}


