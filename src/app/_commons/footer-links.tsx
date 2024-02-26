"use client";

// import PubIc from "@/public/pubIcon.svg";
// import ReservationIc from "@/public/reservationIcon.svg";
import ShowIc from "@/public/showIcon.svg";
import IconHr from "@/public/iconHr.svg";
import ClubIcon from "@/public/clubIcon.svg";
import BoothIc from "@/public/boothIcon.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useIsFirstStore from "../hooks/useIsFirstStore";

const links = [
  { name: "버스킹", href: ["/stage"], icon: ShowIc },
  { name: "동박", href: ["/entire-map", "/dongbak"], icon: BoothIc },
  { name: "동연페이지", href: ["/dongwha"], icon: ClubIcon },
];

const FooterLinks = () => {
  const pathname = usePathname();
  const { setCameFromSection } = useIsFirstStore();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href[0]}
            className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
              link.href.includes(pathname) ? "" : "opacity-50"
            }`}
            onClick={() => setCameFromSection(false)}
          >
            {link.href.includes(pathname) && (
              <IconHr className="absolute top-0" />
            )}
            <LinkIcon />
            <span className="text-[#CCDEF9] text-lg">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
};

export default FooterLinks;
