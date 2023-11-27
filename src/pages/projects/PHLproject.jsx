import { Icon } from '@iconify/react';

export const PHLModal = () => {
    return (
        <>
        <div className='flex items-center'>
            <a href='https://github.com/parkjonghwan22/community_node_project'>
                <Icon icon="jam:github" color='white' className='w-8 h-8 cursor-pointer'/>
            </a>
            <h1 className="text-[#E6A15C] text-3xl font-semibold ml-2">NodePHL</h1>
        </div>
        <div className="mt-10 lg:flex">
            <div>
                <img src="https://github.com/parkjonghwan22/community_node_project/assets/118948122/71e25a28-9cb1-498c-951c-41d36c38c936" className="w-full min-w-[400px] sm:h-[300px] lg:h-[400px]"/>
                <div className="sm:pt-4 md:pt-6 lg:pt-8">
                    <div className="text-[#E6A15C] font-bold">Period.</div>
                    <div className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">2023/01/30 - 2023/02/19</div>
                </div>
            </div>
            <div className='sm:pt-8 md:pt-8 lg:pl-10'>
                <div>
                    <div className="text-[#E6A15C] font-bold">Intro.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">
                        <li>- 소통하는 요리 커뮤니티 웹사이트</li>
                        <li>- CRUD 기능</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Stack.</div>
                    <div className="text-white font-medium sm:mt-2 md:mt-3 lg:mt-4 sm:flex sm:flex-wrap">
                        <span className='bg-yellow-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Javascript</span>
                        <span className='bg-green-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Node.js + Express</span>
                        <span className='bg-orange-400 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Amazon EC2</span>
                        <span className='bg-blue-100 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>GitHub Actions</span>
                    </div>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">My Part.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- 전반적인 FrontEnd(UI) 개발</li>
                        <li>- 댓글 CRUD 기능 개발</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Achievements.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- Figma 를 활용하여 프로젝트의 전반적인 디자인과 사용자 인터페이스를 제작하였고 사용자의 경험을 향상시키기 위해 고민하고 학습하는 기회였습니다.</li>
                        <li>- 게시판과 댓글 기능을 개발하며 CRUD에 대해 더 학습할 수 있는 경험이 되었습니다.</li>
                        <li>- 팀원의 도움으로 GitHub Actions를 활용하였고 배포 과정에 대해서도 간략하게 파악하게 되는 기회였습니다. </li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}