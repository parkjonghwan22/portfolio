import { Icon } from '@iconify/react';

export const GptModal = () => {
    return (
        <>
        <div className='flex items-center'>
            <a href='https://github.com/parkjonghwan22/project3'>
                <Icon icon="jam:github" color='white' className='w-8 h-8 cursor-pointer'/>
            </a>
            <h1 className="text-[#E6A15C] text-2xl font-semibold ml-2">Gpt Music</h1>
        </div>
        <div className="mt-10 lg:flex">
            <div>
                <img src="https://github.com/parkjonghwan22/project3/assets/118948122/9bdd5a0a-e14c-4637-b8a5-ad4e2363f9ba" className="w-full sm:h-[300px] lg:h-[400px]"/>
                <div className="sm:pt-4 md:pt-6 lg:pt-8">
                    <div className="text-[#E6A15C] font-bold">Period.</div>
                    <div className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">2023/03/23 - 2023/04/14</div>
                </div>
            </div>
            <div className='sm:pt-8 md:pt-8 lg:pl-10'>
                <div>
                    <div className="text-[#E6A15C] font-bold">Intro.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">
                        <li>- Chat GPT API를 이용한 프로젝트</li>
                        <li>- 자신만의 악보를 생성하고 공유하는 CRUD 기능</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Stack.</div>
                    <div className="text-white font-medium sm:mt-2 md:mt-3 lg:mt-4 sm:flex sm:flex-wrap">
                        <span className='bg-blue-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>React</span>
                        <span className='bg-cyan-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>TypeScript</span>
                        <span className='bg-green-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Node.js + Express</span>
                        <span className='bg-white px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Mysql</span>
                    </div>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">My Part.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- FrontEnd(UI) 개발 [page, piano Component]</li>
                        <li>- Chat GPT API를 이용한 Piano 기능 개발</li>
                        <li>- 악보 데이터 가공, 렌더, 재생 기능</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Achievements.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- 당시 핫했던 Chat GPT를 이용하여 프로젝트를 진행할 수 있는 기회였습니다.</li>
                        <li>- Chat GPT 의 특성인 랜덤성과 일관성 부족에 대응하기 위해, 데이터 가공과 prompt 설계에 있어 고민하고 배울 수 있는 기회였습니다.</li>
                        <li>- Piano Component 를 직접 설계하며 UI 개발에 고민하고 학습할 수 있었습니다.</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}