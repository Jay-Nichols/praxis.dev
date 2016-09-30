<?php


//control structures with PHP 
echo "test" .PHP_EOL;

$a = 4;
$b = -3;

if ($a >= $b) {
	echo "{$a} is greater than {$b}" .PHP_EOL;
}

if ($a !== $b) {
	echo "{$a} is not equal to {$b}" .PHP_EOL;
}


$canSmoke = 18;
$canDrink = 21;
$ageOne = 19;
$ageTwo = 17;
$ageThree = 22;
if ($ageOne >= $canDrink && $ageOne >= $canSmoke) {
	echo "At {$ageOne}, you can legally smoke and drink\n";
} elseif ($ageOne >= $canSmoke && $ageOne <= $canDrink) {
	echo "At {$ageOne}, you can legally smoke, but you can't legally drink.\n";
}

if ($ageTwo >= $canDrink && $ageTwo >= $canSmoke) {
	echo "At {$ageTwo}, you can legally smoke and drink.\n";
} elseif ($ageTwo >= $canSmoke && $ageTwo <= $canDrink) {
	echo "At {$ageTwo}, you can legally smoke but you can't drink.\n";
} else {
	echo "At {$ageTwo}, you can't legally smoke or drink. Go read a comic book, junior.\n";
}

if ($ageThree >= $canDrink && $ageThree >= $canSmoke) {
	echo "At {$ageThree}, you can legally smoke and drink, but you really shouldn't do either.\n";
} elseif ($ageThree >= $canSmoke && $ageThree <= $canDrink) {
	echo "At {$ageThree}, you can legally smoke but you can't drink.\n";
} else {
	echo "At {$ageThree}, you can't legally smoke or drink. Go read a comic book, junior.\n";
}

//while loop

$a = 5;

while ($a <= 10) {
	echo "\$a is equal to {$a}\n";
	$a++;
}

//Do-While loop

$a = 2;

do {
	echo "\$a is equal to {$a}\n";
	$a = $a * 2;
} while ($a <= 2000);

$b = 100;

do {
	echo "\$b is equal to {$b}\n";
	$b = $b - 5;
} while ($b >= -5);



