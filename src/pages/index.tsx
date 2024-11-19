import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Page from "@/layouts/Page";
import Hero from "@/components/pages/home-page/hero"
import Shortcut from "@/components/pages/home-page/shortcut"
import Progress from "@/components/pages/home-page/progress"
import Blog from "@/components/pages/home-page/blog"
import Activity from "@/components/pages/home-page/activity"
import Cta from "@/components/pages/home-page/cta"

const inter = Nunito({ subsets: ['latin'] })

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
      <Cta />
    </Page>
  );
}
