export const fetchPubs = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aoldacloud.com/v1/pubs?day=1&section=A4`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pubs");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
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
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchBooths = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aoldacloud.com/v1/boothes?day=1&section=seoungho1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch booths");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDongbakBooths = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aoldacloud.com/v1/clubs?day=${day}&section=${section}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch dongbak booths");
    }

    const data = await response.json();
    console.log(data, "동박부스");
    return data;
  } catch (error) {
    console.error(error);
  }
};
