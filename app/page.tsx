"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type PageKey = "home" | "information" | "profile" | "other-packages" | "home-packages" | "mitra" | "contact" | "faq";
type MenuKey = "product" | "contact" | null;

export default function Home() {
  const [page, setPage] = useState<PageKey>("home");
  const [menu, setMenu] = useState<MenuKey>(null);
  const [faqText, setFaqText] = useState("");
  const [searched, setSearched] = useState(false);

  const go = (next: PageKey) => {
    setPage(next);
    setMenu(null);
    setSearched(false);
    window.scrollTo(0, 0);
  };

  const titles: Record<PageKey, string> = {
    home: "HOME", information: "INFORMATION", profile: "PROFILE",
    "other-packages": "PAKET INTERNET LAINNYA", "home-packages": "PAKET INTERNET HOME",
    mitra: "PROXINET MITRA", contact: "Hubungi Kami", faq: "FAQ",
  };

  return (
    <main className="page-root">
      <Header page={page} go={go} menu={menu} setMenu={setMenu} />
      {page === "home" ? <HomePage /> : <>
        <div className="breadcrumb"><div className="container">{page === "faq" ? "HOME  |  FAQ" : "HOME  |  HAL"}</div></div>
        <div className="container inner-layout">
          <section className="main-column">
            <h1 className="page-title">{titles[page]}</h1>
            {page === "information" && <InformationPage />}
            {page === "profile" && <ProfilePage />}
            {page === "other-packages" && <OtherPackagesPage />}
            {page === "home-packages" && <HomePackagesPage />}
            {page === "mitra" && <MitraPage />}
            {page === "contact" && <ContactPage />}
            {page === "faq" && <FaqPage value={faqText} onChange={(v) => { setFaqText(v); setSearched(false); }} onSubmit={(e) => { e.preventDefault(); setSearched(true); }} searched={searched} />}
          </section>
          <Sidebar />
        </div>
      </>}
      <Footer />
    </main>
  );
}

function Header({ page, go, menu, setMenu }: {
  page: PageKey; go: (p: PageKey) => void; menu: MenuKey; setMenu: (m: MenuKey) => void;
}) {
  const isProduct = ["other-packages", "home-packages", "mitra"].includes(page);
  return <header className="header"><div className="container">
    {page !== "home" && <div className="topbar">
      <div className="top-detail"><span className="top-icon">◷</span><span><b>Jam Kerja</b><br />Senin-Jumat 08.00-16.00 WIB<br />Sabtu 08.00-15.00 WIB</span></div>
      <div className="top-detail"><span className="top-icon envelope">✉</span><span><b>Email</b><br />info@proxinet.co.id</span></div>
      <div className="top-detail"><span className="top-icon phone">☎</span><span><b>Telepon</b><br />0778-6000109</span></div>
      <a className="whatsapp-box" href="https://wa.me/627786000109" target="_blank" rel="noreferrer"><span className="whatsapp-symbol">◉</span><span>HUBUNGI KAMI<br />VIA WHATSAPP</span></a>
    </div>}
    <div className="navigation">
      <button className="logo-button" onClick={() => go("home")} aria-label="PROXINET Home"><Image src="/images/NEW-LOGO-WEBSITE-PROXINET.png" alt="PROXINET Connecting The World - Certified QMS ISO 9001:2015" width={2048} height={349} priority /></button>
      <nav className="nav-links" aria-label="Navigasi utama">
        <button className={page === "home" ? "nav-link selected" : "nav-link"} onClick={() => go("home")}>HOME</button>
        <button className={page === "information" ? "nav-link selected" : "nav-link"} onClick={() => go("information")}>INFORMATION</button>
        <button className={page === "profile" ? "nav-link selected" : "nav-link"} onClick={() => go("profile")}>PROFILE</button>
        <div className="nav-menu"><button className={isProduct ? "nav-link selected" : "nav-link"} onClick={() => setMenu(menu === "product" ? null : "product")}>PRODUCT <span className="down-caret" /></button>
          {menu === "product" && <div className="dropdown">
            <button onClick={() => go("other-packages")}>PAKET INTERNET LAINNYA</button>
            <button onClick={() => go("home-packages")}>PAKET INTERNET HOME</button>
            <button onClick={() => go("mitra")}>PROXINET MITRA</button>
          </div>}
        </div>
        <div className="nav-menu"><button className={page === "contact" || page === "faq" ? "nav-link selected" : "nav-link"} onClick={() => setMenu(menu === "contact" ? null : "contact")}>CONTACT US <span className="down-caret" /></button>
          {menu === "contact" && <div className="dropdown contact-dropdown"><button onClick={() => go("contact")}>CONTACT US</button><button onClick={() => go("faq")}>FAQ</button></div>}
        </div>
      </nav>
    </div>
  </div></header>;
}

