import BoardHeader from './studentDashBoardHeader'
import {studentAssessment} from '../../mockup'
import { AlertTriangle, Check } from 'lucide-react'
export default function AssesmentBoard({className}){
 const assesment = studentAssessment.find(as=>as.id===1)

    return(
        <section className={`h-full flex-col p-10 gap-8 w-full ${className}`}>
          <BoardHeader text={`Assessment ${assesment.id}: ${assesment.topic}`} subtext={`Module ${assesment.id} Live Practice Assignment`}/>
          <section className='flex flex-col gap-8 md:flex-row lg:flex-row'>
            <div className='w-full flex flex-col gap-6'>
                <div className='bg-[#FF4081]/10 flex p-5 rounded-md gap-3 items-end'>
                    <AlertTriangle className='text-[#FF4081]'/>
                    <p className='text-white font-["geist"]text-sms'>{assesment.submissionDeadline}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-["geist" font-bold text-lg'>Requirements</p>
                    {
                       assesment.requirements.map(asses=>{
                        return(
                      <div className='flex gap-2.5'> 
                        <Check className='text-[#2979FF]'/>
                        <p className='text-[#94A3B8] font-["geist"] text-sm'>{asses}</p>
                     </div>
                        )
                       }) 
                    }
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-semibold text-white font-["geist"] text-sm'>CodePen Asset Link</p>
                    <form className='flex bg-[#161B26 items-center'>
                        <input type="text" placeholder='https://codepen.io/alex-student/pen/XWMyYv' className='p-4 outline-1 text-[#94A3B8] font-["Geist-Mono"] text-sm border-none'/>
                        <button className='bg-[#2979FF] p-4 text-white'>Verify & Submit</button>
                    </form>
                </div>
            </div>
            <div className='bg-[#161B26] flex flex-col gap-5 p-6 rounded-mds'>
                <p className='text-[#161B26] font-["Geist-Mono"] font-bold text-sm'>GRADING RUBRICS</p>
                {
                 assesment.gradingRubrics.map(gr=> <p className='text-white font-["geist"] text-sm'>{gr}</p>

                 )
                }
            </div>
          </section>
        </section>
    )
}