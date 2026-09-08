import NavBar from '../../Components/Navbar'
import PaymentSuccesCard from '../../Components/PaymentComponents/Payment-SuccessCard'
import MiniFooter from '../../Utilities/MiniFooter'
export default function PaystackSuccesful(){
    return(
        <section className='bg-[#0B0F19] w-screen '>
      <NavBar/>
     <PaymentSuccesCard/>
     <MiniFooter/>
    </section>
    )
    
}