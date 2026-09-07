import NavBar from "../../Components/Navbar";
import PaymentFailCard from "../../Components/PaymentFailCard";
import MiniFooter from "../../Utilities/MiniFooter";

export default function PaymentFailUi() {
  return (
    <section className="bg-[#0B0F19] flex-col w-full">
      <NavBar />
      <PaymentFailCard />
      <MiniFooter />
    </section>
  );
}
