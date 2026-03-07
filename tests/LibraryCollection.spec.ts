import { describe, it, expect, beforeEach, test } from 'vitest';
import { LibraryCollection } from '../src/LibraryCollection';
import BookInfo from '../src/BookInfo';

describe('LibraryCollection', () => {
  let library: LibraryCollection;

  beforeEach(() => {
    library = new LibraryCollection();
  });

  // Begin your solution

  it ('expect add book and return id', () => {
    const newId = library.addBook("Война и мир", "Толстой")

    expect(library.bookCollection.size).toBeGreaterThan(0)
    expect(!!newId).toBe(true)
  }) 

  it ('expect throw error then adding existing book', () => {
    const title = 'test';
    const author = 'testAuthor'

      library.addBook(title, author)

      expect(() => library.addBook(title, author)).toThrowError(Error)
      expect(() => library.addBook(title, author)).toThrowError(
        'Книга с таким названием уже существует в базе данных'
      )
  })

  it ('expect throw error then adding book with missing title', () => {
    expect(() => library.addBook('' ,'Автор')).toThrowError(Error)
    expect(() => library.addBook('' ,'Автор')).toThrowError('Отсутствует: название')
  })

  it ('expect throw error then adding book with missing author', () => {
    expect(() => library.addBook('Название' ,'')).toThrowError(Error)
    expect(() => library.addBook('Название' ,'')).toThrowError('Отсутствует: автор')
  })

  it ('expect throw error then adding book with missing title and author', () => {
    expect(() => library.addBook('' ,'')).toThrowError(Error)
    expect(() => library.addBook('' ,'')).toThrowError('Отсутствует: название и автор')
  })

  it ('expect delete book with provided id', () => {
    const testTitleSet = new Set<string>()
    const testBookCollection = new Map<string, BookInfo>()
    const book :BookInfo = {
      id: 'testId',
      title: 'testTitle',
      author: 'testAuthor'
    }

    testTitleSet.add(book.title)
    if (book.id) testBookCollection.set(book.id, book)

    library.bookCollection = testBookCollection
    library.bookTitleSet = testTitleSet

    library.removeBook('testId')

    expect(library.bookCollection.size).toBe(0)
    expect(library.bookTitleSet.size).toBe(0)
  })

  it ('expect throw error then delete non-existend book', () => {
    const id = 'someId'

    expect(() => library.removeBook(id)).toThrowError('Отсутсвует книга с данным id: ' + id)
  })

  it ('expect return correct book info with provided id', () => {
    const testTitleSet = new Set<string>()
    const testBookCollection = new Map<string, BookInfo>()
    const book :BookInfo = {
      id: 'testId',
      title: 'testTitle',
      author: 'testAuthor'
    }

    if (book.id) testBookCollection.set(book.id, book)
    library.bookCollection = testBookCollection

    const testResult = library.getBookInfo('testId')
    expect(library.getBookInfo('testId')).toBe(book)
  })

  it ('expect return null when ask non-existend book', () => {
    const id = 'someId'

    expect(library.getBookInfo(id)).toBe(null)
  })

  it ('expect return filled book list', () => {
    const testBookCollection = new Map<string, BookInfo>()
    const book1 :BookInfo = {
      id: '1',
      title: 'title_1',
      author: 'author_1'
    }
    const book2 :BookInfo = {
      id: '2',
      title: 'title_2',
      author: 'author_2'
    }
    const book3 :BookInfo = {
      id: '3',
      title: 'title_3',
      author: 'author_3'
    }

    const bookList = new Array<BookInfo>()
    bookList.push(book1)
    bookList.push(book2)
    bookList.push(book3)

    bookList.forEach((book) => {
      if (book.id) testBookCollection.set(book.id, book)
    })

    library.bookCollection = testBookCollection

    expect(library.getAllBooks()).toStrictEqual(bookList)
  })

  it ('expect throw error then getAllBooks from empty collection', () => {
    expect(() => library.getAllBooks()).toThrowError('Список книг пуст')
  })

  it ('expect return actual count of books', () => {
    expect(library.getBooksCount()).toBe(0)

    const testBookCollection = new Map<string, BookInfo>()
    const book :BookInfo = {
      id: '1',
      title: 'title',
      author: 'author'
    }

    if (book.id) testBookCollection.set(book.id, book)
    library.bookCollection = testBookCollection

    expect(library.getBooksCount()).toBe(1)
  })

  // End your solution
});
