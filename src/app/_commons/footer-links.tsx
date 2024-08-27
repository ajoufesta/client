'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useIsFirstStore from '../hooks/useIsFirstStore';

import DongyeonActiveIcon from '@/public/assets/footer/dongyeonActiveIcon.svg';
import DongariActiveIcon from '@/public/assets/footer/dongariActiveIcon.svg';
import BuskingActiveIcon from '@/public/assets/footer/buskingActiveIcon.svg';
import PlayIcon from '@/public/assets/footer/playIcon.svg';
import DongyeonIcon from '@/public/assets/footer/dongyeonIcon.svg';
import DongariIcon from '@/public/assets/footer/dongariIcon.svg';
import BuskingIcon from '@/public/assets/footer/buskingIcon.svg';
import PlayActiveIcon from '@/public/assets/footer/playActiveIcon.svg';

const links = [
  { name: '버스킹', href: ['/stage'], icon: [BuskingIcon, BuskingActiveIcon] },
  {
    name: '동아리',
    href: ['/entire-map', '/dongbak'],
    icon: [DongariIcon, DongariActiveIcon],
  },
  {
    name: '동연소식',
    href: ['/dongwha'],
    icon: [DongyeonIcon, DongyeonActiveIcon],
  },
  { name: '권총사격', href: ['/play'], icon: [PlayIcon, PlayActiveIcon] },
];

const FooterLinks = () => {
  const pathname = usePathname();
  const { setCameFromSection } = useIsFirstStore();

  return (
    <div className={'flex justify-between w-full h-full'}>
      {links.map((link) => {
        const LinkIcon = link.icon[0];
        const LinkActive = link.icon[1];
        return (
          <Link
            key={link.name}
            href={link.href[0]}
            className={`flex flex-col items-center justify-center m-0 gap-2 relative h-full w-full`}
            onClick={() => setCameFromSection(false)}
          >
            {link.href.includes(pathname) && (
              <>
                <hr className="absolute top-0 h-[0.4rem] w-full bg-brown-700 rounded-sm" />
                <LinkActive />
              </>
            )}
            {!link.href.includes(pathname) && <LinkIcon />}
            <span
              className={`text-lg ${
                link.href.includes(pathname)
                  ? 'text-brown-700'
                  : 'text-gray-200'
              }`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
