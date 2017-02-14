$(() => {


  // const $blue = $('.blue');
  // const $red = $('.red');
  // const $green = $('.green');
  // const $yellow = $('.yellow');

  const $buttons = $('li');
  let playerArray = [];
  const options = ['blue', 'green', 'red', 'yellow'];
  let cpuArray = [];
  const squares = 4;
  const $start = $('.start');
  const $scoresDiv = $('.scores');
  let score = 0;
  const $timer = $('.timer');
  let time = 5;
  const $reset =$('.reset');
  let timerId = null;



//lights up each button//////

  function lights(){
    console.log(cpuArray);
    for (let i=0; i<cpuArray.length; i++) {
      setTimeout(()=> {
        $(`li.${cpuArray[i]}`).addClass('lit');

        setTimeout(()=> {
          $(`li.${cpuArray[i]}`).removeClass('lit');
        }, 500);

      }, 1000 * i+1);
    }
  }

  //   ////////start timer/////////
  function startTimer() {
    $timer.addClass('active');

    timerId = setInterval(() => {
      time--;
      $timer.html(time);

      if (!time) {
        clearInterval(timerId);
        endGame();
      }
      // cleat the interval with the timerId

    }, 1000);
  }

  // function startTimer() {
  //   timerId = setInterval(() => {
  //     time--;
  //     $timer.html(time);
  //     if (!time) {
  //       console.log('Finish');
  //       clearInterval(timerId);
  //       gameOver();//
  //     }
  //   }, 1000);
  // }


  // Game initializer
  $start.on('click', startGame);

  $reset.on('click', resetGame);

  function resetGame() {
    console.log('END GAME');
    playerArray =[];
    cpuArray = [];
    clearInterval(timerId);
    $scoresDiv.html('');
    time = 5;
    $timer.html(60);
  }

  function startGame() {

    $timer.html(5);
    startTimer();
    createCpuArray();
    $scoresDiv.html('');

  }

  function endGame() {
    if(time === 0) {
      cpuArray = [];
      $buttons.attr('disabled', true);
      console.log('stopped');
    }
  }
  // function endGame() {
  //   cpuArray = [];
  //   playerArray = [];
  //   endTime();
  //   console.log('you have ' + score + ' points!');
  // }
  ////function to generate random number////
  function createCpuArray() {
    cpuArray = [];
    for (let i = 0; i < squares; i++) {
      const color = options[Math.floor(Math.random()*squares)];
      cpuArray.push(color);
      console.log('function to generate random number ' +cpuArray);
    }
    lights();
  }



///////buttons for player////////
  $buttons.on('click', (e) => {
    playerArray.push($(e.target).attr('class'));
    console.log('player buttons ' +playerArray);

    if(playerArray.length === cpuArray.length) {
      checkForWin();
    }
  });



///checks for win/////////////
  function checkForWin() {
    console.log('checking for win...');
    if (playerArray.join() === cpuArray.join()) {
      console.log('player did win!');
      score++;
      $scoresDiv.html(score);
    } else {
      console.log('player did not win');
    }
    playerArray = [];
    setTimeout(createCpuArray, 2000);
  }

});
