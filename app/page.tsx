
"use client";

import Image from "next/image";
import { useState } from "react";

type PageKey =
  | "home"
  | "information"
  | "profile"
  | "other-packages"
  | "home-packages"
  | "mitra"
  | "contact"
  | "faq";

type MenuKey = "product" | "contact" | null;
type FaqItem = {
  question: string;
  answer: string;
};

export default function Home() {
  const [page, setPage] = useState<PageKey>("home");
  const [menu, setMenu] = useState<MenuKey>(null);

  const go = (next: PageKey) => {
    setPage(next);
    setMenu(null);
    window.scrollTo(0, 0);
  };

  const titles: Record<PageKey, string> = {
    home: "HOME",
    information: "INFORMATION",
    profile: "PROFILE",
    "other-packages": "PAKET INTERNET LAINNYA",
    "home-packages": "PAKET INTERNET HOME",
    mitra: "PROXINET MITRA",
    contact: "Hubungi Kami",
    faq: "FAQ",
  };

  return (
    <main className="page-root">
      <Header
        page={page}
        go={go}
        menu={menu}
        setMenu={setMenu}
      />

      {page === "home" ? (
        <HomePage />
      ) : (
        <>
          <div className="breadcrumb">
            <div className="container">
              HOME&nbsp; | &nbsp;{page === "faq" ? "FAQ" : titles[page]}
            </div>
          </div>

          <div className="container inner-layout">
            <section className="main-column">
              <h1 className="page-title">{titles[page]}</h1>

              {page === "information" && <InformationPage />}
              {page === "profile" && <ProfilePage />}
              {page === "other-packages" && <OtherPackagesPage />}
              {page === "home-packages" && <HomePackagesPage />}
              {page === "mitra" && <MitraPage />}
              {page === "contact" && <ContactPage />}
              {page === "faq" && <FaqPage />}
            </section>

            <Sidebar />
          </div>
        </>
      )}

      <Footer />
    </main>
  );
}

/* HEADER */

