import HeroSection from "../HeroSection.js";
import Main from "../Main/Main.js"
import Heighlights from "../Main/Heighlights.js";
import Testomonials from "../Main/Testomonials.js";
import About from "../Main/About.js";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Main>
        <Heighlights />
        <Testomonials />
        <About />
      </Main>
    </>
  )
}

export default HomePage;