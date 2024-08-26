import { Club } from '@/app/lib/types';
import Image from 'next/image';

interface Props {
  boothId: number;
}

const ClubInfo = ({ boothId }: Props) => {
  const mock: Club = {
    clubId: 1,
    clubName: 'testName',
    clubDetail: '놀러오세요',
    clubActivities: ['아주페스타 개발하기'],
    link: 'www.google.com',
    linkIconId: 'default',
    section: 'A',
    phoneNumber: '010-0000-0000',
  };

  return (
    <div className="w-full h-fit min-h-[8rem] flex-shrink-0 bg-white border border-brown-400 rounded-xl p-6 relative">
      <h1 className="w-[14rem] block text-2xl leading-4 font-bold text-brown-500 mb-2">
        {mock.clubName}
      </h1>
      <span className="text-normal text-brown-500 highlight-2">
        {mock.clubDetail}
      </span>
      {mock.clubActivities[0] && (
        <div className="mt-2 px-2 py-1 rounded-lg bg-brown-400">
          <span className="text-sm text-brown-500">
            {mock.clubActivities[0]}
          </span>
        </div>
      )}
      {mock.clubActivities[1] && (
        <div className="mt-1 px-2 py-1 rounded-lg bg-brown-300">
          <span className="text-sm text-brown-500">
            {mock.clubActivities[1]}
          </span>
        </div>
      )}
      {mock.clubActivities[2] && (
        <div className="mt-1 px-2 py-1 rounded-lg bg-brown-200">
          <span className="text-sm text-brown-500">
            {mock.clubActivities[2]}
          </span>
        </div>
      )}

      <div className="absolute top-6 right-5 flex gap-1">
        <a
          href={`tel:${mock.phoneNumber}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={'/call-icon.svg'}
            alt="동아리 임원 연락처"
            width={24}
            height={24}
          />
        </a>
        <a href={mock.link} target="_blank" rel="noreferrer">
          <Image
            src={'/link-icon.svg'}
            alt="동아리 홍보 링크"
            width={24}
            height={24}
          />
        </a>
        <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-brown-500 flex justify-center items-center">
          <span className="mt-[0.1rem] text-xl font-bold text-white">
            {mock.clubId.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClubInfo;
