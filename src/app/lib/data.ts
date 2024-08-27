import { GamePlayer, Category } from './types';
import { getKoreanTime } from './utils';
import { CATEGORY_IMAGE_IDS } from './constants'; 

//사용자 공연 목록 GET
export const fetchStageData = async (day: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/shows?day=${day}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch pubs');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchDongbakBooths = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/clubs?day=${day}&section=${section}`,
      {
        next: {
          revalidate: 900, // 15분
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch dongbak booths');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDongbakBooth = async (boothId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/clubs/id?id=${boothId}`,
      {
        next: {
          revalidate: 900, // 15분
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch dongbak booths');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 요청한 시간도 같이 return하도록 수정
export const fetchGamePlayers = async (): Promise<{
  players: GamePlayer[];
  currentTime: string;
}> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/game`, {
    next: {
      tags: ['game'],
      revalidate: 300, // 5분
    },
  });

  if (!response.ok) {
    throw new Error('공기놀이 기록을 가져오는데 실패했습니다.');
  }

  const players = await response.json();
  // 현재 시간을 ISO 형식으로 가져오고, 한국시간대로 보여주기 위해 수정
  const currentTime = getKoreanTime();

  return { players, currentTime };
};

export const postSelectedImages = async (selectedImages: Record<Category, string | null>): Promise<void> => {
  const selectedImageIds = Object.entries(selectedImages).reduce((acc, [category, image]) => {
    if (image) {
      const imageId = CATEGORY_IMAGE_IDS[category as Category][image];
      acc[category] = imageId;
    }
    return acc;
  }, {} as Record<string, number>);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/vote/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedImages: selectedImageIds }),
    });

    if (!response.ok) {
      throw new Error('API 요청 실패');
    }
  } catch (error) {
    console.error('선택 전송 중 오류 발생:', error);
    throw error; // 필요시 호출하는 쪽에서 에러를 처리할 수 있도록 에러를 던집니다.
  }
};