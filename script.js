/**
 * ==========================================================================
 * EDUKITA - CORE JAVASCRIPT (ES6+ VANILLA JS)
 * Handles mock data, search & filters, auth simulation, booking modal,
 * dashboards, FAQ, and mobile navigation.
 * ==========================================================================
 */

// 0. AVATAR PATH RESOLVER HELPER
function getTutorAvatarSrc(avatar) {
  if (!avatar) return "";
  if (avatar.startsWith("http://") || avatar.startsWith("https://")) return avatar;
  const isInsidePages = window.location.pathname.includes("/pages/");
  const base = isInsidePages ? "../assets/images/" : "assets/images/";
  const filename = avatar.split("/").pop();
  return base + filename;
}

// 1. COMPREHENSIVE TUTOR DEMONSTRATION DATA (MITRA TUTOR EDUKITA)
const EDUKITA_TUTORS = [
  {
    id: "tutor-1",
    name: "Rizky Megantara",
    title: "Tutor Spesialis Matematika & Penalaran UTBK",
    university: "Universitas Pendidikan Indonesia (UPI) - Pendidikan Matematika",
    avatar: "megantara.jpeg",
    rating: 4.96,
    reviewsCount: 148,
    sessionsCount: 320,
    pricePerHour: 110000,
    priceFormatted: "Rp 110.000",
    location: "Bandung & Online",
    modes: ["Online", "Tatap Muka"],
    levels: ["SMP", "SMA", "UTBK/SNBT"],
    subjects: ["Matematika", "UTBK/SNBT", "Statistika"],
    bio: "Pengajar Pendidikan Matematika UPI berpengalaman mendampingi ratusan siswa menembus PTN impian lewat metode konsep dasar mendalam tanpa hafalan rumus mati.",
    education: [
      { year: "2021 - Sekarang", title: "Pendidikan Matematika, Universitas Pendidikan Indonesia (UPI)" },
      { year: "2023", title: "Finalis Kompetisi Pengajaran Kreatif Nasional" }
    ],
    teachingPhilosophy: "Matematika bukan tentang menghafal trik cepat, melainkan memahami logika di balik pola angka sehingga soal model apapun dapat diselesaikan dengan tenang.",
    schedules: ["Senin (16:00 - 18:00)", "Rabu (19:00 - 21:00)", "Sabtu (09:00 - 12:00)"],
    reviews: [
      { name: "Dimas Aditya (Siswa SMA 3 Bandung)", text: "Kak Rizky Megantara cara ngajarnya enak banget! TPS Penalaran Matematika ku naik dari 520 jadi 715 di SNBT!", rating: 5 },
      { name: "Bu Rina (Orang Tua Siswa)", text: "Anak saya yang tadinya takut matematika sekarang malah minta jadwal les tambahan sama Kak Rizky.", rating: 5 }
    ]
  },
  {
    id: "tutor-2",
    name: "Adriel Ramdhan",
    title: "Tutor Kimia SMA & Reaksi Stoikiometri",
    university: "Universitas Pendidikan Indonesia (UPI) - Pendidikan Kimia",
    avatar: "adriel.jpeg",
    rating: 4.91,
    reviewsCount: 94,
    sessionsCount: 210,
    pricePerHour: 90000,
    priceFormatted: "Rp 90.000",
    location: "Bandung & Online",
    modes: ["Online", "Tatap Muka"],
    levels: ["SMA", "UTBK/SNBT"],
    subjects: ["Kimia", "IPA", "UTBK/SNBT"],
    bio: "Pengajar Pendidikan Kimia UPI yang ahli membimbing siswa SMA menaklukkan stoikiometri, termokimia, larutan asam-basa, dan kimia organik secara runtut dan gamblang.",
    education: [
      { year: "2021 - Sekarang", title: "Pendidikan Kimia, Universitas Pendidikan Indonesia (UPI)" },
      { year: "2023", title: "Asisten Laboratorium Kimia Anorganik" }
    ],
    teachingPhilosophy: "Kimia bukan menghafal tabel periodik secara buta, tetapi memahami bagaimana partikel berinteraksi membentuk zat baru.",
    schedules: ["Selasa (16:30 - 18:30)", "Kamis (16:30 - 18:30)", "Sabtu (14:00 - 17:00)"],
    reviews: [
      { name: "Rian Hidayat", text: "Stoikiometri dan asam-basa yang tadinya bikin pusing langsung plong setelah bimbingan bareng Kak Adriel. Mantap!", rating: 5 }
    ]
  },
  {
    id: "tutor-3",
    name: "Azkia Jasmine",
    title: "Tutor Biologi, IPA & Persiapan Ujian Sains",
    university: "Universitas Pendidikan Indonesia (UPI) - Pendidikan Biologi",
    avatar: "azkia.jpeg",
    rating: 4.95,
    reviewsCount: 132,
    sessionsCount: 280,
    pricePerHour: 105000,
    priceFormatted: "Rp 105.000",
    location: "Bandung & Online",
    modes: ["Online", "Tatap Muka"],
    levels: ["SMP", "SMA", "UTBK/SNBT"],
    subjects: ["Biologi", "IPA", "UTBK/SNBT"],
    bio: "Pengajar Pendidikan Biologi UPI dengan metode mnemonik visual dan pendekatan studi kasus aplikatif. Membantu siswa memahami konsep biologi tubuh dan sains secara menyenangkan.",
    education: [
      { year: "2021 - Sekarang", title: "Pendidikan Biologi, Universitas Pendidikan Indonesia (UPI)" },
      { year: "2023", title: "Peneliti Muda Pembelajaran Sains Interaktif" }
    ],
    teachingPhilosophy: "Biologi adalah ilmu kehidupan di sekitar kita. Belajar biologi dengan analogi visual membuat materi terserap alami tanpa beban menghafal buta.",
    schedules: ["Selasa (16:30 - 18:30)", "Kamis (19:00 - 21:00)", "Sabtu (10:00 - 12:00)"],
    reviews: [
      { name: "Nadine Kirana (Siswi SMA)", text: "Kak Azkia juara bikin materi genetika dan sistem organ jadi gampang nempel di kepala!", rating: 5 }
    ]
  },
  {
    id: "tutor-4",
    name: "Fauzan Fahmi",
    title: "Tutor Fisika & Sains Terapan",
    university: "Universitas Pendidikan Indonesia (UPI) - Pendidikan Fisika",
    avatar: "fauzan.jpeg",
    rating: 4.92,
    reviewsCount: 115,
    sessionsCount: 260,
    pricePerHour: 115000,
    priceFormatted: "Rp 115.000",
    location: "Bandung & Online",
    modes: ["Online", "Tatap Muka"],
    levels: ["SMA", "UTBK/SNBT"],
    subjects: ["Fisika", "IPA", "UTBK/SNBT"],
    bio: "Berpengalaman mengajar penguatan konsep mekanika, fluida, optika, serta termodinamika. Menjelaskan rumus fisika lewat analogi kehidupan sehari-hari dan bedah soal bertahap.",
    education: [
      { year: "2021 - Sekarang", title: "Pendidikan Fisika, Universitas Pendidikan Indonesia (UPI)" },
      { year: "2022", title: "Instruktur Praktikum Fisika Dasar" }
    ],
    teachingPhilosophy: "Fisika menjelaskan bagaimana alam semesta bekerja. Jika paham konsep intinya, penurunan rumus apa pun bisa ditemukan sendiri.",
    schedules: ["Selasa (19:00 - 21:00)", "Kamis (19:00 - 21:00)", "Minggu (10:00 - 14:00)"],
    reviews: [
      { name: "Farhan Maulana (Siswa SMA)", text: "Fisika mekanika yang tadinya mimpi buruk jadi gampang dipahami lewat analogi Kak Fauzan. Recommended!", rating: 5 }
    ]
  },
  {
    id: "tutor-5",
    name: "Nasywa Naila",
    title: "Tutor Bahasa Inggris & TOEFL / IELTS Preparation",
    university: "Universitas Pendidikan Indonesia (UPI) - Pendidikan Bahasa Inggris",
    avatar: "nasywa.jpeg",
    rating: 4.98,
    reviewsCount: 165,
    sessionsCount: 380,
    pricePerHour: 95000,
    priceFormatted: "Rp 95.000",
    location: "Bandung & Online Seluruh Indonesia",
    modes: ["Online"],
    levels: ["SMP", "SMA", "Kuliah/Umum"],
    subjects: ["Bahasa Inggris", "TOEFL / IELTS"],
    bio: "Pendidik Bahasa Inggris UPI dengan sertifikasi TOEFL ITP 600+ dan keahlian communicative language teaching. Berpengalaman melatih speaking aktif dan persiapan tes akademik.",
    education: [
      { year: "2021 - Sekarang", title: "Pendidikan Bahasa Inggris, Universitas Pendidikan Indonesia (UPI)" },
      { year: "2023", title: "Certified English for Academic Purposes Facilitator" }
    ],
    teachingPhilosophy: "Belajar bahasa Inggris adalah tentang membangun rasa percaya diri untuk berekspresi, bukan tentang rasa takut salah grammar.",
    schedules: ["Senin s/d Jumat (18:30 - 20:30)", "Sabtu (13:00 - 17:00)"],
    reviews: [
      { name: "Alisha Nadira (Mahasiswi)", text: "Skor TOEFL ITP ku naik drastis dari 480 ke 570 berkat tips reading dan structure dari Kak Nasywa!", rating: 5 }
    ]
  },
  {
    id: "tutor-6",
    name: "Ilham Sidqi",
    title: "Tutor Coding, Informatika & Logika Algoritma",
    university: "Universitas Pendidikan Indonesia (UPI) - Ilmu Komputer",
    avatar: "ilham.jpeg",
    rating: 4.94,
    reviewsCount: 98,
    sessionsCount: 220,
    pricePerHour: 125000,
    priceFormatted: "Rp 125.000",
    location: "Bandung & Online Seluruh Indonesia",
    modes: ["Online", "Tatap Muka"],
    levels: ["SMP", "SMA", "Kuliah/Umum"],
    subjects: ["Coding / Informatika", "UTBK/SNBT"],
    bio: "Spesialis logika pemrograman Python, dasar algoritma, web development, dan persiapan Olimpiade Sains Nasional (OSN) bidang Informatika dengan latihan kasus langsung.",
    education: [
      { year: "2021 - Sekarang", title: "Ilmu Komputer, Universitas Pendidikan Indonesia (UPI)" },
      { year: "2023", title: "Juara Hackathon Aplikasi Edukasi Digital" }
    ],
    teachingPhilosophy: "Setiap orang bisa coding dengan melatih alur logika langkah demi langkah layaknya memecahkan teka-teki seru.",
    schedules: ["Senin (19:00 - 21:00)", "Rabu (16:30 - 18:30)", "Minggu (13:00 - 16:00)"],
    reviews: [
      { name: "Bagus Tri (Siswa SMA)", text: "Seru banget belajar algoritma bareng Kak Ilham, diajarin dari nol sampe bisa bikin program mini sendiri!", rating: 5 }
    ]
  }
];

