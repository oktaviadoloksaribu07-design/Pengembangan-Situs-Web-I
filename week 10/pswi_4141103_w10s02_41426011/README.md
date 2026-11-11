             LAPORAN PRAKTIKUM PENGEMBANGAN REKAYASA PERANGKAT LUNAK


Nama   : Oktavia Doloksaribu 
NIM    : 41426011
Prodi  : DIV Teknologi Teknologi Rekayasa Perangkat Lunak

1. Cara Menjalankan Program
Buka folder proyek  di VS Code, lalu klik kanan pada file index.html dan pilih "Open with Live Server". Buka browser untuk melihat hasil render serta tekan Fn+F12 lalu periksa DevTools (Console/Elements).

2. Penjelasan Perubahan di Setiap Nomor

- Nomor 3 :
Tindakan: Membuat struktur HTML dasar yang memuat judul, elemen paragraf #pesan, dan elemen daftar tak berurut #daftar, serta menghubungkan skrip main.js menggunakan atribut defer.
Hasil & Catatan: Memastikan elemen-elemen penting di DOM berhasil dipilih oleh JavaScript. Pengujian dengan selector yang salah terbukti menghasilkan nilai null di Console.

- Nomor 4 :
Tindakan: Membuat elemen <li> baru lewat JavaScript dan mengisi teksnya menggunakan properti textContent dengan nilai berupa tag string biasa (<b>Rina</b>).
Hasil & Catatan: Data teks tampil secara literal di layar tanpa mengubahnya menjadi elemen tebal, membuktikan bahwa textContent tidak melakukan HTML parsing.

- Nomor 5 :
Tindakan: Memisahkan data dari tampilan dengan membuat variabel array peserta sebagai sumber state, lalu membuat fungsi render() untuk membersihkan elemen lama (replaceChildren()) dan melukis ulang daftar nama ke dalam DOM.
Hasil & Catatan: Ketika fungsi render() dipanggil beberapa kali, item data tidak menjadi duplikat karena elemen anak dibersihkan terlebih dahulu.

- Nomor 6 :
Tindakan: Menambahkan logika pengecekan panjang array (peserta.length) di dalam fungsi render() untuk menampilkan teks "Belum ada peserta" pada elemen #pesan jika data kosong, serta mengosongkannya jika data tersedia.
Hasil & Catatan: Tampilan empty state langsung menyesuaikan kondisi array secara dinamis dan gaya tampilannya dipisahkan ke file CSS.

3. Hasil Uji Coba (Matriks Pengujian)
- Kasus Selector Salah
Tindakan yang Dilakukan: Sengaja menuliskan nama ID selector yang keliru atau tidak sesuai pada saat melakukan pemilihan elemen DOM di dalam skrip.
Hasil Aktual di Browser: Program gagal menemukan elemen yang dimaksud dan mengembalikan serta mendiagnosis nilai null pada tab Console browser.
Status / Bukti Verifikasi: Berhasil terverifikasi sesuai harapan modul.

- Kasus Markup sebagai Nama
Tindakan yang Dilakukan: Memasukkan teks string yang mengandung tag HTML mentah (seperti <b>) ke dalam elemen menggunakan properti textContent.
Hasil Aktual di Browser: Teks muncul secara harfiah (literal) di layar browser tanpa menerjemahkan tag HTML tersebut menjadi elemen teks tebal.
Status / Bukti Verifikasi: Berhasil terverifikasi.

- Kasus Render Dua Kali
Tindakan yang Dilakukan: Memanggil fungsi render() secara berulang kali berturut-turut di dalam eksekusi skrip.
Hasil Aktual di Browser: Item data di dalam elemen daftar tidak menjadi duplikat karena seluruh elemen anak yang lama selalu dibersihkan terlebih dahulu menggunakan metode replaceChildren().
Status / Bukti Verifikasi: Berhasil terverifikasi.

- Kasus Array Kosong
Tindakan yang Dilakukan: Mengubah nilai array data peserta menjadi kosong (peserta = []) lalu mengeksekusi kembali fungsi render().
Hasil Aktual di Browser: Daftar nama menghilang dari layar dan teks peringatan "Belum ada peserta" muncul secara otomatis pada elemen pesan (empty state).
Status / Bukti Verifikasi: Berhasil terverifikasi.

4. Batasan
- Program ini masih berjalan secara frontend murni menggunakan data lokal di dalam file JavaScript belum terhubung ke database.
- Belum ada fitur tombol interaktif untuk menambah atau menghapus data peserta secara langsung lewat halaman web baru sebatas menampilkan data dari array.

AI Use Statement :
Saya menggunakan Ai sebagai partner belajar saya untuk memahami istilah sulit dalam modul 
dan membantru saya untuk memahami lebih dalam langkah langkah pengerjaan praktikum.