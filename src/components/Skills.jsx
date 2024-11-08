import { techStack } from "../utilities/TechStack";

const Skills = () => {
  return (
    <section
      id="skills-section"
      className="text-lightMint bg-darkTeal justify-center pt-10 px-4 h-auto md:min-h-[100dvh] flex items-center"
    >
      <div className="max-w-7xl flex flex-col justify-center mx-auto item">
        <h1 className="text-3xl text-deepBlue font-bold lg:text-5xl mb-6 lg:mb-10">
          Skills
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex bg-transparent justify-center items-center w-full">
            <img
              src="/src/assets/vector.png"
              alt="Hero illustration representing a developer"
            />
          </div>
          <div className="flex gap-6 mb-6 flex-wrap justify-center lg:justify-normal md:w-2/3">
            {techStack.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center flex-col p-5 w-28 rounded-lg gap-3"
                >
                  {item.icons}
                  <h1 className="font-semibold">{item.tech}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
