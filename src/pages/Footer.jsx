const Footer = () => {
    return (
        <footer className="w-full bg-[#1a1e26]">
            <section className="flex justify-center">
                <div className="w-full bg-white h-auto flex flex-col gap-4 py-6">

                    {/* Top name row */}
                    <div className="flex justify-between px-6">
                        {["SANDULA", "SANCHANA", "AKARSHA", "FERNANDO"].map((name) => (
                            <span
                                key={name}
                                className="font-mono text-[clamp(14px,2vw,24px)]"
                            >
                {name}
              </span>
                        ))}
                    </div>

                    {/* Big text */}
                    <div className="px-6 leading-none">
                        <p className="font-mono font-bold text-[clamp(48px,10vw,160px)]">
                            BIG
                        </p>
                        <p className="font-mono font-bold text-[clamp(48px,10vw,160px)]">
                            LEAGUES..
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="px-6">
            <span className="font-mono text-[clamp(12px,1.2vw,16px)]">
              ©2025 Sandula. All rights reserved
            </span>
                    </div>

                </div>
            </section>
        </footer>
    );
};

export default Footer;
