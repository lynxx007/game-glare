"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function SecondHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
          <Link href="/genre/action" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Action
            </NavigationMenuLink>
          </Link>
          <Link href="/genre/fps" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FPS
            </NavigationMenuLink>
          </Link>
          <Link href="/genre/rpg" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              RPG
            </NavigationMenuLink>
          </Link>
          <Link href="/genre/mmorpg" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              MMORPG
            </NavigationMenuLink>
          </Link>
          <Link href="/genre/gacha" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Gacha Games
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Other</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
              <li>
                <Link href="/genre/simulation">Simulation</Link>
              </li>

              <li>
                <Link href="/genre/strategy">Strategy</Link>
              </li>

              <li>
                <Link href="/genre/battle-royale">Battle Royale</Link>
              </li>

              <li>
                <Link href="/genre/moba">MOBA</Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
