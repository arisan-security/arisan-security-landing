import * as React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';
import { useTranslations } from "next-intl";

/**
 * Footer component: Arisan Security branding, links, and social icons.
 * All external links open in new tab with rel security.
 */
const Footer: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <div className="bg-rich-black border-t-[1px]">
      <div className="!max-w-[1440px] m-auto text-white p-8 md:px-[10%] mx-autorelative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div className="my-4">
            <Image src="/images/arisansecurity.png" width={120} height={64} className="object-contain h-8 md:h-16" alt="Logo Arisan SECurity" priority />
          </div>
          <div className="m-4">
            <a href="#" className="block text-sm mb-2 text-white">{t('submitWriting')}</a>
            <a href="#" className="block text-sm mb-2 text-white">{t('contactUs')}</a>
          </div>
          <div className="m-4">
            <a href="#" className="block text-sm mb-2 text-white">{t('pressKit')}</a>
            <a href="#" className="block text-sm mb-2 text-white">{t('privacy')}</a>
            <a href="/syarat-dan-ketentuan" className="block text-sm mb-2 text-white">{t('terms')}</a>
          </div>
        </div>
        {/* Uncomment and update social links as needed */}
        {/* <div className="flex w-full items-center justify-center">
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://wwsw.facebook.com/ArisanSec/" target="_blank" rel="noopener noreferrer"><FaFacebook width={24} /></a>
          </div>
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://instagram.com/arisansecurity.id" target="_blank" rel="noopener noreferrer"><FaInstagram width={24} /></a>
          </div>
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://twitter.com/arisansecurity" target="_blank" rel="noopener noreferrer"><FaTwitter width={24} /></a>
          </div>
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://www.linkedin.com/company/arisansecurity/" target="_blank" rel="noopener noreferrer"><FaLinkedin width={24} /></a>
          </div>
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://s.id/TelegramASEC" target="_blank" rel="noopener noreferrer"><FaTelegram width={24} /></a>
          </div>
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://s.id/DiscordASEC" target="_blank" rel="noopener noreferrer"><FaDiscord width={24} /></a>
          </div>
          <div className="rounded-full p-1 bg-blue-400 mx-1">
            <a href="https://www.youtube.com/channel/UCm2pDFpGl5o4qo3uvXSc2Yw" target="_blank" rel="noopener noreferrer"><FaYoutube width={24} /></a>
          </div>
        </div> */}
        <div className="absoulte bottom-0 w-full text-white">© 2025 Arisan Security</div>
      </div>
    </div>
  );
};

export default Footer;
