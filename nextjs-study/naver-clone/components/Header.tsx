import IconButton from "@/components/IconButton";

export default function Header() /*"이 덩어리 이름은 Header야, 밖에서 가져다 써도 돼" — 컴포넌트 껍데기*/{
  return /*"이 안에 있는 JSX가 Header의 내용이야"*/(
    <div className="flex items-center gap-4 py-2">
      <IconButton label="메뉴" position="-311px -151px" />
      <IconButton label="네이버페이" position="0px -318px" />

      <div className="ml-auto flex items-center gap-4">
        <IconButton label="알림" position="-311px -217px" />
        <IconButton label="장바구니" position="-66px -318px" />
      </div> {/* 여기에 왜 div 쓰지? - 오른쪽 정렬을 위해 */}
    </div>
  );
}