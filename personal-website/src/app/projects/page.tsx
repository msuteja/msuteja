import ProjectGrid from "@/components/project-grid";

export default function ProjectsPage() {
  return (
    <main className="page-shell page-section">
      <div className="mb-6">
        <h1 className="section-label">Projects</h1>
      </div>

      <ProjectGrid />
    </main>
  );
}