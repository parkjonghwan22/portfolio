import { Icon } from '@iconify/react';

export const NftModal = () => {
    return (
        <>
        <div className='flex items-center'>
            <a href='https://github.com/parkjonghwan22/rooftop-front'>
                <Icon icon="jam:github" color='white' className='w-8 h-8 cursor-pointer'/>
            </a>
            <h1 className="text-white text-3xl font-semibold ml-2">NFT 마켓플레이스</h1>
        </div>
        <div className="sm:mt-10">
            <div>
                <img src="https://github.com/nazzzo/rooftop-front/assets/112994137/d1f2ef55-5774-4a70-bde3-c6e108a0e164" className="h-[300px]"/>
                <div className="sm:pt-4">
                    <div className="text-white font-bold">Period.</div>
                    <div className="text-white font-medium">2022/08/10 - 2022/08/10</div>
                </div>
            </div>
            <div className='sm:pt-8'>
                <div>
                    <div className="text-white font-bold">Intro.</div>
                    <ul className="text-white font-medium">
                        <li>....</li>
                        <li>....</li>
                        <li>....</li>
                    </ul>
                </div>
                <div className='sm:mt-6'>
                    <div className="text-white font-bold">Stack.</div>
                    <ul className="text-white font-medium">
                        <li>....</li>
                        <li>....</li>
                        <li>....</li>
                    </ul>
                </div>
                <div>
                    <div className="text-white font-bold">My Part.</div>
                    <ul className="text-white font-medium">
                        <li>....</li>
                        <li>....</li>
                        <li>....</li>
                    </ul>
                </div>
                <div>
                    <div className="text-white font-bold">Achievements.</div>
                    <ul className="text-white font-medium">
                        <li>....</li>
                        <li>....</li>
                        <li>....</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}