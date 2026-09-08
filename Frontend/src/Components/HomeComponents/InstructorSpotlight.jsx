export default function () {
  return (
    <section className="w-full flex flex-col gap-16 p-4 md:flex-row md:py-30 md:px-20 lg:px-20 lg:py-30">
      <img
        src="tutor.png.jpeg"
        alt="tutor"
        className="w-full h-auto object-cover rounded-md shadow-sm 120 lg:h-120"
      />
      <div className="flex flex-col w-full gap-8">
        <h1 className="font-['Geist-Mono'] font-semibold text-sm text-[#5491FF]">
          INSTRUCTOR SPOTLIGHT
        </h1>
        <div className="flex flex-col gap-8">
          <h1 className="font-['geist'] font-extrabold text-2xl text-white md:text-4xl lg:text-4xl">
            Learn From Otito Okoye
          </h1>
          <p className="font-[Geist-Mono] font-semibold text-lg text-[#5491FF]">
            Software Engineer & Educator • React / Web Architect
          </p>
        </div>
        <p className="text-[#94A3B8] font-['geist'] text-base">
          Otito is a dedicated software engineer and technology educator with a
          passion for developing high-performance scalable digital solutions.
          Drawing from real-world enterprise experience with modern software
          architectures, he transforms complex engineering concepts into
          practical, engaging learning experiences Through interactive, hands-on
          instruction, Otito provides aspiring developers with the technical
          depth, engineering principles, and problem-solving expertise needed to
          build production-ready applications and confidently navigate the
          demands of the modern software industry.
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            <p className="font-['Geist-Mono'] text-[#64748B] text-base">
              Active-Engineering
            </p>
            <p className="text-white font-bold font-['geist'] text-base">
              Netflix, Meta
            </p>
          </div>
          <div>
            <p className="font-['Geist-Mono'] text-[#64748B] text-base">
              Publications
            </p>
            <p className="text-[#F8FAFC] font-bold font-['geist'] text-base">
              JS Internals Handbook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
