                        LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB I

Nama    : Oktavia Doloksaribu
NIM     : 41426011
Prodi   : D4 Teknologi Rekayasa Perangkat Lunak
Tanggal : 18 November 2026

1. Cara Menjalankan
 Proyek dijalankan menggunakan Live Server pada Visual Studio Code. Setelah halaman terbuka di browser, tombol Muat kegiatan dapat ditekan untuk mengambil data dari file json lokal dan menampilkannya pada halaman web.

2. Penjelasan Perubahan
Pada praktikum ini dibuat file json yang berisi data kegiatan. Selanjutnya ditambahkan tombol Muat kegiatan, area pesan, dan daftar untuk menampilkan hasil data yang berhasil diambil. Kemudian dibuat fungsi JavaScript yang menggunakan fetch untuk mengambil data dari file json. Data yang diperoleh diperiksa terlebih dahulu untuk memastikan bentuknya sesuai. Jika data benar, data akan ditampilkan ke halaman web. Pada sesi ini juga ditambahkan pesan saat data sedang dimuat, pesan ketika data kosong, dan batas waktu untuk membatalkan proses pengambilan data yang terlalu lama. Dengan begitu pengguna dapat mengetahui apa yang sedang terjadi pada program.

3. Hasil Uji
- Pengujian Data Valid
Pengujian dilakukan menggunakan file json yang memiliki struktur sesuai dengan kebutuhan program. Setelah tombol Muat kegiatan ditekan, program berhasil membaca data dari file json dan menampilkannya ke halaman web. Jumlah kegiatan yang dimuat juga ditampilkan pada area pesan.
Hasil: Berhasil.

- Pengujian http 404
Pengujian dilakukan dengan mengubah alamat file json menjadi nama file yang tidak tersedia. Saat tombol Muat kegiatan ditekan, program tidak dapat menemukan file yang diminta sehingga proses pengambilan data gagal.
Hasil: Program menampilkan pesan gagal memuat dan muncul error http 404 pada Console.

- Pengujian Object Bukan Array
Pengujian dilakukan dengan mengubah isi file json menjadi object tunggal. Program melakukan pemeriksaan terhadap bentuk data yang diterima dan menemukan bahwa data tidak sesuai dengan format yang diharapkan.
Hasil: Program menampilkan pesan gagal memuat karena data tidak berbentuk array.

- Pengujian Judul dengan Markup
Pengujian dilakukan dengan mengisi nilai judul menggunakan tag html. Tujuan pengujian ini adalah untuk melihat apakah tag html akan dijalankan oleh browser atau hanya ditampilkan sebagai teks.
Hasil: Tag html ditampilkan sebagai teks biasa dan tidak dijalankan oleh browser.

- Pengujian Data Kosong
Pengujian dilakukan dengan mengubah isi file json menjadi array kosong ([]). Program berhasil membaca file json, tetapi tidak menemukan data kegiatan yang dapat ditampilkan.
Hasil: Program menampilkan pesan "Belum ada kegiatan" tanpa menghasilkan error.

- Pengujian json Rusak
Pengujian dilakukan dengan membuat struktur json tidak lengkap sehingga formatnya menjadi tidak valid. Saat proses pembacaan data dilakukan, program tidak dapat memproses isi file tersebut.
Hasil: Program menampilkan pesan gagal memuat dan Console menampilkan error SyntaxError.

- Pengujian Jaringan Lambat
Pengujian dilakukan menggunakan fitur throttling pada DevTools dengan memilih kondisi jaringan yang lebih lambat. Tujuannya untuk melihat bagaimana program menangani proses pemuatan data saat koneksi tidak berjalan dengan cepat.
Hasil: Program tetap dapat memuat data dan menampilkan pesan selama proses berlangsung sesuai kondisi jaringan yang digunakan.

- Pengujian Timeout
Pengujian dilakukan dengan menggunakan batas waktu tertentu pada proses pengambilan data. Ketika waktu yang ditentukan terlewati, proses dibatalkan secara otomatis oleh program.
Hasil: Program menghentikan proses pemuatan data dan menampilkan pesan gagal memuat.

- Pengujian Offline
Pengujian dilakukan dengan mengaktifkan mode Offline pada DevTools. Dalam kondisi ini program tidak dapat mengakses file json yang dibutuhkan.
Hasil: Program menampilkan pesan gagal memuat karena tidak dapat mengambil data saat koneksi dimatikan.

4. Batasan
Program ini masih sederhana dan menggunakan data dari file json lokal. Program belum terhubung ke database maupun sumber data dari internet. Selain itu, program harus dijalankan menggunakan Live Server karena jika file dibuka langsung dari browser, proses pengambilan data dapat mengalami masalah karena aturan CORS.

AI USE STETEMENT  :
Saya menggunakan Ai sebagai partner belajar, untuk memahami lebih dalam langkah-langkah moul, istilah yang sulit dipahami dan menggunakan AI sebagai bahan eksplor saya.