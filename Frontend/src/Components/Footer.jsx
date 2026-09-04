import UnorderedList from "../Utilities/UnorderedList";

export default function Footer() {
  return (
    <section className="w-full flex flex-col gap-2 p-6 md:gap-16 lg:gap-16 md:px-20 md:pb-12 lg:px-20 lg:pb-12">
      <header className="grid gap-4 md:grid-cols-5  lg:grid-cols-5 ">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-4 mr-8">
          <img src="brand.png" alt="brand logo" className="self-start" />
          <p className="text-[#94A3B8] font-geist text-sm">
            Premium online programming learning platform focused on practical
            coding through live classes and real assessments.
          </p>
        </div>

        <div>
          <h6 className="text-[#F8FAFC] font-bold font-[Geist-Mono] text-lg">
            Platform
          </h6>
          <UnorderedList list1="Courses" list2="Pricing" list3="How It Works" />
        </div>

        <div>
          <h6 className="text-[#F8FAFC] font-bold font-[Geist-Mono] text-lg">
            Resources
          </h6>
          <UnorderedList list1="Blog" list2="Documentation" list3="FAQ" />
        </div>

        <div>
          <h6 className="text-[#F8FAFC] font-bold font-[Geist-Mono] text-lg">
            Company
          </h6>
          <UnorderedList list1="About" list2="Careers" list3="Contact" />
        </div>

        <div>
          <h6 className="text-[#F8FAFC] font-bold font-[Geist-Mono] text-lg">
            Legal
          </h6>
          <UnorderedList list1="Privacy" list2="Terms" />
        </div>
      </header>

      <h6 className="text-[#64748B] font-geist text-sm">
        © 2026 CodeClass, Inc. All rights reserved.
      </h6>
    </section>
  );
}
