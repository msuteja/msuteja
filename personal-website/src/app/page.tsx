import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import ProjectGrid from "@/components/project-grid";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#171717]">
      <Navbar />
      <Hero />
      <About />
      <ProjectGrid />
      <Experience />
      <Footer />
    </main>
  );
}