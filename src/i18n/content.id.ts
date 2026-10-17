/**
 * Indonesian versions of the content that is written in English in
 * `models/` (English is the default language). Keyed by `company|startDate`
 * for experience, so reordering entries does not break anything.
 */

export const aboutSummaryId =
  'Saya lulusan Informatika dari Universitas Bina Sarana Informatika, dan saya membuat website, baik frontend maupun backend. Saya Full Stack Developer di Alfatih Solusindo Technology, mengerjakan sistem informasi rumah sakit (SIMRS) yang dipakai beberapa rumah sakit, terutama di modul lab, radiologi, farmasi, dan laporan. Di luar kerja, saya membuat aplikasi web kecil dengan React, TypeScript, dan Tailwind: cuaca, film, catatan, jadwal sholat, resep, dan pencatat keuangan. Saya suka belajar hal baru, dan nyaman bekerja sendiri maupun dalam tim.';

export const educationId: Record<
  string,
  { studyName: string; description: string }
> = {
  'UNIVERSITAS BINA SARANA INFORMATIKA': {
    studyName: 'Teknik Informatika',
    description:
      'Lulusan Informatika dari Universitas Bina Sarana Informatika. Saya punya pengalaman sebagai Fullstack Developer selama 1 tahun lewat program magang bersertifikat Kampus Merdeka, mengerjakan berbagai proyek dengan teknologi seperti React dan Laravel untuk membuat aplikasi web yang responsif dan mudah dipakai.',
  },
  'SMK 10 NOVEMBER TAMBUN SELATAN': {
    studyName: 'TEKNIK KOMPUTER & JARINGAN',
    description:
      'Lulusan SMK 10 November Tambun Selatan jurusan Teknik Komputer & Jaringan. Belajar menginstal sistem operasi di PC, mengatur jaringan LAN dengan proxy, membangun jaringan LAN, serta memperbaiki hardware dan software.',
  },
};

export const experienceId: Record<
  string,
  { location: string; description: string }
