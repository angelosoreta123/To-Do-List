import { IoLogoFirebase } from "react-icons/io5";
import { frontEnd, otherTechStack } from "../utilities/TechStack";

const Skills = () => {
  return (
    <section className="text-white max-w-7xl mx-auto px-4 mt-14 lg:mt-24 text-center">
      <h1 className="text-3xl font-bold mb-4 lg:text-5xl lg:mb-6">
        Skills
      </h1>
      <h2 className="text-md font-semibold mb-6 lg:text-xl">Front-end</h2>
      <div className="flex justify-evenly gap-6 mb-6 flex-wrap">
        {frontEnd.map((item, index) => {
          return (
            <div
              key={index}
              className="border b-white flex items-center flex-col p-5 w-28 rounded-lg gap-3"
            >
              {item.icons}
              <h1 className="font-semibold">{item.tech}</h1>
            </div>
          );
        })}
      </div>
      <h2 className="text-md font-semibold mb-6 lg:text-xl">Back-end</h2>
      <div className="mb-4 flex justify-center">
        <div className="border b-white flex items-center flex-col p-5 w-28 rounded-lg gap-3">
          <IoLogoFirebase color="#FFCB2B" size={50} />
          <h1 className="font-semibold">Firebase</h1>
        </div>
      </div>
      <h2 className="text-md font-semibold mb-4 lg:text-xl">Others</h2>
      <div className="flex justify-evenly gap-6 mb-6 flex-wrap">
        {otherTechStack.map((item, index) => {
          return (
            <div
              key={index}
              className="border b-white flex items-center flex-col p-5 w-28 rounded-lg gap-3"
            >
              {item.icons}
              <h1 className="font-semibold">{item.tech}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
