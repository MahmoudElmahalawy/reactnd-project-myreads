import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookShelf = ({ books, bookShelfTitle, updateBookShelf }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{bookShelfTitle}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books &&
						books.map((book) => (
							<li key={book.id}>
								<Book book={book} updateBookShelf={updateBookShelf} />
							</li>
						))}
				</ol>
			</div>
		</div>
	);
};

BookShelf.propTypes = {
	updateBookShelf: PropTypes.func.isRequired,
	bookShelfTitle: PropTypes.string.isRequired,
	books: PropTypes.array,
};

export default BookShelf;
