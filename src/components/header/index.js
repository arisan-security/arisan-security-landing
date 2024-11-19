import * as React from "react"
import Link from "next/link";
import LanguageSwitch from "../button/languageSwitch";
const NavigationOverlay = ({ path, showMenu, setShowMenu }) => {
  const [showContainer, setShowContainer] = React.useState(false);
  React.useEffect(() => {
    // setTimeout(() => {
      setShowContainer(true);
    // }, 100)
  }, [])
  const closeContainer = () => {
    setShowContainer(false);
    // setTimeout(() => {
      setShowMenu(false)
    // }, 100)
  }

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
          <Link className="text-xl px-3 py-2" href="https://blog.arisansecurity.id">Blog</Link>
        </div>
        {/* <div className="p-2 text-white hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className="text-xl px-3 py-2" href="#">Gudang</Link>
        </div> */}
        <div className="p-2 text-white hover:bg-blue-500 rounded-xl cursor-pointer">
          <Link className={`text-xl ${path === "hubungi-kami" ? "text-light-blue px-3 py-2" : "hover:text-blue-300 px-3 py-2"}`} href="/hubungi-kami">Kontak</Link>
        </div>
      </div>
    </div>
  )
}

const Header = ({ path }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [showHeader, setShowHeader] = React.useState(true);
  const [showBanner, setShowBanner] = React.useState(true);

  const [time, setTime] = React.useState(new Date);
  const controllHeader = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        // setShowHeader(false); 
      } else { // if scroll up show the navbar
        setShowHeader(true);  
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controllHeader);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controllHeader);
      };
    }
  }, [lastScrollY]);

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
  }, 1 * 1000) 
  })

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  
  React.useEffect(() => {
    const activitySection = document.querySelector('#activity-section');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBanner(!entry.isIntersecting); // Hide banner when Activity section is in view
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (activitySection) {
      observer.observe(activitySection);
    }

    return () => {
      if (activitySection) {
        observer.unobserve(activitySection);
      }
    };
  }, []);


  return (
    <>
      <header className={`fixed top-0 bg-opacity-80 backdrop-blur-md shadow-md z-50 w-full px-44 md:px-[15vw] py-0 md:py-4 flex justify-between items-center transform duration-150 ${showHeader? 'translate-y-0' :'-translate-y-full'}`}>
        <div className="block xl:hidden">
          <button className="text-white px-3 py-2" href="#" onClick={() => setShowMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          {
            showMenu &&
            <NavigationOverlay path={path} showMenu={showMenu} setShowMenu={setShowMenu} />
          }
        </div>
        <Link href="/" className="text-2xl text-white">
          <img src={'/images/arisansecurity.png'} className="object-contain h-8 md:h-8" alt="Logo Arisan SECurity" />
        </Link>
        <div className="hidden xl:block text-sm">
          <Link className={` ${path === "/" ? "text-light-blue px-3 py-2" : "text-white hover:text-blue-300 px-3 py-2"}`} href="/">Beranda</Link>
          <Link className={` ${path === "tentang" ? "text-light-blue px-3 py-2" : "text-white hover:text-blue-300 px-3 py-2"}`} href="/tentang">Tentang</Link>
          <Link className=" text-white hover:text-blue-300 px-3 py-2" href="https://blog.arisansecurity.id">Blog</Link>
          {/* <Link className=" text-white hover:text-blue-300 px-3 py-2" href="#">Gudang</Link> */}
          <Link className={` ${path === "hubungi-kami" ? "text-light-blue px-3 py-2" : "text-white hover:text-blue-300 px-3 py-2"}`} href="/hubungi-kami">Kontak</Link>
        </div>
        <LanguageSwitch />
      </header>
      {/* <div className={`bg-black bg-opacity-80 flex text-white text-left justify-center items-center gap-4 py-2 sticky top-[40px] md:top-[64px] z-40 text-sm md:text-base ${showBanner ? 'animate-slideUp' : 'animate-slideDown'}`}>
        <img src="/images/indosec-logo-awards.png" alt="logo-indosec" className="w-[120px] md:w-[150px]"/>
        <Link href="https://indosecsummit.com/" className="hover:underline" target="_blank">
            Encrypting Indonesia: <br /> For a Secure Tomorrow
        </Link>
      </div> */}
    </>
  )
}

export default Header;