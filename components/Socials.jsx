import Link from "next/link";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/syerikkh" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/syerik.kh/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/syerikkk/" },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
