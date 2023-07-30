import { Icon } from "@iconify/react";
import { Clone } from "../../common/images";

export const Cloneproject = () => {
  return (
    <>
      <div className="mt-16 w-full lg:h-[500px] bg-[#232a3f] rounded-lg shadow-lg px-6 py-6 flex lg:flex-wrap flex-col">
        <div className="lg:w-2/5 lg:h-full">
          <img
            src={Clone}
            alt="Clone"
            className="w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full text-center pt-8 lg:w-3/5 flex flex-col lg:pl-5 lg:py-3 text-[#8f98b3]">
          <h1 className="font-bold lg:text-5xl text-4xl text-white">클론 코딩</h1>
          <div className="w-full pt-6 flex flex-col">
            <div className="w-full text-md flex">
              <div>
                <span className="font-bold text-white inline-block">
                경일게임아카데미에서 교육을 시작한 후, 비개발자 출신으로 처음으로 HTML, CSS, JavaScript를 이용하여 클론코딩한 개인 프로젝트입니다.</span>
                <br />
                <span className="pt-2 hidden lg:inline-block">
                화면에 렌더되는 div 하나하나가 신기하고 재미있었기 때문에, 클론 사이트의 기능들을 최대한 구현하려고 노력했습니다.
                </span>
                <br />
                <span className="pt-2 hidden lg:inline-block">
                이 프로젝트를 통해 개발자에 대한 흥미가 생겨 진로를 탐색하는 중요한 계기가 되었습니다.
                </span>
              </div>
            </div>
            <div className="w-full py-0.5 bg-[#E6A15C] mt-2 hidden lg:block lg:mt-32"></div>
            <div className="pt-2 w-full lg:text-left hidden lg:block">
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">주요기능</span>
                </div>
                <span className="pl-2 w-4/5">Tab 기능, 애니메이션 기능, 슬라이드 기능, hover 및 click 이벤트 기능</span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">URL</span>
                </div>
                <span className="pl-2 w-4/5"><a href="https://roof-top.shop">https://parkjonghwan22.github.io/</a></span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">Stack</span>
                </div>
                <span className="pl-2 w-4/5">JavaScript | HTML 5 | CSS </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
