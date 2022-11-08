# Book Notes App

A client-based app for storing highlights and notes taken while reading books.

## Background

This app was born from seeing the struggles of people wanting to simply taking notes while reading books.

Too often, I see people who aren't app-savvy struggle with storing the notes that they take while reading books. While there are many apps out there that offer integrated data-transfers across apps, these people might not be interested in spending the time to set up the necessary workflows for such notetaking to occur.

Furthermore, many book-tracking apps out there provide far too much complexity when choosing books to add to the library, such as differentiating books across multiple versions.

As such, I decided to create a simple app that focuses on two aspects:

1. A simple and clear collection of books.
2. Simple notetaking — just the book highlights and your notes.

**Highlights vs Notes**

- Highlights: The text that you extract from a book.
- Notes: Your thoughts based on the highlighted passage.

## How it works

All data is managed locally in your browser by the app. It uses Redux for state management and localStorage for data persistance across sessions.

To reduce the number of writes to the localStorage (which can be costly due to parsing the state object into JSON), saves are only executed when the user clicks on the _Save Collection_ button.

The only time the app communicates with external sources is when you perform a search — the app will fetch relevant data from the Open Library API.

## Dependencies

- [Open Library API](https://openlibrary.org/developers/api)
