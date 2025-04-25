import ContactUsContainer from "../components/ContactUsContainer";
import GetSupportContainer from "../components/GetSupportContainer";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <ContactUsContainer />
      <GetSupportContainer />
      <Footer bgColor={true} />
    </div>
  );
}
