                        LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1



Nama  : Oktavia Doloksaribu
NIM   : 41426011
Prodi : DIV Teknologi Rekayasa Perangkat Lunak




1. Cara Menjalankan
Untuk menjalankan proyek ini, buka folder di VS Code, klik kanan pada file index.html lalu pilih "Open with Live Server", kemudian buka browser, tekan Fn F12 atau klik kanan lalu pilih Inspect, dan masuk ke tab Console untuk melihat hasil jalannya kode.

2. Penjelasan Perubahan
- Validasi Fungsi Perhitungan hitungTotal.
* Membuat fungsi hitungTotal(jumlah, harga) untuk melakukan validasi input sebelum menghitung total.
* Validasi jumlah: Menggunakan Number.isInteger(jumlah) serta memastikan nilainya 
* Validasi harga: Menggunakan Number.isFinite(harga) serta memastikan harganya tidak negatif
* Jika input tidak memenuhi kriteria validasi, fungsi akan mengembalikan nilai null. Jika valid, fungsi mengembalikan hasil.

- Pengolahan Data Koleksi kegiatan
* Mengolah array of objects kegiatan yang berisi informasi id, judul, kuota, dan harga.
* Menerapkan fungsi .filter() untuk menyaring dan mengambil daftar kegiatan yang masih memiliki kuota aktif (kuota > 0).

- Penerapan Destructuring pada Array & Objek

* Menggunakan array destructuring untuk mengekstrak elemen kegiatan langsung ke dalam variabel individual.
* Mengakses properti objek (judul dan kuota) secara efisien tanpa harus memanggil nama objek utamanya berulang kali.

- Pengujian Block Scope 

* Menuliskan deklarasi variabel di dalam blok kode kurung kurawal {}.
* Menguji sifat block scope (mengamati munculnya ReferenceError ketika variabel di dalam blok coba diakses dari luar lingkupnya).

- Pemisahan Logika Program & ES Module
* utils.js: Menjadi tempat penyimpanan fungsi pembantu (hitungTotal) yang dilengkapi kata kunci export.
* main.js: Menjadi file utama yang mengambil fungsi hitungTotal menggunakan perintah import { hitungTotal } from "./utils.js";.
* index.html: Menambahkan atribut type="module" pada tag <script src="js/main.js" type="module"></script> agar sistem modul JavaScript dikenali oleh browser.


3. Hasil Uji
- Uji Validasi Input Fungsi hitungTotal :
   * Input valid (2, 10000)20000.
   * Input jumlah berupa teks "2" atau angka di luar batas (6, 10000) Menghasilkan output null.
   * Input harga negatif (2, -5000)  output null.

- Uji Penyaringan Data Array (.filter dan `.map):
   * Berhasil memfilter daftar kegiatan yang kuotanya tersedia (kuota > 0).
   * Berhasil menampilkan daftar judul dari kegiatan yang lolos penyaringan di *console*.

- Uji Destructurin:
   * Berhasil mengekstrak data judul dan kuota dari array kegiatan tanpa adanya error sintaks.

- ji Scope Variabel :
   * Variabel yang dideklarasikan menggunakan let / const di dalam blok {} tidak dapat diakses dari luar dan memicu ReferenceError  sesuai ekspektasi teori block scope.

- Uji Integrasi ES Module :
   * Halaman HTML yang dijalankan lewat Live Server berhasil mengeksekusi main.js dan mengimpor fungsi dari utils.js.
   * Console browser menampilkan status No issues tanpa adanya error 404 Not Found maupun SyntaxError.


4. Batasan
- Kode wajib dijalankan menggunakan web server lokal (Live Server) karena fitur ES Module (import/export) diblokir oleh keamanan browser jika dibuka langsung sebagai file lokal (file://).
- Pengujian variabel di dalam blok {} terbatas pada block scope, sehingga tidak bisa diakses dari luar blok tersebut.


AI Use Statement :
Saya menggunakan AI sebagai partner belajar dan untuk memahami istilah dalam modul yang kurang saya pahami.