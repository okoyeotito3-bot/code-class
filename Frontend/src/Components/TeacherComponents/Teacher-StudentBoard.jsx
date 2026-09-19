import { AlertCircle, UserRound } from "lucide-react";
import Header from "./Header"
import { useState } from "react";
import {students} from '../../mockup'


export default function TeacherStudentBoard(){
   const [activeStudent, setActiveStudent] = useState(null)
   const [studentDirectory,setStudentDirectory]=useState(students)
   const [warnMessage,setWarnMessage]=useState(false)

function searchDirectory(formData) {
    const studentName = formData.get('searchInput').trim().toLowerCase();

    if (!studentName) {
        setStudentDirectory(students);
        setWarnMessage(false);
        return;
    }

    const filterName = students.filter(sn =>
        sn.name.toLowerCase().includes(studentName)
    );

    if (filterName.length === 0) {
        setWarnMessage(true);
        setStudentDirectory(students);
        return;
    }

    setStudentDirectory(filterName);
    setWarnMessage(false);
}
    return(
       <section className="w-full flex flex-col gap-8 p-10">
        <Header text='Students Directory' subText='Manage your cohort progress, grades, and direct communications'/>
        <section className="flex flex-col md:flex-row justify-between gap-4">
            <form action={searchDirectory} className="flex flex-col  gap-4">
              <label>
                  <input type="text" name='searchInput' placeholder="Search students..." className="bg-[#161B26] px-4 py-2 rounded-md text-[#64748B] font-['geist'] text-sm"/>
                  <button className="md:hidden bg-[#161B26] px-6 text-center py-3 rounded-md cursor-pointer text-[#94A3B8] font-['geist'] text-sm font-semibold">Search</button>
              </label>
                <select name="" id="" className="bg-[#161B26] rounded-md text-[#94A3B8] font-['geist'] text-sm p-4">
                  <option value="">Status: All</option>
            </select>
           {
            warnMessage &&(
              <div className="flex gap-2 items-center bg-red-500/10 p-2 rounded-sm">
                  <AlertCircle size={20} className="text-red-600"/>
                <p className="p-2 rounded-sm text-red-600 font-['geist'] text-sm">Search Did not return any student</p>
              </div>

            )
           }
            </form>
            <div className="flex flex-col items-start gap-3 md:flex-row">
                <button className="bg-[#161B26] px-6 text-center py-3 rounded-md cursor-pointer text-[#94A3B8] font-['geist'] text-sm font-semibold">Send Announcement</button>
                <button  className="bg-[#2979FF] px-6 text-center py-3 rounded-md cursor-pointer text-white font-['geist'] text-sm font-semibold">Export Grades (CSV)</button>
            </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6">
            
      <div className="w-full max-h-112.5 overflow-x-auto overflow-y-auto flex-2">
         <table className="w-full min-w-225 rounded-sm">
    <thead className="bg-[#1F2638]">
        <tr>
            <th className="px-6 py-4 text-left text-[#94A3B8] font-['Geist-Mono'] text-sm font-bold">
                STUDENT
            </th>

            <th className="px-6 py-4 text-left text-[#94A3B8] font-['Geist-Mono'] text-sm font-bold">
                PROGRESS
            </th>

            <th className="px-6 py-4 text-left text-[#94A3B8] font-['Geist-Mono'] text-sm font-bold">
                MODULE
            </th>

            <th className="px-6 py-4 text-left text-[#94A3B8] font-['Geist-Mono'] text-sm font-bold">
                AVG GRADE
            </th>

            <th className="px-6 py-4 text-left text-[#94A3B8] font-['Geist-Mono'] text-sm font-bold">
                LAST ACTIVE
            </th>
        </tr>
    </thead>

    <tbody>
        {studentDirectory.map(s => (
            <tr key={s.email} className="bg-[#2979FF]/10 cursor-pointer" onClick={()=> setActiveStudent(s)}>
                
                <td className="px-6 py-4">
                    <div className="flex gap-2 items-center">
                    <div>
                       {
                       s.image=== 'test.jpg'?
                       <UserRound/>:
                      <img src={s.image} alt={s.name} className="w-7 h-7 rounded-full object-cover"/>

                      }
                     </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-white font-semibold">
                                {s.name}
                            </span>

                            <span className="text-[#64748B] text-sm">
                                {s.email}
                            </span>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4">
                   <div className="flex flex-col gap-2">
                     <p className="text-white text-sm">
                        {s.rate}%
                    </p>

                    <div className="w-full h-2 rounded-sm bg-[#ccc]">
                        <div
                            className="bg-[#2979FF] h-full rounded-sm"
                            style={{ width: `${s.rate}%` }}
                        />
                    </div> 
                   </div>
                </td>

                <td className="px-6 py-4 text-white font-['geist'] text-sm">
                    Module: {s.module}
                </td>

                <td className="px-6 py-4 text-[#00E676] font-['geist-mono'] font-bold">
                    {s.avgGrade}/100
                </td>

                <td className="px-6 py-4 text-[#94A3B8] font-['geist']">
                    {s.lastActive}
                </td>

              

            </tr>
        ))}
    </tbody>
       </table>
      </div>
      <div className="bg-[#161B26] rounded-md flex flex-col p-6 gap-6 flex-1">
        {
         activeStudent ? (
           <>
           <div className="flex gap-3 items-center">
             <div>
                {
                    activeStudent.image=== 'test.jpg'?
                    <UserRound/>:
                   <img src={activeStudent.image} alt={activeStudent.name} className="w-7 h-7 rounded-full object-cover"/>

                }
             </div>
            <div className="flex flex-col gap-2">
                <span className="text-white font-['geist'] text-base">{activeStudent.name}</span>
                <span className="text-[#94A3B8] font-['geist'] text-sm">Module:{activeStudent.module}</span>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-[#94A3B8] font-bold font-['geist-mono'] text-sm">ASSESSMENT SCORES</p>
            {
             activeStudent.assesmentScore.map(s=>{
                return(
                    <div className="flex justify-between">
                        <span className="text-white font-['geist'] text-sm">{s.topic}</span> 
                        <span className="text-sm font-bold" style={{color:`${s.score > 50 ? '#00E676' :'red'}`}}>{s.score}/100</span>
                    </div>
                )
             }) 
            }

        </div>
           <div className="flex flex-col gap-3">
            <p className="text-[#94A3B8] font-bold font-['geist'] text-sm">ATTENDANCE SUMMARY</p>
            <div className="flex gap-2">
                <span className="bg-[#00E676]/10 px-2 py-1 rounded-sm text-sm font-['geist']" style={{color:`${activeStudent.attendance < 5 ? 'red' :'#00E676'}`}}>Present:{activeStudent.attendance}/8</span>
                <span className="bg-[#2979FF]/10 px-2 py-1 text-sm font-['geist'] rounded-sm" style={{color:`${activeStudent.attendance < 5 ? 'red' :'#00E676'}`}}>Absent:{8-activeStudent.attendance}/8</span>
            </div>
           </div>
            <form action="" className="flex flex-col gap-2">
                <textarea name="" id="" placeholder={`Message ${activeStudent.name}`} className="bg-[#161B26] px-4 py-2 rounded-md text-[#64748B] font-['geist'] text-sm"></textarea>
                 <button  className="bg-[#2979FF] px-6 text-center py-3 rounded-md cursor-pointer text-white font-['geist'] text-sm font-semibold">Message {(activeStudent.name)}</button>
            </form>
           </>
        
         ) :(
          <p className="px-6 py-4 text-left text-[#94A3B8] font-['Geist-Mono'] text-sm font-bold">Select a student to view they information</p>

         )
        }
      </div>
        </section>
       </section>
    )
}