import { Icon } from "@iconify/react";
import { phl } from "../../common/images";

export const PHLproject = () => {
  return (
    <>
      <div className="mt-16 w-full lg:h-[500px] bg-[#232a3f] rounded-lg shadow-lg px-6 py-6 flex lg:flex-wrap flex-col">
        <div className="w-full lg:w-2/5 lg:h-full">
          <img
            src={phl}
            alt="phl"
            className="w-full h-[320px] lg:h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full text-center pt-8 lg:w-3/5 flex flex-col lg:pl-5 lg:py-3 text-[#8f98b3]">
          <h1 className="font-bold lg:text-5xl text-4xl text-white">요리 커뮤니티</h1>
          <div className="w-full pt-6 flex flex-col">
            <div className="w-full text-md flex">
              <div>
                <span className="font-bold text-white inline-block">
                이 프로젝트는 끊임없이 소통하며 요리에 대한 정보를 공유할 수 있는 참여형 요리 커뮤니티를 구축하는 프로젝트로, 사용자들 간의 자유로운 소통과 정보 교류를 위해 기획되었습니다.                </span>
                <br />
                <span className="pt-2 hidden lg:inline-block">
                요리 커뮤니티 웹사이트를 개발함으로써, 사용자 인터페이스를 고려한 전반적인 디자인을 구축하였습니다. 게시판과 댓글에 대한 CRUD 기능을 구현하여, 사용자들이 게시물을 작성하고 상호간의 소통을 원활하게 할 수 있는 환경을 조성하였습니다.
                </span>
                <br />
                <span className="pt-2 hidden lg:inline-block">
                  처음으로 접하는 3주 가량의 프로젝트였으며 이 기간은 저에게 설계와 협업에 대한 소중한 기회를 선사했습니다.
                  팀 내에서 밝은 분위기와 원활한 소통을 위해 중간에서 징검다리 역할을 수행하였습니다.
                  또한 사용자들이 편리하고 즐겁게 정보를 공유하는 플랫폼을 개발함으로써, 사람들의 요리 관심사를 결집시키는 즐거움을 
                  느낄 수 있었습니다.
                </span>
              </div>
            </div>
            <div className="w-full py-0.5 bg-[#E6A15C] mt-2 hidden lg:block"></div>
            <div className="pt-2 w-full lg:text-left hidden lg:block">
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">주요기능</span>
                </div>
                <span className="pl-2 w-4/5">회원가입기능, 로그인/로그아웃 기능, 게시판 기능, 댓글 기능</span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">URL</span>
                </div>
                <span className="pl-2 w-4/5"><a href="http://43.200.183.116/">http://43.200.183.116/</a></span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">Stack</span>
                </div>
                <span className="pl-2 w-4/5">HTML 5 | CSS | NodeJS | MySQL | Figma | AWS EC2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
