import Services from "../Services";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import It from "../It";
import Career from "../Career";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <It/>
      <Career/>
      <ContactMe />
      <Footer />
    </>
  );
}
