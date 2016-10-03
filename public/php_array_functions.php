<?php

//array functions practice

$data = ['firstName' => 'Jay', 'something' => 'who cares?', 'anotherName' => 'Matt', 'name' => 'Erik', 'something' => 'what?', 'something' => 'the great wide open', 'random fact' => 'there are mountain lions in San Antonio'];

ksort($data);
print_r($data);


krsort($data);
print_r($data);

sort($data);
print_r($data);

rsort($data);
print_r($data);

shuffle($data);
print_r($data);

//searching in an array

$results = array_search('Matt', $data);

var_dump($results);

if ($results) {
	echo $data[$results] .PHP_EOL;
}

$randomCollection = array('guitar pick', 'radon leak', 'americana', 'submarine');


$randomThing = 'radon leak';
$searchResult = array_search($randomThing, $randomCollection);

if ($randomThing) {
	echo $randomCollection[$searchResult] .PHP_EOL;
} else {
	echo "{$randomThing} is not in the \$randomCollection array.";
}

//push, pop, shift, unshift

array_push($randomCollection, 'Dorito', 'bunion', 'clam chowder');
print_r($randomCollection);

$lastItem = array_pop($randomCollection);
print_r($randomCollection);
echo "{$lastItem} was the last item removed.\n";

$firstItemRemoved = array_shift($randomCollection);
print_r($randomCollection);
echo $firstItemRemoved .PHP_EOL;

array_unshift($randomCollection, 'hair', 'cannonball');
print_r($randomCollection);


//implode and explode
$randomFood = "key lime pie, pizza, yogurt, apples, cereal";

$foodArray = explode(',', $randomFood);

print_r($foodArray);

$backToArray = implode(', ', $foodArray);

print_r($backToArray);
