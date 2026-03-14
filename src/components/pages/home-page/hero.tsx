import Link from "next/link";

const terminalLines = [
  { key: "focus", value: "Cyber Security Awareness" },
  { key: "program[0]", value: "BERtumbuh" },
  { key: "program[1]", value: "BERgerak" },
  { key: "program[2]", value: "BERDampak" },
  { key: "channel[0]", value: "Sawala Mangkus" },
  { key: "channel[1]", value: "A-Cast" },
  { key: "channel[2]", value: "Lintas Taksa" },
];

const Hero: React.FC = () => {
  return (
    <section className="bg-dark-blue text-white snap-start relative overflow-hidden min-h-screen">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue via-catacean-blue to-rich-black" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-[10%] top-32 h-40 w-40 rounded-full bg-light-purple/15 blur-[100px]" />
      <div className="absolute bottom-20 right-[10%] h-48 w-48 rounded-full bg-light-blue/10 blur-[100px]" />

      <div className="relative flex min-h-screen items-center px-8 md:px-[10%] pt-24 pb-16 md:pt-28 md:pb-20 max-w-[1440px] 2xl:max-w-[1680px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-light-blue shadow-[0_0_8px_rgba(2,136,217,0.8)]" />
              Arisan Security
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Pecahkan kode <br className="hidden sm:block" />dan bersama{" "}
              <span className="text-light-purple">merubah dunia!</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base leading-7 font-light text-white/75 max-w-xl text-justify">
              Arisan SECurity (A-SEC) adalah wadah untuk berbicara seputar Information Technology, terkhusus pada bidang Information Technology Security. Kami sangat amat terbuka bagi semua kalangan &amp; Elemen masyarakat untuk bukan hanya sekedar berkolaborasi melainkan berelaborasi.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-dark-blue transition hover:bg-white-purple"
              >
                Pelajari Selengakpanya
              </Link>
              <Link
                href="https://blog.arisansecurity.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Kunjungi blog komunitas
              </Link>
            </div>
          </div>

          {/* Right: Terminal panel */}
          <div className="w-full">
            <div className="relative rounded-2xl p-px shadow-2xl">
              {/* Animated border beam */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_60%,#A590FF_78%,#0288D9_92%,transparent_100%)]" />
              </div>
              {/* Card content */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[rgba(18,6,84,0.95)] to-[rgba(8,2,37,0.98)] backdrop-blur-xl">
              {/* Top highlight line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F7C948]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-white/40">
                  community.config.ts
                </span>
              </div>

              {/* Code block */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed">
                <div className="text-white/40">
                  <span className="text-light-purple">const</span>{" "}
                  <span className="text-white/80">community</span>{" "}
                  <span className="text-white/40">=</span>{" "}
                  <span className="text-light-blue">&#123;</span>
                </div>

                {terminalLines.map((line) => (
                  <div key={line.key} className="pl-5 mt-1.5">
                    <span className="text-white/50">{line.key}</span>
                    <span className="text-white/30">: </span>
                    <span className="text-light-purple">&quot;{line.value}&quot;</span>
                    <span className="text-white/30">,</span>
                  </div>
                ))}

                <div className="mt-1.5 text-light-blue">&#125;</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
