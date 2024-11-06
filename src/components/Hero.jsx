const Hero = () => {
  return (
    <section className="text-white max-w-7xl mx-auto px-4 mt-14 lg:mt-24 flex flex-col items-center justify-around">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-2 lg:text-5xl">
          Hi, I am Michael Angelo
        </h1>
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-white font-bold lg:text-5xl mb-4">
            Front-End Developer
          </h1>
        </div>
        <p className="text-sm mb-4 md:text-lg">
          I am a Front-End Developer currently expanding my skills and
          transitioning to a full stack developer.
        </p>
        <div>
          <button className="border border-white p-2 rounded-lg transition-colors mr-4  hover:bg-slate-900">
            Contact Me
          </button>
          <button className="border border-white bg-white text-black p-2 rounded-lg transition-colors hover:bg-slate-400">
            Resume
          </button>
        </div>
      </div>

      <div className="w-8/12 mt-6 md:mt-0">
        <img
          src="/src/assets/vector.png"
          alt="Hero illustration representing a developer"
          className="w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
