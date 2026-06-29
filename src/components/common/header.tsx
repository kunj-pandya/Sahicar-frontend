"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="SahiCar Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto object-contain"
                            priority
                        />

                        <span className="text-xl font-semibold">SahiCar</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Buy Cars</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                                                By Body Type
                                            </h4>
                                            <ul className="flex flex-col gap-1">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?bodyType=SUV" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                            SUVs
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?bodyType=Sedan" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                            Sedans
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?bodyType=Hatchback" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                            Hatchbacks
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                                                By Fuel Type
                                            </h4>
                                            <ul className="flex flex-col gap-1">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?fuel=Petrol" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" >
                                                            Petrol
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?fuel=Diesel" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                            Diesel
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?fuel=Electric" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                            Electric
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                                                Popular Brands
                                            </h4>
                                            <ul className="flex flex-col gap-1">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?brand=Hyundai" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-primary">
                                                            Hyundai
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?brand=Tata" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-primary">
                                                            Tata
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link href="/cars?brand=Honda" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-primary">
                                                            Honda
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>

                                <NavigationMenuLink href="/compare" className={navigationMenuTriggerStyle()}>
                                    Compare
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                                        <li className="row-span-3">
                                            <NavigationMenuLink href="verified-inspection" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">

                                                <ShieldCheck className="h-6 w-6 text-white" />
                                                <div className="mt-4 mb-2 text-lg font-medium text-white">
                                                    Verified Inspection
                                                </div>
                                                <p className="text-sm leading-tight text-white/90">
                                                    Every car goes through a 140+ point inspection process.
                                                </p>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="financing" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                <div className="text-sm font-semibold leading-none">Financing</div>
                                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                                    Instant approval & paperless custom EMIs.
                                                </p>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="rc-transfer" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                                                <div className="text-sm font-semibold leading-none">RC Transfer</div>
                                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                                    Complete documentation handled end-to-end.
                                                </p>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer p-1.5 px-3 rounded-full hover:bg-accent/50 transition-all duration-300">
                    <Link href="/cars">
                        <Button>Browse Cars</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
