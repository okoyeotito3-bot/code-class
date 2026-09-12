import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import Button from "../../Utilities/Button";
import { Bell, Check, MessageSquare, UserRound } from "lucide-react";

export default function StudentBord({ className }) {
  const [userName, setUserName] = useState("");
  const date = new Date();
  const todayDate = date.toLocaleString();
  let UserImage = "";
  const courseProgressCompeted = "47%";
  const enrolledCourse = "JavaScript Fundamentals";
  const CurrentTopic = "Module 4: Async Programming";
  const nextLiveClass = "12/05/2027";
  const nextTopic = "DOM Manipulation Deep Dive";
  const nextTopicDate = "Wed, Jan 15 at 7:00 PM EST ";
  async function getUserData() {
    const { data, error } = await supabase.auth.getUser();

    console.log(data.user.user_metadata.full_name);

    if (!error) {
      setUserName(data.user.user_metadata.full_name);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <section className={`flex-col p-2 w-full gap-8 ${className}`}>
      <header className="w-full pb-8 flex flex-col gap-4 justify-between md:flex-row lg:flex-row">
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-['geist'] font-extrabold text-lg">
            Welcome back,{userName || "User"}{" "}
          </h1>
          <span className="text-[#94A3B8] font-['geist'] text-sm">
            {todayDate}
          </span>
        </div>
        <div className="flex sm: gap-8">
          <Bell className="text-[#94A3B8]" size={20} />
          <div className="">
            {UserImage ? (
              <img src="" alt="" />
            ) : (
              <UserRound size={20} className="text-[#94A3B8]" />
            )}
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-6 md:flex-row lg:flex-row">
        <div className="w-full flex flex-col p-6 gap-5 bg-[#161B26] rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-white font-bold font-['geist'] text-lg">
              Course Progress
            </p>
            <span className="text-[#00E676] font-['Geist-Mono'] text-sm">
              {courseProgressCompeted} COMPLETED
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-['geist'] text-white font-bold text-lg">
              {enrolledCourse}
            </span>
            <span className="text-[#2979FF] font-['geist'] text-sm">
              Current Topic: {CurrentTopic}
            </span>
          </div>
          <div className="h-2 w-full bg-[#0B0F19] rounded-xs">
            <div
              className="h-full bg-[#2979FF] rounded-xs"
              style={{ width: courseProgressCompeted }}
            ></div>
          </div>
        </div>

        <div className="w-full bg-[#161B26] p-6 rounded-md flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-sm text-white font-['geist'] font-bold">
              Next Live Class
            </p>
            <p className="text-[#FF4081] font-['Geist-Mono'] font-semibold text-sm">
              {nextLiveClass}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-white font-['geist'] font-bold text-base">
              {nextTopic}
            </span>
            <span className="text-[#94A3B8] font-['geist'] text-sm">
              {nextTopicDate}
            </span>
          </div>

          <Button
            text="Join Google Meet"
            className='bg-[#2979FF] rounded-md text-center py-2.5 text-white text-sm font-["geist"] font-bold cursor-pointer'
          />
        </div>
      </section>

      <section className="flex flex-col gap-6 md:flex-row lg:flex-row">
        <div className="flex flex-col gap-5 p-6 bg-[#161B26] rounded-md w-full">
          <p className="text-white font-['geist'] font-bold text-base">
            Assessments Status
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-0.5">
              <p className="text-white text-sm font['geist'] font-semibold">
                Assessment 3: Functions & Scope
              </p>
              <p className="text-[#94A3B8] text-sm font-['gist']">
                Due in 3 days
              </p>
            </div>
            <p className="text-[#FF4081] font-semibold font-['geist'] text-sm">
              Pending
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-0.5">
              <p className="text-white text-sm font['geist'] font-semibold">
                Assessment 2: Data Structures
              </p>
              <p className="text-[#94A3B8] text-sm font-['gist']">
                Graded on Jan 12
              </p>
            </div>
            <p className="text-[#00E676] font-['Geist-Mono'] text-sm">92/100</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 p-6 bg-[#161B26] rounded-md">
          <p className="text-white font-bold text-base font-['geist']">
            Recent Activity
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MessageSquare size={20} className="text-[#2979FF]" />
              <div className="flex flex-col gap-0.5">
                <span className="font-['geist'] text-sm text-white">
                  Feedback received for Assessment 2
                </span>
                <span className="text-[#64748B] text-sm font-['geist']">
                  2 hours ago • Otito Okoye
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Check size={20} className="text-[#00E676]" />
              <div className="flex flex-col gap-0.5">
                <span className="font-['geist'] text-sm text-white">
                  Completed lesson Asynchronous Execution
                </span>
                <span className="text-[#64748B] text-sm font-['geist']">
                  Yesterday
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
