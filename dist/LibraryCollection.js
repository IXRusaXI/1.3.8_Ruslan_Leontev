"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryCollection = void 0;
const uuid_1 = require("uuid");
// type BookInfo = { id: string; title: string; author: string };
class LibraryCollection {
    bookCollection = new Map();
    bookTitleSet = new Set();
    // Begin your solution
    // - Добавляет книгу в коллекцию, возвращает id книги. 
    // Если книга с таким названием уже существует, возвращает ошибку.
    addBook(title, author) {
        if (this.bookTitleSet.has(title)) {
            throw new Error('Книга с таким названием уже существует в базе данных');
        }
        const newId = (0, uuid_1.v4)();
        const book = {
            id: newId,
            title: title,
            author: author
        };
        this.bookTitleSet.add(title);
        this.bookCollection.set(newId, book);
        return newId;
    }
    ;
    // Удаляет книгу по id книги.
    removeBook(id) {
        if (this.bookCollection.has(id)) {
            const title = this.bookCollection.get(id)?.title;
            this.bookCollection.delete(id);
            if (title) {
                this.bookTitleSet.delete(title);
            }
        }
        else {
            throw new Error('Отсутсвует книга с данным id: ' + id);
        }
    }
    ;
    // Возвращает информацию о книге по id.
    getBookInfo(id) {
        if (this.bookCollection.has(id)) {
            const book = this.bookCollection.get(id);
            if (book) {
                return book;
            }
        }
        return null;
    }
    ;
    // Возвращает список всех книг.
    getAllBooks() {
        let result = new Array();
        if (this.bookCollection.size === 0) {
            throw new Error('Список книг пуст');
        }
        this.bookCollection.forEach((book) => {
            result.push(book);
        });
        return result;
    }
    ;
    // Возвращает количество книг в коллекции.
    getBooksCount() {
        return this.bookCollection.size;
    }
    ;
}
exports.LibraryCollection = LibraryCollection;
