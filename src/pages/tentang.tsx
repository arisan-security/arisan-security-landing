import * as React from "react";
import Image from "next/image";
import ProgramCard from "@/components/cards/ProgramCard"
import { useTranslations } from "next-intl";
import type { GetStaticPropsContext } from 'next';
const Bergerak = '/images/BERgerak.png';
const Bertumbuh = '/images/BERtumbuh.png';
const Berdampak = '/images/BERdampak.png';
const hatiBeriman = '/images/hati-beriman.png';
const napak1 = '/images/napak-tilas-1.jpg';
const napak2 = '/images/napak-tilas-2.jpg';
import Page from "@/layouts/Page";

const TentangPage = () => {
  const t = useTranslations('About');

  const listQuotes = [
    {
      quote:
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch",
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
    {
      quote: "No one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt, This is My Story",
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain",
    },
    {
      quote:
        "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
      author: "William W. Purkey",
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
  ];

  return (
    <Page title={t('pageTitle')}  path={"tentang"} 
      seoProps={{
        title: "A-SEC | About us",
        description: "Know more about Arisan SECurity or A-SEC",
        article: false,
      }}>
      <section className="bg-dark-blue">
        <div className="min-h-[938px] !max-w-[1440px] md:px-[10%] m-auto align-baseline">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-[250px] md:px-5"
            style={{
              gridTemplateColumns: '35% auto',
            }}>
            <div className="block max-w-xl text-white pr-5">
              <h2 className="font-semibold text-[40px]">{t('whoAreWe')}</h2>
              <br />
              <p className="text-md leading-normal">
                {t('whoDesc1')}
              </p>
              <br />
              <p className="text-md leading-normal">
                {t('whoDesc2')}
              </p>
            </div>
            <div className="flex mt-5 w-full overflow-hidden rounded-2xl">
              <iframe className="w-full" src="https://www.youtube.com/embed/aCn8cPgRFHY?playlist=aCn8cPgRFHY&loop=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    
      <section className="bg-white">
        <div className="py-24 px-0 !max-w-[1440px] md:px-[10%] m-auto relative grid grid-flow-row grid-cols-2 gap-8" style={{
          gridTemplateColumns: "45% 55%"
        }}>
          <h2 className="absolute text-2xl font-black top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-pixie-powder px-12 rounded-full py-2 tracking-[4px] uppercase text-white">{t('napakTilas')}</h2>
          <div className="flex flex-col gap-8">
            <div className="w-full py-16 px-4 md:px-16 bg-white-purple rounded-2xl">
              <p className="text-lg text-justify">
                {t('napakDesc1')}
              </p>
              <br />
              <p className="text-lg text-justify">
                {t('napakDesc2')}
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center rounded-2xl overflow-hidden bg-black">
              <Image src={napak1} alt="Napak tilas A-SEC sesi 1" width={800} height={600} className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full h-full flex justify-center items-center rounded-2xl overflow-hidden bg-black">
              <Image src={napak2} alt="Napak tilas A-SEC sesi 2" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full py-16 px-4 md:px-16 bg-white-purple rounded-2xl">
              <p className="text-lg text-justify">
                {t('napakDesc3')}
              </p>
              <br />
              <p className="text-lg text-justify">
                {t('napakDesc4')}
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <section className="bg-dark-blue">
        <div className="py-12 px-4 !max-w-[1440px] md:px-[10%] m-auto flex flex-col w-full justify-center items-center gap-4">
          <h2 className="text-2xl font-black mb-10 tracking-[4px] uppercase text-white">{t('ourPrograms')}</h2>
          <div className="grid grid-flow-col grid-rows-1 md:grid-flow-row md:grid-cols-3 gap-4 pb-16">
            <ProgramCard
              img={Bertumbuh}
              title={t('bertumbuhTitle')}
              description={t('bertumbuhDesc')}
            />
            <ProgramCard
              img={Bergerak}
              title={t('bergerakTitle')}
              description={t('bergerakDesc')}
            />
            <ProgramCard
              img={Berdampak}
              title={t('berdampakTitle')}
              description={t('berdampakDesc')}
            />
          </div>
        </div>
      </section>

      <section className="bg-rich-black">
        <div className="p-4 md:p-20 flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl text-white text-center">{t('cultureValues')}</h2>
          <div className="max-w-full md:max-w-5xl">
            <Image src={hatiBeriman} alt="Budaya dan nilai yang dipercaya Arisan Security" width={1920} height={1080} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* <section className="p-4 md:p-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-black mb-10">Belajar Dari Berkomunitas</h2>
        <p>Mari bergabung bersama kami serta berpartisipasi dalam projek sukarelawan rutin kami demi; Membangun, Memajukan, serta Mencerdaskan bangsa ini di bidang Information Technology, khususnya IT Security.</p>
        <div className="flex flex-col xl:flex-row justify-between gap-16 mt-10">
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-row gap-4">
              <img className="w-20 h-20 md:w-32 md:h-32" src={jadwalIcon} width={128} height={128}/>
              <div className="flex flex-col items-start text-left">
                <h2 className="text-xl font-bold">Offline Gathering</h2>
                <p> </p>
                <p>Informasi selanjutnya dapat dilihat pada kanal sosial media kami</p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <img className="w-20 h-20 md:w-32 md:h-32" src={mapIcon} width={128} height={128}/>
              <div className="flex flex-col items-start text-left">
                <h2 className="text-xl font-bold">Alamat</h2>
                <p>Kedai Humble, Salatiga, Jawa Tengah.</p>
                <p>Phone: <a href="https://wa.me/6281322678933" style={{color: '#E46C5C'}}>(+62)813-2267-8933</a></p>
                <p>Email: <a href="mailto:hai@arisansecurity.id" style={{color: '#E46C5C'}}>hai@arisansecurity.id</a></p>
              </div>
            </div>
          </div>
          <div>
          <div className="mapouter">
            <div className="w-[100%] h-[50%] md:h-[100%]">
              <iframe width="100%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3244874876127!2d110.49112937500023!3d-7.317398892690685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a786a6f1c1c37%3A0xba49af65df94431f!2sKedai%20Humble!5e0!3m2!1sid!2sid!4v1709282920148!5m2!1sid!2sid" >
                
              </iframe>
            </div>  
          </div>
        </div>
        </div>
      </section> */}
    </Page>
  );
};

export default TentangPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
