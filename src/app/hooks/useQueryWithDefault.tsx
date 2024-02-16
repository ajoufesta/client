"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { getCurrentDay } from "../lib/utils";

export const useQueryWithDefault = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  /**
   * 원하는 쿼리 파라미터를 가져오는 함수, 만약 없을 경우 defaultValue로 설정한 값을 반환한다.
   * @param {string} param - 값을 가져올 쿼리 파라미터
   * @param {string} defaultValue - 쿼리 파라미터가 없을 경우 반환할 기본값
   * @returns
   */
  const getQueryParam = (param: string, defaultValue: string) => {
    return searchParams.get(param) || defaultValue;
  };

  /**
   * day, section 쿼리값을 가져온다. 없을 경우 기본값으로 오늘 날짜에 해당하는 day, seongho1을 반환한다.
   * @returns {object} - { day: string, section: string }
   */
  const getQueryParamsWidthDefault = () => {
    const day = Number(
      getQueryParam("day", getCurrentDay(new Date()).toString()),
    );
    const section = getQueryParam("section", "seongho1");
    return { day, section };
  };

  const getQueryUrl = (day: number, section: string) => {
    const params = new URLSearchParams();
    params.set("day", day.toString());
    params.set("section", section);
    return `${pathname}?${params.toString()}`;
  };

  return {
    getQueryParam,
    getQueryParamsWidthDefault,
    getQueryUrl,
  };
};
