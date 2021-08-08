{
const playGame = function(playerInput){
  clearMessages()


  const displayResult = function(argComputerMove, argPlayerMove){
      printMessage('Mój ruch to ' + argComputerMove + ' ,a Twoje zagranie to ' + argPlayerMove);

      // DRAW
      if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Mamy remis Zagrajmy jeszcze raz!!');
      }
      if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Mamy remis Zagrajmy jeszcze raz!!');
      }
      if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Mamy remis! Zagrajmy jeszcze raz!');
      }

      // UNKNOWN PLAY
      if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz prawidłowy ruch i grajmy dalej!');
      }
      if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz prawidłowy ruch i grajmy dalej!');
      }
      if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz prawidłowy ruch i grajmy dalej!');
      }

      // OTHER PLAY
      if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
      }
      if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
      if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
      }
      if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
      }
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
  }

  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier';
    }
    if(argMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam tego ruchu ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  // COMPUTER MOVE

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const argComputerMove = getMoveName(randomNumber);


  // PLAYER MOVE

  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  const argPlayerMove = getMoveName(playerInput);



  // SHOWING THE RESULT

  const gameResult = displayResult(argComputerMove, argPlayerMove);

  console.log('Komputer wybrał liczbe ' + randomNumber + ' /// Gracz wybrał liczbe ' + playerInput);
  console.log('Ruch komputera to  ' + argComputerMove + ' /// Rucha gracza to ' + argPlayerMove);
  }

// BUTTONS FUNCTIONS

  const buttonRockClicked = function(){
    playGame(1)
  }
  const testButtonRock = document.getElementById('play-rock');
  testButtonRock.addEventListener('click', buttonRockClicked);

  const buttonPaperClicked = function(){
    playGame(2)
  }
  const testButtonPaper = document.getElementById('play-paper');
  testButtonPaper.addEventListener('click', buttonPaperClicked);

  const buttonScissorsClicked = function(){
    playGame(3)
  }
  const testButtonScissors = document.getElementById('play-scissors');
  testButtonScissors.addEventListener('click', buttonScissorsClicked);
}
