import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Search from "./components/Search";

import { getAll, update } from "./BooksAPI";

const BooksApp = () => {
	const [allBooks, setAllBooks] = useState(null);

	const [booksCurrentlyReading, setBooksCurrentlyReading] = useState(null);
	const [booksRead, setBooksRead] = useState(null);
	const [booksWantToRead, setBooksWantToRead] = useState(null);

	const [updateCount, setUpdateCount] = useState(0);

	const updateBookShelf = (book, shelf) => {
		// const books = [...allBooks];
		// const bookIndex = books.findIndex((b) => b.id === book.id);

		// if (bookIndex === -1) {
		// 	book.shelf = shelf;
		// 	books.push(book);
		// } else {
		// 	books[bookIndex].shelf = shelf;
		// }

		// setAllBooks(books);
		update(book, shelf);
		setUpdateCount((curCount) => curCount + 1);
	};

	useEffect(() => {
		getAll().then((books) => {
			setAllBooks(books);
			setBooksCurrentlyReading(books.filter((book) => book.shelf === "currentlyReading"));
			setBooksRead(books.filter((book) => book.shelf === "read"));
			setBooksWantToRead(books.filter((book) => book.shelf === "wantToRead"));
		});
	}, [updateCount]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Home
							updateBookShelf={updateBookShelf}
							updateCount={updateCount}
							setAllBooks={setAllBooks}
							allBooks={allBooks}
							booksCurrentlyReading={booksCurrentlyReading}
							booksRead={booksRead}
							booksWantToRead={booksWantToRead}
						/>
					}
				/>
				<Route exact path="/search" element={<Search updateBookShelf={updateBookShelf} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default BooksApp;
