import PlantCards from "../../components/cartochki";
import Dashboard from "../../components/dashboard";
import Header from "../../components/header";
import Hero from "../../components/hero";
import SectionFooter from "../../components/sectionFooter";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <Hero />
      <Dashboard />
      <PlantCards />
      <SectionFooter />
    </div>
  );
};

export default Home;