// 2. DEFAULT INITIAL SESSIONS (FOR DEMONSTRATION IN DASHBOARD)
const DEFAULT_DEMO_BOOKINGS = [
  {
    id: "book-101",
    tutorId: "tutor-1",
    tutorName: "Rizky Megantara",
    tutorSubject: "Matematika",
    tutorAvatar: "megantara.jpeg",
    studentName: "Budi Santoso",
    studentEmail: "budi@edukita.id",
    date: "2026-10-14",
    time: "16:00 - 18:00 WIB",
    mode: "Online (Google Meet)",
    locationNote: "Link Meet: meet.google.com/edu-kita-math",
    notes: "Fokus pembahasan soal Penalaran Matematika SNBT 2025 dan turunan fungsi.",
    status: "Terkonfirmasi",
    totalFee: "Rp 220.000"
  },
  {
    id: "book-102",
    tutorId: "tutor-4",
    tutorName: "Fauzan Fahmi",
    tutorSubject: "Fisika",
    tutorAvatar: "fauzan.jpeg",
    studentName: "Budi Santoso",
    studentEmail: "budi@edukita.id",
    date: "2026-10-16",
    time: "19:00 - 21:00 WIB",
    mode: "Tatap Muka",
    locationNote: "Perpustakaan Daerah / Kafe Belajar Bandung",
    notes: "Latihan soal Hukum Newton dan Usaha & Energi persiapan PAS semester 1.",
    status: "Menunggu Konfirmasi",
    totalFee: "Rp 230.000"
  }
];

