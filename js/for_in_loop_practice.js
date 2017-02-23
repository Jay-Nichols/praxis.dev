"use strict";

var books = {}
	books.one = {
		title: 'Gun, with Occassional Music',
		author: {
			firstName: 'Jonathan',
			lastName: 'Lethem'
		}

	};

	books.two = {
		title: 'The Martian',
		author: {
			firstName: 'Andy',
			lastName: 'Weir'
		}

	};

	books.three = {
		title: 'The Tiger\'s Wife',
		author: {
			firstName: 'Tea',
			lastName: "Obreht"
		}

	};

	books.four = {
		title: 'Flow My Tears, The Policeman Said',
		author: {
			firstName: 'Philip',
			lastName: 'Dick'
		}

	};

	books.five = {
		title: 'Choke',
		author: {
			firstName: 'Chuck',
			lastName: 'Palahniuk'
		}

	};





var booksArray = function(books) {
	for (var title in books) {
		console.log(books);
	}
}

