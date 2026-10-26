                LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1

Nama   : Oktavia Doloksaribu
NIM    : 41426011
Prodi  : D4 Teknologi Rekayasa Perangkat Lunak

Cara Menjalankan Aplikasi :
1. Buka folder proyek praktikum week 4 sesi-02 menggunakan VS Code.
2. Pastikan live server sudah aktif di VS Code.
3. Klik kanan pada file index.html dan pilih "Open with Live Server".
4. Aplikasi formulir akan terbuka secara otomatis di browser melalui server lokal.


Penjelasan Perubahan & Catatan Eksperimen
Persiapan Stylesheet 
* Tindakan:Menghubungkan file style.css ke index.html menggunakan tag <link> dan menambahkan background #f4f6fa pada body.
* Hasil Nyata:Melalui DevTools tab Network, file style.css berhasil dimuat (status 200, bukan 404) dan latar belakang halaman berubah warna.

1. Tujuan
Praktikum ini bertujuan untuk memahami cara menghubungkan CSS eksternal dengan HTML, menggunakan selector dan class, memahami cascade dan specificity, serta mempelajari box model yang terdiri dari content, padding, border, dan margin.

2. Penjelasan Perubahan
Pada praktikum ini dilakukan beberapa perubahan pada halaman formulir dari praktikum sebelumnya. Perubahannya yaitu menambahkan file `style.css` dan menghubungkannya dengan `index.html`. Kemudian ditambahkan class `card` pada form dan class `notice` pada paragraf petunjuk. Setelah itu dilakukan percobaan pada selector, specificity, warna, padding, border, margin, dan `box-sizing`.

3. Hasil Uji
Dari hasil pengujian, file CSS berhasil terhubung dengan HTML sehingga perubahan tampil pada halaman. Selector dan class juga dapat diterapkan dengan baik. Pada pengujian specificity, `.card p` lebih spesifik dibandingkan `.notice`. Pada box model, ukuran elemen berubah dari **276px menjadi 240px** setelah menggunakan `box-sizing: border-box`. Hasilnya kemudian diperiksa melalui browser dan DevTools.

4. Batasan
Praktikum ini masih menggunakan halaman formulir sederhana dan dilakukan pada lingkungan lokal dengan browser serta DevTools. Ukuran pada box model hanya digunakan untuk percobaan, bukan sebagai desain akhir. Hasil laporan juga harus disesuaikan dengan hasil yang diperoleh saat praktikum.

LAPORAN ERROR
Pada saat saya cek lewat validaor terdapat error karena saya menambahkan identitas saya yang di awali dengan */  sehingga valodator tidak bisa membaca <!doctype html>, setelah diperbaiki maka tidak ada lagi error


AI USE STATEMENT
Saya menggunakan AI untuk membaca pesan error pada validator .