// 3. STORAGE HELPERS
const EduStorage = {
  getAuth() {
    const raw = localStorage.getItem("edukita_auth");
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name && (parsed.name.includes("Sarah") || parsed.name.includes("Megantara"))) {
        parsed.name = "Rizky Megantara";
        parsed.email = "megantara@edukita.id";
        localStorage.setItem("edukita_auth", JSON.stringify(parsed));
      }
      return parsed;
    } catch (e) {
      return null;
    }
  },
  setAuth(user) {
    localStorage.setItem("edukita_auth", JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem("edukita_auth");
    showToast("Anda telah keluar dari akun EduKita.", "info");
    setTimeout(() => {
      const isPagesDir = window.location.pathname.includes("/pages/");
      window.location.href = isPagesDir ? "../index.html" : "index.html";
    }, 700);
  },
  getBookings() {
    const raw = localStorage.getItem("edukita_bookings");
    if (!raw || raw.includes("Sarah Amalia") || raw.includes("unsplash.com")) {
      localStorage.setItem("edukita_bookings", JSON.stringify(DEFAULT_DEMO_BOOKINGS));
      return DEFAULT_DEMO_BOOKINGS;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return DEFAULT_DEMO_BOOKINGS;
    }
  },
  addBooking(booking) {
    const bookings = this.getBookings();
    bookings.unshift(booking);
    localStorage.setItem("edukita_bookings", JSON.stringify(bookings));
  },
  updateBookingStatus(id, newStatus) {
    const bookings = this.getBookings();
    const target = bookings.find(b => b.id === id);
    if (target) {
      target.status = newStatus;
      localStorage.setItem("edukita_bookings", JSON.stringify(bookings));
    }
  }
};

