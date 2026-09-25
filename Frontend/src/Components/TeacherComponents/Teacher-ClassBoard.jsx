import Header from "./Header";
import { javascriptTopics } from "../../mockup";
import { useState } from "react";
export default function TeacherClassBoard() {
  const [nextClass, setNexClass] = useState(null);
  function handleNextClass(FormData) {
   if(FormData.get("nextTopic")===''||
    FormData.get("nextClassDate")===''||
     FormData.get("nextClassTime")===''||
     FormData.get("nextClassDescription")===''
){
  alert('please fill all field')
  return
   }
    setNexClass({
      topic: FormData.get("nextTopic"),
      classDate:FormData.get("nextClassDate"),
      time: FormData.get("nextClassTime"),
      link: FormData.get("goggleMeetLink"),
      description: FormData.get("nextClassDescription"),
    });
  }

  return (
    <section className="flex flex-col gap-8 p-10 w-full">
      <Header
        text="Class Scheduling & Meet Hub"
        subText="Live video integrations and asynchronous classroom records"
      />
      <section className="flex flex-col gap-6 md:flex-row">
        <form
          action={handleNextClass}
          className="flex flex-col gap-5 p-6 bg-[#161B26] rounded-md"
        >
          <p className="text-white font-['geist'] text-base font-bold">
            Schedule New Class Session
          </p>
          <div className="flex flex-col gap-6">
            <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">
              SESSION TOPIC TITLE
            </p>
            <select
              name="nextTopic"
              id=""
              className="bg-[#0B0F19] border rounded-md p-3 text-center text-white font-['geist'] text-sm"
            >
              {javascriptTopics.map((topic) => {
                return <option key={topic}>{topic}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">
                DATE
              </p>
              <div className="p-3 bg-[#0B0F19] rounded-md">
                <input
                  name="nextClassDate"
                  type="date"
                  className="text-[#F8FAFC] font-['geist'] text-sm cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[#94A3B8] font-['geist'] font-bold text-sm">
                START TIME
              </p>
              <div className="p-3 bg-[#0B0F19] rounded-md">
                <input
                  name="nextClassTime"
                  type="time"
                  className="text-[#F8FAFC] font-['geist'] text-sm cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-[#94A3B8] font-bold text-sm">
              GOOGLE MEET VIDEO LINK
            </p>

            <input
              type="text"
              name="goggleMeetLink"
              placeholder="meet.google.com/abc-defg-hij"
              className="border border-[#0B0F19] p-2 rounded-sm bg-[#0B0F19] text-[#00E676] font-['geist-mono'] text-sm"
            />

            <p className="text-[#94A3B8] font-['geist'] text-sms">
              CLASS DESCRIPTION
            </p>
            <textarea
              name="nextClassDescription "
              id=""
              className="text-[#94A3B8] font-['geist'] text-sm w-full bg-[#0B0F19] p-3 rounded-sm"
            ></textarea>
            <button className="bg-[#2979FF] px-6 py-3 rounded-md text-[#F8FAFC] font-semibold font-['geist'] mt-4 cursor-pointer">
              Schedule Live Lecture Session
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          {nextClass !== null && (
            <div className="flex flex-col gap-5 p-6 bg-[#161B26] rounded-md">
              <p className="text-white text-base font-['geist']">
                Upcoming Live Sessions ({nextClass.classDate})
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-between p-4 bg-[#21293d]">
                <p className="bg-[#FF4081]/10 w-9 h-9 p-2  rounded-full text-[#FF4081] font-['geist-mono'] font-bold">
                  15
                </p>

                <p className="text-base font-['geist'] font-bold text-white">
                  {nextClass.topic}
                </p>
                <a
                  target="_blank"
                  href={nextClass.link}
                  className="w-full text-[#2979FF] text-center cursor-pointer border  font-['geist'] font-semibold px-3 py-1.5 rounded-md whitespace-nowrap"
                >
                  Join Class
                </a>

                <button className="w-full text-[#FF4081]  cursor-pointer border  font-['geist'] font-semibold px-3 py-1.5 rounded-md">
                  Cancel Class
                </button>
               
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
