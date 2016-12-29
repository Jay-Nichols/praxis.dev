<?php

$x = 2;
$y = 9;


function global_test() {
	//use global variables in a function by declaring them inside a function with the word "global"
	global $x, $y;
	$x = $x + $y;
}

global_test();

echo $x . PHP_EOL;

//PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.

$a = 3;
$b = 7;

function another_test() {
	$GLOBALS['a'] = $GLOBALS['a'] + $GLOBALS['b']; 
}

another_test();

echo $a . PHP_EOL;



//playing around with string methods

echo strlen("I am counting the length of this string") . PHP_EOL;
echo str_word_count("I am counting the number of words in this string") . PHP_EOL;
echo strrev("This string will now appear backwards") . PHP_EOL;
echo strpos("I'm looking for the position of the desired word", "desired") . PHP_EOL;
echo str_replace("Nickelback", "Led Zeppelin", "Nickelback is the greatest band of all time.") . PHP_EOL;

// a little bit of foreach review:

$color_array = ['green', 'blue', 'yellow', 'orange', 'red'];

foreach ($color_array as $colors) {
	echo "These are the individual colors: $colors\n";
}

echo count($color_array) . PHP_EOL;

$array_length = count($color_array);

for ($i = 0; $i < $array_length; $i++) {
	echo $color_array[$i] . PHP_EOL;
}

$names_array = ["Jay"=>"37", "Max"=>"2", "Erik"=>"35"];

echo $names_array["Jay"] . PHP_EOL;

foreach ($names_array as $name => $age) {
	echo "Name: $name. Age: $age\n";
}
	
?>