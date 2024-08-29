import React from 'react';

import { Metadata } from 'next';
import ImageCard from '@/app/vote/_components/ImageCard';

export const metadata: Metadata = {
  title: '투표',
  description: '여름방학 사진 콘테스트 투표 | 동화',
};

const VotingPage = () => {
  return (
    <div className={'flex flex-col h-full w-full justify-center'}>
      <ImageCard />
    </div>
  );
};

export default VotingPage;
