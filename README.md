# project-1

# Simon Says!

###GA WDI London - Project 1

#### Simon Says - JPoP VERSION

Once user chooses level and clicks start, the computer will generate a random sequence by lighting up the tiles. The user has to memorise the sequence and then copy it by clicking on the tiles, all whilst being timed for a minute.

#####[Play it here!](https://still-eyrie-91752.herokuapp.com/ "Here!")




#####Rules

1. Carefully watch and memorize the tiles that lighten up.
2. Don't click on any tiles whilst the computer is generating the sequence.
3. Try your best for the whole minute and abstain from the reset button unless you really have to.


####Approach / How it works

An array with all the options was created before hand. The computer then uses that array to randomly choose the options in any given order and then pushes it into it's own array.

As the level increases, the computer generates more options.

The user, after memorizing the will attempt to copy this by clicking on the tiles. By doing this the user pushes each selection into a 'players-array'. Both the 'players'array' and the 'computer array' will be compared to check for a win.

There is only one sound that is triggered upon clicking the 'start' button.



####The build

* HTML 5, CSS and jQuery were used to create this game.
* Audio tag was used to load the sounds.
* The Google Web Font 'Hello Beautiful' and 'Tolo' was used to style the game.




#### Problems & Challenges

The biggest problem I faced was figuring out where to start. I felt quite overwhelmed as there was alot to do. But writing out pseudo codes and drawing out wireframes really helped with the processs.

#### Things that I would do differently or better

The main thing I wanted to do is to make it responsive on mobile devices.

I find the game page also quite boring, so maybe style it abit more.

I also want to incorporate a way to notify the user whenever they go it right without adding an alert. And also once the seuqence has been completed.
