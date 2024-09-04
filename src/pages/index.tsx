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

import React, { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
    const icon = document.getElementById('cta-icon');
    
    const handleScroll = () => {
      document.getElementById('contributor-section')?.scrollIntoView({
        behavior: 'smooth'
      });
    };

    if (icon) {
      icon.addEventListener('click', handleScroll);
    }

    return () => {
      if (icon) {
        icon.removeEventListener('click', handleScroll);
      }
    };
  }, []);


  return (
    <Page
      title={"Arisan SECurity"}
      path={"/"}
      seoProps={{
        title: "A-SEC | Arisan SECurity",
        description: "Secure your journey on the internet",
        article: false,
      }}
    >
      <Hero />
      <Shortcut />
      <Progress />
      {/* <Projects /> */}
      <Blog />
      <Activity />
      {/* <Collaborator settings={collabSlideSettings} collaborators={collaborators} /> */}
      <Cta />
    </Page>
  );
}
