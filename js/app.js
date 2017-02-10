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

  


  // const sequence = [];
  //
  // const random = function(){
  //   return Math.floor(Math.random() * 9);
  // };
  // random.p



});
