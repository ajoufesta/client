import React, { useState, useEffect } from 'react';
import { Club } from '@/app/lib/types';
import Image from 'next/image';
import { fetchDongbakBooth } from '../lib/data';

interface Props {
  boothId: number;
}

const COLOR_SET = ['#C7A7A1', '#E3D3D0', '#F1E9E8'];

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
    <div className="flex flex-col w-full h-fit bg-white border-[0.2rem] border-brown-700 rounded-[2rem] px-[2rem] py-[1.6rem] relative">
      <div className="flex flex-col gap-[0.7rem] h-full mb-[1rem]">
        <h1 className="w-full text-[1.8rem] font-bold text-brown-700">
          {clubInfo.clubName}
        </h1>
        <span className="w-fit text-[1.4rem] text-brown-700 highlight-2">
          {clubInfo.clubDetail}
        </span>
      </div>

      {clubInfo.clubActivities.length > 0 && (
        <>
          {clubInfo.clubActivities.map((activity, index) => (
            <div
              key={index}
              style={{ backgroundColor: COLOR_SET[index] }}
              className={`mt-2 px-2 py-1 rounded-lg`}
            >
              <span className="text-[1.2rem] text-brown-700">{activity}</span>
            </div>
          ))}
        </>
      )}

      <div className="absolute top-[1.6rem] right-[2rem] flex gap-1">
        <a
          href={`tel:${clubInfo.phoneNumber}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={'/call-icon.svg'}
            alt="동아리 임원 연락처"
            width={30}
            height={30}
          />
        </a>
        <a href={clubInfo.link} target="_blank" rel="noreferrer">
          <Image
            src={'/link-icon.svg'}
            alt="동아리 홍보 링크"
            width={30}
            height={30}
          />
        </a>
        <div className="w-[3rem] h-[3rem] rounded-full bg-brown-700 flex justify-center items-center">
          <span className="mt-[0.1rem] text-xl font-bold text-white">
            {clubInfo.clubId.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClubInfo;
