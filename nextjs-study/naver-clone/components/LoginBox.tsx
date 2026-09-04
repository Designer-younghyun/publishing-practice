export default function LoginBox() {
  return (
    <section className="mb-4 flex h-[164px] flex-col items-center rounded-lg border border-[#f5f5f5] px-5 pb-[18px] pt-[21px]">
      <p className="leading-5 font-medium">네이버를 더 안전하고 편리하게 이용하세요</p>   {/* leading-5 = line-height: 20px */}
      <a href="#" className="mt-[13px] flex h-14 w-[380px] items-center justify-center rounded bg-[#03c75a] text-white">
        <i
          className="mr-2 mt-[3px] inline-block h-[14px] w-[72px] bg-[url('/sp_main.png')] bg-[length:471px_455px] bg-no-repeat"
          style={{ backgroundPosition: "-130px -301px" }}
        />
        로그인
      </a>

      <div className="mt-4 flex items-center gap-3 text-sm">
        <a href="#">아이디 찾기</a>
        <span className="h-3 w-px bg-[#d3d5d7]" /> {/* 구분선. 원래는 ::before / ::after 가상요소 > <span> w-px = width: 1px,  h-3 = height: 12px */}
        <a href="#">비밀번호 찾기</a>
        <span className="h-3 w-px bg-[#d3d5d7]" />
        <a href="#">회원가입</a>
      </div>
    </section>
  );
}