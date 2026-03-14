import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitch from "../button/languageSwitch";

interface NavigationOverlayProps {
  path: string;
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

const NavigationOverlay: React.FC<NavigationOverlayProps> = ({ path, showMenu, setShowMenu }) => {
  const [showContainer, setShowContainer] = React.useState(false);
  React.useEffect(() => {
    setShowContainer(true);
  }, []);
  const closeContainer = () => {
    setShowContainer(false);
    setShowMenu(false);
  };

  return (
    <div className="absolute top-0 right-0 w-full bg-black bg-opacity-25 h-screen" onClick={closeContainer}>
      <div className={`w-4/5 bg-dark-blue py-12 text-white h-full ease-in-out flex flex-col gap-8 transform duration-75 p-4 ${showContainer ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-2 hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className={`text-xl ${path === "/" ? "text-light-blue px-3 py-2 hover:text-white" : " px-3 py-2"}`} href="/">Beranda</Link>
        </div>
        <div className="p-2 hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className={`text-xl ${path === "tentang" ? "text-light-blue px-3 py-2 hover:text-white" : " px-3 py-2"}`} href="/tentang">Tentang</Link>
        </div>
        <div className="p-2 text-white hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className="text-xl px-3 py-2" href="https://blog.arisansecurity.id" target="_blank" rel="noopener noreferrer">Blog</Link>
        </div>
        {/* <div className="p-2 text-white hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className="text-xl px-3 py-2" href="#">Gudang</Link>
        </div> */}
        <div className="p-2 text-white hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className={`text-xl ${path === "hubungi-kami" ? "text-light-blue px-3 py-2" : "hover:text-blue-300 px-3 py-2"}`} href="/hubungi-kami">Kontak</Link>
        </div>
      </div>
    </div>
  );
};

interface HeaderProps {
  path?: string;
}

const Header: React.FC<HeaderProps> = ({ path }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);
  const [showBanner, setShowBanner] = React.useState(true);
  const [time, setTime] = React.useState(new Date());
  const lastScrollYRef = React.useRef(0);

  React.useEffect(() => {
    const controllHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= lastScrollYRef.current) {
        setShowHeader(true);
      }
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener('scroll', controllHeader, { passive: true });
    return () => window.removeEventListener('scroll', controllHeader);
  }, []);

  React.useEffect(() => {
    if (!showBanner) return;
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [showBanner]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${showHeader ? 'top-0' : '-top-24'}`}>
      <nav className="bg-dark-blue">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 md:px-[5%] py-3 relative">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/images/arisansecurity.png" alt="Arisan Security Logo" width={120} height={32} className="h-8 w-auto" priority />
            </Link>
          </div>
          <div className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
            <Link className={`text-white hover:text-light-blue px-3 py-2 ${path === "/" ? "font-bold" : ""}`} href="/">Beranda</Link>
            <Link className={`text-white hover:text-light-blue px-3 py-2 ${path === "tentang" ? "font-bold" : ""}`} href="/tentang">Tentang</Link>
            <Link className="text-white hover:text-light-blue px-3 py-2" href="https://blog.arisansecurity.id" target="_blank" rel="noopener noreferrer">Blog</Link>
            <Link className={`text-white hover:text-light-blue px-3 py-2 ${path === "hubungi-kami" ? "font-bold" : ""}`} href="/hubungi-kami">Kontak</Link>
          </div>
          <div className="hidden md:flex items-center">
            <LanguageSwitch />
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </nav>
      {showMenu && (
        <NavigationOverlay path={path || ""} showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
      {showBanner && (
        <div className="bg-light-blue text-white text-center py-2 text-xs md:text-sm">
          <span>Selamat datang di Arisan Security! {time.toLocaleTimeString("id-ID")}</span>
          <button className="ml-4 underline" onClick={() => setShowBanner(false)} aria-label="Tutup banner">Tutup</button>
        </div>
      )}
    </header>
  );
};

export default Header;
