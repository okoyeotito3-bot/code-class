import NavBar from "../../Components/Navbar";
import CheckOutContent from "../../Components/CheckOutContent";
import Footer from '../../Components/Footer'
export default function PaymentCheckout() {
  return (
    <section className="w-screen bg-[#0B0F19]">  
      <NavBar />
      <CheckOutContent/>
      <Footer/>
    </section>
  );
}
