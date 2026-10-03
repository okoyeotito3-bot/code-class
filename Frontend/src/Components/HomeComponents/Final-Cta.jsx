import { useNavigate } from "react-router-dom";

export default function FinalCta() {
  const navigate = useNavigate();

  function handleCtaEmail(formData) {
    const email = formData.get("finalCtaEmailInput");
    if(email){
      navigate(`/Register?email=${encodeURIComponent(email)}`)
    }else{
      navigate('/Register')
    }
   
  }

  return (
    <section className="w-full flex flex-col gap-4 p-4 md:gap-10 md:px-20 md:py-30">
      <header className="w-full gap-4 flex flex-col items-center">
        <p className="text-[#FF4081] font-semibold font-['Geist-Mono'] text-sm">
          GET STARTED TODAY
        </p>
        <p className="text-white font-extrabold text-lg font-['geist']">
          Ready to Level Up Your Coding Skills?
        </p>
        <p className="text-[#94A3B8] font-['geist'] text-sm">
          Join thousands of developers launching elite software development
          careers. Enroll in our upcoming live cohort.
        </p>
      </header>
      <form
        action={handleCtaEmail}
        className="flex md:self-center"
      >
        <input
          type="email"
          name="finalCtaEmailInput"
          placeholder="💬 bob@gmail.com..."
          className="bg-[#64748B] p-2 hidden md:inline"
        />

        <button
         className="bg-[#2979FF] p-2 text-white hover:bg-[#2979FF]/90 cursor-pointer w-full"
        >Get Started</button>
      </form>
    </section>
  );
}