function HomePage() {
  const cards = [
    { src: "/images/8c.jpg", alt: "Layanan 24 Jam", text: "Layanan Call Centre kami selalu tersedia 24 jam untuk menjawab pertanyaan dan keluhan Anda dengan ramah dan senyuman" },
    { src: "/images/99c.jpg", alt: "Jaringan Fiber Optic", text: "Jaringan fiber optic kami sudah menjangkau berbagai daerah yang siap untuk melayani anda" },
    { src: "/images/11c.jpg", alt: "Akses Internet Cepat", text: "Kami mempunyai beragam paket yang dapat memenuhi kebutuhan Anda terhadap akses internet berkecepatan tinggi." },
  ];
  const services = [
    ["☁", "AKSES INTERNET UNLIMITED"], ["◉", "KONEKSI INTERNET YANG HANDAL"], ["☎", "RESPON CEPAT & LAYANAN 24 JAM"],
    ["◔", "Tidak Ada Lagi Internet Yang Dibatasi Kuota. UNLIMITED sesungguhnya"], ["ϟ", "Kami memiliki Koneksi Terbaik, Dapat Diandalkan dan Terpercaya!"], ["♟", "Kami Memiliki Tim Solid Yang Handal."],
  ];
  return <div className="home-page">
    <Image className="home-banner" src="/images/baner-fix-scaled.jpg" alt="Speed Up to 1Gbps - Jaringan fiber optik, internet yang cepat untuk bisnis Anda" width={2048} height={597} priority />
    <div className="container home-body">
      <div className="feature-row">{cards.map((c) => <article className="feature-card" key={c.alt}><Image src={c.src} alt={c.alt} width={600} height={250} /><p>{c.text}</p></article>)}</div>
      <h2 className="services-heading">LAYANAN <b>KAMI</b></h2>
      <div className="services-grid">{services.map(([icon, text]) => <div className="service-card" key={text}><span className="service-icon">{icon}</span><b>{text}</b></div>)}</div>
    </div>
  </div>;
}

function Sidebar() {
  const visitors = [["Visitors", "31716 Visitor"], ["Hits", "676714 hits"], ["Month", "19190 Users"], ["Today", "1 Users"], ["Online", "1 Users"]];
  return <aside className="sidebar">
    <h2>CALL CENTRE</h2>
    <p>0778-6000109 SUPPORT Email : info@proxinet.co.id<br />Batam : 0778-6000109</p>
    <h2 className="visitor-heading">PENGUNJUNG</h2>
    <div className="visitor-table">{visitors.map(([label, value], i) => <div className="visitor-row" key={label}><span className={`visitor-avatar visitor-${i}`}>♟</span><span>{label}</span><span>:</span><b>{value}</b></div>)}</div>
  </aside>;
}

function InformationPage() {
  return <div className="information-page"><Image src="/images/PROXINET-INFORMATION-1_1.jpg" alt="Peringatan hati-hati penipuan mengatasnamakan PT. PROXI JARINGAN NUSANTARA (PROXINET)" width={1080} height={1080} /></div>;
}

function ProfilePage() {
  return <div className="profile-page">
    <p><b>PROXINET</b> PT Proxi Jaringan Nusantara (PROXINET) merupakan Perusahaan berbasis teknologi informasi, sebagai penyedia layanan internet ternama di Indonesia. Berkantor pusat di Batam, Proxinet hadir untuk memenuhi kebutuhan internet Anda di era digital masa kini, dengan tim yang profesional dan berpengalaman, serta berorientasi pada kualitas layanan.</p>
    <p>Kami siap mendukung bisnis Anda, berprinsip pada Customer Satisfaction sebagai prioritas utama kami. Terbukti dengan diraihnya Sertifikasi ISO 9001:2015, sebagai penjamin mutu dan kualitas layanan internet bertaraf internasional.</p>
    <p><b>VISI</b></p>
    <p>Membangun masyarakat INDONESIA yang cerdas melalui koneksi internet untuk membangkitkan potensi yang ada baik secara perusahaan maupun secara perorangan</p>
    <p><b>MISI</b></p>
    <p>Menjadi perusahaan terdepan di INDONESIA dengan pelayanan yang terbaik dan inovasi yang tinggi</p>
    <Image className="coverage-map" src="/images/Map-Proxi-updt-1-2048x1260.jpg" alt="PROXINET Coverage Branch Area" width={2048} height={1260} />
  </div>;
}

function OtherPackagesPage() {
  return <div className="other-packages-page"><Image src="/images/PAKET-LAINNYA-1-1.jpg" alt="Layanan internet super cepat tanpa kuota, 100% fiber optic, unlimited - pilihan paket FTTH, Dedicated, Business, Education, Gamers" width={1080} height={1080} /></div>;
}
function HomePackagesPage() {
  return <div className="home-packages-page"><Image src="/images/7-600x248-1.png" alt="Paket broadband 10 Mbps Rp. 150.000 per bulan dan broadband 15 Mbps Rp. 180.000 per bulan" width={600} height={248} /></div>;
}
function MitraPage() {
  return <div className="mitra-page"><Image src="/images/MITRA-PROXINET.jpg" alt="Syarat untuk bekerjasama LO - Bagi Hasil / Dedicated" width={1080} height={1080} /></div>;
}
function ContactPage() {
  return <div className="contact-page"><h2>Hubungi Kami</h2><p>Kantor Pusat</p><p>Batam</p><p>Ruko Grand California Blok B2 No 3 &amp; 4, Taman Baloi, Kec. Batam Kota, Kota Batam<br />0778-6000109<br />info@proxinet.co.id</p></div>;
}
function FaqPage({ value, onChange, onSubmit, searched }: { value: string; onChange: (v: string) => void; onSubmit: (e: FormEvent<HTMLFormElement>) => void; searched: boolean }) {
  return <div className="faq-page">
    <h2>FAQ</h2><div className="faq-tabs"><span>List Data</span><span>|</span><span>Cari Data</span></div>
    <form className="faq-search" onSubmit={onSubmit}><label htmlFor="faq-search">Search</label><span>:</span><div className="faq-search-control"><input id="faq-search" value={value} onChange={(e) => onChange(e.target.value)} /><button type="submit">Search</button></div></form>
    <table className="faq-table" data-searched={searched}><thead><tr><th>No.</th><th>Pertanyaan</th><th>Jawaban</th></tr></thead><tbody /></table>
  </div>;
}
function Footer() {
  return <footer className="footer"><div className="social-links"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Twitter">♥</a><a href="#" aria-label="YouTube">▣</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">◎</a></div><p>Copyright © 2020 PT.PROXI JARINGAN NUSANTARA. Design by Velocity Developer.</p></footer>;
}
