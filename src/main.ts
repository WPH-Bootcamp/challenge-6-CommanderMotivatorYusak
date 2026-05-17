// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

import { addBook, displayBooks, updateAvailability, searchBooks } from './functions/bookManager';

// Mulai pengujian di bawah ini
console.log("--- Menguji Aplikasi Manajemen Buku ---");

// 1. Tambah beberapa buku
addBook("C++ Primer", "Stanley B. Lippman", 2012, "Programming");
addBook("Clean Code", "Robert C. Martin", 2008, "Software Engineering");

// 2. Tampilkan semua buku
displayBooks();

// 3. Cari buku
searchBooks("clean");

// 4. Ubah ketersediaan buku
updateAvailability(1, false);

// 5. Tampilkan ulang untuk melihat perubahan status
displayBooks();