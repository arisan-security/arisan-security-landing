import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function Collaborator({ settings, collaborators }) {
    return (
        <section className="pt-14 px-8 snap-start">
            <div className="text-center">
                <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-8">Pernah Berkolaborasi Dengan</h2>
                <div>
                    <Slider {...settings}>
                        {
                            collaborators.map((collaborator) => {
                                return (
                                    <div key={collaborator.path} className="transform hover:scale-125">
                                        <img className="mx-auto" src={collaborator.path} alt={collaborator.alt} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}