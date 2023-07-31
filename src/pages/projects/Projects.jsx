import { Cloneproject } from "./Cloneproject";
import { Musicproject } from "./Musicproject";
import { NFTproject } from "./NFTproject";
import { PHLproject } from "./PHLproject";

export const Project = () => {
  return (
    <>
    <section id="projectSection">

      <div className="bg-[#1d6a96] min-h-[500px]">
        <div className="lg:w-3/5 w-full mx-auto h-full px-6 py-6 flex flex-col">
          <h1 className="text-6xl font-bold text-center pt-10 text-[#fff]">
            PROJECTS
          </h1>
          <div className="w-20 py-0.5 bg-[#fff] mx-auto mt-8 rounded-lg"></div>
          <NFTproject />
          <Musicproject />
          <PHLproject />
          <Cloneproject />
        </div>
        
      </div>
    </section>
    </>
  );
};
