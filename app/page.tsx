import Image from "next/image";

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
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl font-bold mb-2">우리가 결혼합니다</h1>
          <p className="text-base">소중한 분들을 초대합니다</p>
        </div>
      </section>

      {/* 2. 예쁜 글귀 섹션 */}
      <section className="px-4 py-8 text-center">
        <p className="text-xl italic leading-relaxed">
          사랑은 함께 자라는 것입니다.
          <br />
          두 사람이 세상을 함께 바라보고,
          <br />
          서로를 비추며 빛나는 것입니다.
        </p>
      </section>

      {/* 3. 장소 및 날짜 (WHEN & WHERE) */}
      <section className="px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">WHEN & WHERE</h2>
        {/* 간단한 달력 느낌으로 구성 (원하시는 스타일에 맞게 수정) */}
        <div className="inline-block border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">2025년 5월</h3>
          <div className="grid grid-cols-7 gap-1 text-sm">
            <span className="text-gray-500">일</span>
            <span className="text-gray-500">월</span>
            <span className="text-gray-500">화</span>
            <span className="text-gray-500">수</span>
            <span className="text-gray-500">목</span>
            <span className="text-gray-500">금</span>
            <span className="text-gray-500">토</span>
            {/* 1일부터 ~ 30일(예시) */}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const isWeddingDay = day === 20; // 원하는 날짜에 강조
              return (
                <span
                  key={day}
                  className={`py-1 ${
                    isWeddingDay
                      ? "font-bold text-red-500 underline"
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
        <p className="mt-4 text-lg">2025년 5월 20일 오후 2시</p>
        <p className="text-lg">서울특별시 강남구 어딘가 웨딩홀</p>
      </section>

      {/* 4. 갤러리 (좌우로 스크롤 가능한 이미지 슬라이드) */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-4">GALLERY</h2>
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
      <section className="px-4 py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">INFORMATION</h2>
        <p className="text-gray-600 leading-relaxed">
          식사와 주차 안내, 축하 화환 관련 등 필요한 안내 사항을 자유롭게
          기재하세요.
        </p>
        {/* 필요 시 아이콘 추가 예시 */}
        <div className="flex justify-center items-center gap-8 mt-4">
          <div className="flex flex-col items-center">
            <p className="mt-2 text-sm">식사 안내</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-sm">주차 안내</p>
          </div>
        </div>
      </section>
    </div>
  );
}
