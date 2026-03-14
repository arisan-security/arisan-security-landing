import React from "react";
import Image from "next/image";
import Button from "../../button";

const Cta: React.FC = () => {
    return (
        <div className="bg-rich-black">
            <section className="pb-12 px-8 md:px-[10%] !max-w-[1440px] m-auto flex items-start md:py-24 snap-start relative" id="contributor-section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24" >
                    <Image src="/images/inspiration-amico.svg" width={380} height={380} alt="Inspiration Amico" className="place-self-end" />
                    <div>
                        <div className="pb-10">
                            <p className="text-3xl leading-none font-bold text-white tracking-tight mb-8">Menulis Adalah Jendela Ilmu, dari Segala Ilmu</p>
                            <p className="text-xl leading-6 font-bold  text-light-purple mb-8">Ingin ikut terlibat menjadi kontributor?</p>
                            <div className="text-white leading-6 text-justify font-light">
                                <p>Kami menerapkan sistem model Crowdsourcing yang berarti, siapapun bisa berkontribusi kepada platform ini. Dari komunitas untuk komunitas, dari kamu untuk kamu. Setiap tulisan kamu akan dilakukan proses proofreading oleh Redaktur.</p>
                                <p>Jika tulisan kamu sudah layak memenuhi syarat untuk terbit, kamu akan mendapatkan poin yang berguna untuk memimpin papan Jawara Cendekia layaknya Hall Of Fame.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <a href="http://blog.arisansecurity.id" target="_blank">
                                <Button className="" variant="outlined">Kirim Tulisan</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cta;
