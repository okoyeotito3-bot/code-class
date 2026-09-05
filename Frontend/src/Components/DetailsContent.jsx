import { ChevronDown, CheckCircle, MinusCircle } from "lucide-react";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";
import Button from "../Utilities/Button";

export default function DetailsContent() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getModules() {
    try {
      const { data, error } = await supabase.from("modules").select("*");

      if (error) {
        throw error;
      }
      setModules(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getModules();
  }, []);

  const modulesData = modules.map((module) => {
    return (
      <details key={module.id} className="group flex flex-col gap-2">
        <summary className="text-white font-geist text-sm font-bold list-none flex gap-4 items-center [&::-webkit-details-marker]:hidden cursor-pointer">
          <span> {module.topic}</span>
          <ChevronDown className="group-open:hidden text-[#2979FF]" />
          <MinusCircle className="hidden group-open:block text-[#2979FF]" />
        </summary>
        <p className="text-[#94A3B8] font-geist text-sm">{module.subtopic}</p>
      </details>
    );
  });

  return (
    <section className="w-full px-20 pt-16 pb-30 gap-8 flex flex-col md:flex-row lg:flex-row">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-[#2979FF] font-bold font-[Geist-Mono] text-sm">
            COURSE OVERVIEW
          </span>
          <span className="text-[#94A3B8] font-geist text-sm">
            This cohort course takes you deep into the heart of vanilla
            JavaScript. Rather than just learning syntax APIs, you'll dissect
            closures, execution scopes, event loops, and asynchronous runtime
            rules. To prove mastery, you'll complete assessments directly
            compiled on CodePen workspaces and reviewed under strict FAANG
            quality-standards.
          </span>
        </div>

        <div className="flex flex-col gap-5 md:p-8 lg:p-8">
          <p className="text-white font-geist font-bold text-sm">
            What You Will Master
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block" />
              <span className="text-[#94A3B8] font-gesit text-sm">
                Execution Context, Call Stack Mechanics, and Event Loop cycles.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block" />
              <span className="text-[#94A3B8] font-gesit text-sm">
                Asynchronous patterns: raw Promises, native Async/Await
                operations, and custom microtask schedulers.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block" />
              <span className="text-[#94A3B8] font-gesit text-sm">
                Memory architecture: garbage collection routines, heap
                mechanics, and debugging severe leak states.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block" />
              <span className="text-[#94A3B8] font-gesit text-sm">
                Vite pipeline structures and modern bundling strategies.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#2979FF] font-bold text-sm font-[Geist-Mono]">
            12-MODULE CURRICULUM
          </p>
          <div className="flex flex-col gap-2">{modulesData}</div>
        </div>
        <div className="flex flex-col gap-3 ">
          <span className="text-white font-geist text-sm font-bold">
            Prerequisites
          </span>
          <span className="text-[#94A3B8] font-geist text-sm">
            This program requires basic computer literacy, a modern web browser,
            and an enthusiastic mindset. We walk through environment
            configurations from scratch.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 p-8 bg-[#161B26] rounded-md">
          <div className="flex flex-col gap-1">
            <span className="text-[#64748B] font-geist text-sm font-semibold">
              TUITION COST
            </span>
            <p className="text-[#00E676] font-[Geist-Mono]">
              $299 /<span className="text-[#94A3B8]"> total</span>
            </p>
          </div>
          <Button
            text="Enroll in Cohort"
            className="bg-[#2979FF] font-semibold text-sm font-geist py-3.5 rounded-md text-white cursor-pointer"
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                12 Weeks of Expert Coaching
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                24 Interactive Live Lectures
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                8 Custom Checked Assessments
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                Verifiable Cryptographic Certificate
              </span>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-[#2979FF]" />{" "}
              <span className="text-[#94A3B8] text-sm font-geist">
                24/7 Interactive Mentor Support
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-[#161B26] p-6 rounded-md">
          <p className="text-[#2979FF] font-semibold text-sm font[Geist-Mono]">
            Instructor Spotlight
          </p>
          <div className="flex gap-3">
            <img
              src="tutor.jpg"
              alt="instructor"
              className="w-12 h-12 object-cover rounded-3xl"
            />
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-sm font-geist">
                Otito Okoye
              </span>
              <span className="text-[#94A3B8] font-[Geist-Mono] text-sm">
                Lead Instructor
              </span>
            </div>
          </div>
          <p className="text-[#94A3B8] font-geist text-sm">
            Otito designed internal browser mechanics at Google. She specializes
            in training developers for performant, high-scale application
            workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
