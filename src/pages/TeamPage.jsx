import TeamMemberSection from "../components/TeamMemberSection";
import TeamHero from "../components/TeamHero";
import Trial from "../components/Trial";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function TeamPage() {
  return (
    <div>
      <Header />
      <TeamHero />
      <TeamMemberSection />
      <Trial />
      <Footer bgColor={true} />
    </div>
  );
}
