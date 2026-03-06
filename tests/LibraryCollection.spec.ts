import { describe, it, expect, beforeEach } from 'vitest';
import { LibraryCollection } from '../src/LibraryCollection';
// import BookInfo from '../src/BookInfo';

describe('LibraryCollection', () => {
  let library: LibraryCollection;

  beforeEach(() => {
    library = new LibraryCollection();
  });

  // Begin your solution

    // - Добавляет книгу в коллекцию, возвращает id книги. 
  // Если книга с таким названием уже существует, возвращает ошибку.
  // ==========================================
  // 1.Проверка добавления по happy Path
  it ('expect add book and return id', () => {
    const newId = library.addBook("Война и мир", "Толстой")

    expect(library.bookCollection.size).toBeGreaterThan(0)
    expect(!!newId).toBe(true)
  }) 
  // 2.Проверка если уже существует в базе данных
  
  // 3.Проверка что название и автор в наличии и string
  // ===============================================

  // Удаляет книгу по id книги.
  // ==============================
  // 1. Проверка happy path
  // 2. Проверка что id - string
  // 3. Проверка наличия перед удалением
  // ==================================

  // Возвращает информацию о книге по id.
  // ======================================
  // 1. Проверка happy path
  // 2. Проверка что id - string
  // ==========================================

  // Возвращает список всех книг.
  // ============================================
  // 1. Проверка happy path
  // 2. При пустом списке получаем ошибку
  // ========================================

  // Возвращает количество книг в коллекции.
  // 1. Проверка happy path

  // End your solution
});
