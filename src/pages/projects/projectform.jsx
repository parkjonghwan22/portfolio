import { useState } from "react";
import Modal from "../../common/modal/Modal";
import { NftModal } from "./Nftproject";
import { GptModal } from "./Gptproject";
import { PHLModal } from "./PHLproject";
import { CloneModal } from "./Cloneproject";


export const Projectform = () => {
    const [isNftModalOpen, setIsNftModalOpen] = useState(false);
    const [isGptModalOpen, setIsGptModalOpen] = useState(false);
    const [isPHLModalOpen, setIsPHLModalOpen] = useState(false);
    const [isCloneModalOpen, setIsCloneModalOpen] = useState(false);

    const openNftModal = () => {
        setIsNftModalOpen(true);
    };

    const closeNftModal = () => {
        setIsNftModalOpen(false);
    };

    const openGptModal = () => {
        setIsGptModalOpen(true);
    };

    const closeGptModal = () => {
        setIsGptModalOpen(false);
    };

    const openPHLModal = () => {
        setIsPHLModalOpen(true);
    };

    const closePHLModal = () => {
        setIsPHLModalOpen(false);
    };

    const openCloneModal = () => {
        setIsCloneModalOpen(true);
    };

    const closeCloneModal = () => {
        setIsCloneModalOpen(false);
    };

    return (
        <ol className="w-full h-full bg-[#232a3f] sm:py-16 md:py-20 lg:py-24 items-center flex sm:flex-col md:flex-col">
            <li className="relative sm:mb-8 sm:mx-12 md:w-full md:px-12 md:mb-10 lg:w-full">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-white ring-8 shrink-0">
                        <svg className="w-4 h-4 text-blue-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="w-full bg-[#E6A15C] h-0.5 sm:mx-5 md:mx-7 lg:mx-5"></div>
                </div>
                <div className="mt-5 md:px-6 lg:px-4">
                    <div className="flex justify-between lg:flex-col">
                        <h3 className="text-lg font-semibold text-white">루프탑 [ 기업 협약 프로젝트 ]</h3>
                        <button onClick={openNftModal} className="relative inline-flex items-center justify-center lg:w-[84px] lg:mt-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className="relative px-4 py-1 lg:px-3 transition-all ease-in duration-75 bg-[#232a3f] text-white font-semibold rounded-md group-hover:bg-opacity-0">
                            상세설명
                            </span>
                            </button>
                            <Modal isOpenModal={isNftModalOpen} closeModal={closeNftModal} modalContent={<NftModal />} />
                    </div>
                    <p className="text-sm font-semibold text-[#8f98b3]">뭄바이 네트워크를 기반으로 동작하는 NFT 마켓 플레이스입니다.</p>
                </div>
            </li>
            <li className="relative sm:mb-8 sm:mx-12 md:w-full md:px-12 md:mb-10 lg:w-full">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-white ring-8 shrink-0">
                        <svg className="w-4 h-4 text-blue-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="w-full bg-[#E6A15C] h-0.5 sm:mx-5 md:mx-7 lg:mx-5"></div>
                </div>
                <div className="mt-5 md:px-6 lg:px-4">
                    <div className="flex justify-between lg:flex-col">
                        <h3 className="text-lg font-semibold text-white">Gpt Music</h3>
                        <button onClick={openGptModal} className="relative inline-flex items-center justify-center lg:w-[84px] lg:mt-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className="relative px-4 py-1 lg:px-3 transition-all ease-in duration-75 bg-[#232a3f] text-white font-semibold rounded-md group-hover:bg-opacity-0">
                            상세설명
                            </span>
                            </button>
                            <Modal isOpenModal={isGptModalOpen} closeModal={closeGptModal} modalContent={<GptModal />} />
                    </div>
                    <p className="text-sm font-semibold text-[#8f98b3]">Chat GPT API를 이용하여 자신만의 악보를 생성할 수 있는 플랫폼입니다.</p>
                </div>
            </li>
            <li className="relative sm:mb-8 sm:mx-12 md:w-full md:px-12 md:mb-10 lg:w-full">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-white ring-8 shrink-0">
                        <svg className="w-4 h-4 text-blue-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="w-full bg-[#E6A15C] h-0.5 sm:mx-5 md:mx-7 lg:mx-5"></div>
                </div>
                <div className="mt-5 md:px-6 lg:px-4">
                    <div className="flex justify-between lg:flex-col">
                        <h3 className="text-lg font-semibold text-white">요리 커뮤니티</h3>
                        <button onClick={openPHLModal} className="relative inline-flex items-center justify-center lg:w-[84px] lg:mt-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className="relative px-4 py-1 lg:px-3 transition-all ease-in duration-75 bg-[#232a3f] text-white font-semibold rounded-md group-hover:bg-opacity-0">
                            상세설명
                            </span>
                            </button>
                            <Modal isOpenModal={isPHLModalOpen} closeModal={closePHLModal} modalContent={<PHLModal />} />
                    </div>
                    <p className="text-sm font-semibold text-[#8f98b3]">기본 CRUD를 바탕으로 만들어진 참여형 요리 커뮤니티입니다.</p>
                </div>
            </li>
            <li className="relative sm:mb-8 sm:mx-12 md:w-full md:px-12 md:mb-10 lg:w-full">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-white ring-8 shrink-0">
                        <svg className="w-4 h-4 text-blue-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="w-full bg-[#E6A15C] h-0.5 sm:mx-5 md:mx-7 lg:mx-5"></div>
                </div>
                <div className="mt-5 md:px-6 lg:px-4">
                    <div className="flex justify-between lg:flex-col">
                        <h3 className="text-lg font-semibold text-white">클론 코딩</h3>
                        <button onClick={openCloneModal} className="relative inline-flex items-center justify-center lg:w-[84px] lg:mt-2 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className="relative px-4 py-1 lg:px-3 transition-all ease-in duration-75 bg-[#232a3f] text-white font-semibold rounded-md group-hover:bg-opacity-0">
                            상세설명
                            </span>
                            </button>
                            <Modal isOpenModal={isCloneModalOpen} closeModal={closeCloneModal} modalContent={<CloneModal />} />
                    </div>
                    <p className="text-sm font-semibold text-[#8f98b3]">개발자로서 교육을 받고 진행한 첫 클론코딩 프로젝트입니다.</p>
                </div>
            </li>
        </ol>
    )
}