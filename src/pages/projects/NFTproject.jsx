import { Icon } from "@iconify/react";
import { nft } from "../../common/images";

export const NFTproject = () => {
  return (
    <>
      <div className="mt-16 w-full lg:h-[500px] bg-[#232a3f] rounded-lg shadow-lg px-6 py-6 flex lg:flex-wrap flex-col">
        <div className="w-full lg:w-2/5 lg:h-full">
          <img
            src={nft}
            alt="nft"
            className="w-full h-[320px] lg:h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full h-full text-center pt-8 lg:w-3/5 flex flex-col lg:pl-5 lg:py-3 text-[#8f98b3]">
          <h1 className="font-bold lg:text-5xl text-4xl text-white">NFT 마켓 플레이스</h1>
          <div className="w-full pt-6 flex flex-col">
            <div className="w-full text-md flex">
              <div>
                <span className="font-bold text-white inline-block">
                  이 프로젝트는 OpenSea, Blur 등의 NFT 마켓 플레이스 서비스를
                  개발하기 위한 기업협약 프로젝트입니다.
                </span>
                <br />
                <span className="hidden lg:inline-block">
                  블록체인의 토큰에 대해서는 이전에 전혀 알지 못했던 상태였으나,
                  전문 교육을 받은 후 처음으로 참여한 블록체인 프로젝트로서,
                  개발에 뜻깊은 의미를 부여하며 진행하였습니다.
                </span>
                <br />
                <span className="hidden lg:inline-block">
                  이 프로젝트에서 처음으로 Tailwind CSS를 접하게 되었습니다. 
                  반응형 디자인과 다크모드를 처음으로 시도해보면서, 사용자 경험을 향상시키는데
                  어떤 구조와 방법을 적용해야 하는지에 대한 감을 찾을 수
                  있었습니다.
                </span>
              </div>
            </div>
            <div className="w-full py-0.5 bg-[#E6A15C] my-4 hidden lg:block"></div>
            <div className="w-full lg:text-left hidden lg:block">
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">주요기능</span>
                </div>
                <span className="pl-2 w-4/5">런치패드 기능, NFT 민팅, Collection 조회, Airdrop 기능,
                        Cart 기능, Sweep 기능, Eden AI 를 이용한 민팅기능</span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">맡은담당</span>
                </div>
                <span className="pl-2 w-4/5">FrontEnd, NFT Auction 기능</span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">URL</span>
                </div>
                <span className="pl-2 w-4/5"><a href="https://roof-top.shop">https://roof-top.shop</a></span>
              </div>
              <div className="flex w-full">
                <div className="w-1/5 flex">
                <Icon icon="mingcute:check-2-fill" className="w-5 h-5" />
                <span className="pl-2 text-lg font-bold">Stack</span>
                </div>
                <span className="pl-2 w-4/5">NextJS | NestJS | MongoDB | TailWind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
