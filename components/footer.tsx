import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center space-y-4 p-8">
      <div className="flex space-x-4">
        <Link href="https://instagram.com/luthfirizzky" target="_blank">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://github.com/lynxx007" target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link href="https://linkedin.com/in/luthfirizky777" target="_blank">
          <FaLinkedin size={24} />
        </Link>
        <Link href="mailto:luthfirizky777@gmail.com" target="_blank">
          <CiMail size={24} />
        </Link>
      </div>
      <p className="text-slate-600 text-xs">
        Copyright © 2024 Game Glare. All rights reserved.
      </p>
    </footer>
  );
}
