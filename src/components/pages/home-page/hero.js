export default function Hero() {
    return (
        <section className="min-h-screen py-24 md:px-20 px-12 md:pt-0 grid grid-cols-1 md:grid-cols-2 align-baseline snap-start">
            <div className="my-auto" data-aos={"fade-left"}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-700 tracking-tight mb-8">Pecahkan kode &amp; bersama merubah dunia!</h2>
                <p className="text-lg font-thin lg:text-lg  text-gray-600 tracking-tight mb-8">Arisan Security (A-SEC) adalah wadah untuk berbicara seputar Information Technology, terkhusus pada bidang Information Technology Security. Kami sangat amat terbuka bagi semua kalangan &amp; Elemen masyarakat untuk bukan hanya sekedar berkolaborasi melainkan berelaborasi.</p>
            </div>
            <div className="flex justify-center items-center px-0 md:px-12 py-0 mt-4 md:mt-0 md:py-24" data-aos={"zoom-in"}>
                <iframe className="w-[28rem] h-[18rem]" src="https://www.youtube.com/embed/aCn8cPgRFHY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>
    )
}