var simonSays = simonSays || {};

simonSays.playerArray = [];
simonSays.cpuArray = [];
simonSays.score = 0;
simonSays.time = 60;
simonSays.timerId = null;
simonSays.levelChoice = null;
simonSays.squares = 0;
/////////functions///////////////
simonSays.playerButton = function playerButton(e) {
  this.playerArray.push($(e.target).attr('class'));
  if(this.playerArray.length === this.cpuArray.length) {
    simonSays.checkForWin();
  }
};

simonSays.starterPage = function starterPage(e) {
  this.levelChoice = $(e.target).attr('id');
  simonSays.levelSelection();
  simonSays.moveToSelect();
};
//////moving from game page to starter page /////

simonSays.moveToLevels = function moveToLevels(){
  $('html, body').animate({
    scrollTop: this.$startingPage.offset().top
  }, 1000);
  this.$modal.hide();
};

//////moving from starter page to game page /////
simonSays.moveToSelect = function moveToSelect(){
  $('html, body').animate({
    scrollTop: this.$gamePage.offset().top
  }, 1000);
};

//lights up each button//////

simonSays.lights = function lights(){
  for (let i=0; i<this.cpuArray.length; i++) {
    setTimeout(()=> {
      $(`li.${this.cpuArray[i]}`).addClass('lit');
      setTimeout(()=> {
        $(`li.${this.cpuArray[i]}`).removeClass('lit');
      }, 500);
    }, 1000 * i+1);
  }
};

//   ////////start timer/////////
simonSays.startTimer = function startTimer() {
  this.$timer.addClass('active');
  this.timerId = setInterval(() => {
    this.time--;
    this.$timer.html(this.time);
    if (!this.time) {
      clearInterval(this.timerId);
      this.$buttons.attr('disabled', true);
      this.endGame();
    }
  }, 1000);
};


////////LEVEL SELECTION//////
simonSays.levelSelection = function levelSelection() {
  if(this.levelChoice === 'Level_one') {
    this.squares = 4;
  } else if (this.levelChoice === 'Level_two'){
    this.squares = 6;
  } else if (this.levelChoice === 'Level_three'){
    this.squares = 8;
  } else {
    console.log('select level');
  }
};

simonSays.resetGame = function resetGame() {
  this.playerArray =[];
  this.cpuArray = [];
  clearInterval(this.timerId);
  this.$scoresDiv.html('');
  this.time = 60;
  this.$timer.html(60);
  this.$start.prop('disabled', false);
};

simonSays.startGame = function startGame() {
  this.$timer.html(60);
  simonSays.startTimer();
  setTimeout(this.createCpuArray.bind(this), 2000);
  // createCpuArray();
  this.$scoresDiv.html('');
  this.$start.prop('disabled', true);
  simonSays.playMusic();

};

simonSays.createCpuArray = function createCpuArray() {
  this.cpuArray = [];
  for (let i = 0; i < this.squares; i++) {
    const color = this.options[Math.floor(Math.random()*this.squares)];
    this.cpuArray.push(color);
  }
  this.lights();
};

simonSays.endGame = function endGame() {
  if(this.time === 0) {
    this.cpuArray = [];
    let image;
    this.$buttons.attr('disabled', true);
    if (this.score < 1) {
      image = 'https://media.giphy.com/media/IRqY3RE6zg6He/giphy.gif';
    } else {
      image = 'http://24.media.tumblr.com/tumblr_m7y2bqNnLc1rzy67oo1_500.gif ';
    }
    this.$modal.html(`
      <p>Your score is ${this.score}</p>
      <img src="${image}">
      <button class="modal-button">Play again?</button>
    `);
    this.$modal.show();
    this.score = 0;
  }
};

///checks for win/////////////
simonSays.checkForWin = function checkForWin() {
  if (this.playerArray.join() === this.cpuArray.join()) {
    this.score++;
    this.$scoresDiv.html(this.score);
  }
  this.playerArray = [];
  setTimeout(simonSays.createCpuArray.bind(this), 2000);
};

////////////audio////////////////////
simonSays.playMusic = function playMusic() {
  this.$audio.get(0).src ='sounds/Super-Outro.mp3';
  this.$audio.get(0).play();
};

simonSays.setup = function setup() {
  this.$buttons = $('li');
  this.options = ['blue', 'green', 'red', 'yellow', 'blue', 'green', 'red', 'yellow'];
  this.$start = $('.start');
  this.$scoresDiv = $('.scores');
  this.$timer = $('.timer');
  this.$reset =$('.reset');
  this.$levelButton = $('.level-button');
  this.$modal = $('.modal');
  this.$gamePage = $('.game-page');
  this.$startingPage = $('.starting-page');
  this.$audio = $('#audio');

  // Game initializer
  this.$start.on('click', simonSays.startGame.bind(this));
  this.$reset.on('click', simonSays.resetGame.bind(this));
  this.$modal.on('click', 'button', simonSays.moveToLevels.bind(this));
  this.$buttons.on('click', simonSays.playerButton.bind(this));
  this.$levelButton.on('click', simonSays.starterPage.bind(this));
};

$(simonSays.setup.bind(simonSays));
