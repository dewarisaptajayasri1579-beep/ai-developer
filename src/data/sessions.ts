export type Step = {
  title: string;
  description?: string;
  image?: string;
  prompt?: string;
  prompts?: { label: string; text: string }[];
  substeps?: string[];
  exampleResult?: string;
  exampleResultLabel?: string;
  exampleResultSubtitle?: string;
};

export type Tool = {
  name: string;
  url: string;
};

export type Resource = {
  label: string;
  url: string;
  kind: "file" | "link";
};

export type Category = "Frontend" | "Backend";

export type Session = {
  slug: string;
  number: number;
  category: Category;
  shortTitle: string;
  title: string;
  description: string;
  /** Google Drive share link or file ID for the session's intro video. */
  video?: string;
  /** Shared ChatGPT conversation link for this session. */
  chatgptSessionUrl?: string;
  steps: Step[];
  practice?: string;
  tools?: Tool[];
  output?: string;
  teacherNote?: string;
  resources?: Resource[];
};

export const training = {
  brand: "Seven Smart",
  title: "From Idea to Production",
  tagline:
    "Peserta mampu mengubah ide menjadi aplikasi nyata dengan frontend responsive, backend/API, database, dan deploy production.",
};

export const sessions: Session[] = [
  {
    slug: "idea-to-flow-mockup",
    number: 1,
    category: "Frontend",
    video: "https://drive.google.com/file/d/1-XkFKzLdbMZfIEJ4MyBo5Kk7j3aR-4ku/view?usp=sharing",
    chatgptSessionUrl: "https://chatgpt.com/share/6a7dd68a-54f4-83ec-9b68-8c3771875003",
    shortTitle: "Idea to Flow & Mockup",
    title: "From Idea to Flow & Mockup",
    description: "Mengubah kebutuhan bisnis menjadi alur dan tampilan aplikasi.",
    steps: [
      {
        title: "Gambar Idemu di Kertas",
        description: "Sketsa ide aplikasi secara sederhana di atas kertas sebelum masuk ke AI.",
        image: "/sketch-alur-registrasi.jpeg",
      },
      {
        title: "Upload ke ChatGPT dan Isikan Prompt 1",
        description: "Upload foto sketsa ke ChatGPT, lalu jalankan prompt di bawah ini.",
        prompt:
          "Dari Gambar yang aku upload, buatkan:\n1. Gambaran Umum Aplikasi\n2. Alur Aplikasi Per Pengguna\n3. Daftar Halaman Per Pengguna\n4. Tampilan Aplikasi di Laptop dan di Handphone\n5. Dokumentasi Aplikasi Lengkap\n\nCatatan:\n1. Ringkas dan sederhana\n2. Gunakan istilah atau bahasa yang mudah dipahami oleh pemula\n3. Aplikasi ini tidak perlu terlalu banyak informasi, fokus pada kebutuhan\n4. Tampilan aplikasi mudah dipahami\n5. Tampilan aplikasi Clean\n6. Aplikasi mudah digunakan\n7. Gunakan layout dan tata letak yang sesuai kebiasaan orang Indonesia",
      },
      {
        title: "Buatkan Tampilan Laptop dan Handphone",
        description: "Minta ChatGPT membuat gambar tampilan untuk masing-masing role.",
        prompts: [
          { label: "PROMPT 2 — TAMPILAN ADMIN", text: "Buatkan Gambar Tampilan Aplikasi Untuk Admin" },
          { label: "PROMPT 3 — TAMPILAN PESERTA", text: "Buatkan Tampilan untuk Peserta" },
        ],
      },
      {
        title: "Buat Prompt ke V0.dev",
        description: "Susun prompt final untuk digenerate menjadi frontend di V0.dev.",
        prompt:
          "Sekarang buatkan Prompt ke V0.dev untuk membuat Aplikasi dengan Prinsip:\n\nRingkas dan sederhana\nIstilah di Aplikasi yang mudah dipahami oleh orang awam\nAplikasi ini tidak perlu terlalu banyak informasi, fokus pada kebutuhan\nTampilan aplikasi mudah dipahami\nTampilan aplikasi Clean\nAplikasi mudah digunakan\nGunakan layout dan tata letak yang sesuai kebiasaan orang Indonesia\nAplikasi Responsive (Tampilan Laptop dan HP)",
        exampleResult: `# Buat Aplikasi Registrasi Peserta Online

Buat sebuah **aplikasi registrasi peserta online** yang sederhana, bersih, mudah dipahami oleh orang awam, dan responsive untuk **Laptop/Desktop maupun Handphone**.

Aplikasi memiliki 2 jenis pengguna:

1. **Peserta**
2. **Admin**

Fokus aplikasi hanya pada kebutuhan utama registrasi:

**Peserta mengisi data → melakukan pembayaran → upload bukti pembayaran → menunggu verifikasi → mendapatkan kartu pendaftaran.**

Admin:

**Membuat registrasi → mendapatkan link → melihat peserta → memeriksa pembayaran → menyetujui → peserta mendapatkan kartu pendaftaran.**

---

# 1. Prinsip Desain

Gunakan prinsip berikut:

* Ringkas dan sederhana.
* Jangan menampilkan informasi yang tidak diperlukan.
* Gunakan bahasa Indonesia.
* Gunakan istilah yang mudah dipahami orang awam.
* Jangan menggunakan istilah teknis seperti "transaction", "payment gateway", "submission", "verification queue", dan istilah teknis lainnya pada tampilan pengguna.
* Gunakan kata-kata sederhana seperti:

  * "Daftar Sekarang"
  * "Data Diri"
  * "Pembayaran"
  * "Upload Bukti Pembayaran"
  * "Kirim Pendaftaran"
  * "Menunggu Verifikasi"
  * "Sudah Disetujui"
  * "Kartu Pendaftaran"
* Tampilan harus clean, modern, profesional, tetapi tidak terlihat rumit.
* Gunakan banyak white space.
* Gunakan card dengan sudut sedikit rounded.
* Gunakan icon sederhana.
* Gunakan typography yang mudah dibaca.
* Hindari terlalu banyak warna.
* Gunakan warna utama hijau atau biru sebagai warna aksi utama.
* Tombol utama harus terlihat jelas.
* Gunakan layout yang umum digunakan oleh pengguna Indonesia.
* Mobile-first.
* Semua halaman harus responsive.

---

# 2. Teknologi

Gunakan:

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

Buat struktur component yang rapi dan mudah dikembangkan.

Untuk tahap awal gunakan **dummy/mock data** dan local state.

Jangan membuat backend terlebih dahulu.

---

# 3. Struktur Pengguna

## PESERTA

Peserta tidak perlu login menggunakan username/password.

Peserta cukup membuka **Link Registrasi** yang diberikan oleh Admin.

Alurnya:

\`\`\`text
Link Registrasi
↓
Informasi Pendaftaran
↓
Data Diri
↓
Pembayaran
↓
Upload Bukti Pembayaran
↓
Status Pendaftaran
↓
Kartu Pendaftaran
\`\`\`

---

# 4. Halaman Peserta

Buat 5 tahap registrasi.

Gunakan progress indicator sederhana di bagian atas:

\`\`\`text
1 Informasi
→
2 Data Diri
→
3 Pembayaran
→
4 Upload Bukti
→
5 Selesai
\`\`\`

Pada HP, progress indicator boleh dibuat lebih sederhana agar tidak memenuhi layar.

---

## Halaman 1 — Informasi Pendaftaran

Tampilkan:

* Logo
* Nama acara
* Deskripsi singkat
* Tanggal
* Jam
* Tempat
* Biaya pendaftaran
* Fasilitas

Contoh:

**SEMINAR DIGITAL MARKETING ORGANIK SYSTEM**

Strategi digital marketing organik untuk meningkatkan penjualan dan profit bisnis.

Tanggal:
23 Mei 2026

Waktu:
09.00 - 16.00 WIB

Tempat:
Hotel Grand Indonesia, Jakarta

Biaya:
Rp150.000 / peserta

Fasilitas:

* Materi seminar
* Sertifikat
* Konsumsi
* Doorprize

Tombol besar:

**Daftar Sekarang**

Jangan tampilkan terlalu banyak informasi.

---

# 5. Halaman Data Diri

Judul:

**Lengkapi Data Diri**

Subjudul:

"Silakan isi data diri Anda dengan benar."

Field:

* Nama Lengkap *
* Nomor WhatsApp *
* Email
* Instansi / Asal
* Pilihan Kategori *

Tombol:

**Kembali**

**Lanjutkan**

Validasi sederhana:

* Nama wajib diisi.
* Nomor WhatsApp wajib diisi.
* Kategori wajib dipilih.

Jangan menggunakan form yang terlalu panjang.

---

# 6. Halaman Pembayaran

Judul:

**Pembayaran**

Tampilkan nominal dengan sangat jelas:

### Rp150.000

per peserta

Berikan pilihan:

**Transfer Bank | QRIS**

Jika Transfer Bank:

Bank BCA

1234 5678 90

a.n. PT Seven Class Indonesia

Sediakan tombol:

**Salin Nomor Rekening**

Tambahkan informasi sederhana:

"Silakan lakukan pembayaran sesuai jumlah yang tertera."

Kemudian tombol:

**Saya Sudah Bayar**

---

# 7. Halaman Upload Bukti Pembayaran

Judul:

**Upload Bukti Pembayaran**

Subjudul:

"Upload bukti pembayaran yang sudah Anda lakukan."

Buat area upload yang besar dan mudah dipahami:

**Klik untuk upload**

atau

**Tarik file ke sini**

Format:

JPG, JPEG, PNG, PDF

Ukuran maksimal 5 MB.

Setelah file dipilih:

Tampilkan preview file.

Tampilkan nama file.

Tombol:

**Ganti File**

dan:

**Kirim Pendaftaran**

Sebelum submit, tampilkan ringkasan:

Nama:
Budi Santoso

No. WhatsApp:
0812-3456-7890

Biaya:
Rp150.000

Bukti:
bukti-transfer.jpg

---

# 8. Halaman Status Pendaftaran

Setelah peserta mengirim pendaftaran, tampilkan halaman sederhana:

Icon check atau icon status.

Judul:

**Pendaftaran Diterima**

Teks:

"Terima kasih, Budi Santoso."

"Pendaftaran Anda sudah kami terima."

Status:

**Menunggu Verifikasi**

Teks:

"Bukti pembayaran Anda sedang diperiksa oleh admin."

Tampilkan:

Nomor Pendaftaran:
REG-000125

Tanggal Daftar:
23 Mei 2026, 10:25

Jangan tampilkan terlalu banyak informasi.

Tombol:

**Lihat Kartu Pendaftaran**

Jika belum disetujui, tombol tersebut disabled atau beri keterangan:

"Kartu tersedia setelah pembayaran disetujui."

---

# 9. Halaman Kartu Pendaftaran

Setelah admin menyetujui pembayaran, peserta dapat melihat kartu.

Buat kartu yang terlihat seperti tiket/e-ticket.

Isi:

**KARTU PENDAFTARAN**

SEMINAR DIGITAL MARKETING ORGANIK SYSTEM

Nama:
BUDI SANTOSO

No. Peserta:
REG-000125

Tanggal:
23 Mei 2026

Tempat:
Hotel Grand Indonesia, Jakarta

Status:

**TERDAFTAR**

Tambahkan QR Code dummy.

Di bawah kartu:

**Simpan kartu ini untuk keperluan registrasi saat acara.**

Tombol:

**Download Kartu**

Tombol:

**Cetak Kartu**

Pada HP tombol harus full width.

---

# 10. ADMIN

Admin menggunakan login.

Buat halaman:

**Login Admin**

Field:

Email

Password

Tombol:

**Masuk**

Tampilan login sederhana dan clean.

---

# 11. Dashboard Admin

Setelah login tampilkan Dashboard.

Gunakan sidebar pada laptop.

Menu:

* Dashboard
* Registrasi
* Peserta
* Pembayaran
* Kartu Pendaftaran
* Pengaturan
* Keluar

Pada HP, sidebar berubah menjadi:

* hamburger menu
* drawer/mobile navigation

---

# 12. Dashboard Admin

Judul:

**Dashboard**

Subjudul:

"Ringkasan pendaftaran."

Tampilkan 4 card sederhana:

**Total Peserta**
125

**Sudah Disetujui**
100

**Menunggu Verifikasi**
15

**Ditolak**
10

Kemudian:

### Peserta Terbaru

Table:

| Nama         | Tanggal     | Status              | Aksi  |
| ------------ | ----------- | ------------------- | ----- |
| Andi Pratama | 28 Mei 2026 | Sudah Disetujui     | Lihat |
| Siti Aisyah  | 28 Mei 2026 | Menunggu Verifikasi | Lihat |
| Budi Santoso | 28 Mei 2026 | Sudah Disetujui     | Lihat |

Pada mobile, ubah table menjadi card/list agar tidak terlalu sempit.

---

# 13. Halaman Buat Registrasi

Admin dapat membuat pendaftaran baru.

Judul:

**Buat Registrasi**

Form:

### Informasi Pendaftaran

* Nama Acara
* Deskripsi
* Tanggal
* Jam
* Tempat
* Kuota Peserta
* Biaya Pendaftaran

### Informasi Pembayaran

* Metode pembayaran
* Nama Bank
* Nomor Rekening
* Atas Nama

Tombol:

**Simpan & Dapatkan Link**

Setelah disimpan tampilkan:

### Link Registrasi

\`https://registrasi.example.com/seminar-digital-marketing\`

Tombol:

**Salin Link**

dan:

**Bagikan**

Jangan membuat form terlalu kompleks.

---

# 14. Halaman Daftar Peserta

Judul:

**Daftar Peserta**

Fitur:

* Search nama
* Search nomor WhatsApp
* Filter status

Table:

| No | Nama         | WhatsApp | Tanggal Daftar | Status              | Aksi  |
| -- | ------------ | -------- | -------------- | ------------------- | ----- |
| 1  | Andi Pratama | 0812...  | 28 Mei         | Sudah Disetujui     | Lihat |
| 2  | Siti Aisyah  | 0813...  | 28 Mei         | Menunggu Verifikasi | Lihat |
| 3  | Budi Santoso | 0814...  | 28 Mei         | Sudah Disetujui     | Lihat |

Tambahkan tombol:

**Export Excel**

Jika di mobile, gunakan card list.

---

# 15. Halaman Detail Peserta

Ketika Admin klik "Lihat", tampilkan:

### Data Peserta

Nama:
Andi Pratama

WhatsApp:
0812-1234-5678

Email:
[andi@example.com](mailto:andi@example.com)

Instansi:
PT. Maju Bersama

Tanggal Daftar:
28 Mei 2026

Status:
Menunggu Verifikasi

### Bukti Pembayaran

Tampilkan preview gambar bukti pembayaran.

Di bawahnya:

**Setujui Pembayaran**

**Tolak Pembayaran**

**Minta Upload Ulang**

Gunakan confirmation dialog sebelum menyetujui atau menolak.

---

# 16. Halaman Pembayaran

Buat halaman khusus untuk mempermudah Admin melihat pembayaran yang perlu diperiksa.

Gunakan 3 tab:

**Menunggu Verifikasi**

**Sudah Disetujui**

**Ditolak**

Prioritaskan peserta yang masih membutuhkan tindakan Admin.

Pada tab "Menunggu Verifikasi", tampilkan:

* Nama peserta
* Nomor pendaftaran
* Tanggal upload
* Bukti pembayaran
* Tombol "Periksa"

---

# 17. Halaman Kartu Pendaftaran

Admin dapat melihat peserta yang sudah disetujui.

Tampilkan:

* Nama
* Nomor peserta
* Status
* Tombol "Lihat Kartu"

Ketika klik "Lihat Kartu":

Tampilkan preview kartu pendaftaran.

Tombol:

**Cetak**

**Download**

---

# 18. Status Warna

Gunakan warna status yang mudah dipahami:

🟢 **Sudah Disetujui**

🟠 **Menunggu Verifikasi**

🔴 **Ditolak**

Jangan menggunakan terlalu banyak warna lain.

---

# 19. Responsive Design

Ini sangat penting.

Aplikasi harus dibuat **mobile-first**.

## Desktop / Laptop

Gunakan:

* Sidebar kiri
* Content area
* Table untuk data
* Card dashboard
* Form dengan 2 kolom jika memungkinkan

## Tablet

Sidebar dapat diperkecil atau menggunakan menu yang lebih ringkas.

## Mobile

Gunakan:

* Header sederhana
* Hamburger menu
* Content full width
* Card
* Form satu kolom
* Button full width
* Table berubah menjadi card/list
* Font tetap nyaman dibaca
* Spacing cukup besar agar mudah disentuh

Target ukuran:

**Mobile: 360px – 430px**

**Tablet: 768px**

**Laptop/Desktop: 1024px ke atas**

Pastikan tidak ada horizontal scrolling.

---

# 20. UX / Kemudahan Penggunaan

Gunakan aturan berikut:

1. Satu halaman memiliki satu tujuan utama.
2. Jangan membuat form terlalu panjang.
3. Tombol utama selalu mudah ditemukan.
4. Gunakan bahasa Indonesia.
5. Jangan menggunakan istilah teknis.
6. Berikan feedback setelah aksi.
7. Gunakan loading state.
8. Gunakan empty state.
9. Gunakan confirmation dialog untuk aksi penting.
10. Gunakan error message yang mudah dipahami.

Contoh:

Jangan:

"Invalid payment proof."

Gunakan:

**"Bukti pembayaran belum dapat diproses. Silakan upload kembali."**

Jangan:

"Submission successful."

Gunakan:

**"Pendaftaran berhasil dikirim."**

---

# 21. Navigasi Peserta

Peserta tidak perlu melihat sidebar.

Gunakan header sederhana:

Logo | Nama Acara | Bantuan

Untuk HP:

Logo | Menu

---

# 22. Navigasi Admin

Desktop:

\`\`\`text
Dashboard
Registrasi
Peserta
Pembayaran
Kartu Pendaftaran
Pengaturan
Keluar
\`\`\`

Mobile:

Gunakan hamburger menu.

---

# 23. Visual Style

Buat tampilan seperti aplikasi SaaS modern tetapi sederhana.

Gunakan:

* Background abu-abu sangat muda atau putih
* Card putih
* Border tipis
* Border radius sedang
* Shadow sangat ringan
* Typography modern
* Icon sederhana
* Warna utama hijau atau biru
* Tidak menggunakan gradient berlebihan
* Tidak menggunakan animasi berlebihan

Hindari:

* Dashboard yang terlalu ramai
* Banyak grafik
* Banyak warna
* Banyak popup
* Banyak menu
* Informasi yang tidak diperlukan
* Font dekoratif
* Animasi berlebihan

---

# 24. Komponen yang Harus Dibuat

Buat reusable components:

* Header
* AdminSidebar
* MobileMenu
* Button
* Input
* Select
* FileUpload
* StatusBadge
* ProgressSteps
* SummaryCard
* ParticipantCard
* ParticipantTable
* PaymentProof
* RegistrationCard
* ConfirmationDialog
* EmptyState
* LoadingState
* Toast notification

---

# 25. Dummy Data

Gunakan data contoh Indonesia:

Nama:

* Andi Pratama
* Siti Aisyah
* Budi Santoso
* Dewi Lestari
* Rudi Hermawan

Nomor:

* 0812-1234-5678
* 0813-2345-6789
* 0814-3456-7890

Gunakan format Rupiah:

**Rp150.000**

Tanggal menggunakan format Indonesia:

**28 Mei 2026**

Jam:

**09.00 WIB**

---

# 26. Demo Interaksi

Karena belum menggunakan backend, buat aplikasi tetap terasa seperti aplikasi nyata menggunakan mock/local state.

Contoh:

* Klik "Daftar Sekarang" → masuk ke Data Diri.
* Klik "Lanjutkan" → masuk Pembayaran.
* Klik "Saya Sudah Bayar" → masuk Upload Bukti.
* Upload file → tampilkan nama dan preview.
* Klik "Kirim Pendaftaran" → tampilkan halaman Status.
* Admin menyetujui pembayaran → status berubah menjadi "Sudah Disetujui".
* Kartu pendaftaran kemudian dapat dibuka.
* Search peserta harus bekerja.
* Filter status harus bekerja.
* Tombol salin link harus bekerja.
* Tombol download/cetak kartu dibuat berfungsi dalam demo.

---

# 27. Halaman yang Harus Dihasilkan

Buat semua halaman berikut:

### Peserta

1. Informasi Pendaftaran
2. Data Diri
3. Pembayaran
4. Upload Bukti Pembayaran
5. Status Pendaftaran
6. Kartu Pendaftaran

### Admin

7. Login Admin
8. Dashboard
9. Buat Registrasi
10. Daftar Peserta
11. Detail Peserta
12. Pembayaran
13. Kartu Pendaftaran
14. Pengaturan sederhana

---

# 28. Prioritas Utama

Jangan mencoba membuat aplikasi dengan terlalu banyak fitur.

Prioritaskan:

**MUDAH DIPAHAMI → MUDAH DIGUNAKAN → CEPAT → CLEAN → RESPONSIVE**

Aplikasi harus terasa seperti aplikasi yang dibuat untuk orang Indonesia yang tidak terlalu terbiasa dengan teknologi.

Ketika pengguna membuka aplikasi, mereka harus langsung tahu:

**"Saya harus klik apa?"**

Gunakan tombol dan instruksi yang jelas.

Hasil akhir harus terlihat seperti aplikasi produksi yang siap dikembangkan lebih lanjut, bukan sekadar prototype yang penuh informasi.`,
      },
    ],
    practice: "Buat flow dan mockup aplikasi pendaftaran pelatihan.",
    tools: [
      { name: "Kertas", url: "#" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
    ],
    output: "User flow + daftar halaman + mockup Desktop, Tablet, Mobile",
    teacherNote: "Fokus pada logika pengguna dan UI; belum perlu coding.",
  },
  {
    slug: "build-frontend-with-ai",
    number: 2,
    category: "Frontend",
    video: "https://drive.google.com/file/d/1RMRe3JAmbZxo9jbeTCd2-miw_F_sWd-3/view?usp=sharing",
    shortTitle: "Build Frontend with AI",
    title: "Build Frontend with AI",
    description: "Membuat frontend dari prompt dan referensi mockup menggunakan AI.",
    steps: [
      { title: "Login V0.dev / Google AI Studio" },
      { title: "Paste prompt dari ChatGPT" },
      { title: "Upload gambar mockup" },
      { title: "Generate aplikasi" },
      { title: "Sesuaikan layout, warna, komponen" },
      { title: "Cek responsive Desktop–Tablet–Mobile" },
      { title: "Gunakan dummy data" },
    ],
    practice:
      "Buat Login Admin, Dashboard, Buat Pelatihan, Daftar Pendaftar, Form Peserta, Upload Bukti.",
    tools: [
      { name: "V0.dev", url: "https://v0.dev" },
      { name: "Google AI Studio", url: "https://aistudio.google.com" },
      { name: "Next.js", url: "https://nextjs.org" },
      { name: "Tailwind", url: "https://tailwindcss.com" },
    ],
    output: "Frontend responsive yang bisa dinavigasikan",
    teacherNote: "Kenalkan component dan responsive secara kontekstual.",
  },
  {
    slug: "publish-app-google-ai-studio",
    number: 3,
    category: "Frontend",
    video: "https://drive.google.com/file/d/1oISq_FnmNMTI3uvmvytmn5wzk02KWX5i/view?usp=sharing",
    shortTitle: "Publish App with Google AI Studio",
    title: "Publish App with Google AI Studio",
    description: "Mempublikasikan aplikasi dari Google AI Studio dan menguji hasilnya melalui link yang sudah live.",
    steps: [
      { title: "Lanjut di Google AI Studio" },
      { title: "Pilih tombol Publish" },
      { title: "Setting Domain" },
      { title: "Publish App" },
      { title: "Masuk ke Link Aplikasi" },
      { title: "Testing Prototype Aplikasi Berjalan dengan lancar" },
    ],
    practice: "Publish aplikasi dari Google AI Studio dan uji coba link hasil publish.",
    tools: [{ name: "Google AI Studio", url: "https://aistudio.google.com" }],
    output: "Link aplikasi live yang sudah dipublish dan teruji",
    teacherNote: "Pastikan domain/link sudah aktif dan aplikasi diuji sebelum lanjut ke sesi berikutnya.",
  },
  {
    slug: "system-design-database-docs",
    number: 4,
    category: "Backend",
    video: "https://drive.google.com/file/d/1QMQfmDH7GkYkzxhCgJ5F6Z7r2juHh6jM/view?usp=sharing",
    shortTitle: "System Design, Database & Documentation",
    title: "System Design, Database & Documentation",
    description: "Memahami frontend, backend, dan database, dan membuat dokumentasi sebagai acuan AI.",
    steps: [
      {
        title: "Lanjut Buat Prompt ke ChatGPT untuk membuat Dokumentasi Aplikasi",
        prompt:
          "Oks, Sekarang buatkan Dokumentasi Aplikasis, akan aku gunakan sebagai Dasar dan Panduan Pengerjaan, sehingga AI Agent di AntiGravity akan mengikuti Dokumentasi ini dari Awal Pengerjaan hingga Selesai Aplikasi",
        exampleResultLabel: "CONTOH DOKUMENTASI DARI CHATGPT",
        exampleResultSubtitle: "Dipakai sebagai dasar dan panduan pembuatan Aplikasi",
        exampleResult: `# MASTER DOCUMENTATION

## APLIKASI REGISTRASI PESERTA

**Versi:** 1.0
**Status:** Dokumen Dasar Pengerjaan
**Target:** AI Agent AntiGravity
**Bahasa Aplikasi:** Bahasa Indonesia
**Platform:** Web Responsive
**Pengguna:** Peserta dan Admin

---

# 1. TUJUAN DOKUMENTASI

Dokumen ini adalah **sumber acuan utama** dalam proses pengembangan Aplikasi Registrasi Peserta.

AI Agent wajib menggunakan dokumen ini sebagai dasar dalam:

* Menganalisis kebutuhan.
* Membuat struktur aplikasi.
* Membuat database.
* Membuat frontend.
* Membuat backend.
* Membuat API.
* Membuat validasi.
* Membuat autentikasi.
* Membuat halaman Peserta.
* Membuat halaman Admin.
* Membuat responsive design.
* Melakukan testing.
* Memperbaiki error.
* Menyiapkan aplikasi untuk deployment.

## ATURAN UTAMA

AI Agent **tidak boleh menambahkan fitur baru hanya karena fitur tersebut dianggap menarik atau umum digunakan**.

Jika sebuah fitur tidak terdapat dalam dokumentasi ini:

1. Jangan langsung membuatnya.
2. Periksa apakah fitur tersebut memang dibutuhkan oleh alur aplikasi.
3. Jika tidak diperlukan, jangan dibuat.
4. Jika fitur tersebut sangat diperlukan untuk membuat sistem berjalan dengan benar, dokumentasikan terlebih dahulu sebagai "fitur pendukung sistem".

Prinsip utama:

> **Sederhana, jelas, mudah digunakan, dan fokus pada kebutuhan registrasi.**

---

# 2. GAMBARAN UMUM APLIKASI

Aplikasi ini digunakan untuk mengelola proses pendaftaran peserta secara online.

Alur utama:

\`\`\`text
ADMIN
  ↓
Membuat Registrasi
  ↓
Mendapatkan Link Registrasi
  ↓
Membagikan Link
  ↓
PESERTA
  ↓
Membuka Link
  ↓
Mengisi Data Diri
  ↓
Melakukan Pembayaran
  ↓
Upload Bukti Pembayaran
  ↓
Menunggu Verifikasi
  ↓
ADMIN
  ↓
Memeriksa Pembayaran
  ↓
Menyetujui
  ↓
PESERTA
  ↓
Mendapatkan Kartu Pendaftaran
\`\`\`

---

# 3. TUJUAN APLIKASI

Aplikasi harus menyelesaikan kebutuhan berikut:

### Untuk Peserta

Peserta dapat:

* Membuka link pendaftaran.
* Melihat informasi acara.
* Mengisi data diri.
* Melihat informasi pembayaran.
* Melakukan pembayaran.
* Upload bukti pembayaran.
* Melihat status pendaftaran.
* Mendapatkan kartu pendaftaran setelah disetujui.

### Untuk Admin

Admin dapat:

* Login.
* Membuat pendaftaran.
* Mengatur informasi acara.
* Mendapatkan link registrasi.
* Melihat daftar peserta.
* Melihat detail peserta.
* Melihat bukti pembayaran.
* Menyetujui pembayaran.
* Menolak pembayaran.
* Meminta peserta upload ulang bukti.
* Melihat kartu pendaftaran.

---

# 4. PENGGUNA APLIKASI

Aplikasi hanya memiliki 2 role utama.

## ROLE 1 — PESERTA

Peserta adalah orang yang mengikuti acara atau kegiatan.

Peserta **tidak perlu membuat akun/password**.

Peserta cukup menggunakan link registrasi.

---

## ROLE 2 — ADMIN

Admin adalah pengguna yang mengelola pendaftaran.

Admin harus login untuk mengakses halaman pengelolaan.

---

# 5. PRINSIP UX/UI

Ini adalah aturan penting dan harus diterapkan pada seluruh aplikasi.

## 5.1 Sederhana

Jangan membuat aplikasi terlalu banyak informasi.

Setiap halaman harus memiliki satu tujuan utama.

Contoh:

Halaman Data Diri hanya fokus pada pengisian data diri.

Jangan mencampurkan:

* Data diri
* Pembayaran
* Informasi admin
* Statistik
* Pengaturan

dalam satu halaman.

---

# 5.2 Bahasa Indonesia

Gunakan Bahasa Indonesia yang sederhana.

Gunakan:

* Daftar Sekarang
* Data Diri
* Pembayaran
* Upload Bukti Pembayaran
* Kirim Pendaftaran
* Menunggu Verifikasi
* Sudah Disetujui
* Ditolak
* Lihat Kartu
* Kembali
* Lanjutkan
* Simpan
* Salin Link

Hindari istilah teknis pada UI.

Jangan menggunakan:

* Submit
* Transaction
* Payment Verification Queue
* User Submission
* Processing
* Invalid Transaction

kecuali istilah tersebut memang hanya digunakan pada kode internal.

---

# 5.3 Clean

Gunakan:

* Background putih / abu-abu sangat muda.
* Card putih.
* Border tipis.
* Shadow ringan.
* Radius sedang.
* Typography sederhana.
* Icon sederhana.
* Sedikit warna.

Hindari:

* Gradient berlebihan.
* Animasi berlebihan.
* Terlalu banyak warna.
* Terlalu banyak card.
* Dashboard penuh grafik.
* Dekorasi yang tidak diperlukan.

---

# 5.4 Mobile First

Mayoritas peserta kemungkinan membuka link melalui HP.

Oleh karena itu:

> **Mobile adalah prioritas utama.**

Desktop harus mengikuti sistem desain yang sama.

---

# 5.5 Responsive

Aplikasi wajib berjalan dengan baik pada:

* Mobile 360px
* Mobile 375px
* Mobile 390px
* Mobile 414px
* Tablet 768px
* Laptop 1024px
* Desktop 1280px+
* Desktop besar 1440px+

Tidak boleh terdapat horizontal scrolling.

---

# 6. ALUR PESERTA

## STEP 1 — Informasi Pendaftaran

Peserta membuka:

\`\`\`text
/daftar/[slug]
\`\`\`

Contoh:

\`\`\`text
/daftar/seminar-digital-marketing
\`\`\`

Peserta melihat:

* Nama acara.
* Deskripsi singkat.
* Tanggal.
* Jam.
* Tempat.
* Biaya.
* Fasilitas.

Tombol:

**Daftar Sekarang**

---

## STEP 2 — Data Diri

Peserta mengisi:

* Nama Lengkap
* Nomor WhatsApp
* Email
* Instansi / Asal
* Kategori

Field wajib:

* Nama Lengkap
* Nomor WhatsApp
* Kategori

Email boleh dibuat wajib jika sistem memang membutuhkan email.

Tombol:

**Kembali**

**Lanjutkan**

---

# 7. STEP 3 — PEMBAYARAN

Tampilkan:

### Total Pembayaran

Contoh:

**Rp150.000**

Kemudian metode pembayaran.

Minimal dukung:

* Transfer Bank
* QRIS

Untuk Transfer Bank:

\`\`\`text
Bank BCA

1234 5678 90

a.n. PT Seven Class Indonesia
\`\`\`

Sediakan:

**Salin Nomor Rekening**

Tombol:

**Saya Sudah Bayar**

---

# 8. STEP 4 — UPLOAD BUKTI PEMBAYARAN

Peserta upload:

* JPG
* JPEG
* PNG
* PDF

Maksimal:

**5 MB**

Setelah file dipilih:

* Tampilkan nama file.
* Tampilkan preview jika berupa gambar.
* Berikan opsi mengganti file.

Tombol:

**Kirim Pendaftaran**

---

# 9. STEP 5 — STATUS PENDAFTARAN

Setelah pendaftaran dikirim:

\`\`\`text
Pendaftaran Diterima

Terima kasih, [Nama].

Pendaftaran Anda sudah kami terima.

Status:
MENUNGGU VERIFIKASI
\`\`\`

Tampilkan:

* Nomor pendaftaran.
* Nama.
* Tanggal daftar.
* Status.

Contoh:

\`\`\`text
Nomor Pendaftaran
REG-000125

Tanggal Daftar
23 Mei 2026

Status
Menunggu Verifikasi
\`\`\`

---

# 10. STATUS PENDAFTARAN

Gunakan hanya status berikut.

## MENUNGGU PEMBAYARAN

Peserta belum mengupload bukti pembayaran.

---

## MENUNGGU VERIFIKASI

Peserta sudah mengirim bukti pembayaran dan menunggu pemeriksaan admin.

---

## DISETUJUI

Admin menyetujui pembayaran.

Peserta dapat melihat kartu pendaftaran.

---

## DITOLAK

Bukti pembayaran tidak dapat diterima.

Admin dapat memberikan alasan.

---

## MINTA UPLOAD ULANG

Jika sistem membutuhkan status khusus, gunakan:

**Perlu Upload Ulang**

Peserta harus mengupload bukti pembayaran kembali.

---

# 11. KARTU PENDAFTARAN

Kartu hanya dapat tersedia jika pembayaran telah disetujui.

Isi kartu:

\`\`\`text
KARTU PENDAFTARAN

[NAMA ACARA]

Nama:
Budi Santoso

No. Peserta:
REG-000125

Tanggal:
23 Mei 2026

Tempat:
Hotel Grand Indonesia, Jakarta

Status:
TERDAFTAR

[QR CODE]
\`\`\`

QR Code berisi identifier pendaftaran.

Contoh:

\`\`\`text
REG-000125
\`\`\`

atau token unik yang tidak mengekspos data pribadi.

Peserta dapat:

* Melihat kartu.
* Download kartu.
* Print kartu.

---

# 12. ALUR ADMIN

\`\`\`text
Login
 ↓
Dashboard
 ↓
Buat Registrasi
 ↓
Simpan
 ↓
Dapat Link
 ↓
Bagikan Link
 ↓
Peserta Mendaftar
 ↓
Daftar Peserta
 ↓
Detail Peserta
 ↓
Periksa Pembayaran
 ↓
Setujui / Tolak / Minta Upload Ulang
 ↓
Kartu Pendaftaran
\`\`\`

---

# 13. HALAMAN ADMIN

Admin memiliki halaman:

1. Login
2. Dashboard
3. Registrasi
4. Buat Registrasi
5. Daftar Peserta
6. Detail Peserta
7. Pembayaran
8. Kartu Pendaftaran
9. Pengaturan sederhana

---

# 14. LOGIN ADMIN

URL:

\`\`\`text
/admin/login
\`\`\`

Form:

* Email
* Password

Tombol:

**Masuk**

Jika salah:

> Email atau password salah.

Jangan memberikan informasi apakah email tersebut terdaftar atau tidak.

---

# 15. DASHBOARD ADMIN

URL:

\`\`\`text
/admin
\`\`\`

Tampilkan 4 statistik utama:

\`\`\`text
Total Peserta
Sudah Disetujui
Menunggu Verifikasi
Ditolak
\`\`\`

Contoh:

\`\`\`text
125
100
15
10
\`\`\`

Kemudian:

### Peserta Terbaru

Kolom:

* Nama
* Tanggal Daftar
* Status
* Aksi

Jangan membuat dashboard dengan:

* Grafik kompleks.
* Statistik tidak diperlukan.
* Informasi terlalu banyak.

---

# 16. REGISTRASI ADMIN

URL:

\`\`\`text
/admin/registrasi
\`\`\`

Admin dapat membuat registrasi.

Informasi:

### Informasi Acara

* Nama acara
* Deskripsi
* Tanggal
* Jam
* Tempat
* Kuota
* Biaya

### Informasi Pembayaran

* Metode pembayaran
* Nama bank
* Nomor rekening
* Nama pemilik rekening
* QRIS jika digunakan

Tombol:

**Simpan & Dapatkan Link**

---

# 17. LINK REGISTRASI

Setelah registrasi dibuat, sistem menghasilkan:

\`\`\`text
https://domain.com/daftar/[slug]
\`\`\`

Admin dapat:

**Salin Link**

dan:

**Bagikan**

Link harus dapat dibuka tanpa login.

---

# 18. DAFTAR PESERTA

URL:

\`\`\`text
/admin/peserta
\`\`\`

Fitur:

* Search nama.
* Search WhatsApp.
* Filter status.
* Pagination.

Kolom desktop:

\`\`\`text
No
Nama
WhatsApp
Tanggal Daftar
Status
Aksi
\`\`\`

Aksi:

**Lihat**

---

# 19. DETAIL PESERTA

URL:

\`\`\`text
/admin/peserta/[id]
\`\`\`

Tampilkan:

### Data Peserta

* Nomor pendaftaran
* Nama
* WhatsApp
* Email
* Instansi
* Kategori
* Tanggal daftar
* Status

### Bukti Pembayaran

Tampilkan file yang diupload peserta.

Admin dapat:

**Setujui Pembayaran**

**Tolak Pembayaran**

**Minta Upload Ulang**

---

# 20. VERIFIKASI PEMBAYARAN

URL:

\`\`\`text
/admin/pembayaran
\`\`\`

Gunakan tab:

\`\`\`text
Menunggu Verifikasi
Sudah Disetujui
Ditolak
\`\`\`

Prioritaskan:

**Menunggu Verifikasi**

karena membutuhkan tindakan Admin.

---

# 21. ATURAN VERIFIKASI

Ketika Admin klik:

**Setujui Pembayaran**

sistem harus:

1. Meminta konfirmasi.
2. Mengubah status pembayaran menjadi \`approved\`.
3. Mengubah status pendaftaran menjadi \`approved\`.
4. Membuat / mengaktifkan kartu pendaftaran.
5. Menyimpan waktu verifikasi.
6. Menyimpan ID Admin yang melakukan verifikasi.

---

# 22. PENOLAKAN PEMBAYARAN

Ketika Admin memilih:

**Tolak Pembayaran**

tampilkan dialog:

### Alasan Penolakan

Admin wajib memberikan alasan.

Contoh:

> Bukti pembayaran tidak terlihat dengan jelas.

Setelah disimpan:

Status:

**Ditolak**

Alasan disimpan pada database.

---

# 23. MINTA UPLOAD ULANG

Jika bukti kurang jelas:

Admin dapat memilih:

**Minta Upload Ulang**

Berikan alasan.

Contoh:

> Bukti pembayaran tidak terlihat jelas. Silakan upload foto yang lebih jelas.

Status peserta:

**Perlu Upload Ulang**

Peserta dapat kembali ke halaman upload.

---

# 24. DATABASE

Gunakan database relational.

Rekomendasi:

**PostgreSQL**

Jika menggunakan Supabase:

**Supabase PostgreSQL + Supabase Storage + Supabase Auth**

---

# 25. STRUKTUR DATABASE

Gunakan tabel berikut.

## TABLE: admins

\`\`\`text
id
name
email
password_hash / auth_id
created_at
updated_at
\`\`\`

---

## TABLE: registrations

Menyimpan informasi event/pendaftaran.

\`\`\`text
id
name
slug
description
event_date
start_time
end_time
location
quota
registration_fee
status
created_at
updated_at
\`\`\`

Status:

\`\`\`text
draft
published
closed
\`\`\`

---

# 26. TABLE: payment_methods

\`\`\`text
id
registration_id
type
bank_name
account_number
account_holder
qris_image
created_at
updated_at
\`\`\`

Type:

\`\`\`text
bank_transfer
qris
\`\`\`

---

# 27. TABLE: participants

\`\`\`text
id
registration_id
registration_number
full_name
whatsapp
email
institution
category
status
created_at
updated_at
\`\`\`

Status:

\`\`\`text
waiting_payment
waiting_verification
approved
rejected
resubmit
\`\`\`

\`registration_number\` harus unik.

Contoh:

\`\`\`text
REG-000001
REG-000002
REG-000003
\`\`\`

---

# 28. TABLE: payment_proofs

\`\`\`text
id
participant_id
file_url
file_name
file_type
file_size
status
rejection_reason
uploaded_at
verified_at
verified_by
created_at
updated_at
\`\`\`

Status:

\`\`\`text
pending
approved
rejected
resubmit
\`\`\`

---

# 29. TABLE: registration_cards

\`\`\`text
id
participant_id
card_number
qr_token
created_at
updated_at
\`\`\`

Kartu hanya dibuat/diaktifkan ketika peserta sudah disetujui.

---

# 30. TABLE: audit_logs

Untuk mencatat tindakan Admin.

\`\`\`text
id
admin_id
action
entity_type
entity_id
description
created_at
\`\`\`

Contoh:

\`\`\`text
Admin menyetujui pembayaran peserta REG-000125.
\`\`\`

Audit log tidak perlu ditampilkan pada UI versi pertama, tetapi tetap baik disimpan untuk keamanan dan pelacakan.

---

# 31. RELASI DATABASE

\`\`\`text
admins
   │
   │
   └──── audit_logs


registrations
   │
   ├──── payment_methods
   │
   └──── participants
              │
              ├──── payment_proofs
              │
              └──── registration_cards
\`\`\`

---

# 32. ATURAN DATA

## Nomor WhatsApp

Simpan dalam format yang konsisten.

Contoh:

\`\`\`text
081234567890
\`\`\`

atau format internasional:

\`\`\`text
6281234567890
\`\`\`

Pilih satu format dan gunakan secara konsisten.

---

## Email

Jika diisi harus divalidasi.

---

## Biaya

Jangan menyimpan:

\`\`\`text
"Rp150.000"
\`\`\`

sebagai string.

Simpan nilai numerik:

\`\`\`text
150000
\`\`\`

Kemudian format menjadi:

\`\`\`text
Rp150.000
\`\`\`

di UI.

---

# 33. KEAMANAN

Security adalah tanggung jawab sistem.

Minimal:

* Password Admin harus di-hash.
* Jangan menyimpan password dalam bentuk plain text.
* Endpoint Admin harus dilindungi authentication.
* Peserta tidak boleh mengakses data peserta lain.
* Peserta hanya boleh melihat data miliknya sendiri.
* Validasi file upload.
* Batasi ukuran file.
* Validasi MIME type.
* Jangan percaya nama file dari pengguna.
* Gunakan random filename.
* Jangan expose credential database ke frontend.
* Secret/API key hanya berada di server environment.
* Jangan expose data pribadi melalui URL.
* Gunakan HTTPS pada production.

---

# 34. FILE UPLOAD

Bukti pembayaran hanya boleh menerima:

\`\`\`text
image/jpeg
image/png
application/pdf
\`\`\`

Ukuran maksimal:

\`\`\`text
5 MB
\`\`\`

Jika file tidak sesuai:

> File tidak dapat diupload. Gunakan JPG, PNG, atau PDF dengan ukuran maksimal 5 MB.

---

# 35. VALIDASI FORM

Semua validasi harus dilakukan:

1. Di frontend.
2. Di backend/server.

Frontend hanya untuk kenyamanan pengguna.

Backend adalah validasi utama.

---

# 36. ERROR HANDLING

Error harus mudah dipahami.

Contoh:

Jangan:

\`\`\`text
500 Internal Server Error
\`\`\`

pada UI.

Gunakan:

> Terjadi masalah. Silakan coba lagi.

Jika server error:

* Simpan detail error di server log.
* Jangan tampilkan detail teknis kepada pengguna.

---

# 37. LOADING STATE

Setiap tombol yang menjalankan proses harus memiliki loading state.

Contoh:

Normal:

**Kirim Pendaftaran**

Saat proses:

**Mengirim...**

Setelah selesai:

**Pendaftaran berhasil dikirim.**

---

# 38. EMPTY STATE

Jika belum ada peserta:

\`\`\`text
Belum ada peserta

Peserta yang mendaftar akan muncul di sini.
\`\`\`

Jika belum ada pembayaran:

\`\`\`text
Belum ada pembayaran yang perlu diperiksa.
\`\`\`

---

# 39. NOTIFICATION

Gunakan toast/notification sederhana.

Contoh:

**Berhasil**

> Data berhasil disimpan.

**Berhasil**

> Link registrasi berhasil disalin.

**Berhasil**

> Pembayaran berhasil disetujui.

**Error**

> Data belum lengkap.

---

# 40. STRUKTUR ROUTE

Gunakan struktur yang jelas.

\`\`\`text
/
├── admin/
│   ├── login
│   ├── dashboard
│   ├── registrasi
│   ├── registrasi/buat
│   ├── peserta
│   ├── peserta/[id]
│   ├── pembayaran
│   ├── kartu
│   └── pengaturan
│
└── daftar/
    └── [slug]/
        ├── data-diri
        ├── pembayaran
        ├── upload-bukti
        ├── status
        └── kartu
\`\`\`

Jika menggunakan Next.js App Router, sesuaikan dengan struktur folder App Router.

---

# 41. STRUKTUR KOMPONEN

Gunakan reusable component.

Minimal:

\`\`\`text
components/
├── ui/
├── admin/
│   ├── AdminSidebar
│   ├── AdminHeader
│   ├── SummaryCard
│   ├── ParticipantTable
│   ├── ParticipantCard
│   └── PaymentProof
│
└── registration/
    ├── RegistrationHeader
    ├── ProgressSteps
    ├── EventInfo
    ├── ParticipantForm
    ├── PaymentInfo
    ├── FileUpload
    ├── RegistrationStatus
    └── RegistrationCard
\`\`\`

Jangan membuat component yang sangat besar.

---

# 42. DESAIN DESKTOP ADMIN

Desktop menggunakan:

\`\`\`text
┌──────────────┬──────────────────────────────┐
│              │                              │
│   SIDEBAR    │          CONTENT             │
│              │                              │
│ Dashboard    │                              │
│ Registrasi   │                              │
│ Peserta      │                              │
│ Pembayaran   │                              │
│ Kartu        │                              │
│ Pengaturan   │                              │
│              │                              │
└──────────────┴──────────────────────────────┘
\`\`\`

Sidebar tetap sederhana.

---

# 43. DESAIN MOBILE ADMIN

Sidebar berubah menjadi drawer.

\`\`\`text
┌─────────────────────────┐
│ ☰   Dashboard      👤   │
├─────────────────────────┤
│                         │
│       CONTENT           │
│                         │
│                         │
└─────────────────────────┘
\`\`\`

Table harus berubah menjadi card/list.

---

# 44. DESAIN PESERTA

Peserta tidak menggunakan sidebar.

Gunakan:

\`\`\`text
┌─────────────────────────┐
│ Logo       Bantuan      │
├─────────────────────────┤
│                         │
│ Progress                │
│ 1 — 2 — 3 — 4 — 5      │
│                         │
│ Content                 │
│                         │
│                         │
│ [ Tombol Utama ]        │
└─────────────────────────┘
\`\`\`

---

# 45. AKSES DATA PESERTA

Karena peserta tidak login, sistem harus mempunyai mekanisme aman untuk mengakses status pendaftaran.

Jangan menggunakan:

\`\`\`text
?id=1
\`\`\`

sebagai satu-satunya mekanisme keamanan.

Gunakan token/identifier yang sulit ditebak.

Contoh:

\`\`\`text
/status/[secure-token]
\`\`\`

atau gunakan link khusus setelah pendaftaran.

Token harus random dan tidak mengandung informasi pribadi.

---

# 46. DUPLIKASI PENDAFTARAN

Sistem sebaiknya mencegah pendaftaran yang tidak sengaja dilakukan berkali-kali.

Gunakan kombinasi:

\`\`\`text
registration_id + whatsapp
\`\`\`

untuk mendeteksi kemungkinan pendaftaran ganda.

Jika ditemukan:

> Nomor WhatsApp ini sudah terdaftar pada pendaftaran ini.

Jangan otomatis menghapus data lama.

---

# 47. KUOTA PESERTA

Jika kuota sudah penuh:

Status registrasi menjadi:

**Pendaftaran Ditutup**

Peserta melihat:

> Pendaftaran untuk acara ini sudah penuh.

Tombol daftar tidak ditampilkan.

---

# 48. STATUS REGISTRASI

Event memiliki status:

### Draft

Belum dapat diakses publik.

### Published

Link dapat digunakan peserta.

### Closed

Pendaftaran ditutup.

---

# 49. PENGATURAN ADMIN

Pengaturan versi awal harus sederhana.

Minimal:

* Nama Admin
* Email Admin
* Ganti Password

Jangan membuat halaman pengaturan terlalu kompleks.

---

# 50. RESPONSIVE RULE

AI Agent wajib melakukan pengecekan pada minimal:

\`\`\`text
360px
390px
430px
768px
1024px
1280px
1440px
\`\`\`

Periksa:

* Tidak ada horizontal scroll.
* Tombol tidak terpotong.
* Form tidak keluar layar.
* Text tidak bertabrakan.
* Table tidak merusak layout.
* Modal tidak keluar layar.
* Sidebar tidak menutupi content.
* File upload tetap mudah digunakan.
* Kartu pendaftaran tetap terlihat baik.

---

# 51. ACCESSIBILITY

Minimal:

* Gunakan label untuk input.
* Gunakan kontras warna yang baik.
* Button memiliki text yang jelas.
* Jangan hanya mengandalkan warna untuk status.
* Input memiliki focus state.
* Keyboard navigation harus tetap dapat digunakan.
* Error message harus dekat dengan field yang bermasalah.

---

# 52. SEO DASAR

Halaman publik registrasi harus memiliki:

* Title.
* Description.
* Open Graph metadata.

Contoh title:

\`\`\`text
Registrasi Seminar Digital Marketing
\`\`\`

Admin tidak perlu dioptimalkan untuk SEO.

---

# 53. PERFORMANCE

Prioritaskan:

* Loading cepat.
* Gambar dioptimalkan.
* Jangan memuat library yang tidak diperlukan.
* Jangan menggunakan animasi berat.
* Jangan membuat bundle terlalu besar.
* Gunakan lazy loading jika memang diperlukan.

---

# 54. IMPLEMENTATION PLAN

AI Agent harus mengerjakan aplikasi secara bertahap.

Jangan langsung membuat seluruh aplikasi sekaligus.

---

## PHASE 1 — ANALISIS

Sebelum coding:

1. Baca dokumentasi ini.
2. Identifikasi role.
3. Identifikasi alur.
4. Identifikasi halaman.
5. Identifikasi database.
6. Identifikasi hubungan antar data.
7. Identifikasi security requirement.

Output:

\`\`\`text
Project Understanding
Page Map
Data Model
User Flow
Technical Plan
\`\`\`

Jangan coding sebelum struktur dipahami.

---

# 55. PHASE 2 — PROJECT SETUP

Siapkan:

* Next.js
* TypeScript
* Tailwind
* shadcn/ui
* ESLint
* Database
* Environment configuration

Pastikan project dapat dijalankan sebelum melanjutkan.

---

# 56. PHASE 3 — DESIGN SYSTEM

Buat terlebih dahulu:

* Typography.
* Color.
* Spacing.
* Button.
* Input.
* Select.
* Card.
* Badge.
* Modal.
* Toast.
* Table.
* Mobile navigation.

Semua halaman harus menggunakan design system yang sama.

---

# 57. PHASE 4 — DATABASE

Buat database berdasarkan dokumentasi.

Urutan:

1. admins
2. registrations
3. payment_methods
4. participants
5. payment_proofs
6. registration_cards
7. audit_logs

Buat migration/schema.

Pastikan foreign key dan index sesuai kebutuhan.

---

# 58. PHASE 5 — ADMIN AUTHENTICATION

Buat:

* Login.
* Logout.
* Session.
* Protected route.

Test:

\`\`\`text
User belum login
→ tidak dapat membuka dashboard.
\`\`\`

---

# 59. PHASE 6 — ADMIN REGISTRATION

Buat:

* Dashboard.
* Buat registrasi.
* Edit registrasi jika diperlukan.
* Publish.
* Close.
* Generate link.

Pastikan link dapat dibuka tanpa login.

---

# 60. PHASE 7 — PESERTA

Implementasikan berurutan:

### Step 1

Informasi registrasi.

### Step 2

Data diri.

### Step 3

Pembayaran.

### Step 4

Upload bukti.

### Step 5

Status.

### Step 6

Kartu pendaftaran.

Jangan membuat semua step dalam satu halaman panjang.

---

# 61. PHASE 8 — PAYMENT VERIFICATION

Buat:

* Daftar pembayaran.
* Detail pembayaran.
* Preview bukti.
* Setujui.
* Tolak.
* Minta upload ulang.

Pastikan perubahan status tercatat.

---

# 62. PHASE 9 — REGISTRATION CARD

Implementasikan:

* Generate nomor peserta.
* Generate QR token.
* Render kartu.
* Download.
* Print.

Kartu hanya tersedia setelah pembayaran disetujui.

---

# 63. PHASE 10 — VALIDATION & SECURITY

Test:

* Authentication.
* Authorization.
* File upload.
* File size.
* File type.
* Input validation.
* Duplicate registration.
* Access token.
* SQL injection protection.
* XSS protection.
* CSRF protection jika relevan.
* Unauthorized access.

---

# 64. PHASE 11 — RESPONSIVE TESTING

Test seluruh halaman pada:

\`\`\`text
Mobile
Tablet
Laptop
Desktop
\`\`\`

Perbaiki semua:

* Overflow.
* Text collision.
* Button collision.
* Table overflow.
* Modal overflow.
* Navigation issue.

---

# 65. PHASE 12 — USER TESTING

Simulasikan peserta baru:

\`\`\`text
Buka link
↓
Daftar
↓
Isi data
↓
Bayar
↓
Upload bukti
↓
Kirim
↓
Menunggu verifikasi
↓
Admin menyetujui
↓
Peserta melihat kartu
\`\`\`

Simulasikan Admin:

\`\`\`text
Login
↓
Buat acara
↓
Publish
↓
Copy link
↓
Melihat peserta
↓
Periksa bukti
↓
Setujui
↓
Lihat kartu
\`\`\`

Semua alur harus berhasil tanpa error.

---

# 66. TEST CASE UTAMA

## Peserta

### Test 1

Buka link registrasi.

Expected:

Informasi acara muncul.

### Test 2

Klik Daftar Sekarang.

Expected:

Masuk ke form data diri.

### Test 3

Submit form kosong.

Expected:

Muncul validasi.

### Test 4

Isi data valid.

Expected:

Masuk pembayaran.

### Test 5

Upload file lebih dari 5 MB.

Expected:

Upload ditolak.

### Test 6

Upload format tidak didukung.

Expected:

Upload ditolak.

### Test 7

Upload bukti valid.

Expected:

File muncul.

### Test 8

Kirim pendaftaran.

Expected:

Status menjadi Menunggu Verifikasi.

---

# 67. TEST ADMIN

### Test 1

Buka dashboard tanpa login.

Expected:

Redirect ke login.

### Test 2

Login valid.

Expected:

Masuk dashboard.

### Test 3

Login invalid.

Expected:

Pesan error.

### Test 4

Buat registrasi.

Expected:

Registrasi berhasil dibuat.

### Test 5

Copy link.

Expected:

Link tercopy.

### Test 6

Lihat peserta.

Expected:

Detail peserta tampil.

### Test 7

Setujui pembayaran.

Expected:

Status berubah menjadi Disetujui.

### Test 8

Peserta membuka status.

Expected:

Kartu dapat dibuka.

---

# 68. ACCEPTANCE CRITERIA

Aplikasi dianggap selesai apabila:

## Peserta

* [ ] Bisa membuka link registrasi.
* [ ] Bisa melihat informasi acara.
* [ ] Bisa mengisi data.
* [ ] Bisa melakukan pembayaran secara manual.
* [ ] Bisa upload bukti.
* [ ] Bisa melihat status.
* [ ] Bisa melihat kartu setelah disetujui.
* [ ] Bisa download kartu.
* [ ] Bisa print kartu.

## Admin

* [ ] Bisa login.
* [ ] Bisa melihat dashboard.
* [ ] Bisa membuat registrasi.
* [ ] Bisa mendapatkan link.
* [ ] Bisa melihat peserta.
* [ ] Bisa melihat bukti pembayaran.
* [ ] Bisa menyetujui pembayaran.
* [ ] Bisa menolak pembayaran.
* [ ] Bisa meminta upload ulang.
* [ ] Bisa melihat kartu peserta.

## Sistem

* [ ] Database berjalan.
* [ ] Authentication berjalan.
* [ ] Authorization berjalan.
* [ ] File upload aman.
* [ ] Validasi berjalan.
* [ ] Responsive.
* [ ] Tidak ada horizontal scroll.
* [ ] Tidak ada error utama.
* [ ] Production build berhasil.

---

# 69. HAL YANG TIDAK PERLU DIBUAT

Untuk versi pertama, JANGAN membuat:

* Chat.
* Forum.
* Dashboard peserta yang kompleks.
* Sistem membership.
* Sistem poin.
* Sistem kupon.
* Sistem referral.
* Payment gateway otomatis.
* Live chat.
* Analytics kompleks.
* Grafik kompleks.
* Multi-level admin.
* Role yang terlalu banyak.
* Notifikasi yang terlalu banyak.
* CMS kompleks.
* Fitur sosial media.
* Fitur yang tidak berhubungan dengan registrasi.

Fokus hanya pada:

**REGISTRASI → PEMBAYARAN → VERIFIKASI → KARTU**

---

# 70. FITUR YANG BOLEH DIKEMBANGKAN NANTI

Fitur berikut bukan bagian dari versi pertama:

* WhatsApp notification.
* Email notification.
* Payment gateway.
* Check-in menggunakan QR.
* Export Excel yang lebih lengkap.
* Multiple admin.
* Multiple event management yang lebih kompleks.
* Dashboard analytics.
* Attendance.
* Sertifikat otomatis.

Jangan implementasikan fitur tersebut pada MVP kecuali diperintahkan secara khusus.

---

# 71. PRIORITAS FITUR

Gunakan prioritas berikut:

### P0 — WAJIB

* Admin Login
* Buat Registrasi
* Link Registrasi
* Form Peserta
* Pembayaran
* Upload Bukti
* Verifikasi Admin
* Status
* Kartu Pendaftaran
* Database
* Responsive

### P1 — PENTING

* Search Peserta
* Filter Status
* Download Kartu
* Print Kartu
* Export Excel

### P2 — NANTI

* WhatsApp
* Email
* QR Check-in
* Payment Gateway
* Analytics

---

# 72. ATURAN UNTUK AI AGENT ANTIGRAVITY

AI Agent wajib mengikuti aturan berikut:

### RULE 1

**Baca dokumentasi sebelum melakukan perubahan.**

---

### RULE 2

Jangan mengubah alur utama tanpa alasan yang jelas.

---

### RULE 3

Jangan menambahkan fitur yang tidak diperlukan.

---

### RULE 4

Jika menemukan masalah arsitektur, perbaiki dengan solusi paling sederhana.

---

### RULE 5

Jangan mengorbankan UX demi kompleksitas teknis.

---

### RULE 6

Jangan membuat UI berdasarkan asumsi teknis.

UI harus mengikuti kebutuhan pengguna.

---

### RULE 7

Setiap perubahan database harus dibuat melalui migration/schema yang jelas.

---

### RULE 8

Jangan hardcode data penting seperti:

* Password.
* API key.
* Database credentials.
* Secret token.

---

### RULE 9

Setiap fitur harus diuji setelah dibuat.

---

### RULE 10

Sebelum menyatakan aplikasi selesai, lakukan full user-flow testing.

---

# 73. ATURAN SAAT MENEMUKAN ERROR

Jika menemukan error:

1. Identifikasi penyebab.
2. Jangan langsung melakukan workaround.
3. Periksa apakah masalah berasal dari:

   * Frontend.
   * Backend.
   * Database.
   * Authentication.
   * Storage.
   * Validation.
4. Perbaiki akar masalah.
5. Jalankan kembali test.
6. Pastikan perbaikan tidak merusak fitur lain.

---

# 74. ATURAN PERUBAHAN FITUR

Jika ada permintaan fitur baru:

AI Agent harus mengevaluasi:

\`\`\`text
Apakah fitur ini diperlukan?
        ↓
Ya → Tambahkan
        ↓
Tidak
        ↓
Jelaskan bahwa fitur tidak diperlukan
untuk versi saat ini.
\`\`\`

Jika fitur baru benar-benar dibutuhkan, update dokumentasi sebelum implementasi besar dilakukan.

---

# 75. DEFINITION OF DONE

Aplikasi baru boleh dianggap **SELESAI** jika:

\`\`\`text
✓ Semua halaman selesai
✓ Database selesai
✓ Authentication selesai
✓ Authorization selesai
✓ API selesai
✓ Form validation selesai
✓ Upload file selesai
✓ Payment verification selesai
✓ Registration card selesai
✓ Responsive selesai
✓ Error handling selesai
✓ Security dasar selesai
✓ Test peserta selesai
✓ Test admin selesai
✓ Production build berhasil
✓ Tidak ada error kritis
\`\`\`

---

# 76. URUTAN PENGERJAAN FINAL

AI Agent harus mengikuti urutan:

\`\`\`text
01. Baca Dokumentasi
        ↓
02. Analisis Project
        ↓
03. Setup Project
        ↓
04. Setup Design System
        ↓
05. Setup Database
        ↓
06. Setup Authentication
        ↓
07. Buat Admin Dashboard
        ↓
08. Buat Admin Registrasi
        ↓
09. Buat Halaman Peserta
        ↓
10. Buat Upload Bukti
        ↓
11. Buat Verifikasi Pembayaran
        ↓
12. Buat Kartu Pendaftaran
        ↓
13. Hubungkan Semua Alur
        ↓
14. Security
        ↓
15. Responsive
        ↓
16. Testing
        ↓
17. Bug Fix
        ↓
18. Production Build
        ↓
19. Final Verification
        ↓
20. SELESAI
\`\`\`

---

# 77. CHECKPOINT SETIAP PHASE

Setelah setiap phase selesai, AI Agent harus melakukan:

\`\`\`text
1. Check hasil pekerjaan.
2. Jalankan aplikasi.
3. Test fitur terkait.
4. Periksa console error.
5. Periksa TypeScript error.
6. Periksa lint error.
7. Periksa responsive.
8. Pastikan tidak merusak fitur sebelumnya.
\`\`\`

Jangan melanjutkan ke phase berikutnya jika phase sebelumnya masih memiliki error kritis.

---

# 78. FINAL PROJECT STRUCTURE

Struktur project harus tetap sederhana dan mudah dipahami.

Contoh:

\`\`\`text
app/
├── admin/
│   ├── login/
│   ├── dashboard/
│   ├── registrasi/
│   ├── peserta/
│   ├── pembayaran/
│   ├── kartu/
│   └── pengaturan/
│
├── daftar/
│   └── [slug]/
│
├── api/
│
components/
├── ui/
├── admin/
└── registration/

lib/
├── auth/
├── db/
├── storage/
├── validation/
└── utils/

types/

public/

supabase/
└── migrations/
\`\`\`

Struktur aktual dapat disesuaikan dengan framework dan teknologi yang digunakan, tetapi prinsipnya harus tetap:

> **Terstruktur, sederhana, mudah dibaca, dan mudah dikembangkan.**

---

# 79. HASIL AKHIR YANG DIHARAPKAN

Aplikasi harus terasa seperti aplikasi registrasi profesional yang:

* Sederhana.
* Cepat dipahami.
* Tidak membingungkan.
* Cocok untuk pengguna Indonesia.
* Nyaman digunakan melalui HP.
* Nyaman digunakan Admin melalui laptop.
* Tidak memiliki fitur berlebihan.
* Memiliki alur yang jelas.

Pengalaman peserta yang diharapkan:

\`\`\`text
Buka Link
   ↓
"Oh, ini pendaftarannya."
   ↓
Daftar Sekarang
   ↓
Isi Data
   ↓
Bayar
   ↓
Upload Bukti
   ↓
Selesai
\`\`\`

Pengalaman Admin:

\`\`\`text
Login
   ↓
"Lihat siapa yang sudah mendaftar."
   ↓
Periksa pembayaran
   ↓
Setujui
   ↓
Selesai
\`\`\`

---

# 80. KALIMAT PEGANGAN PROJECT

Seluruh pengembangan aplikasi harus mengikuti prinsip berikut:

> **"Jangan membuat aplikasi yang terlihat canggih. Buat aplikasi yang mudah digunakan."**

Dan alur utama harus selalu dijaga:

> **DAFTAR → BAYAR → UPLOAD BUKTI → VERIFIKASI → KARTU**

Jika sebuah desain, fitur, atau keputusan teknis tidak membantu alur tersebut, maka jangan dibuat kecuali memang diperlukan oleh sistem.

**Dokumen ini menjadi acuan utama selama pengembangan aplikasi versi 1.0.**`,
      },
      {
        title: "Buat Folder Project",
        description: "Contoh: D:\\project\\registrasi",
      },
      {
        title: "Buka AntiGravity",
        description: "Open Folder → pilih folder Registrasi.",
      },
      {
        title: "Buat Folder Docs",
        description: "Buat file documentation.md → isikan Dokumentasi dari ChatGPT.",
      },
      {
        title: "Google AI Studio",
        description: "Konek ke Repo GIT.",
      },
      {
        title: "Git",
        description: "Copy Repository, buat Token.",
      },
      {
        title: "Simpan di Folder Docs/secret.txt",
      },
      {
        title: "Prompt ke AntiGravity",
        description: "Jalankan Aplikasi di Komputer di port 3500.",
      },
      {
        title: "Buka Browser",
        description: "Ketik localhost:3500",
      },
    ],
    practice: "Menyiapkan project di AntiGravity IDE dan menjalankan aplikasi hasil pull repo secara lokal.",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "AntiGravity", url: "#" },
      { name: "Google AI Studio", url: "https://aistudio.google.com" },
      { name: "GitHub", url: "https://github.com" },
    ],
    output: "Folder project + documentation.md + secret.txt + aplikasi berjalan di localhost:3500",
    teacherNote: "Pastikan token GitHub disimpan di Docs/secret.txt dan tidak dibagikan di chat publik.",
  },
  {
    slug: "supabase-build-backend",
    number: 5,
    category: "Backend",
    shortTitle: "Supabase & Build Backend",
    title: "Supabase & Build Backend",
    description:
      "Menyiapkan database & storage di Supabase, lalu membangun backend Admin dan Peserta menggunakan AI.",
    steps: [
      {
        title: "Buat Database di Supabase",
        description: "Simpan URL Setting Supabase.",
      },
      {
        title: "Buat Penyimpanan di Supabase Storage",
        description: "Simpan URL Setting-nya.",
      },
      {
        title: "AntiGravity diminta cek Aplikasi",
        description: "Cek aplikasi dengan Struktur Tabelnya di Documentation.md.",
      },
      {
        title: "Pembuatan Backend Admin",
        substeps: [
          "Buat Halaman Login",
          "Buat Menu Registrasi",
          "Buat Menu Daftar Peserta",
          "Buat Menu Pembayaran",
          "Buat Menu Kartu Pendaftaran",
          "Buat Menu Pengaturan",
          "TESTING",
        ],
      },
      {
        title: "Pembuatan Backend Peserta",
        substeps: ["Buat Form Registrasi", "TESTING"],
      },
    ],
    practice: "Membangun backend Admin dan Peserta di atas database Supabase yang sudah disiapkan.",
    tools: [
      { name: "Supabase", url: "https://supabase.com" },
      { name: "AntiGravity", url: "#" },
    ],
    output: "Database & Storage Supabase aktif + Backend Admin dan Peserta berjalan dan teruji",
    teacherNote: "Gunakan pola 1 Menu → Test → Menu berikutnya agar mudah melacak bug.",
  },
  {
    slug: "build-backend-with-ai",
    number: 6,
    category: "Backend",
    shortTitle: "Build Backend with AI",
    title: "Build Backend with AI",
    description: "Mengembangkan fitur backend satu per satu dan mengujinya sebelum lanjut.",
    steps: [
      { title: "Koneksi backend/API ke Supabase" },
      { title: "Admin CRUD pelatihan" },
      { title: "Generate link pendaftaran" },
      { title: "Peserta isi form registrasi" },
      { title: "Simpan data ke database" },
      { title: "Upload bukti ke Storage" },
      { title: "Admin lihat pendaftar & bukti" },
      { title: "Approve pembayaran" },
      { title: "Tombol Kirim WhatsApp via wa.me" },
      { title: "Test setiap fitur" },
    ],
    practice: "Implementasi alur Admin membuat pelatihan sampai peserta terverifikasi.",
    tools: [
      { name: "Antigravity", url: "#" },
      { name: "NestJS", url: "https://nestjs.com" },
      { name: "Supabase PostgreSQL", url: "https://supabase.com" },
      { name: "Supabase Storage", url: "https://supabase.com" },
    ],
    output: "Backend/API terhubung database dan alur utama berfungsi",
    teacherNote: "Gunakan pola 1 Feature → Test → Next Feature.",
  },
  {
    slug: "testing-github-production-deploy",
    number: 7,
    category: "Backend",
    shortTitle: "Testing, GitHub & Production Deploy",
    title: "Testing, GitHub & Production Deploy",
    description: "Melakukan pengujian end-to-end dan menyiapkan aplikasi production.",
    steps: [
      { title: "Test Admin: login → buat pelatihan → generate link" },
      { title: "Test Peserta: buka link → daftar → upload bukti" },
      { title: "Test Admin: cek bukti → approve → WhatsApp" },
      { title: "Perbaiki bug dengan AI" },
      { title: "Push source code ke GitHub" },
      { title: "Cek deployment Vercel / production" },
      { title: "Uji ulang production" },
      { title: "Final checklist" },
    ],
    practice: "Simulasi dua role menggunakan data uji.",
    tools: [
      { name: "Antigravity", url: "#" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Vercel", url: "https://vercel.com" },
      { name: "Supabase", url: "https://supabase.com" },
    ],
    output: "Aplikasi final online dan siap digunakan",
    teacherNote: "Jangan simpan secret/API key di repository.",
  },
];
