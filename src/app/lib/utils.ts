import { FESTIVAL_DATE } from "./constants";
import { emptyPub } from "./placeholder-data";
import { PubLocation, Pub } from "./types";

/**
 * 현재 날짜가 축제 기간 중 몇 번째 날인지 확인
 * @param {Date} date - 날짜
 * @returns {number} - 1, 2, 3 | -1
 */
export const getCurrentDay = (date: Date): number => {
  const currentDate = date.toISOString().slice(0, 10);

  return FESTIVAL_DATE.includes(currentDate)
    ? FESTIVAL_DATE.findIndex((date) => date === currentDate) + 1
    : -1;
};

/**
 * 축제 기간 중 선택된 날이 오늘인지 확인
 * @param {number} day - 1, 2, 3
 * @returns {boolean} true | false
 */
export const isToday = (day: number): boolean => {
  const today = new Date().toISOString().slice(0, 10);
  return FESTIVAL_DATE[day - 1] === today;
};

/**
 * YYYY-MM-DD 형식의 날짜를 MM월 DD일 형식으로 변환
 * @param {string} date - "YYYY-MM-DD"
 * @returns {string} - "MM월 DD일"
 */
export const getFormattedDate = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${month}월 ${day}일`;
};

/**
 * pubs에서 location에 해당하는 pub을 찾아 반환 또는 emptyPub 반환
 * @param {Pub[]} pubs - pub 배열
 * @param {Location} location - location
 * @returns {Pub} pub | emptyPub
 */
export const getPubByLocation = (pubs: Pub[], location: PubLocation): Pub => {
  return pubs.find((pub) => pub.pubLocation === location.location) || emptyPub;
};
