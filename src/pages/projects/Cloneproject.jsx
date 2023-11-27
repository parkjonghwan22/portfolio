import { Icon } from '@iconify/react';
import { clone } from '../../common/images';

export const CloneModal = () => {
    return (
        <>
        <div className='flex items-center'>
            <a href='https://github.com/parkjonghwan22/parkjonghwan22.github.io'>
                <Icon icon="jam:github" color='white' className='w-8 h-8 cursor-pointer'/>
            </a>
            <h1 className="text-[#E6A15C] text-2xl font-semibold ml-2">CloneCoding</h1>
        </div>
        <div className="mt-10 lg:flex">
            <div>
                <img src={clone} alt="clone" className="w-full sm:h-[300px] lg:h-[400px]"/>
                <div className="sm:pt-4 md:pt-6 lg:pt-8">
                    <div className="text-[#E6A15C] font-bold">Period.</div>
                    <div className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">2022/11/28 - 2022/12/5</div>
                </div>
            </div>
            <div className='sm:pt-8 md:pt-8 lg:pl-10'>
                <div>
                    <div className="text-[#E6A15C] font-bold">Intro.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">
                        <li>- 첫 개인 프로젝트입니다.</li>
                        <li>- HTML, CSS, JavaScript를 이용한 클론코딩 프로젝트입니다.</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Stack.</div>
                    <div className="text-white font-medium sm:mt-2 md:mt-3 lg:mt-4 sm:flex sm:flex-wrap">
                        <span className='bg-yellow-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Javascript</span>
                        <span className='bg-blue-400 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>CSS</span>
                        <span className='bg-orange-700 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>HTML</span>
                    </div>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">My Part.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- 프로젝트 전체적인 개발</li>
                        <li>- 애니메이션, 슬라이드 기능 개발</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Achievements.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- 경일게임아카데미에서 교육을 받은 후, 진행한 첫 프로젝트입니다.</li>
                        <li>- 비개발자 출신으로 경험하는 프로젝트이니 만큼 클론 사이트의 기능을 최대한 구현하려고 노력했습니다.</li>
                        <li>- 이 프로젝트를 통해 개발에 대한 흥미가 생기고 진로를 탐색하는 중요한 계기가 되었습니다.</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}