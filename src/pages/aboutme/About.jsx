import picture from "../../common/images/picture.jpg";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <>
    <section id='aboutMeSection'>
      <div className="sm:mt-8 md:mt-12 lg:mt-12 w-full h-full bg-[#E6A15C]">
        <div className="w-4/5 lg:w-2/5 mx-auto sm:py-8 md:py-12 lg:py-16">
          <div className="md:flex lg:flex">
            <img src={picture} alt="About" className="rounded-lg sm:w-full w-2/5"/>
            <div className="sm:pt-4 pt-6 md:pl-12 lg:pl-12">
              <div className="sm:text-4xl text-5xl sm:font-semibold font-bold sm:pt-4 md:pt-11 lg:pt-11 sm:pb-4 pb-12">박종환</div>
              <div className="flex items-center">
                <Icon icon="ic:outline-email" width="20"/>
                <span className="sm:ml-3 ml-4 md:text-lg lg:text-lg text-white">parkjonghwan22@gmail.com</span>  
              </div>
              <div className="flex items-center pt-4">
                <Icon icon="subway:call" width="20" />
                <span className="sm:ml-3 ml-4 md:text-lg lg:text-lg text-white">010-4915-5968</span>
              </div>
              <div className="flex items-center pt-4">
                <Icon icon="mdi:github" width="20" />
                <a href="https://github.com/parkjonghwan22" className="sm:ml-3 ml-4 md:text-lg lg:text-lg text-white">https://github.com/parkjonghwan22</a>
              </div>
              <div className="flex items-center pt-4">
                <Icon icon="simple-icons:tistory" width="20" />
                <a href="https://pking0118.tistory.com/" className="sm:ml-3 ml-4 md:text-lg lg:text-lg text-white">https://pking0118.tistory.com/</a>
              </div>
            </div>
          </div>
          <div className="text-[#232a3f] font-bold sm:pt-10 pt-12">
              <div className="sm:text-4xl text-5xl">About Me</div>
              <div className="sm:text-sm text-xl font-semibold sm:leading-8 leading-9 sm:pt-6 pt-12">
                <span>협업을 좋아하는 프론트앤드 개발자입니다.</span>
                <p className="sm:pb-2 pb-6"></p>
                <span>미래의 제가 주최적인 삶을 살길 바라며 진로를 고민하고 있었습니다. 
                  끊임없이 발전하고 변화하는 개발자라는 역할에 큰 관심을 가지게 되었고 도전하게 되었습니다.
                  사용자들에게 가치를 제공하는 일에 열정을 느끼는 만큼 끊임없는 학습과 개선을 통해 사용자들의 삶을 더 나아지게하는 개발자가 되고싶습니다. 
                  </span>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
