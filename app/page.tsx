import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* 1. 상단 메인 사진 (Hero Section) */}
      <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
        {/* 필요 시 objectPosition, alt 변경 */}
        <Image
          src="/image/basic/main.png"
          alt="메인 이미지"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 사진 위에 반투명 오버레이와 문구 */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
          <p className="text-3xl mb-2">준현이와 민희의 상견례</p>
          <br />
          <p className="text-3xl mb-2">가족 분들을 초대합니다</p>
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
          어느 따뜻한 봄날 4월에 귀한 분들을 모십니다.
          <br />
          <br />
          곁에 있을 때 가장 나다운 모습이 되게 하는 사람과
          <br />
          평생 함께 하는 약속을 하려고 합니다.
          <br />
          <br />
          인연이 가족으로 이어지는 첫걸음, <br />두 집안의 따뜻한 만남에 함께해
          주세요.
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

      {/* 4. 갤러리 (좌우로 스크롤 가능한 이미지 슬라이드) */}
      <section className="px-4 py-20">
        <div className="flex items-center justify-center mb-5">
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
          <span className="mx-3 text-gray-500">GALLERY</span>
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
        </div>
        {/* 스크롤을 위해 overflow-x-auto와 flex 사용 */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
          {/* 예시 이미지들: 필요한 만큼 반복 */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="relative w-72 h-48 flex-shrink-0 snap-center"
            >
              <Image
                src={`/image/gallery/gallery${i + 1}.png`}
                alt={`이미지 ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. 추가 정보 섹션 (INFORMATION) */}
      <section className="px-4 py-20 text-center">
        <div className="flex items-center justify-center mb-5">
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
          <span className="mx-3 text-gray-500">INFORMATION</span>
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          선물이랑 화환은 정중히 사양합니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          음주 및 흡연은 금합니다.
        </p>
      </section>

      {/* 3. 장소 및 날짜 (WHEN & WHERE) */}
      <section className="px-4 pt-14 text-center">
        <div className="flex items-center justify-center mb-5">
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
          <span className="mx-3 text-gray-500">MEETING DAY</span>
          <div className="w-1/4 border-t border-deep-green opacity-30"></div>
        </div>
        {/* 간단한 달력 느낌으로 구성 (원하시는 스타일에 맞게 수정) */}
        <div className="inline-block rounded-md p-10">
          <h3 className="text-xl font-semibold mb-3 text-center">2025년 4월</h3>
          <div className="grid grid-cols-7 gap-2 text-base text-center">
            {["일", "월", "화", "수", "목", "금", "토"].map((day, i) => (
              <span
                key={i}
                className={`font-semibold ${
                  i === 0 ? "text-red-500" : "text-gray-600"
                }`}
              >
                {day}
              </span>
            ))}

            {/* 빈 칸 (월요일 시작을 맞추기 위해) */}
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={`empty-${i}`} />
            ))}

            {/* 날짜 출력 */}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const isHighlighted = day === 26;
              const isSunday = (i + 2) % 7 === 0;
              return (
                <span
                  key={day}
                  className={`py-2 px-3 rounded-full ${
                    isHighlighted
                      ? "bg-pink-300 text-white font-bold"
                      : isSunday
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>

        {/* 시간/장소 안내 */}
        <br />
        <p className="mt-4 text-lg">2025년 4월 26 오후 1시 30분</p>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 위치 섹션 제목 */}
          <div className="flex items-center mb-8">
            <div className="flex-grow border-t border-deep-green opacity-30"></div>
            <span className="mx-3 text-gray-500">LOCATION</span>
            <div className="flex-grow border-t border-deep-green opacity-30"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">단미그린비</h1>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
            <span>📍</span> 서울특별시 강남구 밤고개로14길 13-50
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
          <p className="font-medium text-gray-800">🚇 지하철</p>
          <ul className="list-disc ml-6 text-sm mt-1">
            <li>3호선, 분당선 수서역 5-2번 출구에서 도보 15분</li>
            <li>GTX-A 노선 수서역 이용 가능</li>
            <li>SRT 수서역 이용 가능</li>
          </ul>

          <p className="font-medium text-gray-800 mt-4">🚖 택시</p>
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
      </section>
    </div>
  );
}
