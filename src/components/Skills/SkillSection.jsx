import Card from "../../app/test/Card";

function SkillSection({ title, skills }) {
  // Changed the prop name here
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center">{title}</h1>
      <div className="flex flex-wrap  justify-center">
        {skills.map((card, index) => (
          <div className="m-4 md:m-2" key={index}>
            <Card
              borderColor={card.borderColor}
              gradientColors={card.gradientColors}
              textColor={card.textColor}
              shadowColor={card.shadowColor}
              imageURL={card.imageURL}
              content={card.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
