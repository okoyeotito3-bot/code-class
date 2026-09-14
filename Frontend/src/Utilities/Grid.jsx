

export default function Card({
  course,
  coursePubHeader,
 courseOverView,
  price,
   learningDuration,
  courseButton,
}) {
  return (
    <div className="flex flex-col shadow-lg rounded-md overflow-hidden">
      <div className="bg-[#1F2638] flex flex-col p-5 gap-4">
        <div className="flex justify-between">
          <span className="text-[#FFD600] font-[Geist-Mono] text-sm font-semibold">
            {course}
          </span>
          <span className="text-[#94A3B8] text-sm font-[Geist-Mono]">
          { learningDuration}
          </span>
        </div>
        <p className="font-gesit font-extrabold text-lg text-white">{coursePubHeader}</p>
      </div>
      <div className="flex flex-col gap-5 p-6 opacity-90 bg-[#1F2638]">
        <p className="text-[#94A3B8] font-geist] text-sm">{courseOverView}</p>
        <p className="flex gap-2 items-end">
          <span className="text-[#64748B] font-[Geist-Mono] text-sm">
            level:
          </span>
          <span className="text-[#00E5FF]">Begginer to Advance</span>
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#64748B] font-geist text-sm font-semibold">
              Tuition
            </span>
            <span className="text-[#00E676] font-[Geist-Mono] font-bold text-sm">
              NGN: {price}
            </span>
          </div>
          <div>{courseButton}</div>
        </div>
      </div>
    </div>
  );
}
