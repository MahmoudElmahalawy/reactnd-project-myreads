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
		book.shelf = shelf;
		const updatedBooks = [...allBooks, book];

		const categorizeBooks = (bookShelvesObj, bookShelf) => {
			return bookShelvesObj[bookShelf].map((id) => updatedBooks.find((book) => book.id === id));
		};

		update(book, shelf).then((bookShelves) => {
			const crb = categorizeBooks(bookShelves, "currentlyReading");
			const rb = categorizeBooks(bookShelves, "read");
			const wtrb = categorizeBooks(bookShelves, "wantToRead");

			setBooksCurrentlyReading(crb);
			setBooksRead(rb);
			setBooksWantToRead(wtrb);

			setAllBooks([...crb, ...rb, ...wtrb]);
			setUpdateCount((curCount) => curCount + 1);
		});
	};

	useEffect(() => {
		getAll().then((books) => {
			setAllBooks(books);
			setBooksCurrentlyReading(books.filter((book) => book.shelf === "currentlyReading"));
			setBooksRead(books.filter((book) => book.shelf === "read"));
			setBooksWantToRead(books.filter((book) => book.shelf === "wantToRead"));
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Home
							allBooks={allBooks}
							updateCount={updateCount}
							booksCurrentlyReading={booksCurrentlyReading}
							booksWantToRead={booksWantToRead}
							booksRead={booksRead}
							setAllBooks={setAllBooks}
							updateBookShelf={updateBookShelf}
						/>
					}
				/>
				<Route
					exact
					path="/search"
					element={<Search allBooks={allBooks} updateBookShelf={updateBookShelf} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default BooksApp;
