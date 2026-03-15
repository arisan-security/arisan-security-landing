import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
    const t = useTranslations('Projects');

    return (
        <section className="min-h-screen py-12 px-8 snap-start">
            <div className="mb-12">
                <h2 className="sm:text-lg text-center sm:leading-snug font-semibold tracking-wide uppercase text-red-600 mb-3">{t('subtitle')}</h2>
                <p className="text-4xl lg:text-3xl text-center leading-none font-bold text-gray-800 tracking-tight mb-8">{t('title')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-1 gap-3">
                    <div className="text-center px-0 md:px-24">
                        <Image alt={t('comingSoon')} src="https://arisansecurity.id/wp-content/uploads/2021/02/icon-coming-soon-150x150.png" width={150} height={150} className="mx-auto" unoptimized />
                        <div className="text-1xl leading-none font-semibold mb-2">{t('comingSoon')}</div>
                        <p className="font-thin text-md">{t('comingSoonDesc')}</p>
                    </div>
                    <div className="text-center px-0 md:px-24">
                        <Image alt={t("ideaTitle")} src="https://arisansecurity.id/wp-content/uploads/2021/02/icon-coming-soon2-150x150.png" width={150} height={150} className="mx-auto" unoptimized />
                        <div className="text-1xl leading-none font-semibold mb-2">{t("ideaTitle")}</div>
                        <p className="font-thin text-md">{t('ideaDesc')}</p>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <Image src="/static/taran.jpg" alt="" width={400} height={400} className="max-w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
