export default function DetailsHero() {
  return (
    <section className="w-full flex flex-col gap-6 px-20 py-16">
      <div className="flex gap-2 items-center">
        <span className="text-[#64748B] font-[Geist-Mono] text-sm">COURSES</span>
        <span className="text-[#64748B] font-[Geist-Mono] text-sm">/</span>
        <span className="text-[#2979FF] font-[Geist-Mono] text-sm">JAVASCRIPT COHORT</span>
      </div>
      <p className="font-geist text-white font-extrabold">JavaScript Fundamentals to Advanced</p>
      <div className="flex gap-4 items-center">
        <span className="text-[#FFD600] font-[Geist-Mono] font-semibold text-sm">Beginner to Intermediate</span>
        <span className="text-[#00E5FF] font-[Geist-Mono] font-semibold text-sm">12 Weeks</span>
        <span className="text-[#00E676] font-[Geist-Mono] font-semibold text-sm">350+ Students Graduated</span>
      </div>
      <div className="flex items-center gap-3">
        <img src="tutor.jpg" alt="Instructor" className="w-9 h-9 object-cover rounded-[18px] shadow-2xl"/>
        <div className="flex flex-col gap-0.5">
            <span className="text-white font-geist text-sm font-semibold">Otito Okoye</span>
            <span className="text-[#94A3B8] font-[Geist-Mono] txt-sm">Senior JavaScript Instructor</span>
        </div>
      </div>
    </section>
  );
}
