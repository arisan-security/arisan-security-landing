import Image from "next/image";

/**
 * Hero section: main landing message for Arisan Security.
 * Uses Next.js Image for background.
 */
const Hero: React.FC = () => {
  return (
    <div className="bg-dark-blue">
      <section className="lg:h-[938px] flex items-center relative px-[10%] !max-w-[1440px] m-auto text-white overflow-hidden">
        <div className="absolute z-0 h-full w-[70%]">
          <Image
            src="/images/hero_background.png"
            alt="hero image"
            fill
            className="min-w-[792px] opacity-70 md:opacity-[unset] min-h-[920px] scale-[.8] md:scale-[unset] bottom-[-320px] md:bottom-[-400px] right-[-420px] md:right-[-200px] absolute object-cover"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col gap-4 !z-10 my-24 md:my-[unset]">
          <h2 className="text-4xl sm:text-[40px] lg:text-[50px] leading-[3rem] lg:leading-[4rem] font-extrabold tracking-tight mb-8">
            Pecahkan kode <br /> dan bersama <span className="md:bg-black md:bg-opacity-60 md:rounded-lg md:px-4">merubah dunia!</span>
          </h2>
          <p className="text-sm font-thin lg:text-lg tracking-tight mb-6 md:mb-8 md:w-[30%]">
            Arisan SECurity (A-SEC) adalah wadah untuk berbicara seputar Information Technology, terkhusus pada bidang Information Technology Security. Kami sangat amat terbuka bagi semua kalangan & Elemen masyarakat untuk bukan hanya sekedar berkolaborasi melainkan berelaborasi.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="
              text-white 
              border-white 
              border-solid 
              border 
              rounded-3xl 
              py-1 
              mx-1
              text-[12px]
              max-w-[200px] 
              md:py-2 
              md:mx-2 
              md:max-w-xs text-center
              md:text-lg">
              Pelajari Selengakpanya
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
