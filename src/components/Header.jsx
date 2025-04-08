import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

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
