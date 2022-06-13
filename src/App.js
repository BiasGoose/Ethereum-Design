import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatIsEthereum from "./components/WhatIsEthereum";
import Contracts from "./components/Contracts";
import Beginners from "./components/Beginners";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Exchanges from "./components/Exchanges";

function App() {
  return (
    <div className="dark:bg-white">
      <Navbar />
      <Hero />
      <Exchanges />
      <WhatIsEthereum />
      <Contracts />
      <Beginners />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
