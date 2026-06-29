import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background py-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="SahiCar Logo"
                        width={80}
                        height={24}
                        className="h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                    />
                    <span>&copy; {new Date().getFullYear()} SahiCar. All rights reserved.</span>
                </div>
                <div className="flex gap-4">
                    <Link href="privacy-policy" className="hover:text-primary hover:underline transition-colors">Privacy Policy</Link>
                    <Link href="terms-of-service" className="hover:text-primary hover:underline transition-colors">Terms of Service</Link>
                    <Link href="contact-support" className="hover:text-primary hover:underline transition-colors">Contact Support</Link>
                </div>
            </div>
        </footer>
    );
}
