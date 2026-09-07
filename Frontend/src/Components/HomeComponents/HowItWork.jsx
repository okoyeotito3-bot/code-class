export default function (){
    return(
        <section className="flex flex-col w-full gap-y-20 bg-[#161B26] py-3 px-2 md:py-20 md:px-24 lg:py-20 lg:px-20 ">
            <header className="flex flex-col gap-4 items-center ">
              <p className="font-['Geist_Mono'] font-semibold text-[11px] tracking-[0.5em] text-[#00E676]">RoadMap</p>
              <p className="font-geist  font-extrabold text-2xl md:text-[36px] lg:text-[36px] text-[#F8FAFC]">How CodeClass Works</p>
            </header>
            <div className=" w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                <img src="step-wrapper.png" alt="stepperRow" />
                <img src="step-wrapper (3).png" alt="stepperRow" />
                <img src="step-wrapper (1).png" alt="stepperRow" />
                <img src="step-wrapper (2).png" alt="stepperRow"/>
            </div>
        </section>
    )
}