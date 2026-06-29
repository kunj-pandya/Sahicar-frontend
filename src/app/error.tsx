"use client"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"

export default function ErrorPage() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>404 - Not Found</EmptyTitle>
                <EmptyDescription>
                    The page you&apos;re looking for doesn&apos;t exist. Try searching for
                    what you need below.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <EmptyDescription>
                    Need help? <Link href="/">Back to Home</Link>
                </EmptyDescription>
            </EmptyContent>
        </Empty>
    )
}
