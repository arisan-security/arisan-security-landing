import Button from "../../button"
import ShortcutCard from "@/components/cards/ShortcutCard"

const Acast =  "/images/a-cast.png"
const LintasTaksa =  "/images/lintas-taksa.png"
const SawalaMangkus =  "/images/sawala-mangkus.png"

export default function Shortcut() {
    return (
        <section className="pt-24 md:px-[10%] !max-w-[1440px] m-auto mb-20 px-12 snap-start">
            <div className="text-center" data-aos={"fade-up"} data-aos-offset={"10"}>
                <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-dark-blue mb-3">Jalan Pintas</h2>
                <p className="text-4xl  leading-none font-bold text-gray-800 tracking-tight mb-8">Informasi Yang Mungkin Kamu Butuhkan</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 md:mx-10 h-full gap-8 gap-y-32 md:gap-y-24">
                <ShortcutCard
                    isArticle={false} 
                    imgUrl="/images/sawala-mangkus.png"
                    title="Sawala Mangkus"
                    description="Ikut membangun diskusi Teknologi Informasi yang sehat dan positif melalui media dalam jaringan di regu Telegram yang kami sediakan untuk khalayak luas."
                    contentUrl=""
                    imageStyle={{right: 15}}
                    />
                <ShortcutCard
                    isArticle={false} 
                    imgUrl="/images/lintas-taksa.png"
                    title="Lintas Taksa"
                    description="Menyajikan perspektif singkat aktual dari para pakar praktisi serta pecandu Teknologi Informasi & bidang lain yang terkait, khususnya Keamanan Siber."
                    contentUrl=""
                    imageStyle={{right: 5}}
                    />
                <ShortcutCard
                    isArticle={false} 
                    imgUrl="/images/a-cast.png"
                    title="A-Cast"
                    description="Digital Audio Non-Streaming yang membahas segala sesuatu tentang Teknologi Informasi. Kamu bisa dengar update tentang dunia IT secara komprehensif dimanapun &amp; kapanpun!"
                    contentUrl=""
                    imageStyle={{right: 5}}
                />
            </div>
        </section>
    )
}