import Input from "../Utilities/Input";
import Button from "../Utilities/Button";

export default function FinalCta({ finalCtaFormAction }) {
  return (
    <section className="flex flex-col gap-4 w-full items-center p-4 md:gap-10 lg:gap-10 md:py-20 md:px-30 lg:py-20 lg:px-30">
      <header className="w-full gap-4 flex flex-col items-center">
        <p className="text-[#FF4081] font-semibold font-[geist-mono] text-sm">
          GET STARTED TODAY
        </p>
        <p className="text-[#F8FAFC] font-extrabold text-lg font-geist">
          Ready to Level Up Your Coding Skills?
        </p>
        <p className="text-[#94A3B8] font-geist text-sm">
          Join thousands of developers launching elite software development
          careers. Enroll in our upcoming live cohort.
        </p>
      </header>
      <form
        action={finalCtaFormAction}
        className="w-full flex items-center justify-center"
      >
        <Input
          type="email"
          placeholder="💬 bob@gmail.com..."
          className="bg-[#64748B] p-2"
        />

        <Button
          text="Get Started"
          className="bg-[#2979FF] p-2 text-white hover:bg-[#1D64D8] cursor-pointer"
        />
      </form>
    </section>
  );
}
