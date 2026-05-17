// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { Book } from '../types';
import { books, nextId } from '../data/books';

// 1. Function to add a new book
export function addBook(title: string, author: string, year: number, genre: string): void {
  const newBook: Book = {
    id: nextId,
    title,
    author,
    year,
    genre,
    isAvailable: true // New books are available by default
  };
  books.push(newBook);
  
  console.log(`Sukses menambahkan buku: "${title}"`);
}

// 2. Function to display all books
export function displayBooks(): void {
  if (books.length === 0) {
    console.log("Tidak ada buku di dalam perpustakaan.");
    return;
  }
  console.log("=== Daftar Buku ===");
  books.forEach(b => {
    console.log(`[ID: ${b.id}] ${b.title} oleh ${b.author} (${b.year}) - ${b.isAvailable ? 'Tersedia' : 'Dipinjam'}`);
  });
}

// 3. Function to update book status (isAvailable)
export function updateAvailability(id: number, status: boolean): void {
  const book = books.find(b => b.id === id);
  if (book) {
    book.isAvailable = status;
    console.log(`Status buku ID ${id} diperbarui menjadi: ${status ? 'Tersedia' : 'Dipinjam'}`);
  } else {
    console.log(`Buku dengan ID ${id} tidak ditemukan!`);
  }
}

// 4. Function to search for books by title or author
export function searchBooks(query: string): void {
  const lowercaseQuery = query.toLowerCase();
  const results = books.filter(b => 
    b.title.toLowerCase().includes(lowercaseQuery) || 
    b.author.toLowerCase().includes(lowercaseQuery)
  );

  if (results.length === 0) {
    console.log(`Tidak ada buku yang cocok dengan kata kunci: "${query}"`);
    return;
  }
  console.log(`=== Hasil Pencarian untuk "${query}" ===`);
  results.forEach(b => console.log(`- ${b.title} (${b.author})`));
} 