import { Icon } from '@iconify/react';
import { clone } from '../../common/images';

export const MobileModal = () => {
    return (
        <>
        <div className='flex items-center'>
            <a href=''>
                <Icon icon="jam:github" color='white' className='w-8 h-8 cursor-pointer'/>
            </a>
            <h1 className="text-[#E6A15C] text-2xl font-semibold ml-2">Mobile App</h1>
        </div>
        <div className="mt-10 lg:flex">
            <div>
                <img src="https://github.com/parkjonghwan22/project3/assets/118948122/8506ff28-a291-427c-9c09-0f5542dc1639" alt="clone" className="w-full sm:h-[300px] lg:h-[400px]"/>
                <div className="sm:pt-4 md:pt-6 lg:pt-8">
                    <div className="text-[#E6A15C] font-bold">Period.</div>
                    <div className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4"></div>
                </div>
            </div>
            <div className='sm:pt-8 md:pt-8 lg:pl-10'>
                <div>
                    <div className="text-[#E6A15C] font-bold">Intro.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">
                        <li>- RN을 학습하며 만든 간단한 앱입니다.</li>
                        <li>- 포트폴리오, Calendar, TodoList 기능이 있습니다.</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Stack.</div>
                    <div className="text-white font-medium sm:mt-2 md:mt-3 lg:mt-4 sm:flex sm:flex-wrap">
                        <span className='bg-blue-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>React</span>
                        <span className='bg-white px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Expo</span>
                    </div>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">My Part.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Achievements.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}