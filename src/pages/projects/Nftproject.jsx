import { Icon } from '@iconify/react';

export const NftModal = () => {
    return (
        <>
        <div className='flex items-center'>
            <a href='https://github.com/parkjonghwan22/rooftop-front'>
                <Icon icon="jam:github" color='white' className='w-8 h-8 cursor-pointer'/>
            </a>
            <h1 className="text-[#E6A15C] text-3xl font-semibold ml-2">NFT 마켓플레이스</h1>
        </div>
        <div className="mt-10 lg:flex">
            <div>
                <img src="https://github.com/nazzzo/rooftop-front/assets/112994137/d1f2ef55-5774-4a70-bde3-c6e108a0e164" className="w-full sm:h-[300px] lg:h-[400px]"/>
                <div className="sm:pt-4 md:pt-6 lg:pt-8">
                    <div className="text-[#E6A15C] font-bold">Period.</div>
                    <div className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">2023/06/07 - 2023/07/18</div>
                </div>
            </div>
            <div className='sm:pt-8 md:pt-8 lg:pl-10'>
                <div>
                    <div className="text-[#E6A15C] font-bold">Intro.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4">
                        <li>- 기업 미션가이드를 통한 프로젝트</li>
                        <li>- Opensea와 같은 NFT 마켓플레이스</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Stack.</div>
                    <div className="text-white font-medium sm:mt-2 md:mt-3 lg:mt-4 sm:flex sm:flex-wrap">
                        <span className='bg-white px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Next.js</span>
                        <span className='bg-cyan-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>TypeScript</span>
                        <span className='bg-cyan-100 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>TailwindCSS</span>
                        <span className='bg-red-500 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>Nest.jS</span>
                        <span className='bg-green-300 px-3 py-1 rounded-md text-black font-semibold mr-2 mb-2'>MongoDB</span>
                    </div>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">My Part.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- 전반적인 FrontEnd(UI) 개발 [page, modal]</li>
                        <li>- Contract와 메서드를 분석하여 NFT Token 기능 구현</li>
                        <li>- Auction(경매), ReSale(재판매), Timer(타이머)</li>
                    </ul>
                </div>
                <div className='sm:mt-6 md:mt-8 lg:pt-8'>
                    <div className="text-[#E6A15C] font-bold">Achievements.</div>
                    <ul className="text-white font-medium text-sm sm:mt-2 md:mt-3 lg:mt-4 leading-7">
                        <li>- 실제 기업에서 미션가이드를 받아 진행한 프로젝트인 만큼, 어떤 식으로 진행되는지 직접적으로 경험할 수 있었습니다.</li>
                        <li>- 블록체인 교육을 받았지만 프로젝트를 진행하며, 블록체인 생태계를 더욱 알아가는 기회가 되었습니다.</li>
                        <li>- TailwindCSS를 경험해 볼 수 있는 경험이었습니다.</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}