function Header({
  page,
  go,
  menu,
  setMenu,
}: {
  page: PageKey;
  go: (page: PageKey) => void;
  menu: MenuKey;
  setMenu: (menu: MenuKey) => void;
}) {
  return (
    <header className="header">
      <div className="container">
        <div className="topbar">
          <div className="top-detail">
            <span className="top-icon">◷</span>
            <span>
              <b>Jam Kerja</b>
              <br />
              Senin-Jumat 08.00-16.00 WIB
              <br />
              Sabtu 08.00-15.00 WIB
            </span>
          </div>

          <div className="top-detail">
            <span className="top-icon envelope">✉</span>
            <span>
              <b>Email</b>
              <br />
              info@proxinet.co.id
            </span>
          </div>

          <div className="top-detail">
            <span className="top-icon phone">☎</span>
            <span>
              <b>Telepon</b>
              <br />
              0778-6000109
            </span>
          </div>

          <a
            className="whatsapp-box"
            href="https://wa.me/627786000109"
            target="_blank"
            rel="noreferrer"
          >
            <span className="whatsapp-symbol">◉</span>
            <span>
              HUBUNGI KAMI
              <br />
              VIA WHATSAPP
            </span>
          </a>
        </div>

        <div className="navigation">
          <button
            className="logo-button"
            onClick={() => go("home")}
            aria-label="PROXINET Home"
          >
            <Image
              src="/images/NEW-LOGO-WEBSITE-PROXINET.png"
              alt="PROXINET Connecting The World"
              width={2048}
              height={349}
              priority
            />
          </button>

          <nav className="nav-links" aria-label="Navigasi utama">
            <button
              className="nav-link home-link"
              onClick={() => go("home")}
            >
              HOME
            </button>

            <button
              className="nav-link"
              onClick={() => go("information")}
            >
              INFORMATION
            </button>

            <button
              className="nav-link"
              onClick={() => go("profile")}
            >
              PROFILE
            </button>

            <div className="nav-menu">
              <button
                className="nav-link"
                onClick={() =>
                  setMenu(menu === "product" ? null : "product")
                }
              >
                PRODUCT <span className="down-caret" />
              </button>

              {menu === "product" && (
                <div className="dropdown">
                  <button onClick={() => go("other-packages")}>
                    PAKET INTERNET LAINNYA
                  </button>

                  <button onClick={() => go("home-packages")}>
                    PAKET INTERNET HOME
                  </button>

                  <button onClick={() => go("mitra")}>
                    PROXINET MITRA
                  </button>
                </div>
              )}
            </div>

            <div className="nav-menu">
              <button
                className="nav-link"
                onClick={() =>
                  setMenu(menu === "contact" ? null : "contact")
                }
              >
                CONTACT US <span className="down-caret" />
              </button>

              {menu === "contact" && (
                <div className="dropdown contact-dropdown">
                  <button onClick={() => go("contact")}>
                    CONTACT US
                  </button>

                  <button onClick={() => go("faq")}>
                    FAQ
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* HOME */

function HomePage() {
  const cards = [
    {
      src: "/images/8c.jpg",
      alt: "Layanan 24 Jam",
      text: "Layanan Call Centre kami selalu tersedia 24 jam untuk menjawab pertanyaan dan keluhan Anda dengan ramah dan senyuman",
    },
    {
      src: "/images/99c.jpg",
      alt: "Jaringan Fiber Optic",
      text: "Jaringan fiber optic kami sudah menjangkau berbagai daerah yang siap untuk melayani anda",
    },
    {
      src: "/images/11c.jpg",
      alt: "Akses Internet Cepat",
      text: "Kami mempunyai beragam paket yang dapat memenuhi kebutuhan Anda terhadap akses internet berkecepatan tinggi.",
    },
  ];

  const services = [
    ["☁", "AKSES INTERNET UNLIMITED"],
    ["◉", "KONEKSI INTERNET YANG HANDAL"],
    ["☎", "RESPON CEPAT & LAYANAN 24 JAM"],
    ["◔", "Tidak Ada Lagi Internet Yang Dibatasi Kuota. UNLIMITED sesungguhnya"],
    ["ϟ", "Kami memiliki Koneksi Terbaik, Dapat Diandalkan dan Terpercaya!"],
    ["♟", "Kami Memiliki Tim Solid Yang Handal."],
  ];

  return (
    <div className="home-page">
      <Image
        className="home-banner"
        src="/images/baner-fix-scaled.jpg"
        alt="Speed Up to 1Gbps"
        width={2048}
        height={597}
        priority
      />

      <div className="container home-body">
        <div className="feature-row">
          {cards.map((card) => (
            <article className="feature-card" key={card.alt}>
              <Image
                src={card.src}
                alt={card.alt}
                width={600}
                height={250}
              />
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <h2 className="services-heading">
          LAYANAN <b>KAMI</b>
        </h2>

        <div className="services-grid">
          {services.map(([icon, text]) => (
            <div className="service-card" key={text}>
              <span className="service-icon">{icon}</span>
              <b>{text}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* SIDEBAR */

function Sidebar() {
  const visitors = [
    ["Visitors", "31716 Visitor"],
    ["Hits", "676766 hits"],
    ["Month", "19190 Users"],
    ["Today", "1 Users"],
    ["Online", "1 Users"],
  ];

  return (
    <aside className="sidebar">
      <h2>CALL CENTRE</h2>

      <p>
        0778-6000109 SUPPORT Email : info@proxinet.co.id
        <br />
        Batam : 0778-6000109
      </p>

      <h2 className="visitor-heading">PENGUNJUNG</h2>

      <div className="visitor-table">
        {visitors.map(([label, value], index) => (
          <div className="visitor-row" key={label}>
            <span className={`visitor-avatar visitor-${index}`}>
              ♟
            </span>
            <span>{label}</span>
            <span>:</span>
            <b>{value}</b>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* INFORMATION */

function InformationPage() {
  return (
    <div className="information-page">
      <Image
        src="/images/PROXINET-INFORMATION-1_1.jpg"
        alt="Informasi PROXINET"
        width={1080}
        height={1080}
      />
    </div>
  );
}

/* PROFILE */

function ProfilePage() {
  return (
    <div className="profile-page">
      <Image
        src="/images/tes-kantor-proxinet-2048x1260.jpg"
        alt="Kantor PROXINET"
        width={2048}
        height={1260}
        className="profile-image"
        priority
      />

      <p>
        <b>PROXINET</b> PT Proxi Jaringan Nusantara (PROXINET)
        merupakan Perusahaan berbasis teknologi informasi,
        sebagai penyedia layanan internet ternama di Indonesia.
        Berkantor pusat di Batam, Proxinet hadir untuk memenuhi
        kebutuhan internet Anda di era digital masa kini, dengan
        tim yang profesional dan berpengalaman, serta
        berorientasi pada kualitas layanan.
      </p>

      <p>
        Kami siap mendukung bisnis Anda, berprinsip pada
        Customer Satisfaction sebagai prioritas utama kami.
      </p>

      <p>
        <b>VISI</b>
      </p>

      <p>
        Membangun masyarakat INDONESIA yang cerdas melalui
        koneksi internet untuk membangkitkan potensi yang ada
        baik secara perusahaan maupun secara perorangan.
      </p>

      <p>
        <b>MISI</b>
      </p>

      <p>
        Menjadi perusahaan terdepan di INDONESIA dengan
        pelayanan yang terbaik dan inovasi yang tinggi.
      </p>

      <Image
        className="coverage-map"
        src="/images/Map-Proxi-updt-1-2048x1260.jpg"
        alt="PROXINET Coverage Branch Area"
        width={2048}
        height={1260}
      />
    </div>
  );
}

/* PRODUCT */

function OtherPackagesPage() {
  return (
    <div className="other-packages-page">
      <Image
        src="/images/PAKET-LAINNYA-1-1.jpg"
        alt="Paket Internet Lainnya"
        width={1080}
        height={1080}
      />
    </div>
  );
}

function HomePackagesPage() {
  return (
    <div className="home-packages-page">
      <Image
        src="/images/7-600x248-1.png"
        alt="Paket Broadband"
        width={600}
        height={248}
      />
    </div>
  );
}

function MitraPage() {
  return (
    <div className="mitra-page">
      <Image
        src="/images/MITRA-PROXINET.jpg"
        alt="Syarat Kerja Sama PROXINET"
        width={1080}
        height={1080}
      />
    </div>
  );
}

/* CONTACT */

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Hubungi Kami</h2>
      <p>Kantor Pusat</p>
      <p>Batam</p>
      <p>
        Ruko Grand California Blok B2 No 3 &amp; 4, Taman Baloi,
        Kec. Batam Kota, Kota Batam
        <br />
        0778-6000109
        <br />
        info@proxinet.co.id
      </p>
    </div>
  );
}

/* FAQ */

function FaqPage() {
  const [activeTab, setActiveTab] = useState<"list" | "search">(
    "list"
  );

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  const faqData: FaqItem[] = [
    {
      question: "Bagaimana saya mendiagnosis masalah jaringan?",
      answer: `Informasi berikut disediakan untuk membantu Anda dalam mendiagnosis masalah jaringan. Anda juga dapat menghubungi kami setiap saat. Untuk mendiagnosa masalah jaringan, Anda cukup mulai memverifikasi koneksi dari titik awal dikenal (PC atau perangkat) yang bergerak secara progresif lebih lanjut ke jaringan sampai Anda menemukan masalah:

A. Selalu mulai dengan PC / perangkat sendiri. Lakukan ping ke PC Anda sendiri / perangkat. Perangkat ke 8.8.8.8 (google Public DNS). Jika ini gagal restart PC Anda / perangkat dan coba operasi yang gagal itu lagi. Bagaimana caranya? (link to pdf) Periksa dengan orang lain di kantor / rumah jika Anda adalah satu-satunya orang yang memiliki masalah dimana Anda telah terisolasi ke PC / perangkat atau kabelnya. Restart PC Anda 90% dari semua masalah akan hilang dengan satu tindakan ini.

Periksa LED link di LAN card PC Anda (jika ada). Periksa pengkabelan anda dan konektor RJ45 jika Anda terhubung pada koneksi nirkabel silahkan disconnect dan connect kembali kemudian lihat lagi apakah masih ada masalah yang terjadi.

B. Sekarang periksa jaringan lokal anda. PC/perangkat anda dan orang lain mempunyai masalah yang sama. Ping ke IP gateway router. Jika cara ini gagal kita mungkin mempunyai masalah dengan LAN local atau router.

Bagaimana caranya? (link to PDF) Lihat router anda dan periksa LED nya. Jika mereka tidak diaktifkan dengan normal dan segera mengganti sambungan listrik berubah menjadi OFF bukannya ON. Kemudian periksa apakah internet kembali normal setelah 30 detik, jika TIDAK silahkan hubungi kami.

Kembali ke PC/perangkat anda dan coba lagi untuk melakukan ping ke router local anda dan kemudian ulangi operasi yang gagal.`,
    },
    {
      question:
        "Bagaimana saya bisa tahu berapa kecepatan yang saya dapatkan?",
      answer:
        "Anda dapat menjalankan tes kecepatan di sini, silakan lakukan tes kecepatan ketika semua komputer dan perangkat lain dimatikan.",
    },
    {
      question:
        "Apakah saya mendapatkan kecepatan untuk apa yang saya bayar?",
      answer:
        "Jika Anda berada di paket dedicated itu akan menjadi 1:1 sebagaimana jika Anda berada di paket broadband. Untuk mengetahui kecepatan internet yang Anda dapatkan, silakan melakukan pengujian kecepatan internet.",
    },
  ];

  const filteredData = faqData.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.question.toLowerCase().includes(keyword) ||
      item.answer.toLowerCase().includes(keyword)
    );
  });

  const displayData =
    activeTab === "list"
      ? faqData
      : searched
        ? filteredData
        : [];

  return (
    <div className="faq-page">
      <div className="faq-tabs">
        <button
          type="button"
          className={activeTab === "list" ? "active" : ""}
          onClick={() => {
            setActiveTab("list");
            setSearch("");
            setSearched(false);
          }}
        >
          List Data
        </button>

        <span>|</span>

        <button
          type="button"
          className={activeTab === "search" ? "active" : ""}
          onClick={() => {
            setActiveTab("search");
            setSearched(false);
          }}
        >
          Cari Data
        </button>
      </div>

      {activeTab === "search" && (
        <form
          className="faq-search"
          onSubmit={(event) => {
            event.preventDefault();
            setSearched(true);
          }}
        >
          <label htmlFor="faq-search-input">Search</label>

          <span>:</span>

          <div className="faq-search-control">
            <input
              id="faq-search-input"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit">Search</button>
          </div>
        </form>
      )}

      <table className="faq-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Pertanyaan</th>
            <th>Jawaban</th>
          </tr>
        </thead>

        <tbody>
          {displayData.map((item) => (
            <tr key={item.question}>
              <td>{faqData.indexOf(item) + 1}</td>
              <td>{item.question}</td>
              <td>{item.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* FOOTER */

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#" aria-label="Facebook">f</a>
        <a href="#" aria-label="Twitter">♥</a>
        <a href="#" aria-label="YouTube">▣</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="Instagram">◎</a>
      </div>

      <p>
        Copyright © 2020 PT.PROXI JARINGAN NUSANTARA.
        Design by Velocity Developer.
      </p>
    </footer>
  );
}
