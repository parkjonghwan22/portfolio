import { Cloneproject } from "./Cloneproject";
import { Musicproject } from "./Musicproject";
import { NFTproject } from "./NFTproject";
import { PHLproject } from "./PHLproject";

export const Project = () => {
  return (
    <>
      <div className="bg-[#E6A15C] min-h-[500px]">
        <div className="lg:w-3/5 w-full mx-auto h-full px-6 py-6 flex flex-col">
          <h1 className="text-6xl font-bold text-center pt-10 text-[#232a3f]">
            PROJECTS
          </h1>
          <div className="w-20 py-0.5 bg-[#232a3f] mx-auto mt-8 rounded-lg"></div>
          <NFTproject />
          <Musicproject />
          <PHLproject />
          <Cloneproject />
        </div>
      </div>
    </>
  );
};
