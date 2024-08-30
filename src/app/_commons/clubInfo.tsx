import React, { useState, useEffect } from 'react';
import { Club } from '@/app/lib/types';
import Image from 'next/image';
import { fetchDongbakBooth } from '../lib/data';

interface Props {
  boothId: number;
}

const ClubInfo = ({ boothId }: Props) => {
  const [clubInfo, setClubInfo] = useState<Club | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubInfo = async () => {
      setLoading(true);
      try {
        const boothInfo = await fetchDongbakBooth(boothId);
        if (boothInfo) {
          const mock: Club = {
            clubId: boothInfo.clubId,
            clubName: boothInfo.clubName,
            clubDetail: boothInfo.clubDetail,
            clubActivities: boothInfo.clubActivities,
            link: boothInfo.link,
            linkIconId: boothInfo.linkIconId,
            clubRepresentative: boothInfo.clubRepresentative,
            section: 'A',
            phoneNumber: boothInfo.phoneNumber,
          };
          setClubInfo(mock);
        }
      } catch (error) {
        console.error('Failed to fetch club info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubInfo();
  }, [boothId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!clubInfo) {
    return <div>No club info available</div>;
  }

  return (
    <div className="w-full h-fit min-h-[8rem] flex-shrink-0 bg-white border border-brown-400 rounded-xl p-6 relative">
      <h1 className="w-[14rem] block text-2xl leading-4 font-bold text-brown-500 mb-2">
        {clubInfo.clubName}
      </h1>
      <span className="text-normal text-brown-500 highlight-2">
        {clubInfo.clubDetail}
      </span>
      {clubInfo.clubActivities[0] && (
        <div className="mt-2 px-2 py-1 rounded-lg bg-brown-400">
          <span className="text-sm text-brown-500">
            {clubInfo.clubActivities[0]}
          </span>
        </div>
      )}
      {clubInfo.clubActivities[1] && (
        <div className="mt-1 px-2 py-1 rounded-lg bg-brown-300">
          <span className="text-sm text-brown-500">
            {clubInfo.clubActivities[1]}
          </span>
        </div>
      )}
      {clubInfo.clubActivities[2] && (
        <div className="mt-1 px-2 py-1 rounded-lg bg-brown-200">
          <span className="text-sm text-brown-500">
            {clubInfo.clubActivities[2]}
          </span>
        </div>
      )}

      <div className="absolute top-6 right-5 flex gap-1">
        <a
          href={`tel:${clubInfo.phoneNumber}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={'/call-icon.svg'}
            alt="동아리 임원 연락처"
            width={24}
            height={24}
          />
        </a>
        <a href={clubInfo.link} target="_blank" rel="noreferrer">
          <Image
            src={'/link-icon.svg'}
            alt="동아리 홍보 링크"
            width={24}
            height={24}
          />
        </a>
        <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-brown-500 flex justify-center items-center">
          <span className="mt-[0.1rem] text-xl font-bold text-white">
            {clubInfo.clubId.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClubInfo;
