import React from "react";
import Ticker from "../../ticker";
import { useTranslations } from "next-intl";

const Progress: React.FC = () => {
    const t = useTranslations('Progress');

    return (
        <div className="bg-rich-black">
            <section className="px-4 md:px-[10%] py-16 md:py-24 flex items-start content-center !max-w-[1440px] m-auto snap-start relative">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:px-24 text-center md:text-left mx-auto">
                    <div className="grid grid-cols-2 py-4 gap-2 text-left md:py-10 md:gap-6" style={{gridTemplateColumns: "30% 1fr"}}>
                        <div className="text-4xl flex justify-center items-center h-full  text-light-purple lg:text-5xl leading-none font-bold tracking-tight">
                            <Ticker start={0} end={100} prefix="+" />
                        </div>
                        <div className="flex items-center md:items-center text-white h-full ">{t('cyberCases')}</div>
                    </div>
                    <div className="grid grid-cols-2 py-4 gap-2 text-left md:py-10 md:gap-6" style={{gridTemplateColumns: "30% 1fr"}}>
                        <div className="text-4xl flex justify-center items-center h-full text-light-purple lg:text-5xl leading-none font-bold tracking-tight">
                            <Ticker start={0} end={250} prefix="+" />
                        </div>
                        <div className="flex items-start md:items-center text-white h-full">{t('members')}</div>
                    </div>
                    <div className="grid grid-cols-2 py-4 gap-2 text-left md:py-10 md:gap-6" style={{gridTemplateColumns: "30% 1fr"}}>
                        <div className="text-4xl flex justify-center items-center h-full text-light-purple lg:text-5xl leading-none font-bold tracking-tight">
                            <Ticker start={0} end={2} />
                        </div>
                        <div className="flex items-start md:items-center text-white h-full ">{t('awards')}</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Progress;
