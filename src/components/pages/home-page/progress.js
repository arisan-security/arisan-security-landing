import Wave from "react-wavify";
import Ticker from "../../ticker";

export default function Progress() {
    return (
        <section className="min-h-screen mt-24 px-8 flex items-center content-center bg-dark-blue snap-start relative pb-48 md:pb-0 pt-48 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-24 text-center md:text-left mx-auto">
                <div className="text-center">
                    <div className="text-4xl text-light-blue lg:text-5xl leading-none font-bold  tracking-tight mb-8">
                        <Ticker start={0} end={100} prefix="+" />
                    </div>
                    <p className="text-white">Total permasalahan kasus siber yang kami bantu tangani.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl text-light-blue lg:text-5xl leading-none font-bold  tracking-tight mb-8">
                        <Ticker start={0} end={2} />
                    </div>
                    <p className="text-white">Total penghargaan dari pihak Swasta maupun Pemerintah.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl text-light-blue lg:text-5xl leading-none font-bold  tracking-tight mb-8">
                        <Ticker start={0} end={250} prefix="+" />
                    </div>
                    <p className="text-white">Total anggota dari sabang sampai merauke.</p>
                </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-full">
                <Wave fill='#0097f0'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 60,
                        speed: 0.15,
                        points: 3
                    }}
                />
            </div>
            <div className="absolute -bottom-2 left-0 w-full">
                <Wave fill='#fff'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 60,
                        speed: 0.15,
                        points: 3
                    }}
                />
            </div>
        </section>
    )
}