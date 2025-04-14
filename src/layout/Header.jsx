import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <header>
      <div>
        <Navbar />
        <MobileNavbar />
      </div>
    </header>
  );
}
