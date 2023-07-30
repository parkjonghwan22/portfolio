import { Html, Css, Javascript, React, NextJS, Typescript, Tailwind, NodeJS, NestJS, Mysql, MongoDB, EC2, Amplify, Solidity } from "../../common/images";

export const Skill = () => {
  return (
    <>
      <div className="w-full h-full bg-[#232a3f]">
        <div className="w-full lg:w-3/5 mx-auto h-full">
          <h1 className="text-6xl font-bold text-center pt-24 text-white">
            SKILLS
          </h1>
          <div className="w-20 py-0.5 bg-white mx-auto mt-8 rounded-lg"></div>
          <div className="text-white font-bold text-3xl mt-12 text-center">Front-End</div>
          <div className="mt-6 flex flex-wrap  justify-center">
              <img src={Html} alt="Html" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
              <img src={Css} alt="Css" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
              <img src={Javascript} alt="Javascript" className='lg:w-32 lg:h-32 mx-2 my-2 h-24 object-cover hover:scale-110 transition-transform duration-300' />
              <img src={React} alt="React" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
              <img src={Typescript} alt="Typescript" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300 ' />
              <img src={Tailwind} alt="Tailwind" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
              <img src={NextJS} alt="NextJS" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
          </div>
          <div className="text-white font-bold text-3xl mt-12 text-center">Back-End</div>
          <div className="mt-6 flex flex-wrap  justify-center">
                <img src={NodeJS} alt="Html" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
                <img src={NestJS} alt="Css" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
                <img src={Mysql} alt="Javascript" className='lg:w-32 lg:h-32 mx-2 my-2 h-24 object-cover hover:scale-110 transition-transform duration-300' />
                <img src={MongoDB} alt="React" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
          </div>
          <div className="text-white font-bold text-3xl mt-12 text-center">Etc</div>
          <div className="mt-6 flex flex-wrap  justify-center pb-24">
                <img src={EC2} alt="Html" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
                <img src={Amplify} alt="Css" className='lg:w-32 lg:h-32 w-24 h-24 mx-2 my-2 object-cover hover:scale-110 transition-transform duration-300' />
                <img src={Solidity} alt="Javascript" className='lg:w-32 lg:h-32 mx-2 my-2 h-24 object-cover hover:scale-110 transition-transform duration-300' />
                
          </div>  
        </div>
      </div>
    </>
  );
};
