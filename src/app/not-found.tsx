"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="space-y-6">


                <h1 className="text-5xl font-bold tracking-tight">
                    404
                </h1>

                <h2 className="text-2xl font-semibold">
                    Road Not Found
                </h2>

                <p className="max-w-md text-muted-foreground">
                    Looks like you've taken a wrong turn. The page you're
                    looking for doesn't exist or may have been moved.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button asChild>
                        <Link href="/">
                            Back Home
                        </Link>
                    </Button>

                    <Button asChild variant="outline">
                        <Link href="/cars">
                            Browse Cars
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}