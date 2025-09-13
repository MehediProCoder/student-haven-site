import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Departments />
      <News />
      <Footer />
    </div>
  );
};

export default Index;