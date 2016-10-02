<?php
function inspect($item) {
  if (is_null($item)) {
        echo 'The value is NULL.';
    } elseif (is_array($item)) {
        echo 'The value is an ' . (empty($item) ? 'empty ' : '') . 'array.';
    } elseif (is_bool($item)) {
        echo 'The boolean is ' . ($item ? 'TRUE' : 'FALSE') . '.';
    } elseif (is_string($item)) {
        echo 'The string is ' . (empty($item) ? 'empty' : "\"$item\"") . '.';
    } else {
        echo 'The ' . gettype($item) . ' is ' . $item . '.';
    }
}


$emptyArray = [];

inspect(true);
inspect(12);
inspect(1.55);
inspect("false");
inspect("bone");
inspect($emptyArray);