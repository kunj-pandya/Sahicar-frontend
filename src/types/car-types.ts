export interface Car {
    id: string;

    slug: string;

    brand: string;
    model: string;
    variant: string;

    year: number;
    registrationYear: number;

    bodyType:
    | "SUV"
    | "Sedan"
    | "Hatchback"
    | "MUV";

    fuelType:
    | "Petrol"
    | "Diesel"
    | "CNG"
    | "Electric";

    transmission:
    | "Manual"
    | "Automatic";

    ownership:
    | "1st Owner"
    | "2nd Owner"
    | "3rd Owner";

    kmDriven: number;

    engine: string;
    mileage: number;

    color: string;

    originalPrice: number;
    discountedPrice: number;
    emi: number;

    badge?:
    | "Top Pick"
    | "Assured"
    | "Great Deal";

    rating: number;
    inspectionScore: number;

    featured: boolean;

    description: string;

    features: string[];

    serviceHistory: boolean;
    warrantyAvailable: boolean;
    rcAvailable: boolean;

    insuranceValidTill: string;

    postedDate: string;

    location: {
        city: string;
        state: string;
    };

    images: string[];
}