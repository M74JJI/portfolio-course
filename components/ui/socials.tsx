import Button from "./button";
import { SiUdemy } from "react-icons/si";
import { RiYoutubeFill } from "react-icons/ri";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <SiUdemy className="w-4 h-4" />,
    link: "https://www.udemy.com/user/mohamed-hajji-25",
    username: "Mohmed Hajji",
  },
  {
    icon: <RiYoutubeFill className="w-5 h-5" />,
    link: "https://www.youtube.com/channel/UC-w5hcIcVX5IzP8537CYSBg",
    username: "Dev7",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/medhajji/",
    username: "Mohamed HAJJI",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/med_hajji7/",
    username: "Mohamed HAJJI",
  },
];
