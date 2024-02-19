export interface Pub {
  id: string;
  pubName: string;
  description: string;
  pubLocation: string;
  pubHours: [string, string]; // ["10:00", "23:00"] 형식
  teamName: string;
  menuImageSrc: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
}
