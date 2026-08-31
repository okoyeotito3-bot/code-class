import Input from '../Utilities/Input'
import Button from '../Utilities/Button'

export default function FinalCta({finalCtaFormAction}){
    return(
        <section className='flex flex-col gap-4 w-full items-center p-4 md:gap-[40px] lg:gap-[40px] md:py-[80px] md:px-[120px] lg:py-[80px] lg:px-[120px] '>
          <header className='w-full gap-4 flex flex-col items-center'>
            <p className='text-[#FF4081] font-semibold font-[geist-mono] text-sm'>GET STARTED TODAY</p>
            <p className='text-[#F8FAFC] font-extrabold text-lg font-geist'>Ready to Level Up Your Coding Skills?</p>
            <p className='text-[#94A3B8] font-geist text-sm'>Join thousands of developers launching elite software development careers.
                 Enroll in our upcoming live cohort.
            </p>
          </header >
          <form  action ={finalCtaFormAction} className='flex pt-4 pl-[6px]'>
            <label>
            <input
          type='text'
          placeholder='💬 bob@gmail.com...'
          className=' bg-[#64748B] p-2  '
          />
          </label>
          <Button
          text='Get Started'
          className='bg-[#2979FF] p-2  text-[#F8FAFC] hover:bg-[#1D64D8] cursor-pointer'
          />
          </form>
        </section>
    )
}