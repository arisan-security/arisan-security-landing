import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Page from "@/layouts/Page";
import Hero from "@/components/pages/home-page/hero"
import Collaborator from "@/components/pages/home-page/collaborator"
import Shortcut from "@/components/pages/home-page/shortcut"
import Progress from "@/components/pages/home-page/progress"
import Blog from "@/components/pages/home-page/blog"
import Activity from "@/components/pages/home-page/activity"
import Cta from "@/components/pages/home-page/cta"

const inter = Nunito({ subsets: ['latin'] })

const posts = [
  {
    author: 'Arisan Security',
    title: 'AWS S3 Bucket Exposure',
    cover: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG4C_q71uXP3Fi0luwaTS9mGDbCCmljkPTKft8HdqLi5xLhAeG9L70qreUKN2SmhxKOt2k0FuDpI4Ctb0TgAPZdfIGTCxdBzy0190B0tuO4oo5Kb-_PzC1Al2ABXWT1FMi7laVN8eebVfxkNl6RM0AgeIU2cdEfuELEvk-9RzLUmBf6KLIQ74Nkea-Ww/s582/15.png',
  },
  {
    author: 'Arisan Networking',
    title: 'Macam Threat Actor dalam Keamanan Siber',
    cover: 'https://lh4.googleusercontent.com/bbk2r9TSjTGu9WvpM2b6UJ9EcoClCrAlMwPhpl__Uf576ICKyz_ue_AEe6yPw_xmEipcYENKm9O-eTzzKBBFUXoobGc9Em2i2Juxw3dhGGT6ZxfUpv9Mhj3oT64U6yWh1kQQspkNz4uPlLFlVQspwhM',
  },
  {
    author: 'Arisan Security',
    title: 'Pentingnya Kesadaran Keamanan Siber untuk Kesiapan Pertahanan Nasiona',
    cover: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvu-p5J44j-_VhuZcrcT5CajP7nMRtUUHIwipPujqeoeIbcXnDMSSf7TXh07PNP3u3fh2wOGLKjTIlJkETuox4gxu0N3ZE5ZWK0p6vAr0tXefYM2sbQSPq9eoNapMOEuX3Ny666XRftw2ZduCoXvwP4P7dtHHHkdq1NO-IZelBevvxF_ZmxNj6HsP6_g/w640-h360/map-indonesia-gold-glitter-map-dark-background.jpg',
  },
];

const collabSlideSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const CollaboratorFrameCoffee = "/images/framecoffehouse.png"
const CollaboratorKopilot = "/images/kopilot.png"
const CollaboratorLkf = "/images/lkf-fti-uksw.png"
const CollaboratorVolgeist = "/images/volkgeist.png"

const collaborators = [
  {
    path: CollaboratorLkf,
    alt: 'LKF FTI UKSW',
  },
  {
    path: CollaboratorVolgeist,
    alt: 'Volkgeist',
  },
  {
    path: CollaboratorFrameCoffee,
    alt: 'Frame Coffe House',
  },
  {
    path: CollaboratorKopilot,
    alt: 'Kopilot',
  },
];


export default function Home() {
  return (
      <Page
        title={"Arisan Security"}
        path={"/"}
      >
        <Hero />
        <Shortcut />
        <Progress />
        {/*/!* <Projects /> *!/*/}
        <Blog posts={posts}/>
        <Activity />
        <Collaborator settings={collabSlideSettings} collaborators={collaborators}/>
        <Cta />
      </Page>
  )
}
