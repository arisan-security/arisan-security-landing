export default function Projects() {
    return (
        <section className="min-h-screen py-12 px-8 snap-start">
            <div className="mb-12" data-aos={"fade-up"}>
                <h2 className="sm:text-lg text-center sm:leading-snug font-semibold tracking-wide uppercase text-red-600 mb-3">Proyek</h2>
                <p className="text-4xl lg:text-3xl text-center leading-none font-bold text-gray-800 tracking-tight mb-8">Sorotan Proyek Terbaru Kami Untuk Khayalak Luas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-1 gap-3">
                    <div className="text-center px-0 md:px-24">
                        <img alt="Segera datang" src="https://arisansecurity.id/wp-content/uploads/2021/02/icon-coming-soon-150x150.png" className="mx-auto" />
                        <div className="text-1xl leading-none font-semibold mb-2">Segera Datang~</div>
                        <p className="font-thin text-md">Saat ini proyek masih dalam tahap pengembangan...</p>
                    </div>
                    <div className="text-center px-0 md:px-24">
                        <img alt="Saran ide" src="https://arisansecurity.id/wp-content/uploads/2021/02/icon-coming-soon2-150x150.png" className="mx-auto" />
                        <div className="text-1xl leading-none font-semibold mb-2">ADA SARAN IDE PROYEK MENARIK?</div>
                        <p className="font-thin text-md">Kalau kamu punya ide kreatif seputar dunia IT, Jangan sungkan kirimkan ide kamu melalui laman “Kontak”.</p>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <img src="/static/taran.jpg" />
                </div>
            </div>
        </section>
    )
}