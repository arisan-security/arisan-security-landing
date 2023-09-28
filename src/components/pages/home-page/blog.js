import Post from "../../post";
// import image from '../../../images/a-cast.png'
export default function Blog({posts}) {
    return (
        <section className="min-h-screen pt-24 px-8 bg-gray-100 snap-start">
            <div className="text-center" data-aos={"fade-up"}>
                <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-red-600 mb-3">Blog</h2>
                <p className="text-4xl lg:text-3xl leading-none font-bold text-gray-800 tracking-tight mb-8">Buah Pena Dari Kontributor</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-12 pb-8 md:pb-0">
                {
                    posts.map((post, index) => (
                        <Post data-aos={"fade-up"} data-aos-delay={1000 * index} {...post}/>
                    ))
                }
            </div>
        </section>
    )
}