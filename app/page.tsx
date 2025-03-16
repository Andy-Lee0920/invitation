import MusicPlayer from "@/public/components/MusicPlayer";
import Image from "next/image";
import Link from "next/link";
import Gallery from "./components/Gallery";
import ShareButtons from "./components/ShareButtons";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-gray-800">
        {/* 1. 상단 메인 사진 (Hero Section) */}
        <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
          <Image
            src="/image/basic/main.png"
            alt="메인 이미지"
            fill
            className="object-cover object-center"
            priority
          />

          {/* MusicPlayer를 화면 최좌측 상단에 고정 */}
          <div className="fixed top-0 left-0 z-50 p-6">
            <MusicPlayer />
          </div>

          {/* 사진 위에 반투명 오버레이와 문구 */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
            <p className="text-3xl mb-2">준현이와 민희의 상견례</p>
            <br />
            <p className="text-3xl mb-2">가족분들을 초대합니다</p>
          </div>
        </section>

        <section className="px-4 py-14 text-center">
          {" "}
          <div className="flex items-center justify-center mb-5">
            <div className="w-1/4 border-t border-deep-green opacity-30"></div>
            <span className="mx-3 text-gray-500">초대장</span>
            <div className="w-1/4 border-t border-deep-green opacity-30"></div>
          </div>
          <div className="relative w-full h-16 ">
            <Image
              src="/image/basic/name.png"
              alt="이름 가운데"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
        </section>

        <section className="text-center pb-8">
          <p className="text-lg leading-relaxed">
            어느 봄날 4월에 귀한 분들을 모십니다.
            <br />
            <br />
            저희 두 사람의 만남을
            <br />
            예쁘게 지켜봐주신
            <br />
            양가 가족분들께 감사의 마음을 담아
            <br />
            작은 식사 자리를 마련했습니다.
            <br />
            <br />
            인연이 가족으로 이어지는 첫걸음, <br />두 집안의 따뜻한 만남에
            함께해 주세요.
            <br />
          </p>
          <br />
          <br />
          <p className="text-lg leading-relaxed">
            <span className="font-bold">이영무· 조용우</span> 의 아들&nbsp;
            <span className="font-bold">준현</span>
            <br />
            <span className="font-bold">조창환 · 정호경</span> 의 딸&nbsp;
            <span className="font-bold">민희</span>
            <br />
          </p>
        </section>

        {/* 5. 추가 정보 섹션 (INFORMATION) */}
        <section className="px-4 py-20 text-center">
          <div className="flex items-center justify-center mb-5">
            <div className="w-1/4 border-t border-deep-green opacity-30"></div>
            <span className="mx-3 text-gray-500">MENU</span>
            <div className="w-1/4 border-t border-deep-green opacity-30"></div>
          </div>

          <h1 className="text-2xl font-bold text-gray-800">귀연정찬</h1>
          <h3 className="text-base text-gray-400">貴緣正贊</h3>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-5">
            홍삼요리
            <br />
            특선죽
            <br />
            물김치 샐러드
            <br />
            모둠숙회 (3종류)
            <br />
            탕평채
            <br />
            궁중잡채 <br />
            냉채요리 <br />
            모듬전유화 <br />
            칠절판 <br />
            계절요리 <br />
            궁중신선로 <br />
            대하요리 <br />
            생선요리 <br />
            해물볶음 <br />
            갈비찜 또는 갈비구이 <br />
            식사 및 후식 <br />
          </p>
        </section>

        {/* 4. 갤러리 (좌우로 스크롤 가능한 이미지 슬라이드) */}
        <section className="px-4">
          <Gallery />
        </section>

        <div className="flex items-center justify-center mb-10">
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
          <span className="mx-3 text-gray-500">MEETING DAY</span>
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
        </div>
        {/* 시간/장소 안내 */}
        <div className="text-center pb-8">
          <p className="mt-4 text-base font-semibold ">
            2025년 4월 26일 오후 1시 30분
          </p>
          <p className="mt-4 text-sm">Saturday, April 26, 2025, 1:30 PM</p>
        </div>
        {/* 달력 컨테이너 */}
        <div className="inline-block rounded-md p-10">
          <h3 className="text-xl font-semibold mb-3 text-center">2025년 4월</h3>

          {/* 요일 */}
          <div className="grid grid-cols-7 gap-2 text-base text-center">
            {["일", "월", "화", "수", "목", "금", "토"].map((day, i) => (
              <div
                key={i}
                className={`flex items-center justify-center font-semibold h-10 w-10 ${
                  i === 0 ? "text-red-500" : "text-gray-600"
                }`}
              >
                {day}
              </div>
            ))}

            {/* 빈 칸 (월요일 시작을 맞추기 위해) */}
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={`empty-${i}`} className="h-10 w-10"></div>
            ))}

            {/* 날짜 출력 */}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const isHighlighted = day === 26;
              const isSunday = (i + 2) % 7 === 0;
              return (
                <div
                  key={day}
                  className={`flex items-center justify-center h-10 w-10 rounded-full text-lg font-medium ${
                    isHighlighted
                      ? "bg-pink-300 text-white font-bold"
                      : isSunday
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        <section className="bg-white py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* 위치 섹션 제목 */}
            <div className="flex items-center mb-8">
              <div className="flex-grow border-t border-deep-green opacity-30"></div>
              <span className="mx-3 text-gray-500">LOCATION</span>
              <div className="flex-grow border-t border-deep-green opacity-30"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">단미그린비</h1>
            <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
              서울특별시 강남구 밤고개로14길 13-50
            </p>
          </div>

          {/* 지도 이미지 (네이버 지도 캡처 또는 iframe) */}
          <div className="mt-6">
            <Image
              src="/image/basic/map-image.png" // 📌 지도 이미지 (public 폴더에 넣어야 함)
              alt="위치 지도"
              width={600}
              height={400}
              className="mx-auto rounded-lg"
            />
          </div>
          {/* 네이버 지도 & 카카오 지도 링크 */}
          <div className="flex justify-center gap-6 mt-4">
            <Link
              href="https://map.naver.com/v5/search/단미그린비"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md"
            >
              <img
                src="/image/logo/naverMap.png"
                alt="네이버 지도 아이콘"
                className="w-6 h-6"
              />
              네이버지도
            </Link>
            <Link
              href="https://map.kakao.com/link/search/단미그린비"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md"
            >
              <img
                src="/image/logo/kakaoMap.png"
                alt="카카오맵 아이콘"
                className="w-6 h-6"
              />
              카카오맵
            </Link>
          </div>
          {/* 교통 안내 */}
          <div className="max-w-2xl mx-auto mt-10 text-gray-700">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              교통 안내
            </h2>
            <p className="font-medium text-gray-800">지하철</p>
            <ul className="list-disc ml-6 text-sm mt-1">
              <li>3호선, 분당선 수서역 5-2번 출구에서 도보 15분</li>
              <li>GTX-A 노선 수서역 이용 가능</li>
              <li>SRT 수서역 이용 가능</li>
            </ul>

            <p className="font-medium text-gray-800 mt-4">택시</p>
            <ul className="list-disc ml-6 text-sm mt-1">
              <li>수서역 5-2번 출구에서 택시 3분</li>
            </ul>
          </div>

          {/* 주차 안내 */}
          <div className="max-w-2xl mx-auto mt-8 text-gray-700">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              주차 안내
            </h2>
            <ul className="list-disc ml-6 text-sm mt-1">
              <li>넓은 식당 건물 주차장 이용 가능</li>
              <li>발렛비 무료</li>
            </ul>
          </div>
          <main className="mt-10">
            {/* 공유 버튼 추가 */}
            <ShareButtons />

            {/* Toast 팝업 표시 */}
            <Toaster position="top-center" reverseOrder={false} />
          </main>
        </section>
      </div>
    </>
  );
}
