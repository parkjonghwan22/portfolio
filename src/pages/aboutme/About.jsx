import picture from "../../common/images/picture.jpg";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <>
      <div className="mt-8 md:mt-20 h-full w-full lg:h-[500px] bg-[#E6A15C]">
        <div className="lg:w-3/5 lg:mx-auto h-full lg:px-6 py-6 flex flex-col lg:flex-wrap">
          <div className="w-full lg:w-2/5 object-fill overflow-hidden pl-4">
            <img src={picture} alt="About" className="w-3/5 lg:w-auto mx-auto"/>
          </div>
          <div className="lg:w-3/5 flex flex-col mx-auto lg:pl-8 h-full">
            <div className="flex mx-auto mt-2 lg:mx-0">
              <Icon
                icon="fa6-solid:id-card-clip"
                className="w-10 h-10 lg:w-12 lg:h-12 text-[#232a3f]"
              />
              <h1 className="text-4xl lg:text-5xl font-bold pl-5 text-[#232a3f]">
                ABOUT ME
              </h1>
            </div>
            <div className="lg:w-3/6 mt-4 py-0.5 bg-[#232a3f] rounded-lg"></div>
            <div className="flex h-full w-full">
              <div className="h-full flex flex-col lg:flex-wrap mt-2">
                <div className="flex flex-col justify-around lg:mt-4">
                  <div className="flex lg:mt-6">
                    <Icon
                      icon="streamline:interface-user-circle-circle-geometric-human-person-single-user"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex items-center pl-4">
                      <span className="text-2xl font-bold">이름</span>
                      <span className="text-xl font-bold pl-4">박종환</span>
                    </div>
                  </div>
                  <div className="flex mt-2 lg:mt-6">
                    <Icon
                      icon="gg:phone"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex items-center pl-4">
                      <span className="text-2xl font-bold">연락처</span>
                      <span className="text-xl font-bold pl-4">010-4915-5968</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="flex mt-2 lg:mt-6">
                    <Icon
                      icon="bi:calendar-fill"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex items-center pl-4">
                      <span className="text-2xl font-bold">생년월일</span>
                      <span className="text-xl font-bold pl-4">95.03.13</span>
                    </div>
                  </div>
                  <div className="flex mt-2 lg:mt-6">
                    <Icon
                      icon="material-symbols:attach-email"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex items-center pl-4">
                      <span className="text-2xl font-bold">이메일</span>
                      <span className="text-xl font-bold pl-4 overflow-hidden">parkjonghwan22@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
