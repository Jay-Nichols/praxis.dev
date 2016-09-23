"use strict";

var books = [
	{
		'title': 'Gun, with Occassional Music',
		'author': {
			'firstName': 'Jonathan',
			'lastName': 'Lethem'
		}

	},

	{
		'title': 'The Martian',
		'author': {
			'firstName': 'Andy',
			'lastName': 'Weir'
		}

	},

	{
		'title': 'The Tiger\'s Wife',
		'author': {
			'firstName': 'Tea',
			'lastName': "Obreht"
		}

	},

	{
		'title': 'Flow My Tears, The Policeman Said',
		'author': {
			'firstName': 'Philip',
			'lastName': 'Dick'
		}

	},

	{
		'title': 'Choke',
		'author': {
			'firstName': 'Chuck',
			'lastName': 'Palahniuk'
		}

	}

]

books.forEach(function(book, index) {
	console.log("Book number " + (index + 1) + " is " + book.title + " by " + book.author.firstName + " " + book.author.lastName);
})