export type Service = {
  name: string;
  href: string;
  position: string;
  image?: string;
  hideLabel?: boolean;
};

export const SERVICES: Service[] = [
  { name: "메일",   href: "#", position: "-205px -219px" },
  { name: "카페",   href: "#", position: "-41px -219px" },
  { name: "블로그", href: "#", position: "0px -219px" },
  { name: "쇼핑",   href: "#", position: "-41px -260px" },
  { name: "뉴스",   href: "#", position: "-270px -205px" },
  { name: "증권",   href: "#", position: "-123px -260px" },
  { name: "부동산", href: "#", position: "0px -260px" },
  { name: "지도",   href: "#", position: "-270px 0px" },
  { name: "웹툰",   href: "#", position: "-164px -260px" },
  { name: "치지직", href: "#", position: "0 0", image: "/header_nav.png" },
  { name: "더보기", href: "#", position: "-270px -164px", hideLabel: true },
];