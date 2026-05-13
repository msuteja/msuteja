import ProjectsGallery from "@/components/projects-gallery";

export default function ProjectsPage() {
  return (
    <main className="page-shell page-section">
      <div className="mb-8">
        <h1 className="section-label">Projects</h1>
      </div>

      <ProjectsGallery />
    </main>
  );
}