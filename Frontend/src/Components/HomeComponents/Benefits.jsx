export default function Benefits(){

    return(
        <section className="w-full flex flex-col gap-16 p-4 md:py-20 md:px-30">
            <header className=" flex flex-col items-center gap-4">
                <img 
                  src="benefit-badge.png"
                  alt="benefit-badge"
                />
                <h1 className="font-geist font-extrabold text-xl text-[#F8FAFC] ">
                    Designed for Practical Competence
                </h1>
                <p className="font-geist font-normal text-4 text-[#94A3B8] text-center"> 
                    Why self-study books fail and bootcamps overwhelm.
                     We engineered a robust learning environment built around execution.
                </p>
            </header>
            <main className="w-full grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 ">
                <img src="benefit-card.png" alt="benefit-card" />
                <img src="benefit-card (1).png" alt="benefit-card" />
                <img src="benefit-card (2).png" alt="benefit-card" />
                <img src="benefit-card (3).png" alt="benefit-card" />
            </main>

        </section>
    )
}