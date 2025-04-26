import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutVideo from "../components/AboutVideo";
import AboutTeam from "../components/AboutTeam";
import Clients from "../components/Clients";
import AboutMeet from "../components/AboutMeet";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AboutWork from "../components/AboutWork";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutStats />
      <AboutVideo />
      <AboutTeam />
      <AboutMeet />
      <Clients />
      <AboutWork />
      <Footer />
    </div>
  );
}
