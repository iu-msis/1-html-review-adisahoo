CREATE DATABASE IF NOT EXISTS booksreview;

USE booksreview;

DROP TABLE IF EXISTS books;

USE booksreview;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(50) UNIQUE NOT NULL,
    author varchar(48),
	pubyear varchar(4),
	publisher varchar(45),
	pagecount int,
	msrp varchar(20)
);

INSERT INTO books (id, title, author, pubyear, publisher, pagecount, msrp) VALUES 
(1, 'Pride and Prejudice', 'Jane Austen', 1813, 'T. Egerton, Whitehall', 250, '$14.99'),
(2, 'Moby Dick', 'Herman Melville', 1851, 'Harper & Brothers', 350, '$20.50'),
(3, 'War and Peace', 'Leo Tolstoy', 1869, 'The Russian Messenger', 200, '$18.60'),
(4, 'The Shining', 'Stephen King', 1977, 'Doubleday', 447, '$15.10'),
(5, 'Cujo', 'Stephen King', 1981, 'Viking Press', 309, '$12.00'),
(6, 'Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 2003, 'Bloomsbury Publishing', 766, '$25.00');