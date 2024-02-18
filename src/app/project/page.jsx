import Button from "@/components/Button/GlowButton";
import Card from "@/components/Card/Card";
import projects from "@/components/Projects/ProjectData";
function ProjectPage() {
  return (
    <div id="Project" className="max-w-5xl mx-auto h-fit">
      <div className="flex justify-center items-center p-12">
        <h1 className="text-6xl">Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 font-sans max-w-5xl mx-auto">
        {/* Project Card */}
        {projects.map((project, index) => (
          <div className="max-w-sm mx-auto">
            <Card key={index} project={project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center p-8">
        <Button buttonText="Go Back" link="/" />
      </div>
    </div>
  );
}

export default ProjectPage;
