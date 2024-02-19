export interface Pub {
  id: string;
  pubName: string;
  description: string;
  pubLocation: string;
  teamName: string;
  pubHours: [string, string]; // ["10:00", "23:00"] 형식
  menuImageSrc: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
}

export type PubLocation = {
  location: string;
  x: number;
  y: number;
  rotate: number;
};

type Sections = {
  [key: string]: PubLocation[];
};

export type PubLocations = {
  [key: number]: Sections;
};
