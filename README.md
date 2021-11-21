# MyReads Project

## Overview

This is for the final assessment project for Udacity's React Fundamentals course.
It's a small React application to track, organize and search for books through Udacity's provided API.

## TL;DR

To get started right away:

-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## File Structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # The building blocks of the application
    │   ├── Book.js
    │   ├── BookShelf.js
    │   ├── Home.js
    │   ├── Search.js
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # Used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults);
```

-   query: `<String>`
-   maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
