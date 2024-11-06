import { projectList } from "../utilities/projectList";

const Projects = () => {
  return (
    <section className="text-white max-w-7xl mx-auto px-4 mt-14 lg:mt-24">
      <h1 className="text-3xl font-bold mb-6 lg:mb-10 lg:text-5xl text-center">
        Projects
      </h1>
      <div className="flex flex-row flex-wrap gap-6 justify-evenly">
        {projectList.map((project, index) => (
          <div key={index} className="border border-white md:w-5/12 rounded-lg">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-t-lg"
            />
            <div className="p-5">
              <div className="flex border-b border-b-white mb-2 items-center justify-between">
                <h2 className="text-xl font-bold mb-2 lg:text-2xl ">
                  {project.name}
                </h2>
                <a
                  href={project.openLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.openLink.icon}
                </a>
              </div>

              <p className="text-xs md:text-lg mb-4 sm:text-sm text-justify">
                {project.description}
              </p>
              <div className="flex flex-row justify-between items-center flex-wrap gap-6">
                <div className="flex gap-2">
                  {project.techsUsed.techNames.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center border border-white p-2 rounded-lg text-sm"
                    >
                      <div className="mr-1">
                        {project.techsUsed.techIcons[idx]}
                      </div>
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
                <a
                  className="cursor-pointer flex gap-2 border border-white p-2 rounded-lg text-sm items-center bg-white text-black"
                  href={project.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code {project.github.icon}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
