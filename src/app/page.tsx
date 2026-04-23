import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Footer />
    </main>
  );
}
