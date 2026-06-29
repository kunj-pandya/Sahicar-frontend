import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SahiCar | Buy & Compare Verified Used Cars",
  description: "Explore India's most trusted used car marketplace. Get 100% verified listings, transparent prices, flexible financing, and hassle-free paper transfer.",
  keywords: ["used cars", "buy second hand cars", "car marketplace", "compare cars", "verified cars", "SahiCar"],
  openGraph: {
    title: "SahiCar | Buy & Compare Verified Used Cars",
    description: "Explore India's most trusted used car marketplace with transparent prices.",
    type: "website",
  }
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center">
      <section className="relative overflow-hidden bg-radial from-primary/10 via-background to-background py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Badge variant="outline" className="mb-4 bg-background border-primary/30 text-primary px-4 py-4 text-xs font-semibold">
            Premium Used Cars
          </Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
            Find Your Perfect Used Car
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Verified cars, transparent pricing, and hassle-free ownership.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/cars">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Browse Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
