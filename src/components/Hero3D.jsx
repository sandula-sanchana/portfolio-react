import Spline from "@splinetool/react-spline";


export const Hero3D=()=>{

    return (
        <section className="relative w-full overflow-hidden h-[100vh]">
            {/* Background 3D */}
            <div className="absolute inset-0 -z-10 pointer-events-none ">
                <Spline  scene="https://prod.spline.design/LtW1ZRVgxJNmnIh9/scene.splinecode"  />
            </div>

            <div className="relative z-10 flex flex-start h-fit">
                <div className=" px-5 text-center">
                    <h1 className="text-8xl font-extrabold font-pattaya ">Sandula Sanchana</h1>
                    <p className="mt-4 text-xl font-semibold ">Software Engineer | AI/ML Engineer | UI/UX Designer</p>
                </div>
            </div>
        </section>
    )
}