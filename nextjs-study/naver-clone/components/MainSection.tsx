import Image from "next/image";
import LoginBox from "@/components/LoginBox";
import NewsStand from "@/components/NewsStand";

export default function MainSection() {
  return (
    <main className="mt-[52px] flex justify-center">
      {/* 왼쪽 830px */}
      <div className="mr-[30px] w-[830px]">
        <aside className="mb-4 h-[130px] overflow-hidden rounded-lg border border-[#f5f5f5]"> {/* overflow-hidden → 이미지가 둥근 모서리 밖으로 튀어나오지 않게 잘라냄 */}
          <img src="/kurly.png" alt="컬리 광고" className="h-[130px] w-[830px]" />
        </aside>

        <NewsStand />
        <section className="mb-4 h-[560px] rounded-lg border border-[#f5f5f5] bg-gray-50" />
      </div>

      {/* 오른쪽 420px */}
      <div className="w-[420px]">
        <LoginBox />
        <aside className="mb-4 h-[240px] rounded-lg border border-[#f5f5f5] bg-gray-50" />
        <section className="mb-4 h-[236px] rounded-lg border border-[#f5f5f5] bg-gray-50" />
        <section className="mb-4 h-[236px] rounded-lg border border-[#f5f5f5] bg-gray-50" />
      </div>
    </main>
  );
}