export interface Pub {
  pubId: null;
  pubName: string;
  teamName: string;
  phoneNum: string;
  description: string;
  menuImageSrc: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
  pubLocation: string;
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
