                LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1

Nama  : Oktavia Doloksaribu
NIM   : 41426011
Prodi : D4 TRPL




TABEL PENGUKIAN


Halaman	         pengujian    	     Harapan	                Hasil nyata                                  Status
Beranda	         Ukuran 1200px	     Tata letak tampil rapi     Konten, gambar, dan tombol terlihat,          Berhasil dengan catatan
                                                                tetapi gambar cukup besar

Beranda	         Zoom 200%	        Konten tetap dapat diakses  Judul dan gambar membesar sehingga            Perlu pemeriksaan lanjutan
                                                                sebagian konten tidak terlihat sekaligus
                                                                
                                        
Beranda	         Ukuran 320px	    Konten menyesuaikan layar   judul membungkus menjadi dua baris, gambar      Berhasil dengan catatan
                                                                menyesuaikan lebar, dan tombol berpindah
                                                                 ke baris berikutnya 
                                 

Beranda	        Uji keyboard	    Semua tautan dan tombol     tidak ada bukti pengujian                             Berhasil
                                    dapat Belum digunakan
                                    dengan keyboard

Beranda	        Validasi HTML	    Tidak ada error atau        sudah di uji                                          Berhasil
                                    warning                     

Beranda	        Pemeriksaan tautan	Semua tautan membuka
                                     halaman yang benar   	     sudah di uji                      

Daftar	        Validasi HTML	    Tidak ada error atau        Nu HTML Checker menunjukkan tidak                   Berhasil
                                    warning                     ada error atau warning
1. Cara Menjalankan

1. Buka folder proyek website melalui VS Code.
2. Pastikan seluruh file HTML, CSS, dan JavaScript tersimpan di folder yang sesuai.
3. Klik kanan file index.HTML, kemudian pilih Open with Live Server.
4. Website akan ditampilkan melalui browser.
5. Gunakan menu Beranda, Kegiatan, dan Daftar untuk memeriksa navigasi.
6. Buka Developer Tools untuk memeriksa tampilan pada ukuran 320px, 1200px, serta zoom 200%.
7. Lakukan pemeriksaan pada setiap file HTML menggunakan Nu HTML Checker.

2. Penjelasan Perubahan

Saya melakukan perbaikan pada kode HTML yang sebelumnya mengalami kesalahan. Pada bagian tabel jadwal, atribut border="1" dihilangkan, kemudian pengaturan garis tabel dilakukan melalui CSS.

Saya juga mengecek tiga halaman website, yaitu index.HTML, kegiatan.html, dan daftar.HTML. Selanjutnya, tampilan website diuji menggunakan beberapa ukuran layar untuk mengetahui apakah tata letaknya dapat menyesuaikan ukuran layar yang digunakan.

3. Hasil Pengujian

- Validasi HTML: Ketiga halaman telah diperiksa dan hasilnya tidak menunjukkan error maupun warning.
- Layar 1200px: Judul, gambar, dan tombol navigasi dapat ditampilkan dengan baik.
- Layar 320px: Judul dan tombol menyesuaikan tampilan layar. Tombol juga berpindah ke baris berikutnya.
- Zoom 200%: Ukuran teks dan gambar bertambah besar. Tampilan masih perlu diperiksa kembali agar seluruh konten tetap mudah diakses.
- Keyboard dan tautan: Pengujian masih diperlukan untuk memastikan semua tombol dan tautan dapat digunakan dengan benar.

4. Batasan

1. Website baru diperiksa pada beberapa ukuran layar dan belum mencakup seluruh ukuran perangkat.
2. Tampilan pada layar kecil masih perlu ditinjau untuk memastikan tidak ada bagian konten yang terpotong.
3. Fungsi seluruh tombol dan tautan masih perlu diperiksa lebih lanjut.
4. Hasil validasi HTML belum dapat memastikan bahwa semua fungsi JavaScript berjalan dengan baik.
5. Website belum menjalani pengujian pada semua jenis browser.