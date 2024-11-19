/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
export default function Hero() {
    return (
        <section className="min-h-screen flex items-center relative bg-dark-blue px-[15vw] text-white overflow-hidden">
            <div className="absolute z-0 h-full w-[70vw]">
                <img src={'/images/hero_background.png'} alt='hero image' className="min-w-[792px] min-h-[920px] bottom-[-400px] right-[-200px] absolute object-cover"/>
            </div>
            <div className="flex flex-col gap-4 !z-10" data-aos={"fade-left"}>
                <h2 className="text-3xl sm:text-[40px] lg:text-[50px] leading-[4rem] font-extrabold tracking-tight mb-8">Pecahkan kode <br /> dam bersama <span className="bg-black bg-opacity-60 rounded-lg px-4">merubah dunia!</span></h2>
                <p className="text-lg font-thin lg:text-lg tracking-tight mb-8 md:w-[30vw]">Arisan SECurity (A-SEC) adalah wadah untuk berbicara seputar Information Technology, terkhusus pada bidang Information Technology Security. Kami sangat amat terbuka bagi semua kalangan &amp; Elemen masyarakat untuk bukan hanya sekedar berkolaborasi melainkan berelaborasi.</p>
                <a href="">
                    <div className="text-white border-white border-solid border rounded-3xl py-2 mx-2 max-w-xs text-center">
                        Pelajari Selengakpanya
                    </div>
                </a>
            </div>
        </section>
    )
}