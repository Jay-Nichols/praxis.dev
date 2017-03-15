<?php

?>

<!DOCTYPE html>
<html>
<head>
	<title>Contact Us</title>
</head>
<body>
	<h1>Contact Us</h1>
	<form action="contact-us-send.php" method="POST">
		<ul>
			<li>
				<label for="name">Your Name:</label>
				<input type="text" id="name" name="name">
			</li>
			<li>
				<label for="email">Your Email:</label>
				<input type="text" id="email" name="email">
			</li>
			<li>
				<label for="comment">Your Comment:</label>
				<textarea name="comment" id="comment">
			</li>
			<li>
				<input type="submit" name="submit" value="Click to Send Your Comments">
			<li>
		</ul>
	</form>
</body>
</html>