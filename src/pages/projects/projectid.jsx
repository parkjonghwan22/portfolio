import { NftModal } from "./Nftproject";
import { GptModal } from "./Gptproject";

const projects = [
  {
    id: 1,
    title: "루프탑 [ 기업 협약 프로젝트 ]",
    description: "뭄바이 네트워크를 기반으로 동작하는 NFT 마켓 플레이스입니다.",
    modalContent: <NftModal />,
  },
  {
    id: 2,
    title: "Gpt Music",
    description: "Chat GPT API를 이용하여 자신만의 악보를 생성할 수 있는 플랫폼입니다.",
    modalContent: <GptModal />,
  },
];

export default projects;