import SkillSection from "../../components/Skills/SkillSection";
import skills from "../../components/Skills/skillCardData";
function Page() {
  return (
    <div className="bg-black h-fit md:h-screen w-full p-12">
      <div className="flex flex-col justify-center items-center space-y-6 mx-auto md:max-w-3xl ">
        <SkillSection title="Web Development" skills={skills.webDev} />
        <SkillSection
          title="Blockchain Development"
          skills={skills.blockChainDev}
        />
      </div>
    </div>
  );
}

export default Page;
