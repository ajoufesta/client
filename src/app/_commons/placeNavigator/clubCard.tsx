import { Club } from '@/app/lib/types';
import Image from 'next/image';
import React from 'react';

const imageUrls = {
  default: '/link-icon.svg',
  picture: '/picture-icon.svg',
  instagram: '/instagram-icon.svg',
};

interface Props {
  clubId: number;
  clubName: string;
  clubDetail: string;
  clubActivities: string[];
  link: string;
  clubRepresentative: string;
  linkIconId: 'picture' | 'instagram' | 'default';
  phoneNumber: string;
}

const COLOR_SET = ['#C7A7A1', '#E3D3D0', '#F1E9E8'];

const ClubCard = ({
  clubId,
  clubName,
  clubDetail,
  clubActivities,
  link,
  linkIconId,
  clubRepresentative,
  phoneNumber,
}: Props) => {
  const mock: Club = {
    clubId: clubId,
    clubName: clubName,
    clubDetail: clubDetail,
    clubActivities: clubActivities.slice(0, 1),
    link: link,
    linkIconId: linkIconId,
    section: 'A',
    clubRepresentative: clubRepresentative,
    phoneNumber: phoneNumber,
  };

  return (
    <div className="w-full relative bg-white rounded-2xl">
      <div className="w-full h-full min-h-[7.5rem] flex flex-col items-start px-[1.2rem] py-4">
        <div className={'flex flex-col mb-[0.8rem]'}>
          <div className="w-[3rem] h-full py-[0.3rem] rounded-[0.5rem] bg-brown-700 flex justify-center items-center">
            <span className="mt-[0.1rem] text-lg font-bold text-white">
              {clubId.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[1.2rem] font-bold text-brown-700">
            {clubName}
          </span>
          <div className="w-fit">
            <span className="text-[1rem] text-brown-700 highlight-2">
              {clubDetail}
            </span>
          </div>
        </div>

        {clubActivities.length > 0 && (
          <>
            {clubActivities.map((activity, index) => (
              <div
                key={index}
                style={{ backgroundColor: COLOR_SET[index] }}
                className={`mb-[0.2rem] px-[0.6rem] py-[0.3rem] rounded-lg`}
              >
                <span className="text-[0.8rem] text-brown-700">{activity}</span>
              </div>
            ))}
          </>
        )}
        <div className="absolute top-[1.2rem] right-[1.2rem] flex flex-col gap-1">
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              src={imageUrls[linkIconId]}
              alt="동아리 홍보 링크"
              width={26}
              height={26}
            />
          </a>

          <a href={`tel:${phoneNumber}`} onClick={(e) => e.stopPropagation()}>
            <Image
              src={'/call-icon.svg'}
              alt="동아리 임원 연락처"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
