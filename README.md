# EduKita - Platform Les Privat & Bimbingan Belajar Berkualitas di Indonesia

EduKita adalah website bimbingan belajar privat 1-on-1 interaktif (tatap muka dan kelas daring online) yang menghubungkan siswa dengan tutor berprestasi dari perguruan tinggi terkemuka di Indonesia (UI, ITB, UGM, UNAIR, ITS, dll.).

---

## 🚀 Arsitektur & Teknologi (100% Pure Vanilla Frontend)

Sesuai dengan ketentuan proyek, website ini dibangun **murni tanpa framework, bundler, atau dependensi build**:
- **HTML5**: Semantik, aksesibilitas, modal dialog, formulir terstruktur.
- **CSS3 (Vanilla)**: Design system modern dengan CSS custom properties, Flexbox, CSS Grid, animasi micro-interactions, responsive media queries (mobile, tablet, desktop).
- **JavaScript (ES6+)**: Logika filter, pencarian teks real-time, sorting tarif dan rating, autentikasi sesi via `localStorage`, manajemen booking jadwal, dashboard dinamis, dan validasi form interaktif.
- **Eksternal CDN**: Google Fonts (*Plus Jakarta Sans*) dan *Lucide Icons* melalui CDN.

---

## 📂 Struktur Direktori Proyek

```
EduKita/
├── index.html                  # Halaman Utama (Hero, Statistik, Kategori, Tutor Pilihan, FAQ)
├── style.css                   # Design System & Styling Global (Vanilla CSS3)
├── script.js                   # Logika Interaktif & Data Demonstrasi (ES6+ Vanilla JS)
├── pages/
│   ├── cari-tutor.html         # Pencarian, Filter & Sorting Tutor Lengkap
│   ├── detail-tutor.html       # Halaman Detail Profil, Bio, & Jadwal Tutor
│   ├── login.html              # Autentikasi Masuk (Peran Siswa & Tutor)
│   ├── register.html           # Pendaftaran Siswa Baru
│   ├── register-tutor.html     # Formulir Pendaftaran Mitra Tutor & Upload CV
│   ├── dashboard-siswa.html    # Panel Siswa (Jadwal Bimbingan, Riwayat Booking)
│   ├── dashboard-tutor.html    # Panel Tutor (Permintaan Sesi Masuk, Terima/Tolak)
│   ├── tentang-kami.html       # Profil & Misi EduKita
│   ├── kebijakan-privasi.html  # Kebijakan Privasi
│   └── syarat-ketentuan.html   # Syarat & Ketentuan Layanan
├── assets/
│   ├── images/
│   │   ├── hero-illustration.jpg
│   │   └── tutor-banner.jpg
│   └── icons/
└── README.md
```

---

## 🌟 Fitur Utama yang Berfungsi

1. **Navigasi Responsif & Mobile Drawer**:
   - Menu desktop dengan highlight halaman aktif dan status login dinamis.
   - Drawer mobile halus dengan animasi transisi dan penutup tombol escape/overlay.
2. **Hero Section 2 Kolom**:
   - Headline tajam, kartu pencarian cepat terintegrasi langsung ke halaman katalog, dan ilustrasi modern 3D beresolusi tinggi dengan floating badges.
3. **Statistik Terverifikasi**:
   - Indikator 15.000+ siswa, 2.400+ tutor, 98.4% kelulusan SNBT, dan rating 4.9/5.
4. **Katalog Mata Pelajaran Interaktif**:
   - Kategori UTBK/SNBT, Matematika, Fisika & Kimia, Biologi, Bahasa Inggris, Coding, dan Ekonomi. Klik kategori otomatis membuka halaman pencarian dengan filter terpilih.
5. **Mesin Pencarian, Filter, & Sorting Tutor (`cari-tutor.html`)**:
   - Filter kata kunci (nama, kampus, materi), mata pelajaran, metode (Online / Tatap Muka), dan rentang tarif per jam.
   - Sorting: Rating tertinggi, paling banyak sesi, tarif terendah/tertinggi.
   - Indikator jumlah hasil dan tombol Reset Filter.
6. **Profil Detail Tutor (`detail-tutor.html`)**:
   - Dinamis membaca query param `?id=tutor-1`, menampilkan almamater, riwayat pendidikan, metode ajar, ulasan siswa asli, dan *sticky booking widget*.
7. **Modal Pengajuan Sesi Belajar**:
   - Dialog interaktif untuk memilih tanggal, jam, durasi, topik bahasan, dan penghitungan estimasi biaya otomatis.
   - Hasil pengajuan tersimpan ke `localStorage` dan langsung sinkron ke dashboard siswa dan tutor.
8. **Autentikasi UI & Akun Demo Cepat (`login.html`)**:
   - Tab role switcher antara **Siswa** dan **Tutor**.
   - Tombol 1-klik: **"Masuk sbg Siswa"** (Budi Santoso) dan **"Masuk sbg Tutor"** (Rizky Megantara).
9. **Dashboard Siswa (`dashboard-siswa.html`)**:
   - Memantau sesi mendatang, status konfirmasi, tautan Google Meet / alamat pertemuan, dan riwayat bimbingan.
10. **Dashboard Tutor (`dashboard-tutor.html`)**:
    - Ringkasan pendapatan demo dan jam mengajar.
    - Notifikasi permintaan sesi masuk dari murid dengan tombol **"Terima Sesi"** dan **"Tolak"** yang mengubah status secara langsung!
11. **Pendaftaran Mitra Tutor (`register-tutor.html`)**:
    - Form terstruktur dengan validasi data pribadi, kampus/IPK, tarif mengajar, serta simulasi upload berkas CV.
12. **FAQ Accordion & CTA**:
    - Tanya jawab interaktif yang dapat dibuka/tutup secara mulus.

---

## 💻 Cara Menjalankan Website

Website EduKita tidak memerlukan proses build (`npm install`, `vite`, `webpack`, dll.). 

### Cara 1: Menggunakan Live Server di VS Code / Antigravity IDE
1. Buka folder `EduKita` di editor.
2. Klik kanan pada `index.html` dan pilih **Open with Live Server**.
3. Browser akan membuka website di `http://127.0.0.1:5500/index.html`.

### Cara 2: Langsung Menggunakan Browser
1. Buka File Explorer dan arahkan ke folder `EduKita`.
2. Klik ganda file `index.html` untuk langsung membukanya di browser apa pun (Chrome, Edge, Firefox, Safari).

---

## 🔒 Catatan Keamanan & Batasan Frontend
Website ini adalah implementasi antarmuka sisi klien (Frontend Vanilla). Data demonstrasi dan status autentikasi disimpan di browser `localStorage`. Untuk implementasi produksi di masa depan, sistem dapat dihubungkan ke backend API (Node.js, Go, Python, atau Laravel) dan basis data relasional/NoSQL tanpa perlu mengubah struktur frontend yang sudah dibangun.
