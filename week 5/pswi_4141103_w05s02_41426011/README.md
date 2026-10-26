                       LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1

Nama   : Oktavia Doloksaribu
NIM    : 41426011
Prodi  : D4 Teknologi Rekayasa Perangkat Lunak


1. ​Cara Menjalankan Proyek
Pertama, buka folder proyek ini lewat VS Code. Setelah itu, jalankan  index.html pakai dengan Live Server. Buka browser dan memastikan  halamannya bisa diakses  dalam server lokal.

2.  Penjelasan perubahan
(a) index HTML 
Menambahkan Navigasi memakai tag nav yang diberi aria-label="Navigasi utama". lalu ditambahkan dalam tag main div class=cards untuk menampung kartu-kartu kegiatan sperti yang terlihat dalam tampilan halaman web.

(b) Tampilan CSS (style.css)
Di bagian atas CSS dipasang box-sizing: border-box biar ukuran elemennya pas dan tidak berantakan.
​Untuk menu navigasi (.nav-list), dipasang display: flex, flex-wrap: wrap, sama gap: 1rem. Ini buat bikin menunya berjajar ke samping dan bisa otomatis turun kalau layarnya sempit.
​Untuk bagian kartu (.cards dan .card), dipasang display: flex di pembungkusnya. Terus tiap kartunya dikasih flex: 1 1 15rem dan min-width: 0 biar lebarnya bisa menyesuaikan ukuran layar secara otomatis.
​Terakhir, di judul h2 dikasih overflow-wrap: anywhere. Jadi kalau ada kata yang kepanjangan, teksnya akan  otomatis pindah ke baris bawah dan enggak bakal keluar dari kotak kartu.

3. Hasil Uji
Web berhasil ditampilkan di browser. Teks, warna, profil, dan kotak kegiatan terlihat dengan baik. Fungsi tombol dan tampilan di HP dapat di periksa mandiri.

4. Batasan
Web masih sederhana dan informasinya belum terhubung ke database. Tombol salam sudag  menggunakan JavaScript sederhana  agar berfungsi, dan tampilan di HP dapat di periksa mandiri.


CATATAN PENGAMATAN : 
1. Starter valid dengan tiga card yang berjejer ke samping.
2. Item dapat wrap ketika ruang tidak cukup.
3. Ukuran dan jumlah baris menyesuaikan ruang, ketika ruang web di perkecil.
4. Tidak ada informasi penting yang terpotong.



Laporan Hasil Error :
Adanya error saat di validator karena terdapat dua main pada index.html saya

AI Use statement :
Saya menggunakan AI sebagai partner belajar untuk menjelaskan bahasa dan langkah-langkah dalam modul yang sulit saya pahami