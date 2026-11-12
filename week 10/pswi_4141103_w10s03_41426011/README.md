            LAPORAN PRAKTIKUM PENGEMBANGAN REKAYASA PERANGKAT LUNAK


Nama    : Oktavia Doloksaribu
NIM     : 41426011
prodi   : DIV Teknologi Rekayasa Perangkat Lunak




1. Cara Menjalankan
Buka folder proyek di VS Code.Klik kanan pada file index.html, lalu pilih Open with Live Server. Halaman web akan otomatis terbuka di browser lokal, lalu klik Fn+F12 dan poeriksa error di elements.

2. Penjelasan Perubahan

- Membuat Form Input : Kita nambahin kotak input dan tombol "Tambah" di HTML supaya user bisa mengetik nama peserta baru langsung dari halaman web.
- Validasi Data : Di JavaScript, kita bikin fungsi supaya waktu tombol tambah diklik, program ngecek apakah kolom inputnya kosong. Kalau kosong, bakal muncul tulisan peringatan *"Nama harus diisi"*.
- Menyimpan ke Memori Sementara : Kalau namanya diisi dengan benar, data nama dan nomor ID-nya bakal dimasukkan ke dalam daftar data sementara (array).
- Tombol Hapus Dinamis : Di setiap baris nama peserta yang muncul di layar, otomatis dibuatkan tombol "Hapus" yang sudah dipasangi nomor ID masing-masing.
- Event Delegation : Kita pasang satu fungsi klik di bagian pembungkus daftar (<ul>) supaya tombol hapus bisa dipakai untuk menghapus data peserta dengan akurat meskipun datanya bertambah atau dikurangi.

3. Hasil Uji
Dari hasil uji coba yang sudah kita lakuin langsung di browser, berikut catatan real-nya:
- Kasus Normal (Submit / Tekan Enter) : Waktu kita ketik nama (misal nama baru) terus klik Tambah atau tekan Enter di keyboard, datanya berhasil nambah satu ke layar dan masuk ke memori array.
- Kasus Batas (Input Kosong / saja) : Waktu kolom input dikosongkan atau cuma diisi spasi terus diklik tambah, program nolak datanya dan langsung memunculkan tulisan peringatan *"Nama harus diisi"* di atas form.
- Kasus Hapus Item (Pertama, Terakhir, & Data Baru): Waktu kita klik tombol hapus di baris paling atas, paling bawah, atau di data baru yang baru saja ditambahkan, itemnya langsung hilang bersih dari layar dan memori array-nya ikut berkurang.
- Kasus Uji Markup / Keamanan: Waktu kita coba masukin teks yang ada tag HTML-nya (contohnya <b>Budi</b>), teksnya muncul mentah begitu aja di layar sebagai string biasa dan nggak bikin format teks jadi tebal, jadi aman dari error atau injeksi kode.


4. Batasan
Aplikasi ini datanya masih bersifat sementara di memori browser (state JavaScript). Jadi kalau halaman web-nya ditutup atau di-refresh, semua data peserta yang baru ditambahkan akan hilang dan balik ke data bawaan awal.

AI Uae Statement :
Saya menngunakan AI sebagai partnrt br;ajar saya untuk membantu saya mengartikan kata kata yang agak sulit saya pahami dalam modul. Saya tetap mengikuti langkah langkah pengerjaan dari modul dan instruksi dari Teaching Asistand.