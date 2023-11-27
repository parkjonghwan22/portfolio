import { Projectform } from "./projectform";

export const Project = () => {
  return (
    <>
    <section id="projectSection">
      <div className="w-full h-full sm:py-16 md:py-12 lg:py-24">
        <div className="md:w-4/5 lg:w-3/5 mx-auto h-full">
          <h1 className="sm:text-4xl md:text-4xl lg:text-4xl font-bold text-white text-center">
            Projects
          </h1>
          <div className="w-20 py-0.5 bg-[#E6A15C] sm:mt-10 md:mt-12 lg:mt-16 rounded-lg mx-auto"></div>
          <Projectform/>
        </div>
        
      </div>
    </section>
    </>
  );
};
