export type LiveItem = {
  id: number;
  title: string;
  viewers: string;
  channel: string;
  followers: string;
  thumb: string;
  badge: "LIVE" | "AD";
};

export const LIVE_ITEMS: LiveItem[] = [
  { id: 1, title: "구스 구스 덕", viewers: "6,560", channel: "달콤레나 씨", followers: "10.5만명", thumb: "/images/live1.jpg", badge: "LIVE" },
  { id: 2, title: "구스 구스 덕", viewers: "4,728", channel: "이춘향",       followers: "15.7만명", thumb: "/images/live2.jpg", badge: "LIVE" },
  { id: 3, title: "천하제일상거상", viewers: "3,653", channel: "울프",        followers: "37.9만명", thumb: "/images/live3.jpg", badge: "LIVE" },
];