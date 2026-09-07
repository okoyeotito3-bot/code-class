export default function WorkShowCase(){
    return(
        <section className="w-full flex flex-col p-4 gap-4 md:gap-16 lg:gap-16 md:py-[80px] md:px-[120px] lg:py-[80px] lg:px-[120px]"> 
            <header className="flex flex-col gap-4 w-full items-center">
                <p className="text-[#00E676] font-[geist-mono] font-semibold text-sm ">INTEGRATION WORKFLOW</p>
                <p className="font-geist font-extrabold text-[#F8FAFC] text-lg md:text-4xl">Real-Time Assessment Pipeline</p>
                <p className="font-geist text-sm text-[#94A3B8]">A robust feedback loop engineered directly into CodePen,
                     ensuring your files are validated and graded in seconds.
                </p>
            </header>
            <div className="grid gap-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                <img src="terminal-step.png" alt="terminal Stepper" />
                <img src="terminal-step (1).png" alt="terminal Stepper" />
                <img src="terminal-step (2).png" alt="terminal Stepper" />
                <img src="terminal-step (4).png" alt="terminal Stepper" />
            </div>
        </section>
    )
}