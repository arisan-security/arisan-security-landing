import Wave from "react-wavify";
import Ticker from "../../ticker";

export default function Progress() {
    return (
        <section className="px-8 md:px-[15vw] py-24 flex items-start content-center bg-absolute-blue snap-start relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-24 text-center md:text-left mx-auto">
                <div className="flex flex-row items-center justify-center py-10 gap-6">
                    <div className="text-4xl w-[30%] flex justify-center items-center h-full  text-light-purple lg:text-5xl leading-none font-bold tracking-tight">
                        <Ticker start={0} end={100} prefix="+" />
                    </div>
                    <div className="flex items-center text-white h-full ">Total permasalahan kasus siber yang kami bantu tangani.</div>
                </div>
                <div className="flex flex-row items-center justify-between py-10 gap-6">
                    <div className="text-4xl w-[30%] flex justify-center items-center h-full text-light-purple lg:text-5xl leading-none font-bold tracking-tight">
                        <Ticker start={0} end={250} prefix="+" />
                    </div>
                    <div className="flex items-center text-white h-full ">Total anggota dari sabang sampai merauke.</div>
                </div>
                <div className="flex flex-row items-center justify-between py-10 gap-6">
                    <div className="text-4xl w-[30%] flex justify-center items-center h-full text-light-purple lg:text-5xl leading-none font-bold tracking-tight">
                        <Ticker start={0} end={2} />
                    </div>
                    <div className="flex items-center text-white h-full ">Total penghargaan dari pihak Swasta maupun Pemerintah.</div>
                </div>
            </div>
            {/* <div className="absolute -bottom-1 left-0 w-full">
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
            </div> */}
        </section>
    )
}