> = {
  'Alfatih Solusindo Technology|Oct 2024': {
    location: 'Karawang, Jawa Barat, Indonesia',
    description: `Saya mengerjakan sistem informasi rumah sakit (SIMRS) yang dipakai beberapa rumah sakit setiap hari. Ini codebase Laravel dan Blade yang dikerjakan bersama tim besar. Saya mengambil pekerjaan dari database sampai layar: migrasi dan SQL view, controller, lalu halaman, layout cetak, dan ekspor Excel atau PDF. Hari-hari saya kebanyakan berisi tiket, fitur baru dan perbaikan, terutama di modul lab, radiologi, farmasi, dan laporan.
- Laporan
  - Report builder: di bulan-bulan pertama, membuat report builder (tipe laporan dan hak akses) beserta kumpulan laporan pertama di atasnya: kunjungan rawat jalan, pendapatan kasir, resep farmasi, pemakaian obat dan masker TB-DOTS, demografi marketing, dan pembelian inventori.
  - Modul laporan: di 2026, membuat laporan admisi di modul laporan yang baru (register harian, rekap kunjungan, kunjungan rawat jalan per poli, antrian pendaftaran, sensus dan statistik, rawat inap masuk, mutasi pasien, naik kelas, ketersediaan tempat tidur, daftar tunggu, pasien baru dan lama, janji temu) serta laporan kunjungan umum yang bisa dikonfigurasi. Tiap laporan didukung SQL view dengan migrasi dan menu sendiri, lengkap dengan filter, pratinjau di layar, dan ekspor Excel.
  - Formulir RL (pelaporan regulasi): di 2025, membuat versi pertama lebih dari 20 formulir laporan RL (rekap kunjungan, aktivitas rawat inap dan rawat jalan, laboratorium, radiologi, bedah, rehabilitasi, farmasi, cara pembayaran, serta peringkat sepuluh besar penyakit dan kematian). Di modul pelaporan yang lebih baru, menulis SQL function untuk RL 3.9, 3.11, dan 3.13 serta memperbaiki RL 3.8. Sisanya dibuat rekan tim.
  - Ekspor Excel: memperbaiki ekspor yang gagal diunduh atau tidak bisa dibuka di Excel versi baru, di laporan inventori, billing, dan farmasi.
- Integrasi laboratorium: enam sistem lab
  - Menghubungkan sistem rumah sakit ke Wynacom, Sysmex, BBM, Mlabs, Vanslab, dan Medisynclab, sehingga order lab sampai ke sistem lab dan hasilnya kembali.
  - Tiap lab punya cara komunikasinya sendiri, jadi jembatannya berupa service Go kecil. Membuat yang untuk Medisynclab dari nol, membuat integrasi API Mlabs, dan ikut mengerjakan yang lain. Service itu mengulang pengiriman yang gagal, memperbarui token login yang kedaluwarsa, dan punya layar untuk memantau order.
  - Dulu, hasil lab baru masuk ke sistem rumah sakit saat seseorang membuka layar cetak hasil. Saya membuat background worker yang mengambil hasil tiap 5 menit untuk BBM, Sysmex, Wynacom, Mlabs, dan Medisynclab, dan layar cetak tetap dipertahankan sebagai cadangan.
  - Membuat worker itu aman: melewati order yang tidak berubah, tidak pernah menimpa hasil yang sudah ditandatangani elektronik, memakai lock agar worker dan layar cetak tidak bentrok, mencatat tiap sinkronisasi di tabel pelacakan, dan bisa dinyalakan per rumah sakit.
  - Membuat layar pemetaan tes Medisynclab, yang menghubungkan tes lab rumah sakit dengan item di sistem lab agar kode tes selalu dikenali.
  - Ikut berkontribusi di sistem lab Medisynclab sendiri, yaitu API Laravel dengan aplikasi desktop Python, mengerjakan koneksinya ke sistem rumah sakit serta impor dan ekspor pemetaan tes.
- Radiologi: alur Medipacs/Orthanc
  - Order radiologi mendapat nomor akses (accession number) dan dikirim ke worklist mesin pencitraan lewat HL7 (bagian ini dibuat rekan tim). Gambar hasil pindaian masuk ke server Medipacs (Orthanc).
  - Masalahnya: gambar baru terhubung ke order saat seseorang membuka popup hasil, jadi lencana "gambar siap" tetap merah sampai saat itu. Saya membuat dua cara untuk memperbaikinya.
  - Webhook: Orthanc memanggil sistem rumah sakit saat studi siap. Sistem memeriksa tanda tangan dan daftar IP yang diizinkan (opsional), mencari order lewat accession number, dan menyimpan ID studi agar viewer bisa membukanya. Aman bila dipanggil ulang, setiap panggilan dicatat, dan menggantikan endpoint lama tanpa autentikasi dan pencatatan, di URL yang sama.
  - Sinkronisasi terjadwal: tiap 5 menit menanyakan ke Orthanc tentang order yang masih menunggu dari beberapa hari terakhir, satu query per accession, lalu memperbaruinya. Ada kill switch dan mode dry-run, dan bisa dinyalakan atau dimatikan dari layar pemantauan job.
  - Pencocokan aman: beberapa mesin mengisi accession number sendiri. Dalam kasus itu pencocokan memakai nomor pasien plus tanggal pemeriksaan, dengan toleransi waktu, dan melewati serta mencatat apa pun yang ambigu. Tautan yang salah lebih buruk daripada lencana merah.
  - Juga mendokumentasikan dan mengamankan endpoint yang dibaca Medipacs dari sistem rumah sakit (template diagnosis dan laporan) dengan API key.
- Radiologi: alur PACS Thena
  - Saat order radiologi disimpan, order ditulis ke tabel yang dipakai bersama Thena (koneksi DB ke DB). Dasarnya dibuat rekan tim. Saya menambahkan kolom nomor order, ID pasien, dan kode proses, serta tabel log order.
  - Sebuah background service membaca Thena tiap 10 detik, karena scheduler tidak bisa lebih cepat dari satu menit. Rekan tim membuatnya dan saya mengembangkannya.
  - Thena mengubah order ke status draf setelah laporan final. Sistem rumah sakit menyimpan laporan dan tautan gambar lebih dulu, lalu mengonfirmasi ke Thena, jadi penyimpanan yang gagal diulang pada polling berikutnya.
  - Sejak September 2026 sistem tidak lagi mengambil dari status "approved", atas permintaan Thena, untuk mencegah race dengan layanan review mereka sendiri.
  - Memperbaiki bug saat order lama yang belum selesai memenuhi setiap batch dan menahan laporan yang lebih baru. Sekarang order yang punya laporan didahulukan, dan order lama yang belum selesai dibatasi berdasarkan umur.
  - Membuat halaman pemantauan: statistik, daftar order, log, order yatim yang bisa dibangun ulang, dan tombol ambil sekarang.
- Farmasi
  - Mengerjakan modul resep, kebanyakan mengembangkan dan memperbaiki fitur buatan rekan tim: validasi resep, resep final, resep luar (rawat jalan), retur, dan invoice.
  - Antrian farmasi: menampilkan nomor antrian saat validasi dan mencetaknya otomatis, memperbaiki nomor ganda antar penjamin, dan menambah antrian untuk resep luar serta resep cito dan online (APOL).
  - Daftar dan cetakan unit-dose (dosis harian), dengan peringatan saat unit pasien berbeda.
  - Layout cetak untuk resep final, etiket obat, lembar unit-dose, dan billing: memperbaiki layout, logo, ukuran kertas, dan item yang hilang.
  - Menambah salinan resep kustom (menambah obat secara manual), daftar resep yang dibatalkan dengan filter, dan alasan yang jelas saat resep luar tidak bisa diretur.
  - Farmasi online (APOL): membuat modul riwayat pengobatan dan pengaman agar item tidak ganda saat menyimpan.
  - Membuat modul template resep dokter, yang mengimpor template master untuk resep racikan dan non-racikan dari Excel.
- Gizi
  - Membuat modul status gizi anak: 25 kategori status dari lima indeks pertumbuhan (berat, panjang atau tinggi badan, dan IMT menurut umur), IMT dan umur dalam bulan dihitung otomatis, serta lencana status di daftar pasien rawat jalan, rawat inap, IGD, dan penunjang.
  - Label ASI: membuat modulnya dari awal sampai akhir. Perawat membuka catatan pasien, data pasien terisi sendiri, hanya tanggal dan jam yang diisi, lalu label disimpan ke riwayat cetak dan dicetak sebagai PDF seukuran satu stiker. Memilih PDF daripada cetak lewat browser karena driver printer mengubah ukuran kertas dan header browser ikut tercetak di stiker.
  - Label diet: menggabungkan tiga renderer label terpisah menjadi satu, dengan template untuk berbagai format cetak, kolom teks bebas, waktu pengemasan, dan catatan alergi, plus halaman pengaturan font, visibilitas, dan posisi teks. Jalur lama dipertahankan sebagai cadangan agar rumah sakit yang sudah memakainya tidak merasakan perubahan.
  - Daftar dan laporan diet: kolom PDF dan Excel yang bisa dikonfigurasi, serta menambah diet multi-waktu makan, pelacakan alergi, diagnosis diet, checklist gizi diberikan, dan info asuransi (COB).
  - Memperbaiki banyak detail di daftar dan cetakan diet, seperti nama yang terpotong, waktu pengemasan, dan nama kamar yang dipakai bersama.
- Billing dan invoice
  - Mengerjakan sisi kasir dari sistem, yang dibuat rekan tim. Sebagian besar pekerjaan saya memperbaiki dan mengembangkan layout cetak billing, pra-billing, invoice, dan kwitansi: kop dan logo, subtotal dan pembulatan, baris ganda, billing perbandingan, serta kwitansi deposit dan asuransi.
  - Invoice resep luar: memperbaiki bug saat menutup invoice dan item ganda, serta menambah pengaman untuk resep yang diedit setelah invoice dibuka.
  - Menambahkan role accounting yang hanya melihat tombol pra-billing di invoice non-pasien, pilihan kas per cabang, opsi menampilkan atau menyembunyikan tanda tangan petugas di billing, dan unggah dokumen LOC di layar kasir.
  - Memperbaiki bug perhitungan billing: obat retur tidak dikurangi, diskon grup tarif tidak berlaku, biaya administrasi salah, dan pengembalian pada invoice yang sudah lunas. Juga memperbaiki celah SQL injection di controller invoice.
- Keamanan: menambahkan ganti password wajib saat login pertama, bisa diatur per rumah sakit.
- Menulis automated test untuk fitur laboratorium, radiologi, dan PACS Thena.`,
  },
  'PT Winni Code Garuda Indonesia|Aug 2024': {
    location: 'Bandung, Jawa Barat, Indonesia',
    description:
      'Membuat proposal perancangan sistem elektronik terintegrasi berbasis website, menjelaskan latar belakang proyek dan alasan mengambilnya, serta menentukan jadwal penyelesaian proyek.',
  },
  'PT Citi Asia Internasional|Aug 2023': {
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    description:
      'Selama magang sebagai Full Stack Developer, saya ditugaskan menentukan struktur halaman web dan mengubah desain website menjadi kode front-end untuk menampilkan fitur di halaman web. Terlibat langsung dalam mengatur, mengarahkan, dan menjalankan proyek sesuai jadwal yang direncanakan, mendokumentasikan aplikasi yang dikembangkan, dan berkolaborasi dengan Project Management Team, System Analyst, Designer, dan UI/UX Developer dalam pengembangan aplikasi web.',
  },
  'PT Solusi Tiga Selaras|Aug 2022': {
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    description:
      'Selama magang sebagai Full Stack Developer, saya ditugaskan membuat aplikasi web internal memakai Javascript dan framework PHP Laravel, menerapkan desain database dengan fitur Artisan Console di Laravel, memperbaiki bug selama pengembangan aplikasi, mendokumentasikan aplikasi yang dikembangkan, dan berkolaborasi dengan Project Management Team, Developer, dan tim QA selama pengembangan aplikasi web.',
  },
};
