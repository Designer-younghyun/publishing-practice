import Link from "next/link";
import IconButton from "@/components/IconButton";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <form className="flex h-[58px] w-[708px] items-center rounded-[33px] border border-[#03c75a] hover:shadow-md">
        <Link href="/" aria-label="네이버" className="flex h-[58px] w-[67px] items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#03c75a]">
            <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
          </svg>
        </Link>

        <input
          type="text"
          aria-label="검색어 입력"
          placeholder="검색어를 입력하세요."
          className="h-[58px] w-[480px] text-2xl outline-none placeholder:text-white focus:placeholder:text-[#e4e4e4]"
        />

        <div className="flex flex-1 items-center justify-end gap-2 pr-[9px]"> {/*flex-1 — 원래 CSS의 #search-right { flex: 1 }입니다. **"남은 공간을 전부 차지해라"**는 뜻*/}
          <IconButton label="입력도구" position="-100px -416px" size={24} />
          <button
            type="button"
            aria-label="AI 검색"
            className="h-10 w-[71px] cursor-pointer rounded-[33px] bg-[#e9faf9] bg-[url('/AI.png')] bg-cover bg-center bg-no-repeat"
          />
        </div>
      </form>
    </div>
  );
}