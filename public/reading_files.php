<?php

//reading files

function turnIntoArray($filename){

	$handle = fopen($filename, 'r');
	$contents = fread($handle, filesize($filename));
	$contentsArray = explode("\n", $contents);
	fclose($handle);

	foreach ($contentsArray as $line) {
		$contact = [];
		$line = explode('|', $line);
		$contact['name'] = $line[0];
		$contact['number'] = $line[1];

		$contacts[] = $contact;
	}

	return $contacts;

}

var_dump(turnIntoArray("contacts.txt"));

//writing to files

$nameAndNumber = ['Axl Rose|5553445555', 'Slash|5559098786'];

$filename = "contacts.txt";
$handle = fopen($filename, 'a');
foreach ($nameAndNumber as $contact) {
	fwrite($handle, PHP_EOL . $contact);
}
fclose($handle);


