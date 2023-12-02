import { Javascript, React, Linux, Typescript, NodeJS, Mysql, Git, EC2, NextJS } from "../../common/images";

export const Skill = () => {
  return (
    <>
    <section id="skillSection">
      <div className="w-full h-full bg-[#232a3f] sm:py-16 md:py-20 lg:py-24">
        <div className="md:w-4/5 lg:w-3/5 mx-auto h-full">
          <h1 className="sm:text-4xl md:text-4xl lg:text-4xl font-bold text-white text-center">
            Skills
          </h1>
          <div className="w-20 py-0.5 bg-[#E6A15C] sm:mt-10 md:mt-12 lg:mt-16 rounded-lg mx-auto"></div>
          <ul className="sm:mt-12 md:mt-16 lg:mt-20 leading-8">
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={Javascript} alt="Javascript" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">주언어로서, 프로젝트를 자바스크립트를 이용하여 기능을 구현했습니다.
                    기본적인 개념 및 문법을 숙지하고 있으며 보다 더 효율적이고 직관적인 코드를 작성하기위해
                    고민하고 학습합니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={Typescript} alt="Typescript" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    타입스크립트의 개념 및 사용목적에 대해 숙지하고 있습니다.
                    타입스크립트를 이용해 프로젝트를 진행한 적이 있으며 보다 안정성있는 코드를 작성하기 위해 노력합니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={React} alt="React" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    리액트의 상태와 생명주기에 대해 이해하고 있습니다.
                    Styled-Components를 이용해 화면을 꾸밀 수 있습니다.
                    전반적인 프로젝트를 리액트로 구현하였습니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={NextJS} alt="NextJS" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    NextJS를 사용하여 프로젝틀르 진행한 적이 있습니다. 
                    SSR과 CSR의 동작과정을 이해하고 있으며, 라우팅 구조를 이해 및 설계하여 사용해보았습니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={NodeJS} alt="NodeJS" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    NodeJS와 Express를 이용하여 DB와 연동할 수 있으며 웹사이트의 기본 기능인 CRUD가 가능합니다.
                    RESTful API의 규칙에 맞도록 고민하며 서버를 구현해본 경험이 있습니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={Mysql} alt="Mysql" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    기본적인 데이터 추가, 조회, 수정, 삭제하는 쿼리문을 작성할 수 있습니다.
                    효율적인 DB schema를 설계하기 위해 노력하며 고민합니다. 
                    또한 ERD를 학습하며 데이터베이스로 프로젝트를 진행한 경험이 있습니다. 
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={Git} alt="Git" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    작업시 Git&Github를 사용합니다.
                    이를 바탕으로 팀원들과 원활하게 코드를 공유하며 프로젝트를 진행한 경험이 있습니다.
                    학습이 더 필요하지만, GitHub Action을 이용해 간단한 CI/CD를 구축한 적이 있습니다. 
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={Linux} alt="Linux" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    Git과 AWS EC2 서버를 조작하기 위해 사용합니다.
                    터미널에서 명령어를 통해 간단한 파일 조작을 할 수 있습니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="sm:mx-6 md:mx-12 lg:mx-16 border-dashed border-b border-[#8f98b3]">
              <div className="flex items-center">
                <img src={EC2} alt="EC2" className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
                <div className="sm:p-4 md:p-8 lg:p-12">
                  <span className="text-[#8f98b3] font-semibold sm:text-sm">
                    AWS EC2 서비스를 이용해 서버를 구축하고 배포한 경험이 있습니다.
                    제 스스로 더 효율적이고 확장 가능한 웹 서비스를 제공하는 것이 목표입니다.
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};
