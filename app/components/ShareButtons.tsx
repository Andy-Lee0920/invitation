"use client";
// import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ShareButtons() {
  //   const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  // 현재 페이지 URL 복사
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("주소가 복사되었습니다!");
    } catch (_err) {
      toast.error("주소 복사에 실패했습니다." + _err);
    }
  };

  // 카카오톡 SDK 로드
  //   const loadKakaoSDK = () => {
  //     if (window.Kakao && !isKakaoLoaded) {
  //       window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  //       setIsKakaoLoaded(true);
  //     }
  //   };

  // 카카오톡 공유하기
  //   const shareToKakao = () => {
  //     if (!window.Kakao) {
  //       toast.error("카카오톡 공유를 사용할 수 없습니다.");
  //       return;
  //     }

  //     window.Kakao.Link.sendDefault({
  //       objectType: "feed",
  //       content: {
  //         title: "초대장 공유",
  //         description: "우리의 특별한 날에 초대합니다! 🎉",
  //         imageUrl: `${window.location.origin}/image/basic/main.png`,
  //         link: {
  //           mobileWebUrl: window.location.href,
  //           webUrl: window.location.href,
  //         },
  //       },
  //     });
  //   };

  return (
    <div className="flex gap-4">
      {/* 주소 복사 버튼 */}
      <button
        onClick={copyToClipboard}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 w-full flex justify-between items-center"
      >
        <span className="text-left">📄 초대장 주소 복사하기</span>
      </button>

      {/* 카카오톡 공유 버튼 */}
      {/* <button
        onClick={shareToKakao}
        className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
      >
        🟡 카카오톡 공유
      </button> */}

      {/* 카카오톡 SDK 로드 (클라이언트에서만 실행) */}
      {/* <script
        async
        defer
        onLoad={loadKakaoSDK}
        src="https://developers.kakao.com/sdk/js/kakao.js"
      ></script> */}
    </div>
  );
}
