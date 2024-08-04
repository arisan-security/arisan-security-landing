import Button from "../../button"

const Acast =  "/images/a-cast.png"
const LintasTaksa =  "/images/lintas-taksa.png"
const SawalaMangkus =  "/images/sawala-mangkus.png"

export default function Shortcut() {
    return (
        <section className="min-h-screen py-24 md:px-52 px-12 snap-start">
            <div className="" data-aos={"fade-up"} data-aos-offset={"10"}>
                <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-dark-blue mb-3">Jalan Pintas</h2>
                <p className="text-4xl lg:text-5xl leading-none font-bold text-gray-800 tracking-tight mb-8">Informasi Yang Mungkin Kamu Butuhkan</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-56 h-full gap-8 gap-y-32 md:gap-y-24">
                <div className="rounded-2xl min-w-full shadow-sm bg-blue-400 p-4 pb-8 text-white relative" data-aos={"fade-up"} data-aos-delay="500">
                    <div className="h-40 relative">
                        <img alt="Sawala Mangkus" className="absolute bottom-4 w-full h-80 object-contain animate-wiggle" src={SawalaMangkus} />
                    </div>
                    <h3 className="text-lg font-bold mb-8">Sawala Mangkus</h3>
                    <p className="mb-8">Ikut membangun diskusi Teknologi Informasi yang sehat dan positif melalui media dalam jaringan di regu Telegram yang kami sediakan untuk khalayak luas.</p>
                    <div className="absolute bottom-6 right-4">
                        <a target="_blank" href="https://t.me/arisansecurity" className="">
                            <Button>Selengkapnya</Button>
                        </a>
                    </div>
                </div>
                <div className="rounded-2xl min-w-full shadow-sm bg-yellow-400 p-4 pb-8 text-white relative" data-aos={"fade-up"} data-aos-delay="1000">
                    <div className="h-40 relative">
                        <img alt="Lintas Taksa" className="absolute bottom-4 w-full h-72 object-contain" src={LintasTaksa} />
                    </div>
                    <h3 className="text-lg font-bold mb-8">Lintas Taksa</h3>
                    <p className="mb-8">Menyajikan perspektif singkat aktual dari para pakar praktisi serta pecandu Teknologi Informasi & bidang lain yang terkait, khususnya Keamanan Siber.</p>
                    <div className="absolute bottom-6 right-4">
                        <a target="_blank" href="https://fb.me/ArisanSec" className="">
                            <Button>Selengkapnya</Button>
                        </a>
                    </div>
                </div>
                <div className="rounded-2xl min-w-full shadow-sm bg-red-400 p-4 pb-8 text-white relative" data-aos={"fade-up"} data-aos-delay="1500">
                    <div className="h-40 relative">
                        <img alt="A-Cast" className="absolute bottom-4 w-full h-72 object-contain" src={Acast} />
                    </div>
                    <h3 className="text-lg font-bold mb-8">A-Cast</h3>
                    <p className="mb-8">Digital Audio Non-Streaming yang membahas segala sesuatu tentang Teknologi Informasi. Kamu bisa dengar update tentang dunia IT secara komprehensif dimanapun &amp; kapanpun!</p>
                    <div className="absolute bottom-6 right-4">
                        <a target="_blank" href="https://open.spotify.com/" className="">
                            <Button>Selengkapnya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}