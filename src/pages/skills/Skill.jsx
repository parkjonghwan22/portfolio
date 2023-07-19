import { Html, Css, Javascript, React, NextJS, Typescript, Tailwind } from "../../common/images";

export const Skill = () => {
  return (
    <>
      <div className="h-[900px] bg-[#232a3f]">
        <div className="w-3/5 mx-auto h-full">
          <h1 className="text-6xl font-bold text-center pt-10 text-white">
            SKILLS
          </h1>
          <div className="w-20 py-0.5 bg-white mx-auto mt-8 rounded-lg"></div>
          <div className="mt-10 h-40 rounded-lg flex">
            <img src={Html} alt="Html" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300' />
            <img src={Css} alt="Css" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300' />
            <img src={Javascript} alt="Javascript" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300' />
            <img src={React} alt="React" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300' />
            <img src={Typescript} alt="Typescript" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300 ' />
            <img src={Tailwind} alt="Tailwind" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300' />
            <img src={NextJS} alt="NextJS" className='w-32 h-32 mr-4 object-cover hover:scale-110 transition-transform duration-300' />
          </div>
        </div>
      </div>
    </>
  );
};
