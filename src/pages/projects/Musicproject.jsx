import { Icon } from "@iconify/react";
import { NFT } from "../../common/images";

export const Musicproject = () => {
  return (
    <>
      <div className="mt-16 w-full lg:h-[500px] bg-[#232a3f] rounded-lg shadow-lg px-6 py-6 flex lg:flex-wrap flex-col">
        <div className="lg:w-2/5 lg:h-full">
          <img
            src={NFT}
            alt="NFT"
            className="w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full text-center pt-8 lg:w-3/5 flex flex-col lg:pl-5 lg:py-3 text-[#8f98b3]">
          <h1 className="font-bold lg:text-5xl text-4xl text-white">Gpt Music</h1>
          <div className="w-full pt-6 flex flex-col">
            <div className="w-full text-md flex">
              <div>
                <span className="font-bold text-white inline-block">
                  이 프로젝트는 사용자들이 자시만의 독특한 악보를 생성할 수 있는 창작 플랫폼으로, Chat GPT API를 활용하여 탄생하였습니다.
                </span>
                <br />
                <span className="pt-2 hidden lg:inline-block">
                  이 프로젝트를 위해, 라이브러리에 의존하지 않고 구글링을 통해 피아노 건반 하나하나를 직접 구현했습니다.
                  이 과정에서 팀원들과 함께 협업하여 즐겁게 작업했으며 완성된 피아노 페이지를 자랑스럽게 보았습니다.
                </span>
                <br />
                <span className="pt-2 hidden lg:inline-block">
                  당시 큰 인기를 끌던 Chat GPT를 활용하여 프로젝트를 기획하고 구현하는 경험은 큰 의미를 지니며,
                  저희에게 특별한 기회를 제공해주었습니다. 
                  이로 인해 우리는 더욱 성장하고 발전하는 기회를 가졌으며 좋은 경험으로 이어졌습니다.
                </span>
              </div>
            </div>
            <div className="w-full py-0.5 bg-[#E6A15C] mt-2 hidden lg:block lg:mt-8"></div>
            <div className="pt-2 w-full lg:text-left hidden lg:block">
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">주요기능</span>
                </div>
                <span className="pl-2 w-4/5">회원가입기능, 로그인/로그아웃 기능, 게시판 기능, 피아노 기능, 악보생성 기능, 악보재생 기능</span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">URL</span>
                </div>
                <span className="pl-2 w-4/5"><a href="https://roof-top.shop">https://jjerry.store</a></span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">Stack</span>
                </div>
                <span className="pl-2 w-4/5">React | TypeScript | NodeJS | MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
