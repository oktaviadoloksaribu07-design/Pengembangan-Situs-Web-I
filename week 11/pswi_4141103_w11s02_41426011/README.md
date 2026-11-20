                        LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1
            

Nama    : Oktavia Doloksaribu
NIM     : 41426011
Prodi   : D4 Teknologi Rekayasa Perangkat Lunak
Tanggal : 18 November 2026


1. Cara Menjalankan

 Proyek dijalankan menggunakan Live Server pada Visual Studio Code. Setelah halaman terbuka di browser, tombol Muat kegiatan dapat ditekan untuk mengambil data dari file json lokal dan menampilkannya pada halaman web.

2. Penjelasan Perubahan

Pada praktikum ini, dibuat file json  lokal yang berisi data kegiatan. File ini akan menjadi sumber data yang diambil oleh program. Di halaman web, ditambahkan tombol Muat kegiatan, area status, dan area daftar. Fitur-fitur ini memungkinkan pengguna melihat data kegiatan yang berhasil diambil. Kemudian, dibuat fungsi JavaScript menggunakan Fetch API dengan async/await. Fungsi ini bertugas mengambil data dari file json. Program juga dilengkapi dengan validasi data. Validasi ini memastikan bahwa data yang diterima sesuai dengan format yang diharapkan. Data harus berupa array, dan setiap kegiatan harus memiliki judul dengan tipe string. Setelah data dinyatakan valid, data akan ditampilkan di halaman web dalam bentuk daftar. Tampilan ini memudahkan pengguna untuk melihat semua kegiatan secara langsung. Selain itu, ditambahkan penanganan kesalahan. Jika terjadi error seperti file tidak ditemukan atau struktur data tidak sesuai, program akan menampilkan pesan yang sesuai. Pesan ini membantu pengguna memahami apa yang terjadi.


3. Hasil Uji

- Pengujian dilakukan dengan menggunakan file json yang strukturnya sesuai dengan kebutuhan program. Data berhasil dibaca oleh Fetch API dan ditampilkan di halaman web dalam bentuk daftar kegiatan.

Hasil: Berhasil.

- Pengujian http 404
Pengujian dilakukan dengan mengubah alamat file json menjadi nama file yang tidak tersedia. Tujuannya adalah untuk memastikan program bisa mendeteksi ketika file tidak ditemukan.

Hasil: Program menampilkan pesan gagal memuat dan muncul error http 404 di Console.

- Pengujian Object Bukan Array
Pengujian dilakukan dengan mengubah struktur data json menjadi objek tunggal. Program kemudian melakukan validasi terhadap format data yang dimasukkan.

Hasil: Program menolak data karena tidak berbentuk array dan menampilkan pesan kesalahan sesuai hasil validasi.

- Pengujian Judul dengan Markup
Pengujian dilakukan dengan mengisi nilai judul menggunakan tag html. Tujuannya adalah untuk melihat apakah tag html akan dieksekusi oleh browser atau hanya ditampilkan sebagai teks biasa.

Hasil: Tag html ditampilkan sebagai teks biasa dan tidak dijalankan oleh browser karena program menggunakan textContent saat menampilkan data.

4. Batasan

Program ini masih memiliki beberapa keterbatasan. Data yang digunakan masih berasal dari file json lokal dan belum mengambil data dari internet atau database. Program juga hanya menampilkan data yang tersedia tanpa bisa mengubah isi data tersebut. Selain itu, halaman harus dijalankan menggunakan Live Server agar proses pengambilan data dapat berjalan dengan benar.



AI USE STATEMENT :

Saya menngunakan AI sebagai partner belajar saya untuk memahami istilah istilah sulit dalam modul, dan saya menggunakan AI sebagai alat eksplor saya untuk memahami lebih dalam lagi cara pengerjaan nya, tetapi modu; ini tetap saya kerjakan sendiri tanpa mengcopy paste code dari AI.




