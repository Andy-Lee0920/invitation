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
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
          <p className="text-3xl mb-2">준현이와 민희의 상견례</p>
          <br />
          <p className="text-3xl mb-2">가족 분들을 초대합니다</p>
        </div>
      </section>

      <section className="px-4 py-14 text-center">
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
      </section>

      {/* 3. 장소 및 날짜 (WHEN & WHERE) */}
      <section className="px-4 py-14 text-center">
        <h2 className="text-2xl font-bold mb-4">WHEN & WHERE</h2>
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
        <p className="text-lg">서울특별시 강남구 자곡동 단미그린비 2층</p>
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
