import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";

const Home = ({ updateBookShelf, allBooks, booksCurrentlyReading, booksRead, booksWantToRead }) => {
	// state = {
	// 	/**
	// 	 * TODO: Instead of using this state variable to keep track of which page
	// 	 * we're on, use the URL in the browser's address bar. This will ensure that
	// 	 * users can use the browser's back and forward buttons to navigate between
	// 	 * pages, as well as provide a good URL they can bookmark and share.
	// 	 */
	// 	showSearchPage: false,
	// };
	// const [showSearchPage, setShowSearchPage] = useState(false);

	return (
		<div className="app">
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{allBooks && (
							<div>
								<BookShelf
									books={booksCurrentlyReading}
									bookShelfTitle={"Currently Reading"}
									updateBookShelf={updateBookShelf}
								/>
								<BookShelf
									books={booksWantToRead}
									bookShelfTitle={"Want to Read"}
									updateBookShelf={updateBookShelf}
								/>
								<BookShelf
									books={booksRead}
									bookShelfTitle={"Read"}
									updateBookShelf={updateBookShelf}
								/>
							</div>
						)}
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	updateBookShelf: PropTypes.func.isRequired,
	allBooks: PropTypes.array,
	booksCurrentlyReading: PropTypes.array,
	booksRead: PropTypes.array,
	booksWantToRead: PropTypes.array,
};

export default Home;
