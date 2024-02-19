import { Pub } from "./types";
import { pubs } from "./placeholder-data";

const fetchPubs = (): Promise<Pub[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pubs);
    }, 1000);
  });
};

export default fetchPubs;
