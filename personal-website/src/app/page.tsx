import Hero from "@/components/hero";
import AboutPreview from "@/components/about-preview";
import FeaturedProjects from "@/components/featured-projects";
import ExperiencePreview from "@/components/experience-preview";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ExperiencePreview />
      <Footer />
    </main>
  );
}