$(() => {


  const $buttons = $('li');
  let playerArray = [];
  const options = ['blue', 'green', 'red', 'yellow', 'blue', 'green', 'red', 'yellow'];
  let cpuArray = [];
  const $start = $('.start');
  const $scoresDiv = $('.scores');
  let score = 0;
  const $timer = $('.timer');
  let time = 60;
  const $reset =$('.reset');
  let timerId = null;
  let levelChoice = null;
  const $levelButton = $('.level-button');
  let squares = 0;
  const $modal = $('.modal');
  const $gamePage = $('.game-page');
  const $startingPage = $('.starting-page');
  const $audio = $('#audio');

//////moving from starter page to game page /////
  function moveToSelect(){
    $('html, body').animate({
      scrollTop: $gamePage.offset().top
    }, 1000);
  }

//////moving from game page to starter page /////

  function moveToLevels(){
    $('html, body').animate({
      scrollTop: $startingPage.offset().top
    }, 1000);
    $modal.hide();
  }

////////LEVEL SELECTION//////
  function levelSelection() {
    if(levelChoice === 'Level_one') {
      squares = 4;
      console.log('level 1 selected');
    } else if (levelChoice === 'Level_two'){
      squares = 6;
      console.log('level 2 selected');
    } else if (levelChoice === 'Level_three'){
      squares = 8;
      console.log('level 3 selected');
    } else {
      console.log('select level');
    }
  }



//////starter page//////
  $levelButton.on('click', (e) => {
    levelChoice = $(e.target).attr('id');
    console.log(levelChoice);
    levelSelection();
    moveToSelect();
  });

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
        $buttons.attr('disabled', true);
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

  $modal.on('click', 'button', moveToLevels);

  function resetGame() {
    console.log('END GAME');
    playerArray =[];
    cpuArray = [];
    clearInterval(timerId);
    $scoresDiv.html('');
    time = 60;
    $timer.html(60);
    $start.prop('disabled', false);
  }

  function startGame() {

    $timer.html(60);
    startTimer();
    setTimeout(createCpuArray, 2000);
    // createCpuArray();
    $scoresDiv.html('');
    $start.prop('disabled', true);
    playMusic();

  }

  function endGame() {
    if(time === 0) {
      cpuArray = [];
      let image;
      $buttons.attr('disabled', true);
      if (score < 1) {
        image = 'https://media.giphy.com/media/IRqY3RE6zg6He/giphy.gif';
      } else {
        image = 'http://24.media.tumblr.com/tumblr_m7y2bqNnLc1rzy67oo1_500.gif ';
      }
      $modal.html(`
        <p>Your score is ${score}</p>
        <img src="${image}">
        <button class="modal-button">Play again?</button>
      `);
      $modal.show();
      score = 0;
    }
  }
  // function endGame() {
  //   cpuArray = [];
  //   playerArray = [];
  //   endTime();
  //   console.log('you have ' + score + ' points!');
  // }
  //function to generate random number////
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
      alert('player did win!');
      score++;
      $scoresDiv.html(score);
    } else {
      alert('DIDNT WIN BOOO');
    }
    playerArray = [];
    setTimeout(createCpuArray, 2000);
  }

  ////////////audio////////////////////
  function playMusic() {
    $audio.get(0).src ='sounds/Super-Outro.mp3';
    $audio.get(0).play();
  }

});
