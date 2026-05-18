import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import ExperiencePreview from "@/components/experience-preview";
import EducationPreview from "@/components/education-preview";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <ExperiencePreview />
      <EducationPreview />
      <Footer />
    </main>
  );
}