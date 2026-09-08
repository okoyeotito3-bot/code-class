export default function () {
  return (
    <section className="bg-[#161B26] w-full flex flex-col py-3 px-2 gap-20 md:py-24 md:px-20 lg:py-24 lg:px-20">
      <header className="flex flex-col gap-4 items-center">
        <p className="font-['Geist-Mono'] font-semibold text-sm tracking-[0.5em] text-white">
          RoadMap
        </p>
        <p className="font-['geist'] font-extrabold text-2xl md:text-4xl lg:text-4xl text-white">
          How CodeClass Works
        </p>
      </header>
      <div className=" w-full grid grid-cols-2 px-2 md:grid-cols-4 lg:grid-cols-4">
        <img
          src="step-wrapper.png"
          alt="stepperRow"
          className="h-auto object-cover"
        />
        <img
          src="step-wrapper (3).png"
          alt="stepperRow"
          className="h-auto object-cover"
        />
        <img
          src="step-wrapper (1).png"
          alt="stepperRow"
          className="h-auto object-cover"
        />
        <img
          src="step-wrapper (2).png"
          alt="stepperRow"
          className="h-auto object-cover"
        />
      </div>
    </section>
  );
}
