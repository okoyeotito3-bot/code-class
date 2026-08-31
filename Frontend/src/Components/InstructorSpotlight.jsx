export default function(){
    return(
        <section className="w-full flex flex-col gap-[64px] p-2  md:flex-row md:py-[80px] md:px-[120px] lg:py-[80px] lg:px-[120px]">
            <img src="tutor.jpg" alt="tutor" className="w-full h-[270px]  object-cover rounded shadow-sm md:h-[480px] lg:h-[480px]" />
            <div className="flex flex-col w-full gap-[32px]">
                <h1 className="font-[Geist-Mono] font-semibold text-[11px] text-[#5491FF]">INSTRUCTOR SPOTLIGHT</h1>
                <div className="flex flex-col gap-[32px]">
                    <h1 className="font-geist font-extrabold text-2xl text-[#F8FAFC] md:text-[40px] lg:text-[40px]">Learn From Otito Okoye</h1>
                    <p className="font-[Geist-Mono] font-semibold text-[16px] text-[#5491FF]">Software Engineer & Educator • React / Web Architect</p>
                </div>
                <p className="text-[#94A3B8] font-geist font-normal text-[16px]">Otito is a dedicated frontend engineer and tech educator who builds high-performance web applications.
                   he brings real-world enterprise expertise in React and modern frontend architectures directly to you through interactive,
                  hands-on instruction.                  
                  </p>
                  <div className="flex gap-[32px]">
                    <div className="flex flex-col gap-1">
                        <p className="font-[Geist-Mono] font-normal text-[#64748B] text-md">Active-Engineering</p>
                        <p className="text-[#F8FAFC] font-bold font-geist text-md">Netflix, Meta</p>
                    </div>
                    <div>
                        <p className="font-[Geist-Mono] font-normal text-[#64748B] text-md">Publications</p>
                        <p className="text-[#F8FAFC] font-bold font-geist text-md">JS Internals Handbook</p>
                    </div>
                  </div>
            </div>
        </section>
    )
}