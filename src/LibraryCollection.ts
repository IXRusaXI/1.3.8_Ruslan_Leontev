import {v4 as idGenerator} from 'uuid';
import { b } from 'vitest/dist/suite-a18diDsI';
import BookInfo from './BookInfo';
// type BookInfo = { id: string; title: string; author: string };

export class LibraryCollection {
  bookCollection: Map<string, BookInfo> = new Map();
  bookTitleSet: Set<string> = new Set();

  // Begin your solution
  
  // - Добавляет книгу в коллекцию, возвращает id книги. 
  // Если книга с таким названием уже существует, возвращает ошибку.
addBook(title: string, author: string): string | Error {
  if (title.length === 0 || author.length === 0) {
    let errorMessage = 'Отсутствует: '

    if (title.length === 0 && author.length === 0) {
      errorMessage += 'название и автор'
    } else if (title.length === 0) {
      errorMessage += 'название'
    } else if (author.length === 0) {
      errorMessage += 'автор'
    }

    throw new Error(errorMessage)
  }

  if (this.bookTitleSet.has(title)) {
    throw new Error('Книга с таким названием уже существует в базе данных')
  }

  const newId = idGenerator()
  const book :BookInfo = {
    id: newId,
    title: title,
    author: author
  }

  this.bookTitleSet.add(title)
  this.bookCollection.set(newId, book)

  return newId
};

// Удаляет книгу по id книги.
removeBook(id: string): void {
  if (this.bookCollection.has(id)) {
    const title = this.bookCollection.get(id)?.title
    
    this.bookCollection.delete(id)
    if (title) {
      this.bookTitleSet.delete(title)
    }
  } else {
    throw new Error('Отсутсвует книга с данным id: ' + id)
  }
};

// Возвращает информацию о книге по id.
getBookInfo(id: string): BookInfo | null {
  if (this.bookCollection.has(id)) {
    const book = this.bookCollection.get(id)
    if (book) {
      return book
    }
  }

  return null
};

// Возвращает список всех книг.
getAllBooks(): Array<BookInfo> {
  let result :BookInfo[] = new Array();

  if (this.bookCollection.size === 0) {
    throw new Error('Список книг пуст')
  }

  this.bookCollection.forEach((book) => {
    result.push(book)
  })

  return result
};

// Возвращает количество книг в коллекции.
getBooksCount(): number {
  return this.bookCollection.size;
};

  // End your solution
}
