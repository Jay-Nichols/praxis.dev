<?php

//for loops

for ($a = 1; $a <= 33; $a += 2) {
	echo "\$a has a value of {$a}\n";
}

$numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];
for ($i = 0; $i < count($numbers); $i++) {
    echo "At index {$i}, the \$numbers array has a value of {$numbers[$i]}\n";
}

//fizzbuzz

for ($i = 1; $i <= 100; $i++) {
	if ($i % 3 == 0 && $i % 5 == 0) {
		echo "FizzBuzz\n";
	} elseif ($i % 5 == 0) {
		echo "Buzz\n";
	} elseif ($i % 3 == 0) {
		echo "Fizz\n";
	} else {
		echo "{$i}\n";
	}

}



//now with foreach

$numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];

foreach ($numbers as $value) {
	echo "\$numbers has a value of {$value}\n";
}

//multiply by 10
$numbers = [1, 2, 3, 4, 5];

foreach ($numbers as $number) {
	$timesTen = $number * 10;
	echo "$number X 10 is {$timesTen}\n";
}

$animalTypes = array('dogs', 'cats', 'birds', 'narwhals');
foreach ($animalTypes as $animal) {
    echo "Old McDonald had a farm, and on that farm he raised some {$animal}\n";
}

$stuff= [1, 'pirate\'s eye', 'receipt', true, (1 + 9), 1.55, 'zodiac'];

foreach ($stuff as $item) {
	if (is_bool($item)) {
		echo "{$item} is a boolean.\n";
	} elseif (is_numeric($item)) {
		echo "{$item} is a number.\n";
	} elseif (is_string($item)) {
		echo "{$item} is a string.\n";
	} elseif (is_float($item)) {
		echo "{item} is a double.\n";
	} else {
		echo "I have no idea what {$item} is.\n";
	}
}

//foreach with keys

$books = array(
    'The Hobbit' => array(
        'published' => 1937,
        'author' => 'J. R. R. Tolkien',
        'pages' => 310
    ),
    'Game of Thrones' => array(
        'published' => 1996,
        'author' => 'George R. R. Martin',
        'pages' => 835
    ),
    'The Catcher in the Rye' => array(
        'published' => 1951,
        'author' => 'J. D. Salinger',
        'pages' => 220
    ),
    'A Tale of Two Cities' => array(
        'published' => 1859,
        'author' => 'Charles Dickens',
        'pages' => 544
    )
);

foreach ($books as $title => $bookInfo) {
	echo "{$title}\n";
	foreach ($bookInfo as $key => $value) {
		echo "{$key}" . ": " . "{$value}\n"; 
	}
}

foreach ($books as $title => $bookInfo) {
	if ($bookInfo['published'] > 1950) {
		echo "{$title}\n";
		foreach ($bookInfo as $key => $value) {
			echo "{$key}" . ": " . "{$value}\n"; 
		}
	}
}

//break and continue

for ($i = 1; $i <= 100; $i++) {
	if ($i % 2 == 1) {
		continue;
	} else {
		echo $i .PHP_EOL;
	}
}

for ($i = 1; $i <= 1000; $i++) {
	echo $i .PHP_EOL;
	if ($i == 18) {
		break;
	}
}

//switch statements

 date_default_timezone_set('America/Chicago');

 
 $dayOfWeek = date('N');

 switch ($dayOfWeek) {
 	case 1: 
 		echo "Monday\n";
 		break;
 	case 2: 
 		echo "Tuesday\n";
 		break;
 	case 3: 
 		echo "Wednesday\n";
 		break;
 	case 4: 
 		echo "Thursday\n";
 		break;
 	case 5: 
 		echo "Friday\n";
 		break;
 	case 6: 
 		echo "Saturday\n";
 		break;
 	case 7: 
 		echo "Sunday\n";
 		break;

 }



