import type { MetadataRoute } from "next"
import { cars } from "@/data/cars"

export default function sitemap(): MetadataRoute.Sitemap {
    const carPages = cars.map((car) => ({
        url: `https://sahicar.vercel.app/cars/${car.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }))

    return [
        {
            url: "https://sahicar.vercel.app",
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: "https://sahicar.vercel.app/cars",
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.9,
        },
        ...carPages,
    ]
}