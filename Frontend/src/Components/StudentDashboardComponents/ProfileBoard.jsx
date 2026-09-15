import { UserRound, ToggleLeft, ToggleRight } from "lucide-react";
import BoardHeader from "./studentDashBoardHeader";
import { useState } from 'react';


export default function ProfileBoard({ className }) {
    const [notifications, setNotifications] = useState( [
        {id:1,on:false, message:'Weekly Class reminders'},
        {id:2,on:false,message:'Direct grading alerts'},
        {id:3,on :false,message:'Instructor live Q&amp;A pings'}]);

  const userphoto = "";
 function handleUserDecision(id){
    setNotifications(prev=> prev.map( item =>
      item.id===id ? {...item, on:!item.on}:item
    ))

 }
  return (
    <section className={`flex flex-col w-full gap-8 p-10  ${className}`}>
      <BoardHeader
        text="Account Settings"
        subtext="Configure personal metrics, notifications, and profile details."
      />
      <section className="flex flex-col md:flex-row lg:flex-row gap-8">
        <div className="flex flex-col gap-6 flex-2">
          <div className="flex gap-6 items-center">
            <div>
              {userphoto ? (
                <img
                  src={userphoto}
                  alt="Student Image"
                  className="h-12 w-12 object-cover rounded-full"
                />
              ) : (
                <UserRound />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="bg-[#242E42] px-4 py-2 rounded-md text-center text-white font-['geist'] text-sm font-semibold cursor-pointer">
                Upload New Picture
              </span>
              <span className="text-[#64748B] font-['geist'] text-sm">
                JPG or PNG. Max file size 2MB.
              </span>
            </div>
          </div>
          <form action="" className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-white font-['geist'] text-sm font-semibold">
                Full Name
              </span>
              <input
                type="text"
                className="w-full h-11 p-2 text-[#94A3B8] font-['geist'] text-sm border rounded-md"
                placeholder="John Doe"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-white font-['geist'] text-sm font-semibold">
                Email Address
              </span>
              <input
                type="email"
                className="w-full h-11 p-2 text-[#94A3B8] font-['geist'] text-sm border rounded-md"
                placeholder="john.doe@gmail.com"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-white font-['geist'] text-sm font-semibold">
                GitHub Profile URL
              </span>
              <input
                type="text"
                className="w-full h-11 p-2 text-[#94A3B8] font-['geist'] text-sm border rounded-md"
                placeholder="https://github.com/john-doe"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-white font-['geist'] text-sm font-semibold">
                Password
              </span>
              <input
                type="password"
                className="w-full h-11 p-2 text-[#94A3B8] font-['geist'] text-sm border rounded-md"
              />
            </label>
            <button className="bg-[#2979FF] px-6 py-3 rounded-md text-center text-white text-sm font-['geist'] cursor-pointer hover:bg-[#2979FF]/90 transition bg">
              Save Changes
            </button>
          </form>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col bg-[#161B26] gap-5 rounded-md p-6">
            <p className="text-[#64748B] font-bold text-sm font-['Geist-Mono']">NOTIFICATIONS</p>

            {
            notifications.map((n)=>{
                return(
                   <div key={n.id} className="flex justify-between"> 
                    <p className="text-white font-['geist'] text-sm">{n.message}</p>
                      <button
                      type="button"
                      role="switch"
                      aria-checked={n.on}
                     onClick={() => handleUserDecision(n.id)}
                    className={`relative w-10 h-5 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
                  n.on ? "bg-[#2979FF]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`block w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    n.on ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
                   </div>

                )
             })

            }
          </div>
          <div className="flex flex-col rounded-md gap-4 p-6 bg-[#161B26]">
            <p className="text-[#EF4444] font-bold font-['Geist-Mono'] text-sm">DANGER ZONE</p>
            <p className="text-[#94A3B8] font-['geist'] text-sm">Deleting your profile will immediately invalidate all verified cryptographic credentials and LinkedIn certificates.</p>
            <button className="bg-[#EF4444]/10 px-4 py-2 rounded-md text-center cursor-pointer text-[#EF4444] font-['geist'] font-bold text-sm">Delete Profile & Exit Cohort</button>
          </div>
        </div>
      </section>
    </section>
  );
}
