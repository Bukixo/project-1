$(() => {

  // const $blue = $('.blue');
  // const $red = $('.red');
  // const $green = $('.green');
  // const $yellow = $('.yellow');

  const $buttons = $('li');
  const playerArray = [];
  const cpuArray = ['blue', 'blue', 'red'];

  $buttons.on('click', (e) => {
    playerArray.push($(e.target).attr('class'));
    // console.log(playerArray, cpuArray, playerArray === cpuArray);
    // if playerArray.length === cpuArray.length
    // check if playerArray and cpuArray are identical
    // if they are generate a random option (red blue green yellow)
    // push it into cpuArray
    // clear the playerArray
    

  });

  // $blue.on('click',function (e){
  //  const $blue =(e.target);
  //   console.log('blue');
  // });
  //
  // $red.on('click', function(e) {
  //   const $red = (e.target);
  //   console.log('red');
  // });
  //
  // $green.on('click', function(e) {
  //   const green = (e.target);
  //   console.log('green');
  // });
  //
  // $yellow.on('click', function(e) {
  // const $yellow = (e.target);
  //   console.log('yellow');
  // });

  var running = (playerArray.length === cpuArray.length);

  while (running === true) {
    if (playerArray.join === cpuArray.join){
      console.log(playerArray);
      //generate random option to push on to cpuArray
      //clear playerArray
      //assign or
    } else {
      //Generate random option to push on to cpuArray
      alert('Oh no its wrong!');
    }
  }

  // const sequence = [];
  //
  // const random = function(){
  //   return Math.floor(Math.random() * 9);
  // };
  // random.p



});
