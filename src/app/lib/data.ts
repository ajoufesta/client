const fetchPubs = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aolda.net/v1/pubs?day=1&section=A4`,
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

const fetchBooths = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `https://ajou-festi.aolda.net/v1/booths?day=1&section=A4`,
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

export { fetchPubs, fetchBooths };
