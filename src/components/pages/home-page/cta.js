import Button from "../../button";

export default function Cta() {
    return (
        <section className="min-h-screen px-8 md:px-32 bg-gray-100 flex items-center snap-start relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24" >
                {/*<div className="h-96 rounded-xl bg-blue-500">*/}

                {/*</div>*/}
                <div>
                    <div className="pb-10">
                        <p className="text-4xl lg:text-3xl leading-none font-bold text-gray-800 tracking-tight mb-8">Menulis Adalah Jendela Ilmu, dari Segala Ilmu</p>
                        <p className="text-2xl leading-6 font-bold  text-gray-700 mb-8">Ingin ikut terlibat menjadi kontributor?</p>
                        <div className="text-gray-600 leading-6 text-justify font-light">
                            <p>Kami menerapkan sistem model Crowdsourcing yang berarti, siapapun bisa berkontribusi kepada platform ini. Dari komunitas untuk komunitas, dari kamu untuk kamu. Setiap tulisan kamu akan dilakukan proses proofreading oleh Redaktur.</p>
                            <p>Jika tulisan kamu sudah layak memenuhi syarat untuk terbit, kamu akan mendapatkan poin yang berguna untuk memimpin papan Jawara Cendekia layaknya Hall Of Fame.</p>
                        </div>
                    </div>
                    <div className="flex">
                        <a href="http://blog.arisansecurity.id" target="_blank">
                            <Button className="px-20 rounded-sm">Kirim Tulisan</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}