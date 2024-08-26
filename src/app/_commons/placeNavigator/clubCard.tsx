import { Club } from '@/app/lib/types';
import Image from 'next/image';

const imageUrls = {
  default: '/link-icon.svg',
  picture: '/picture-icon.svg',
  instagram: '/instagram-icon.svg',
};

interface Props {
  boothId: number;
}

const ClubCard = ({ boothId }: Props) => {
  console.log('ClubCard', boothId);

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
    <div className="w-[14.2rem] flex-shrink-0 relative bg-white rounded-2xl">
      <div className="w-full h-full min-h-[7.5rem] flex flex-col items-start px-[1.2rem] py-4">
        <div className="w-[2.4rem] h-[1.8rem] rounded-full bg-brown-500 flex justify-center items-center">
          <span className="mt-[0.1rem] text-lg font-bold text-white">
            {mock.clubId.toString().padStart(2, '0')}
          </span>
        </div>
        <span className="text-xl font-bold text-brown-500 mt-2">
          {mock.clubName}
        </span>
        <div className="w-[9rem] overflow-x-hidden">
          <div className="w-fit">
            <span className="text-normal text-brown-500 highlight-2">
              {mock.clubDetail}
            </span>
          </div>
        </div>
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

        <div className="absolute top-[1.2rem] right-[1.2rem] flex flex-col gap-1">
          <a href={mock.link} target="_blank" rel="noreferrer">
            <Image
              src={imageUrls[mock.linkIconId]}
              alt="동아리 홍보 링크"
              width={26}
              height={26}
            />
          </a>

          <a
            href={`tel:${mock.phoneNumber}`}
            onClick={(e) => e.stopPropagation()}
          >
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
