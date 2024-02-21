import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Logo } from "../components/ui/Logo";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SecondHeader } from "@/components/navigationHeader";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game Glare",
  description: "Review your favorite games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            attribute="class"
          >
            <header className="h-16 px-4 border-b-2 py-4 flex justify-between">
              <div className="hidden space-x-4 md:flex">
                <Link href="https://instagram.com/luthfirizzky" target="_blank">
                  <FaInstagram size={24} />
                </Link>
                <Link href="https://github.com/lynxx007" target="_blank">
                  <FaGithub size={24} />
                </Link>
                <Link
                  href="https://linkedin.com/in/luthfirizky777"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link href="mailto:luthfirizky777@gmail.com" target="_blank">
                  <CiMail size={24} />
                </Link>

                <ModeToggle />
              </div>

              <Link className="flex space-x-2" href="/">
                <Logo />
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
                  Game Glare
                </h1>
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size={"icon"} className="md:hidden">
                    <IoMenu size={24} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] justify-center">
                  <DialogHeader>
                    <DialogTitle className="text-2xl border-b-2">
                      Menu
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col space-y-4">
                    <DialogClose asChild>
                      <Link href="/">
                        <p className="text-lg font-bold font-mono text-center">
                          Home
                        </p>
                      </Link>
                    </DialogClose>

                    <Select>
                      <SelectTrigger className="w-[150px] ">
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <Link href="/genre/action">
                            <SelectLabel>Action</SelectLabel>
                          </Link>

                          <Link href="/genre/fps">
                            <SelectLabel>FPS</SelectLabel>
                          </Link>

                          <Link href="/genre/rpg">
                            <SelectLabel>RPG</SelectLabel>
                          </Link>

                          <Link href="/genre/mmorpg">
                            <SelectLabel>MMORPG</SelectLabel>
                          </Link>

                          <Link href="/genre/gacha">
                            <SelectLabel>Gacha Games</SelectLabel>
                          </Link>

                          <Link href="/genre/strategy">
                            <SelectLabel>Strategy</SelectLabel>
                          </Link>

                          <Link href="/genre/simulation">
                            <SelectLabel>Simulation</SelectLabel>
                          </Link>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Link href={"/auth/about"}>
                      <p className="text-lg font-bold font-mono text-center">
                        About
                      </p>
                    </Link>

                    <Link href="/auth/login">
                      <p className="text-lg font-bold font-mono text-red-500 text-center">
                        Login
                      </p>
                    </Link>
                    <Link href="/auth/register">
                      <p className="text-lg font-bold font-mono text-center">
                        Register
                      </p>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="hidden space-x-4 md:flex">
                <Link href="/auth/login">
                  <p className="text-lg font-bold font-mono text-red-500">
                    Login
                  </p>
                </Link>
                <Link href="/auth/register">
                  <p className="text-lg font-bold font-mono">Register</p>
                </Link>
              </div>
            </header>
            <header className="h-16 px-4 border-b-2 py-4 hidden items-center justify-center  md:flex">
              <SecondHeader />
            </header>
            <main className="container mx-auto h-full py-8">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
