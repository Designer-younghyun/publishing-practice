export type Tab = {
  name: string;
  active?: boolean;              // 현재 선택된 탭인지
  divider?: "dot" | "slash";     // 왼쪽에 붙는 구분자 종류
};

export const NEWS_TABS: Tab[] = [
  { name: "뉴스스탠드", active: true },
  { name: "언론사편집", divider: "dot" },
  { name: "엔터",       divider: "slash" },
  { name: "스포츠",     divider: "slash" },
  { name: "경제",       divider: "slash" },
];