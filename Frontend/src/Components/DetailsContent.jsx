import { CheckCircle } from "lucide-react";
import {supabase} from '../supabase'
import { useEffect, useState } from "react";

export default function DeatialsContent() {
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

  return (
    <section className="w-full px-20 pt-16 pb-30 gap-8 flex md:flex-row lg:flex-row">
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
              <CheckCircle className="text-[#00E676] hidden md:block lg:block"/>
              <span className="text-[#94A3B8] font-gesit text-sm">
                Execution Context, Call Stack Mechanics, and Event Loop cycles.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block"/>
              <span className="text-[#94A3B8] font-gesit text-sm">
                Asynchronous patterns: raw Promises, native Async/Await
                operations, and custom microtask schedulers.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block"/>
              <span className="text-[#94A3B8] font-gesit text-sm">
                Memory architecture: garbage collection routines, heap
                mechanics, and debugging severe leak states.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle className="text-[#00E676] hidden md:block lg:block"/>
              <span className="text-[#94A3B8] font-gesit text-sm">
                Vite pipeline structures and modern bundling strategies.
              </span>
            </div>
          </div>

        </div>
        <div>
            <p>12-MODULE CURRICULUM</p>
        </div>
      </div>
      <div></div>
    </section>
  );
}
