import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        Online instructor and your web wizard and digital handyman. Armed with 5
        years of tinkering in the full-stack playground, I&apos;ve got a toolbox
        that&apos;s overflowing with front-end sparkles and back-end muscle. Add
        a dash of AI cleverness and a lock-tight dedication to web security, and
        you&apos;ve got a recipe for online awesomeness. Ready for a little
        internet enchantment? Let&apos;s make your web dreams a screen reality!
        🚀🖥
      </p>
      {/*Signature*/}
      <div>
        <Image src={SignatureImg} alt="mohamed hajji" />
      </div>
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <Button>
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
