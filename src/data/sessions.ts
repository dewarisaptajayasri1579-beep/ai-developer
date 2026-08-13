export type Step = {
  title: string;
  description?: string;
  image?: string;
  prompt?: string;
  prompts?: { label: string; text: string }[];
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
    shortTitle: "System Design, Database & Documentation",
    title: "System Design, Database & Documentation",
    description: "Memahami frontend, backend, dan database, dan membuat dokumentasi sebagai acuan AI.",
    steps: [
      { title: "Lanjut Buat Prompt ke ChatGPT untuk membuat Dokumentasi Aplikasi" },
      { title: "Isi docs: pengguna, alur, teknologi, aturan aplikasi" },
      { title: "Desain tabel: users, trainings, registrations, payments" },
      { title: "Setup Supabase PostgreSQL" },
      { title: "Setup Supabase Storage" },
      { title: "Simpan sebagai Docs/application.md" },
    ],
    practice: "Membuat Supabase project dan dokumentasi aplikasi.",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Supabase", url: "https://supabase.com" },
    ],
    output: "Docs/application.md + database + storage siap",
    teacherNote: "Bukti bayar disimpan di Storage; DB menyimpan URL/path.",
  },
  {
    slug: "ai-coding-agent-project-setup",
    number: 5,
    category: "Backend",
    shortTitle: "AI Coding Agent & Project Setup",
    title: "AI Coding Agent & Project Setup",
    description: "Menyiapkan project lokal dan membuat AI memahami requirement sebelum coding.",
    steps: [
      { title: "Login Antigravity" },
      { title: "Open/Create folder project" },
      { title: "Pastikan folder Docs tersedia" },
      { title: "Clone/pull repository GitHub" },
      { title: "Jalankan aplikasi" },
      { title: "Cek localhost di browser" },
      { title: "Minta AI baca folder Docs" },
      { title: "Minta AI jelaskan requirement" },
      { title: "Minta AI buat timeline implementasi" },
    ],
    practice: "Menjalankan frontend dari GitHub dan menyiapkan rencana backend.",
    tools: [
      { name: "Antigravity", url: "#" },
      { name: "GitHub", url: "https://github.com" },
    ],
    output: "Project lokal berjalan + AI memahami Docs + timeline pekerjaan",
    teacherNote: "Jangan langsung coding semua fitur sekaligus.",
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
