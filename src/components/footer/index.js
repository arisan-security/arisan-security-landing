import * as React from "react"
import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';

const ArisanSecurityLogo = "../../images/arisansecurity.png";


const Footer = () => {
  return (
    <div className="bg-dark-blue text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="m-4">
          <img src={ArisanSecurityLogo} className="object-contain h-8 md:h-8" alt="Logo Arisan Security" />
        </div>
        <div className="m-4">
          <a href="#" className="block text-sm mb-2 text-white">Kirim Tulisan</a>
          <a href="#" className="block text-sm mb-2 text-white">Hubungi Kami</a>
        </div>
        <div className="m-4">
          <a href="#" className="block text-sm mb-2 text-white">Media Press Kit</a>
          <a href="#" className="block text-sm mb-2 text-white">Kebijakan dan Privasi</a>
          <a href="/syarat-dan-ketentuan" className="block text-sm mb-2 text-white">Syarat dan Ketentuan</a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://wwsw.facebook.com/ArisanSec/" target={'_blank'}><FaFacebook width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://instagram.com/arisansecurity.id" target={'_blank'}><FaInstagram width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://twitter.com/arisansecurity" target={'_blank'}><FaTwitter width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://www.linkedin.com/company/arisansecurity/" target={'_blank'}><FaLinkedin width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://s.id/TelegramASEC" target={'_blank'}><FaTelegram width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://s.id/DiscordASEC" target={'_blank'}><FaDiscord width={24} /></a>
        </div>
        <div className="rounded-full p-1 bg-blue-400 mx-1">
          <a href="https://www.youtube.com/channel/UCm2pDFpGl5o4qo3uvXSc2Yw" target={'_blank'}><FaYoutube width={24} /></a>
        </div>
      </div>
    </div>
  )
}


export default Footer;