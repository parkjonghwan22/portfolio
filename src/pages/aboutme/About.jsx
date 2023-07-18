import picture from "../../common/images/picture.jpg";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <>
      <div className="h-[500px] bg-[#E6A15C]">
        <div className="w-3/5 mx-auto h-full px-6 py-6 flex">
          <div className="w-2/5 object-fill overflow-hidden pl-4">
            <img src={picture} alt="About" />
          </div>
          <div className="w-3/5 flex flex-col">
            <div className="flex">
              <Icon
                icon="fa6-solid:id-card-clip"
                className="w-12 h-12 text-[#232a3f]"
              />
              <h1 className="text-5xl font-bold pl-5 text-[#232a3f]">
                ABOUT ME
              </h1>
            </div>
            <div className="w-3/6 mt-4 py-1 bg-[#232a3f] rounded-lg"></div>
            <div className="flex h-full">
              <div className="h-full flex">
                <div className="flex flex-col justify-around">
                  <div className="flex">
                    <Icon
                      icon="streamline:interface-user-circle-circle-geometric-human-person-single-user"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex flex-col pl-4">
                      <span className="text-2xl font-bold">이름</span>
                      <span className="text-lg">박종환</span>
                    </div>
                  </div>
                  <div className="flex ">
                    <Icon
                      icon="gg:phone"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex flex-col pl-4">
                      <span className="text-2xl font-bold">연락처</span>
                      <span className="text-lg">010-4915-5968</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around pl-40">
                  <div className="flex">
                    <Icon
                      icon="bi:calendar-fill"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex flex-col pl-4">
                      <span className="text-2xl font-bold">생년월일</span>
                      <span className="text-lg">95.03.13</span>
                    </div>
                  </div>
                  <div className="flex ">
                    <Icon
                      icon="material-symbols:attach-email"
                      className="w-12 h-12 text-[#232a3f]"
                    />
                    <div className="flex flex-col pl-4">
                      <span className="text-2xl font-bold">이메일</span>
                      <span className="text-lg">parkjonghwan22@gmail.com</span>
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
