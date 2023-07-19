import { Icon } from "@iconify/react";
import { NFT } from "../../common/images";

export const Musicproject = () => {
    return (
        <>
            <div className="mt-16 w-full h-[500px] bg-white rounded-lg shadow-lg px-6 py-6 flex">
            <div className="border w-2/5">
            <img src={NFT} alt="NFT" className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg' />

            </div>
            <div className="w-3/5 flex flex-col px-3 py-3">
              <h1 className="font-bold text-5xl">기업협약 프로젝트</h1>
              <div className="w-full pt-6 flex">
                <div className="w-1/2 text-md flex flex-col pr-2">
                  <div>
                    <span className="font-bold pr-1">
                      OpenSea, Blur 등 NFT 마켓 플레이스 서비스를 개발하는
                      프로젝입니다.
                    </span>
                  </div>
                  <div className="pt-4">
                    <span>
                      token 의 일도 몰랐던 제가 교육을 받은 후 처음으로 만드는
                      블록체인 프로젝트였기에 뜻깊은 마음으로 개발에 임했습니다.
                    </span>
                  </div>
                  <div className="pt-4">
                    <span>
                      처음 Tailwind CSS 접해보았습니다. 사용하는데 있어 초기
                      어려움을 겪었지만 현업에서 많이 사용하는 tailwind 를
                      배우고 경험할 수 있어서 좋았습니다.{" "}
                    </span>
                  </div>
                  <div className="pt-4">
                    <span>
                      또한 반응형과 다크모드를 처음 시도해보면서 어떤 구조로
                      만들어야하는지 감을 찾는 기회가 되었습니다.
                    </span>
                  </div>
                </div>
                <div className="h-full px-0.5 bg-[#E6A15C]"></div>
                <div className="w-1/2 pl-2 flex">
                  <div className="flex flex-col w-full pt-2">
                    <div className="flex">
                      <div className="w-2/5 flex">
                        <Icon
                          icon="mingcute:check-2-fill"
                          className="w-6 h-6"
                        />
                        <span className="pl-2 text-lg font-bold">주요기능</span>
                      </div>
                      <div className="w-3/5">
                        런치패드 기능, NFT 민팅, Collection 조회, Airdrop 기능,
                        Cart 기능, Sweep 기능, Eden AI 를 이용한 민팅기능
                      </div>
                    </div>
                    <div className="flex pt-4">
                      <div className="w-2/5 flex">
                        <Icon
                          icon="mingcute:check-2-fill"
                          className="w-6 h-6"
                        />
                        <span className="pl-2 text-lg font-bold">GitHub</span>
                      </div>
                      <div className="w-3/5 break-all">
                      https://github.com/parkjonghwan22/rooftop-front.git
                      </div>
                    </div>
                    <div className="flex pt-4">
                      <div className="w-2/5 flex">
                        <Icon
                          icon="mingcute:check-2-fill"
                          className="w-6 h-6"
                        />
                        <span className="pl-2 text-lg font-bold">URL</span>
                      </div>
                      <div className="w-3/5 break-all pt-1">
                        https://roof-top.shop
                      </div>
                    </div>
                    <div className="flex pt-4">
                      <div className="w-2/5 flex">
                        <Icon
                          icon="mingcute:check-2-fill"
                          className="w-6 h-6"
                        />
                        <span className="pl-2 text-lg font-bold">FrontEnd</span>
                      </div>
                      <div className="w-3/5 break-all pt-1">
                        NextJS, TailwindCSS
                      </div>
                    </div>
                    <div className="flex pt-4">
                      <div className="w-2/5 flex">
                        <Icon
                          icon="mingcute:check-2-fill"
                          className="w-6 h-6"
                        />
                        <span className="pl-2 text-lg font-bold">BackEnd</span>
                      </div>
                      <div className="w-3/5 break-all pt-1">
                        NestJS, MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}