export default function Benefits() {
  return (
    <section className="w-full flex flex-col gap-16 py-10">
      <header className=" flex flex-col items-center gap-4">
        <img src="benefit-badge.png" alt="benefit-badge" />
        <h1 className="font-['geist'] font-extrabold text-xl text-white">
          Designed for Practical Competence
        </h1>
        <p className="font-['geist'] text-sm text-[#94A3B8] text-center">
          Why self-study books fail and bootcamps overwhelm. We engineered a
          robust learning environment built around execution.
        </p>
      </header>
      <main className="w-full grid grid-cols-2 gap-1.5 p-2 md:grid-cols-4 md:gap-6 ">
        <img
          src="benefit-card.png"
          alt="benefit-card"
          className="h-auto object-cover"
        />
        <img
          src="benefit-card (1).png"
          alt="benefit-card"
          className="h-auto object-cover"
        />
        <img
          src="benefit-card (2).png"
          alt="benefit-card"
          className="h-auto object-cover"
        />
        <img
          src="benefit-card (3).png"
          alt="benefit-card"
          className="h-auto object-cover"
        />
      </main>
    </section>
  );
}
