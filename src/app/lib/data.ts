export const fetchPubs = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aolda.net/v1/pubs?day=1&section=A4`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pubs");
    }

    const data = await response.json();
    console.log(data, "data");
    return data;
  } catch (error) {
    console.log(error);
    return []; // 빈 배열을 반환하거나 다른 예외 처리 방법을 선택할 수 있습니다.
  }
};

//사용자 공연 목록 GET
export const fetchStageData = async (day: number) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aoldacloud.com/v1/shows?day=${day}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pubs");
    }
    const data = await response.json();
    console.log(data, "data");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
