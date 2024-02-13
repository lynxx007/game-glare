import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Logo } from "../components/ui/Logo";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { IoMdMenu } from "react-icons/io";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-16 px-4 border-b-2 py-4 flex justify-between">
          <div className="hidden space-x-4 md:flex">
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

          <div className="flex space-x-4">
            <Logo />
            <h1 className="text-lg font-bold font-serif hidden md:block">
              Game Glare
            </h1>
          </div>

          <Button size={"icon"} variant={"outline"} className="md:hidden">
            <IoMdMenu size={24} />
          </Button>

          <div className="hidden space-x-4 md:flex">
            <Link href="/auth/login">
              <p className="text-lg font-bold font-mono text-blue-500">Login</p>
            </Link>
            <Link href="/auth/register">
              <p className="text-lg font-bold font-mono">Register</p>
            </Link>
          </div>
        </header>
        <main className="flex justify-center container mx-auto h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