// 4. FLOATING TOAST NOTIFICATION
function showToast(message, type = "info") {
  let container = document.getElementById("edukita-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "edukita-toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconName = type === "success" ? "check-circle" : type === "error" ? "alert-circle" : "info";
  toast.innerHTML = `
    <i data-lucide="${iconName}" style="width: 20px; height: 20px; flex-shrink: 0;"></i>
    <div style="font-size: 0.875rem; font-weight: 600; line-height: 1.4;">${message}</div>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 5. NAVBAR & MOBILE MENU LOGIC
function initNavbar() {
  const authUser = EduStorage.getAuth();
  const navAuthSlots = document.querySelectorAll(".nav-auth-slot");
  const isPagesDir = window.location.pathname.includes("/pages/");
  const prefix = isPagesDir ? "" : "pages/";
  const homePrefix = isPagesDir ? "../index.html" : "index.html";

  navAuthSlots.forEach(slot => {
    if (authUser) {
      // Logged In
      const dashboardLink = authUser.role === "tutor" 
        ? `${prefix}dashboard-tutor.html` 
        : `${prefix}dashboard-siswa.html`;

      slot.innerHTML = `
        <a href="${dashboardLink}" class="user-menu-pill" title="Buka Dashboard">
          <div class="user-avatar-mini">${authUser.name ? authUser.name.charAt(0) : "U"}</div>
          <div class="user-meta-text">
            <span class="user-meta-name">${authUser.name || "Pengguna"}</span>
            <span class="user-meta-role">${authUser.role === "tutor" ? "Tutor" : "Siswa"}</span>
          </div>
        </a>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-logout-action" title="Keluar">
          Keluar
        </button>
      `;
    } else {
      // Not Logged In
      slot.innerHTML = `
        <a href="${prefix}login.html" class="btn btn-secondary btn-sm">Masuk</a>
        <a href="${prefix}register.html" class="btn btn-primary btn-sm">Daftar Akun</a>
      `;
    }
  });

  // Attach logout handler
  document.querySelectorAll("#btn-logout-action").forEach(btn => {
    btn.addEventListener("click", () => {
      EduStorage.logout();
    });
  });

  // Mobile Menu Drawer Toggling
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const overlay = document.getElementById("mobile-overlay");
  const closeBtn = document.getElementById("mobile-drawer-close");

  function openDrawer() {
    if (drawer) drawer.classList.add("open");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

// 6. TUTOR CARD TEMPLATE GENERATOR
function renderTutorCardHTML(tutor, isInsidePages = false) {
  const detailLink = isInsidePages 
    ? `detail-tutor.html?id=${tutor.id}` 
    : `pages/detail-tutor.html?id=${tutor.id}`;

  const tagsHTML = tutor.subjects.map(s => `
    <span class="subject-tag ${s === 'UTBK/SNBT' ? 'primary' : ''}">${s}</span>
  `).join("");

  const modesBadge = tutor.modes.join(" • ");

  return `
    <article class="tutor-card" data-id="${tutor.id}">
      <div class="tutor-card-top">
        <div class="tutor-avatar-box">
          <img src="${getTutorAvatarSrc(tutor.avatar)}" alt="${tutor.name}" class="tutor-avatar" loading="lazy" />
          <span class="tutor-online-status" title="Tutor Aktif"></span>
        </div>
        <div class="tutor-info-meta">
          <h3 class="tutor-name">
            ${tutor.name}
            <i data-lucide="check-check" style="width: 16px; height: 16px; color: #0284c7;" title="Tutor Terverifikasi"></i>
          </h3>
          <p class="tutor-univ">${tutor.university}</p>
          <div class="tutor-rating-row">
            <span class="rating-stars">
              <i data-lucide="star" style="width: 15px; height: 15px; fill: #f59e0b; color: #f59e0b;"></i>
              ${tutor.rating}
            </span>
            <span class="rating-reviews">(${tutor.reviewsCount} ulasan • ${tutor.sessionsCount}+ sesi)</span>
          </div>
        </div>
      </div>

      <div class="tutor-subjects-tags">
        ${tagsHTML}
      </div>

      <p class="tutor-bio-snippet">${tutor.bio}</p>

      <div class="tutor-card-meta-list">
        <div class="meta-row">
          <span>Metode:</span>
          <span>${modesBadge}</span>
        </div>
        <div class="meta-row">
          <span>Lokasi:</span>
          <span>${tutor.location}</span>
        </div>
      </div>

      <div class="tutor-card-bottom">
        <div class="tutor-price-box">
          <span class="price-sub">Tarif per jam</span>
          <div class="price-val">${tutor.priceFormatted}</div>
        </div>
        <div class="tutor-card-actions">
          <a href="${detailLink}" class="btn btn-secondary btn-sm">Profil</a>
          <button type="button" class="btn btn-primary btn-sm btn-open-booking" data-tutor-id="${tutor.id}">
            Ajukan Sesi
          </button>
        </div>
      </div>
    </article>
  `;
}

// 7. TUTOR SEARCH & FILTER SYSTEM (For cari-tutor.html and index hero)
function initTutorCatalog() {
  const container = document.getElementById("tutor-catalog-grid");
  const counterEl = document.getElementById("catalog-result-count");
  if (!container) return;

  const searchInput = document.getElementById("filter-keyword");
  const subjectFilter = document.getElementById("filter-subject");
  const modeRadios = document.querySelectorAll("input[name='filter-mode']");
  const sortSelect = document.getElementById("catalog-sort");
  const resetBtn = document.getElementById("btn-reset-filters");
  const priceRadios = document.querySelectorAll("input[name='filter-price']");

  // Check URL query parameters for initial filters (e.g., ?kategori=UTBK/SNBT)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("kategori");
  const initialKeyword = urlParams.get("q");

  if (initialCategory && subjectFilter) {
    subjectFilter.value = initialCategory;
  }
  if (initialKeyword && searchInput) {
    searchInput.value = initialKeyword;
  }

  function applyFilters() {
    let list = [...EDUKITA_TUTORS];

    // Keyword filter
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
    if (keyword) {
      list = list.filter(t => 
        t.name.toLowerCase().includes(keyword) ||
        t.subjects.some(s => s.toLowerCase().includes(keyword)) ||
        t.university.toLowerCase().includes(keyword) ||
        t.location.toLowerCase().includes(keyword) ||
        t.bio.toLowerCase().includes(keyword)
      );
    }

    // Subject Filter
    const selectedSubject = subjectFilter ? subjectFilter.value : "";
    if (selectedSubject && selectedSubject !== "semua") {
      list = list.filter(t => t.subjects.includes(selectedSubject));
    }

    // Mode Filter
    let selectedMode = "semua";
    modeRadios.forEach(r => {
      if (r.checked) selectedMode = r.value;
    });
    if (selectedMode !== "semua") {
      list = list.filter(t => t.modes.includes(selectedMode));
    }

    // Price Filter
    let selectedPrice = "semua";
    priceRadios.forEach(r => {
      if (r.checked) selectedPrice = r.value;
    });
    if (selectedPrice === "under-100") {
      list = list.filter(t => t.pricePerHour <= 100000);
    } else if (selectedPrice === "100-130") {
      list = list.filter(t => t.pricePerHour > 100000 && t.pricePerHour <= 130000);
    } else if (selectedPrice === "above-130") {
      list = list.filter(t => t.pricePerHour > 130000);
    }

    // Sorting
    const sortVal = sortSelect ? sortSelect.value : "rating-desc";
    if (sortVal === "rating-desc") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === "price-asc") {
      list.sort((a, b) => a.pricePerHour - b.pricePerHour);
    } else if (sortVal === "price-desc") {
      list.sort((a, b) => b.pricePerHour - a.pricePerHour);
    } else if (sortVal === "sessions-desc") {
      list.sort((a, b) => b.sessionsCount - a.sessionsCount);
    }

    // Render cards
    const isInsidePages = window.location.pathname.includes("/pages/");
    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; background: #ffffff; padding: 3.5rem 2rem; border-radius: 16px; border: 1px dashed var(--border-color); text-align: center;">
          <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--text-muted); margin: 0 auto 1rem auto;"></i>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Tidak Ada Tutor yang Cocok</h3>
          <p style="color: var(--text-muted); max-width: 450px; margin: 0 auto 1.5rem auto;">
            Coba ubah kata kunci pencarian, hilangkan filter mata pelajaran, atau reset filter untuk melihat semua tutor yang tersedia.
          </p>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-empty-reset">Reset Semua Filter</button>
        </div>
      `;
      const emptyReset = document.getElementById("btn-empty-reset");
      if (emptyReset) {
        emptyReset.addEventListener("click", () => {
          if (resetBtn) resetBtn.click();
        });
      }
    } else {
      container.innerHTML = list.map(t => renderTutorCardHTML(t, isInsidePages)).join("");
    }

    if (counterEl) {
      counterEl.textContent = `Menampilkan ${list.length} tutor pilihan`;
    }

    if (window.lucide) window.lucide.createIcons();
    attachBookingModalTriggers();
  }

  // Event Listeners for Filters
  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (subjectFilter) subjectFilter.addEventListener("change", applyFilters);
  modeRadios.forEach(r => r.addEventListener("change", applyFilters));
  priceRadios.forEach(r => r.addEventListener("change", applyFilters));
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (searchInput) searchInput.value = "";
      if (subjectFilter) subjectFilter.value = "semua";
      modeRadios.forEach(r => { r.checked = r.value === "semua"; });
      priceRadios.forEach(r => { r.checked = r.value === "semua"; });
      if (sortSelect) sortSelect.value = "rating-desc";
      applyFilters();
      showToast("Filter pencarian telah direset.", "info");
    });
  }

  // Run initial filter
  applyFilters();
}

