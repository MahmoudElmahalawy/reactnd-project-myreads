import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Book from "./Book";

import { search } from "../BooksAPI";

const Search = ({ updateBookShelf }) => {
	const [searchResult, setSearchResult] = useState(null);

	const searchBooks = (e) => {
		search(e.target.value).then((result) => {
			if (result?.error) return setSearchResult([]);
			setSearchResult(result);
		});
	};
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					{/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
					<input type="text" placeholder="Search by title or author" onChange={searchBooks} />
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{searchResult &&
						searchResult?.map((book) => (
							<li key={book.id}>
								<Book book={book} updateBookShelf={updateBookShelf} />
							</li>
						))}
				</ol>
			</div>
		</div>
	);
};

Search.propTypes = {
	updateBookShelf: PropTypes.func.isRequired,
};

export default Search;
