import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <ButtonGradient />
      {/* Header and Main Content */}
      <Header />
      <main className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefit />
        <Collaboration />
        <Pricing />
        <Services />
        <Roadmap />
        <Footer />
      </main>
    </>
  );
};

export default App;
