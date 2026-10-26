                      LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1 WEEK 3

Nama : Oktavia Doloksaribu 
NIM  : 41426011
Prodi:D4 Teknologi Rekayasa Perangkat Lunak

                              Analisis peran id, name, type

1. id
Menghubungkan elemen <input> dengan elemen <label> melalui atribut for="". Ketika label diklik, kursor otomatis akan fokus masuk ke kolom input tersebut
2. name 
Tanpa atribut name, data yang diisi oleh pengguna di dalam kolom tersebut tidak akan ikut terkirim atau diproses oleh server backend.
3. type
Contohnya type="email" akan otomatis memvalidasi apakah input mengandung karakter @, sedangkan type="number" membatasi input hanya berupa angka dan memunculkan tombol panah atas/bawah.


                         Tujuan, Cara Menjalankan, Hasil Uji
1. TUJUAN
- Belajar memakai berbagai macam input form (teks, email, tel, number, select, radio button, dan checkbox).
- Memahami konsep aksesibilitas dasar (accessibility) agar tag <label> dan <input> bisa saling bersambungan.
2. CARA MENJALANKAN
Dengan cara membuka live server dengan visial studio code, dengan memastikan live server sudah ter instal di vc code kemudian klik index.html hingga terbuka ke bowser.

3. HASIL UJI
* Di jendela browser akan muncul halaman web berjudul "Pendaftaran kegiatan"  yang di lengkapi dngan berbagai     elemen  formulir.
* Elemen input yang tersedia:
- Kolom teks untuk mengisi nama lengkap, dan nomor telepon, gmail, jumlah tiket
- Menu drapdown untuk memilih prodi
- Tombol radio(radio button) untuk memilih mode kehadiran luring atau during.
- Kotak centang (checkbox) untuk memilih minat topik
- Kolom teks panjang(textarea) untuk mengisi catatan 
- Tombol kirim data (Submit button) yaitu kirim pendaftaran.




http://127.0.0.1:5500/index.html?nama=Oktavia&email=example%40gmail.com&hp=088888888888&tiket=5&prodi=trpl&mode=daring&topik=html&topik=Magnifier+&catatan=belajar+web#


1. Mengapa telepon bukan kuantitas number?
    Karena telepon memiliki simbol "+" di dalamnya padahal number itu tidak boleh ada simbol
2. Apa beda label pilihan dan legend kelompok?
    jika label ditekan maka akan otomatis mengarah ke input kita dan akan ada disamping inputnya, sedangkan legend itu untuk pilhan dan captionnya.
3. Apa beda id dan name?
    id itu adalah penanda untuk sebuah input dan name adalah tanda hasil yang akan dikirim ke database
4. Apa yang terjadi pada checkbox tidak dicentang?
    maka checkbox tetap false dan tidak akan terkirim ke database.

                                 LAPORAN HASIL ERROR
Terdapar error pada validator yang pertama saya coba karena action kosong atau tidak berisi, setelah saya mengisi simbol # maka tidak terjadi error lagi