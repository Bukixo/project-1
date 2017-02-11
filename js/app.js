$(() => {

  // const $blue = $('.blue');
  // const $red = $('.red');
  // const $green = $('.green');
  // const $yellow = $('.yellow');

  const $buttons = $('li');
  const playerArray = [];
  const cpuArray = ['blue', 'green', 'red', 'yellow'];

  function random(array) {
  return array[Math.floor(Math.random()*4)];
}

console.log(random(cpuArray));

  $buttons.on('click', (e) => {
    playerArray.push($(e.target).attr('class'));
    // console.log(playerArray, cpuArray, playerArray === cpuArray);
    // if playerArray.length === cpuArray.length
    // check if playerArray and cpuArray are identical
    // if they are generate a random option (red blue green yellow)
    // push it into cpuArray
    // clear the playerArray
  });

  var running = (playerArray.length === cpuArray.length);

  if (running === true) {
  //     //generate random option to push on to cpuArray
      return random(cpuArray);
  //     //clear playerArray
          playerArray = [];
  //     //assign score
              ++1;
    } else {
  //     //Generate random option to push on to cpuArray
      return random(cpuArray);
       alert('Oh no its wrong!');
    }
  }

  ///////////////////Timer//////////////////


//




});
