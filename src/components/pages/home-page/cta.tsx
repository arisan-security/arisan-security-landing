import React from "react";
import Image from "next/image";
import Button from "../../button";
import { useTranslations } from "next-intl";

const Cta: React.FC = () => {
    const t = useTranslations('Cta');

    return (
        <div className="bg-rich-black">
            <section className="pb-12 px-8 md:px-[10%] !max-w-[1440px] m-auto flex items-start md:py-24 snap-start relative" id="contributor-section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24" >
                    <Image src="/images/inspiration-amico.svg" width={380} height={380} alt="Inspiration Amico" className="place-self-end" />
                    <div>
                        <div className="pb-10">
                            <p className="text-3xl leading-none font-bold text-white tracking-tight mb-8">{t('title')}</p>
                            <p className="text-xl leading-6 font-bold  text-light-purple mb-8">{t('question')}</p>
                            <div className="text-white leading-6 text-justify font-light">
                                <p>{t('desc1')}</p>
                                <p>{t('desc2')}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <a href="http://blog.arisansecurity.id" target="_blank">
                                <Button className="" variant="outlined">{t('submitWriting')}</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cta;
