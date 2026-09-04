import Image from "next/image";
import { NEWS_TABS } from "@/data/tabs";

export default function NewsStand() {
  return (
    // 전체 436px 고정. flex-col 로 [위쪽 내용]과 [푸터]를 세로로 나눔
    <section className="mb-4 flex h-[436px] flex-col rounded-lg border border-[#f5f5f5]">

      {/* flex-1 = 푸터를 뺀 남은 공간 전부 차지 (원래 #main-newstand-top) */}
      <div className="flex-1 p-5">

        {/* ══ 탭 헤더 ══ */}
        <header className="mb-[17px] flex items-center text-[1.2rem] leading-[23px]">
          {NEWS_TABS.map((tab) => (
            <span key={tab.name} className="flex items-center">

              {/* divider 가 "dot" 일 때만 4px 동그라미를 그림 */}
              {tab.divider === "dot" && (
                <span className="mx-1.75 block h-1 w-1 rounded-full bg-black/10" />
              )}

              {/* divider 가 "slash" 일 때만 기울어진 세로선을 그림 */}
              {tab.divider === "slash" && (
                <span className="mx-3.25 block h-3.75 w-px skew-x-[-15deg] bg-black/10" />
              )}

              {/* 선택된 탭은 검정, 나머지는 반투명 검정 */}
              
                <a href="#"
                className={
                  tab.active
                    ? "font-bold text-black hover:underline"
                    : "font-bold text-black/50 hover:underline"
                }
                >
                {tab.name}
              </a>
            </span>
          ))}
        </header>

        {/* ══ 회색 바 ══ */}
        <div className="flex h-[50px] items-center rounded bg-[#f5f5f5] px-5 py-3 text-[#2e2e2e]">
          <div className="flex flex-1 items-center">
            <a href="#" className="flex items-center gap-[5px] hover:underline">
              전체언론사
              {/* 아래쪽 화살표 아이콘 (스프라이트 9×6) */}
              <span
                className="block h-[6px] w-[9px] bg-[url('/sp_main.png')] bg-[length:471px_455px] bg-no-repeat"
                style={{ backgroundPosition: "-461px -319px" }}
              />
            </a>

            {/* 세로 구분선 — 원래 #main-newstand-animation::before */}
            <span className="mx-3 block h-3 w-px bg-[#d3d5d7]" />

            <a href="#" className="hover:underline">연합뉴스</a>

            {/* 3px 동그라미 구분자 */}
            <span className="mx-1.5 block h-0.75 w-0.75 rounded-full bg-[#d3d5d7]" />

            <a href="#" className="hover:underline">
              이태원특조위, 구조 트라우마로 숨진 소방관 2명 희생자 인정
            </a>
          </div>

          <div className="flex items-center">
            <a href="#" className="hover:underline">뉴스스탠드</a>
            <a href="#" className="pl-3 font-bold hover:underline">뉴스홈</a>
          </div>
        </div>

        {/* ══ 6열 × 4행 = 24칸 그리드 ══
            gap-px + 컨테이너 회색배경 + 셀 흰배경
            → 간격이 1px 선처럼 보이는 기법 (원래 CSS 주석에 쓰신 그것) */}
        <div className="mt-[18px] grid grid-cols-6 grid-rows-[repeat(4,56px)] gap-px overflow-hidden rounded border border-[#f5f5f5] bg-[#f5f5f5]">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center bg-white">
              <Image src="/new.png" alt="언론사 로고" width={62} height={20} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ 푸터 ══ */}
      <footer className="flex h-[57px] items-center gap-2 border-t border-[#f5f5f5] px-5">
        <button type="button" className="h-6 w-6 rounded border border-[#e5e5e5]">
          <span className="sr-only">이전</span>
        </button>
        <button type="button" className="h-6 w-6 rounded border border-[#e5e5e5]">
          <span className="sr-only">다음</span>
        </button>
        <span className="text-[13px] text-[#666]">스포츠 소식 더보기 1페이지 전체 / 4</span>
        <button type="button" className="ml-auto h-6 w-6 rounded border border-[#e5e5e5]">
          <span className="sr-only">목록보기</span>
        </button>
        <button type="button" className="h-6 w-6 rounded border border-[#e5e5e5]">
          <span className="sr-only">격자보기</span>
        </button>
      </footer>
    </section>
  );
}