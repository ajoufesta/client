import FooterLinks from './footer-links';

const Footer = () => {
  return (
    <div className="max-w-screen-sm absolute bottom-0 w-full bg-white h-[9.4rem] flex justify-center items-center gap-10 px-[2rem]">
      <FooterLinks />
    </div>
  );
};

export default Footer;