// 8. DETAIL TUTOR PAGE LOGIC
function initTutorDetail() {
  const detailContainer = document.getElementById("tutor-detail-content");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tutorId = urlParams.get("id") || "tutor-1";
  const tutor = EDUKITA_TUTORS.find(t => t.id === tutorId) || EDUKITA_TUTORS[0];

  document.title = `${tutor.name} - Tutor EduKita`;

  // Render detail profile page
  const subjectsPills = tutor.subjects.map(s => `<span class="badge badge-primary">${s}</span>`).join(" ");
  const levelsPills = tutor.levels.map(l => `<span class="badge badge-indigo">${l}</span>`).join(" ");
  const modesPills = tutor.modes.map(m => `<span class="badge badge-green">${m}</span>`).join(" ");

  const eduTimeline = tutor.education.map(e => `
    <div class="timeline-item">
      <div class="timeline-title">${e.title}</div>
      <div class="timeline-sub">${e.year}</div>
    </div>
  `).join("");

  const schedulesList = tutor.schedules.map(sch => `
    <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; font-size: 0.875rem;">
      <i data-lucide="calendar" style="width: 16px; height: 16px; color: var(--primary-500);"></i>
      <span>${sch}</span>
    </div>
  `).join("");

  const reviewsList = tutor.reviews.map(rev => `
    <div style="background: var(--navy-50); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span style="font-weight: 700; font-size: 0.9375rem; color: var(--navy-900);">${rev.name}</span>
        <div style="display: flex; gap: 2px; color: #f59e0b;">
          ${Array(rev.rating).fill('<i data-lucide="star" style="width: 14px; height: 14px; fill: #f59e0b;"></i>').join("")}
        </div>
      </div>
      <p style="font-size: 0.875rem; color: var(--navy-600); line-height: 1.6;">"${rev.text}"</p>
    </div>
  `).join("");

  detailContainer.innerHTML = `
    <div class="tutor-detail-layout">
      <!-- Left Column: Details -->
      <div class="tutor-detail-left">
        <div class="tutor-profile-header">
          <div class="tutor-detail-avatar-box">
            <img src="${getTutorAvatarSrc(tutor.avatar)}" alt="${tutor.name}" class="tutor-detail-avatar" />
          </div>
          <div class="tutor-detail-main-info">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="badge badge-verified">
                <i data-lucide="check-check" style="width: 14px; height: 14px;"></i> Tutor Terverifikasi
              </span>
              <span class="badge badge-gold">⭐ ${tutor.rating} / 5.0</span>
            </div>
            <h1 class="detail-name-title">${tutor.name}</h1>
            <p class="detail-headline">${tutor.title}</p>
            <p style="font-size: 0.875rem; color: var(--navy-600);">📍 ${tutor.location} • ${tutor.university}</p>

            <div class="detail-stats-bar">
              <div class="detail-stat-unit">
                <i data-lucide="book-open" style="color: var(--primary-500); width: 18px; height: 18px;"></i>
                <span><strong>${tutor.sessionsCount}+</strong> Sesi Selesai</span>
              </div>
              <div class="detail-stat-unit">
                <i data-lucide="users" style="color: var(--primary-500); width: 18px; height: 18px;"></i>
                <span><strong>${tutor.reviewsCount}</strong> Ulasan Siswa</span>
              </div>
              <div class="detail-stat-unit">
                <i data-lucide="clock" style="color: var(--primary-500); width: 18px; height: 18px;"></i>
                <span>Respon Cepat (&lt; 15 mnt)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bio & Philosophy -->
        <div class="detail-section-card">
          <h2 class="detail-card-title"><i data-lucide="user"></i> Tentang Tutor</h2>
          <p class="detail-text-body" style="margin-bottom: 1.25rem;">${tutor.bio}</p>
          <div style="background: var(--primary-50); border-left: 4px solid var(--primary-500); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0;">
            <p style="font-size: 0.875rem; font-style: italic; color: var(--primary-800);">"${tutor.teachingPhilosophy}"</p>
          </div>
        </div>

        <!-- Subjects & Specialization -->
        <div class="detail-section-card">
          <h2 class="detail-card-title"><i data-lucide="award"></i> Bidang Studi & Jenjang Ajar</h2>
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Mata Pelajaran:</span>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">${subjectsPills}</div>
          </div>
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Tingkat / Jenjang:</span>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">${levelsPills}</div>
          </div>
          <div>
            <span style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Metode Belajar:</span>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">${modesPills}</div>
          </div>
        </div>

        <!-- Education History -->
        <div class="detail-section-card">
          <h2 class="detail-card-title"><i data-lucide="graduation-cap"></i> Riwayat Pendidikan & Prestasi</h2>
          <div class="timeline-list">${eduTimeline}</div>
        </div>

        <!-- Reviews -->
        <div class="detail-section-card">
          <h2 class="detail-card-title"><i data-lucide="message-square"></i> Ulasan Siswa (${tutor.reviewsCount})</h2>
          ${reviewsList}
        </div>
      </div>

      <!-- Right Column: Sticky Booking Widget -->
      <div class="tutor-detail-right">
        <div class="sticky-booking-widget">
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Tarif Privat 1-on-1</span>
          <div class="widget-price-tag">
            <span class="widget-price-amount">${tutor.priceFormatted}</span>
            <span class="widget-price-period">/ jam pelajaran</span>
          </div>

          <div class="widget-perks-list">
            <div class="widget-perk-item">
              <i data-lucide="check-circle-2"></i>
              <span>Konsultasi rencana belajar gratis</span>
            </div>
            <div class="widget-perk-item">
              <i data-lucide="check-circle-2"></i>
              <span>Bahan ajar & bank soal terkurasi</span>
            </div>
            <div class="widget-perk-item">
              <i data-lucide="check-circle-2"></i>
              <span>Jaminan tutor cocok atau ganti</span>
            </div>
            <div class="widget-perk-item">
              <i data-lucide="check-circle-2"></i>
              <span>Fleksibel jadwal online/offline</span>
            </div>
          </div>

          <div style="margin-bottom: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <span style="font-size: 0.8125rem; font-weight: 700; color: var(--navy-800); display: block; margin-bottom: 0.5rem;">Pilihan Jadwal Rutin:</span>
            ${schedulesList}
          </div>

          <button type="button" class="btn btn-primary btn-block btn-lg btn-open-booking" data-tutor-id="${tutor.id}">
            Ajukan Sesi Belajar
          </button>
          <p style="font-size: 0.75rem; text-align: center; color: var(--text-muted); margin-top: 0.75rem;">
            Tidak dikenakan biaya saat pengajuan. Pembayaran aman dilakukan setelah jadwal disepakati.
          </p>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
  attachBookingModalTriggers();
}

// 9. BOOKING MODAL LOGIC (AJUKAN SESI BELAJAR)
function initBookingModal() {
  const modal = document.getElementById("edukita-booking-modal");
  if (!modal) return;

  const closeBtn = document.getElementById("modal-booking-close");
  const cancelBtn = document.getElementById("modal-booking-cancel");
  const form = document.getElementById("booking-submission-form");

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const tutorId = document.getElementById("booking-tutor-id").value;
      const tutor = EDUKITA_TUTORS.find(t => t.id === tutorId) || EDUKITA_TUTORS[0];
      const subject = document.getElementById("booking-subject").value;
      const mode = document.getElementById("booking-mode").value;
      const date = document.getElementById("booking-date").value;
      const time = document.getElementById("booking-time").value;
      const durationHours = parseInt(document.getElementById("booking-duration").value || "2", 10);
      const notes = document.getElementById("booking-notes").value;
      const studentName = document.getElementById("booking-student-name").value;
      const studentEmail = document.getElementById("booking-student-email").value;

      if (!date || !time || !studentName || !studentEmail) {
        showToast("Mohon lengkapi formulir pengajuan sesi belajar.", "error");
        return;
      }

      const calculatedTotal = tutor.pricePerHour * durationHours;
      const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

      const newBooking = {
        id: "book-" + Date.now(),
        tutorId: tutor.id,
        tutorName: tutor.name,
        tutorSubject: subject,
        tutorAvatar: tutor.avatar,
        studentName: studentName,
        studentEmail: studentEmail,
        date: date,
        time: time,
        mode: mode,
        locationNote: mode === "Online" ? "Link Tatap Maya (Google Meet otomatis)" : "Tatap Muka di Rumah / Lokasi Kesepakatan",
        notes: notes || "Pendampingan materi dan latihan soal.",
        status: "Menunggu Konfirmasi",
        totalFee: formatter.format(calculatedTotal)
      };

      EduStorage.addBooking(newBooking);
      closeModal();
      showToast(`Permintaan sesi belajar dengan ${tutor.name} berhasil diajukan!`, "success");

      // If on student dashboard, re-render
      if (document.getElementById("student-bookings-list")) {
        initStudentDashboard();
      }
    });

    // Dynamic fee calculator on duration change
    const durationSelect = document.getElementById("booking-duration");
    const feeDisplay = document.getElementById("booking-fee-estimate");

    function updateEstimatedFee() {
      if (!durationSelect || !feeDisplay) return;
      const tutorId = document.getElementById("booking-tutor-id").value;
      const tutor = EDUKITA_TUTORS.find(t => t.id === tutorId) || EDUKITA_TUTORS[0];
      const hours = parseInt(durationSelect.value || "2", 10);
      const total = tutor.pricePerHour * hours;
      const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
      feeDisplay.textContent = `${formatter.format(total)} (${hours} Jam)`;
    }

    if (durationSelect) {
      durationSelect.addEventListener("change", updateEstimatedFee);
    }
  }
}

function attachBookingModalTriggers() {
  const modal = document.getElementById("edukita-booking-modal");
  if (!modal) return;

  const triggerButtons = document.querySelectorAll(".btn-open-booking");
  triggerButtons.forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const tutorId = btn.getAttribute("data-tutor-id") || "tutor-1";
      const tutor = EDUKITA_TUTORS.find(t => t.id === tutorId) || EDUKITA_TUTORS[0];

      // Pre-fill modal data
      const tutorIdInput = document.getElementById("booking-tutor-id");
      const tutorNameDisp = document.getElementById("modal-booking-tutor-name");
      const tutorRateDisp = document.getElementById("modal-booking-tutor-rate");
      const subjectSelect = document.getElementById("booking-subject");
      const studentNameInput = document.getElementById("booking-student-name");
      const studentEmailInput = document.getElementById("booking-student-email");
      const dateInput = document.getElementById("booking-date");

      if (tutorIdInput) tutorIdInput.value = tutor.id;
      if (tutorNameDisp) tutorNameDisp.textContent = tutor.name;
      if (tutorRateDisp) tutorRateDisp.textContent = `${tutor.priceFormatted} / jam`;

      // Pre-populate subjects
      if (subjectSelect) {
        subjectSelect.innerHTML = tutor.subjects.map(s => `<option value="${s}">${s}</option>`).join("");
      }

      // Pre-populate student data if logged in
      const currentAuth = EduStorage.getAuth();
      if (currentAuth) {
        if (studentNameInput && !studentNameInput.value) studentNameInput.value = currentAuth.name;
        if (studentEmailInput && !studentEmailInput.value) studentEmailInput.value = currentAuth.email;
      }

      // Set default date to tomorrow
      if (dateInput && !dateInput.value) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 2);
        dateInput.value = tomorrow.toISOString().split("T")[0];
      }

      // Trigger estimate calculation
      const durationSelect = document.getElementById("booking-duration");
      const feeDisplay = document.getElementById("booking-fee-estimate");
      if (durationSelect && feeDisplay) {
        const hours = parseInt(durationSelect.value || "2", 10);
        const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
        feeDisplay.textContent = `${formatter.format(tutor.pricePerHour * hours)} (${hours} Jam)`;
      }

      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    };
  });
}

// 10. AUTHENTICATION (LOGIN & REGISTRATION) LOGIC
function initAuthForms() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const roleTabs = document.querySelectorAll(".role-tab");
  const roleInput = document.getElementById("auth-role-input");

  // Role Switcher Tabs
  if (roleTabs.length > 0) {
    roleTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        roleTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const role = tab.getAttribute("data-role");
        if (roleInput) roleInput.value = role;

        const roleHint = document.getElementById("role-hint-text");
        if (roleHint) {
          roleHint.textContent = role === "tutor" 
            ? "Masuk sebagai Tutor untuk mengelola jadwal dan siswa bimbingan Anda."
            : "Masuk sebagai Siswa / Orang Tua untuk mencari tutor dan memantau sesi belajar.";
        }
      });
    });
  }

  // Demo Login Buttons
  const demoStudentBtn = document.getElementById("btn-demo-student");
  const demoTutorBtn = document.getElementById("btn-demo-tutor");

  if (demoStudentBtn) {
    demoStudentBtn.addEventListener("click", () => {
      const demoUser = {
        name: "Budi Santoso",
        email: "budi@edukita.id",
        role: "siswa"
      };
      EduStorage.setAuth(demoUser);
      showToast("Berhasil masuk sebagai Siswa Demo (Budi Santoso)", "success");
      setTimeout(() => {
        window.location.href = "dashboard-siswa.html";
      }, 600);
    });
  }

  if (demoTutorBtn) {
    demoTutorBtn.addEventListener("click", () => {
      const demoUser = {
        name: "Rizky Megantara",
        email: "megantara@edukita.id",
        role: "tutor",
        tutorId: "tutor-1"
      };
      EduStorage.setAuth(demoUser);
      showToast("Berhasil masuk sebagai Tutor Demo (Rizky Megantara)", "success");
      setTimeout(() => {
        window.location.href = "dashboard-tutor.html";
      }, 600);
    });
  }

  // Form Submissions
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;
      const role = roleInput ? roleInput.value : "siswa";

      if (!email || !password) {
        showToast("Harap isi email dan kata sandi.", "error");
        return;
      }

      if (password.length < 6) {
        showToast("Kata sandi minimal 6 karakter.", "error");
        return;
      }

      const name = role === "tutor" ? "Rizky Megantara" : email.split("@")[0];
      const user = { name: name, email: email, role: role };
      EduStorage.setAuth(user);

      showToast(`Login berhasil! Selamat datang, ${name}`, "success");
      setTimeout(() => {
        window.location.href = role === "tutor" ? "dashboard-tutor.html" : "dashboard-siswa.html";
      }, 600);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const phone = document.getElementById("reg-phone").value.trim();
      const password = document.getElementById("reg-password").value;
      const role = roleInput ? roleInput.value : "siswa";

      if (!name || !email || !password) {
        showToast("Lengkapi semua kolom formulir pendaftaran.", "error");
        return;
      }

      if (password.length < 6) {
        showToast("Kata sandi minimal 6 karakter.", "error");
        return;
      }

      const user = { name, email, phone, role };
      EduStorage.setAuth(user);

      showToast(`Registrasi berhasil! Selamat bergabung di EduKita.`, "success");
      setTimeout(() => {
        window.location.href = role === "tutor" ? "dashboard-tutor.html" : "dashboard-siswa.html";
      }, 600);
    });
  }
}

// 11. STUDENT DASHBOARD
function initStudentDashboard() {
  const container = document.getElementById("student-bookings-list");
  if (!container) return;

  const authUser = EduStorage.getAuth();
  const userNameEl = document.getElementById("student-user-name");
  if (userNameEl && authUser) {
    userNameEl.textContent = authUser.name;
  }

  const bookings = EduStorage.getBookings();
  const totalBookingsEl = document.getElementById("metric-student-total-sessions");
  const upcomingCountEl = document.getElementById("metric-student-upcoming");

  if (totalBookingsEl) totalBookingsEl.textContent = bookings.length;
  if (upcomingCountEl) {
    const activeCount = bookings.filter(b => b.status === "Terkonfirmasi" || b.status === "Menunggu Konfirmasi").length;
    upcomingCountEl.textContent = activeCount;
  }

  if (bookings.length === 0) {
    container.innerHTML = `
      <div style="background: #ffffff; padding: 3rem; border-radius: 16px; border: 1px dashed var(--border-color); text-align: center;">
        <i data-lucide="calendar-x" style="width: 48px; height: 48px; color: var(--text-muted); margin: 0 auto 1rem auto;"></i>
        <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Belum Ada Sesi Belajar</h4>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Mulai cari tutor terbaik untuk membantu belajarmu hari ini.</p>
        <a href="cari-tutor.html" class="btn btn-primary btn-sm">Jelajahi Tutor EduKita</a>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = bookings.map(b => {
    const statusBadge = b.status === "Terkonfirmasi" 
      ? `<span class="badge badge-green"><i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> Terkonfirmasi</span>`
      : b.status === "Selesai"
      ? `<span class="badge badge-indigo">Selesai</span>`
      : `<span class="badge badge-gold"><i data-lucide="clock" style="width: 13px; height: 13px;"></i> Menunggu Konfirmasi</span>`;

    const dateParts = b.date.split("-");
    const day = dateParts[2] || "14";
    const month = dateParts[1] ? ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGT", "SEP", "OKT", "NOV", "DES"][parseInt(dateParts[1], 10) - 1] : "OKT";

    return `
      <div class="session-card">
        <div class="session-main-meta">
          <div class="session-date-badge">
            <div class="session-date-day">${day}</div>
            <div class="session-date-month">${month}</div>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <h4 class="session-subject-title">${b.tutorSubject} (1-on-1)</h4>
              ${statusBadge}
            </div>
            <p class="session-partner-name">Tutor: <strong>${b.tutorName}</strong> • ${b.time}</p>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.25rem;">
              Metode: ${b.mode} | ${b.locationNote}
            </p>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="text-align: right; margin-right: 0.5rem;">
            <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Biaya</span>
            <span style="font-weight: 800; color: var(--navy-900); font-size: 0.9375rem;">${b.totalFee}</span>
          </div>
          <a href="detail-tutor.html?id=${b.tutorId}" class="btn btn-secondary btn-sm">Profil Tutor</a>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

// 12. TUTOR DASHBOARD
function initTutorDashboard() {
  const container = document.getElementById("tutor-requests-list");
  if (!container) return;

  const authUser = EduStorage.getAuth();
  const userNameEl = document.getElementById("tutor-user-name");
  if (userNameEl && authUser) {
    userNameEl.textContent = authUser.name;
  }

  const bookings = EduStorage.getBookings();
  const pendingRequests = bookings.filter(b => b.status === "Menunggu Konfirmasi");
  const confirmedSessions = bookings.filter(b => b.status === "Terkonfirmasi");

  const pendingCountEl = document.getElementById("metric-tutor-pending-count");
  const activeStudentsEl = document.getElementById("metric-tutor-active-students");
  if (pendingCountEl) pendingCountEl.textContent = pendingRequests.length;
  if (activeStudentsEl) activeStudentsEl.textContent = confirmedSessions.length + 3; // + mock historical students

  if (pendingRequests.length === 0) {
    container.innerHTML = `
      <div style="background: #ffffff; padding: 2.5rem; border-radius: 16px; border: 1px dashed var(--border-color); text-align: center;">
        <i data-lucide="check-check" style="width: 42px; height: 42px; color: var(--accent-green); margin: 0 auto 0.75rem auto;"></i>
        <h4 style="font-weight: 700; margin-bottom: 0.35rem;">Semua Permintaan Telah Ditangani</h4>
        <p style="color: var(--text-muted); font-size: 0.875rem;">Tidak ada permintaan sesi baru yang menunggu konfirmasi saat ini.</p>
      </div>
    `;
  } else {
    container.innerHTML = pendingRequests.map(req => `
      <div class="session-card" id="request-card-${req.id}">
        <div class="session-main-meta">
          <div class="user-avatar-mini" style="width: 48px; height: 48px; font-size: 1.1rem;">
            ${req.studentName ? req.studentName.charAt(0) : "S"}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <h4 class="session-subject-title">${req.studentName}</h4>
              <span class="badge badge-gold">Permintaan Baru</span>
            </div>
            <p class="session-partner-name">
              Mata Pelajaran: <strong>${req.tutorSubject}</strong> • Jadwal: ${req.date} (${req.time})
            </p>
            <p style="font-size: 0.8125rem; color: var(--navy-600); margin-top: 0.25rem;">
              <em>Catatan Siswa: "${req.notes}"</em>
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem;">
          <button type="button" class="btn btn-outline-primary btn-sm btn-action-decline" data-id="${req.id}">
            Tolak
          </button>
          <button type="button" class="btn btn-primary btn-sm btn-action-accept" data-id="${req.id}">
            Terima Sesi
          </button>
        </div>
      </div>
    `).join("");
  }

  // Schedule list on tutor dashboard
  const scheduleContainer = document.getElementById("tutor-confirmed-schedule-list");
  if (scheduleContainer) {
    if (confirmedSessions.length === 0) {
      scheduleContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.875rem;">Belum ada jadwal mengajar yang terkonfirmasi minggu ini.</p>`;
    } else {
      scheduleContainer.innerHTML = confirmedSessions.map(cs => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
          <div>
            <span style="font-weight: 700; color: var(--navy-900); display: block;">${cs.tutorSubject} dengan ${cs.studentName}</span>
            <span style="font-size: 0.8125rem; color: var(--text-muted);">${cs.date} • ${cs.time} (${cs.mode})</span>
          </div>
          <span class="badge badge-green">Siap Mengajar</span>
        </div>
      `).join("");
    }
  }

  // Attach Accept / Decline events
  document.querySelectorAll(".btn-action-accept").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      EduStorage.updateBookingStatus(id, "Terkonfirmasi");
      showToast("Sesi belajar berhasil diterima! Siswa akan menerima konfirmasi.", "success");
      initTutorDashboard();
    };
  });

  document.querySelectorAll(".btn-action-decline").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      EduStorage.updateBookingStatus(id, "Ditolak");
      showToast("Permintaan sesi belajar telah ditolak.", "info");
      initTutorDashboard();
    };
  });

  if (window.lucide) window.lucide.createIcons();
}

// 13. TUTOR PARTNER REGISTRATION FORM
function initTutorRegistrationForm() {
  const form = document.getElementById("tutor-registration-form");
  if (!form) return;

  const fileInput = document.getElementById("tutor-cv-file");
  const fileNameDisplay = document.getElementById("cv-file-name");

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files[0]) {
        fileNameDisplay.textContent = `File terpilih: ${fileInput.files[0].name} (${(fileInput.files[0].size / 1024).toFixed(1)} KB)`;
        fileNameDisplay.style.color = "var(--primary-700)";
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("tutor-reg-name").value.trim();
    const email = document.getElementById("tutor-reg-email").value.trim();
    const phone = document.getElementById("tutor-reg-phone").value.trim();
    const university = document.getElementById("tutor-reg-univ").value.trim();
    const major = document.getElementById("tutor-reg-major").value.trim();
    const subject = document.getElementById("tutor-reg-subject").value;
    const rate = document.getElementById("tutor-reg-rate").value;
    const agree = document.getElementById("tutor-reg-agree").checked;

    if (!fullName || !email || !phone || !university || !major || !rate) {
      showToast("Mohon lengkapi seluruh kolom wajib pada formulir mitra tutor.", "error");
      return;
    }

    if (!agree) {
      showToast("Harap setujui Syarat & Ketentuan Kemitraan Tutor EduKita.", "error");
      return;
    }

    // Save demo application
    const application = {
      fullName, email, phone, university, major, subject, rate,
      submittedAt: new Date().toISOString()
    };
    const existing = JSON.parse(localStorage.getItem("edukita_tutor_applications") || "[]");
    existing.push(application);
    localStorage.setItem("edukita_tutor_applications", JSON.stringify(existing));

    showToast("Pendaftaran berhasil dikirim! Tim kurasi EduKita akan menghubungi dalam 1x24 jam.", "success");

    // Replace form with success state
    form.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem;">
        <div style="width: 72px; height: 72px; border-radius: 50%; background: var(--accent-green-light); color: var(--accent-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
          <i data-lucide="check" style="width: 36px; height: 36px;"></i>
        </div>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--navy-900); margin-bottom: 0.75rem;">Pendaftaran Berhasil Dikirim!</h2>
        <p style="color: var(--navy-600); max-width: 520px; margin: 0 auto 2rem auto; line-height: 1.7;">
          Terima kasih, <strong>${fullName}</strong>! Data profil, dokumen kualifikasi, dan mata pelajaran <strong>${subject}</strong> telah kami terima. Tim kurasi EduKita akan melakukan verifikasi dan mengirimkan tautan sesi wawancara via WhatsApp / Email (${email}).
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem;">
          <a href="../index.html" class="btn btn-secondary">Kembali ke Beranda</a>
          <a href="cari-tutor.html" class="btn btn-primary">Lihat Tutor Lain</a>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  });
}

// 14. FAQ ACCORDION LOGIC
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question-btn");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        // Close other items
        faqItems.forEach(other => other.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

// 15. MAIN INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initNavbar();
  initTutorCatalog();
  initTutorDetail();
  initBookingModal();
  attachBookingModalTriggers();
  initAuthForms();
  initStudentDashboard();
  initTutorDashboard();
  initTutorRegistrationForm();
  initFAQAccordion();
});
