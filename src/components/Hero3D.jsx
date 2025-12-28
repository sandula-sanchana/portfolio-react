import Spline from "@splinetool/react-spline";

export const Hero3D = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">

            {/* 3D Background */}
            <div className="absolute mx-auto -z-10 pointer-events-none w-[60vw] border rounded-2xl">
                <Spline scene="https://prod.spline.design/LtW1ZRVgxJNmnIh9/scene.splinecode" />
            </div>

            {/* Centered Text */}
            <div className="text-center px-5">
                <h1 className="text-8xl font-extrabold text-white font-pattaya">
                    Sandula Sanchana
                </h1>

                <p className="mt-4 text-xl font-semibold tracking-wide opacity-80">
                    Software Engineer · AI/ML Engineer · UI/UX Designer
                </p>
            </div>

        </section>
    );
};
