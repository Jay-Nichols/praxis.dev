<?php

//redoing high/low for the hell of it


$randomNumber = mt_rand(1, 100);
$counter = 0;
$playersGuess = 0;

do {
	do {
		fwrite(STDOUT, 'Guess a number between 1 and 100, doofus. ');
		$playersGuess = trim(fgets(STDIN));
	} while ($playersGuess < 1 || $playersGuess > 100);
	
	if ($playersGuess > $randomNumber) {
		fwrite(STDOUT, 'You\'re higher than Keith Richards. Guess a lower number. ');
	} elseif ($playersGuess < $randomNumber) {
		fwrite(STDOUT, 'Aim higher. I believe in you! ');
	} else {
		echo "Yeah, you guessed it. But I helped you a lot.";
	}

	$counter++;
} while ($randomNumber != $playersGuess);

fwrite(STDOUT, "It took you {$counter} hints to guess the correct number");

exit(0);