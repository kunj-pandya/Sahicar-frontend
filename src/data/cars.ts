import type { Car } from "@/types/car-types";

export const cars: Car[] = [
    {
        id: "1",
        slug: "hyundai-creta-sx-2022",

        brand: "Hyundai",
        model: "Creta",
        variant: "SX 1.5 IVT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 24000,

        engine: "1497 cc",
        mileage: 17,

        color: "Polar White",

        originalPrice: 1850000,
        discountedPrice: 1649000,
        emi: 31750,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 94,

        featured: true,

        description:
            "Single-owner Hyundai Creta SX with complete service history and excellent condition.",

        features: [
            "Sunroof",
            "Android Auto",
            "Apple CarPlay",
            "Wireless Charging",
            "Rear Camera",
            "Cruise Control",
            "Push Button Start",
            "6 Airbags",
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2027-11-30",

        postedDate: "2026-05-20",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/7d914c52-5451-11f1-bd55-02ede2007fbe/ec051b3c-8f8d-418c-ac74-4604d855308a/d275914e-e472-4a26-8276-e53e84f39d15/a472830e-5cbb-4e54-8673-9b0969892fba/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/a077f74c-6d83-42a6-8a2f-bfa3f324af5b/6a0da406925f6f8618c854a8/fae1c4ba-3fed-4312-84f6-5cd150b44e3c/slot/SRP.png?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c3683059-cf79-4f47-a226-a2b61540b0fd/d275914e-e472-4a26-8276-e53e84f39d15/9ef73b1c-b7dd-4db8-bbe5-43f9f639f860/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/6fd567d5-9cc1-43ea-81d3-16773c8ba4ff/d275914e-e472-4a26-8276-e53e84f39d15/5efd3276-2604-4911-825a-a4890137d850/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/b71adba1-6a00-4b54-9951-0e9b74bcadb7/d275914e-e472-4a26-8276-e53e84f39d15/ac94a58d-5e56-4292-913f-f19b8ffaea1e/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "2",
        slug: "hyundai-venue-sx-turbo-2021",

        brand: "Hyundai",
        model: "Venue",
        variant: "SX Turbo DCT",

        year: 2021,
        registrationYear: 2021,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 31000,

        engine: "998 cc",
        mileage: 18,

        color: "Titan Grey",

        originalPrice: 1295000,
        discountedPrice: 1125000,
        emi: 21600,

        badge: "Assured",

        rating: 4.6,
        inspectionScore: 91,

        featured: false,

        description:
            "Well-maintained Hyundai Venue with smooth automatic transmission and complete inspection report.",

        features: [
            "Sunroof",
            "Connected Car Tech",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Air Purifier",
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-07-15",

        postedDate: "2026-04-12",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/f5f5efbe-54e1-11f1-bd55-02ede2007fbe/m/ef67f4b9-753b-4da1-8c02-c1aec83383c1/33d5b5da-d850-435c-9259-0d312df201b7/d4859dc9-f5ea-4993-a4ad-10d36b474ea7/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/f5abd525-187b-440e-8dfa-edf383a3f08d/33d5b5da-d850-435c-9259-0d312df201b7/8ac11232-8f95-42a6-9499-4933fff81c50/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/30cd10df-1f60-4258-b45e-e6ccf8034fad/33d5b5da-d850-435c-9259-0d312df201b7/fc30f24e-41ba-4b8b-a156-43431d0d1a62/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/5b800d53-8f11-4661-b247-ec8bba9663d7/33d5b5da-d850-435c-9259-0d312df201b7/a712af91-35f7-46ef-ad2a-9cf5ed3b08a7/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c3ab433c-0bfa-454a-8f3d-dffdc4b3650a/33d5b5da-d850-435c-9259-0d312df201b7/055f0a8c-8c82-4d25-984f-2cf075e5c682/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/78f0972e-ca16-4a5c-92d4-dc4187a88991/33d5b5da-d850-435c-9259-0d312df201b7/3c012d20-d160-432c-a414-c50af6924449/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/9109455b-400a-4d1f-ab1c-4344fd646b06/33d5b5da-d850-435c-9259-0d312df201b7/d6b2c8f8-24a2-452c-9711-5e0fa246bdd4/slot/6.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/86eb3a86-0cd2-457e-966c-cfe2b485b80d/33d5b5da-d850-435c-9259-0d312df201b7/75644254-91b4-440c-bf2c-447f2703a50b/slot/7.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "3",
        slug: "tata-nexon-xz-plus-2023",

        brand: "Tata",
        model: "Nexon",
        variant: "XZ+",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Manual",

        ownership: "1st Owner",

        kmDriven: 15000,

        engine: "1199 cc",
        mileage: 18,

        color: "Daytona Grey",

        originalPrice: 1490000,
        discountedPrice: 1325000,
        emi: 25500,

        badge: "Top Pick",

        rating: 4.7,
        inspectionScore: 95,

        featured: true,

        description:
            "Tata Nexon with low mileage, complete service history and excellent safety ratings.",

        features: [
            "Sunroof",
            "360 Camera",
            "Android Auto",
            "Apple CarPlay",
            "Cruise Control",
            "Airbags",
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-01-15",

        postedDate: "2026-06-01",

        location: {
            city: "Mumbai",
            state: "Maharashtra",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/390f6e12-4621-11f1-bd55-02ede2007fbe/0dd859a9-c72c-4978-98e0-f1ae0fc9208c/9d438a03-efc5-42fd-8acb-23f743dcafae/2ec158e8-d336-4f75-a311-a70d9e596288/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/cdaad72a-fb78-4a05-a8ee-0f23d958d2d6/9d438a03-efc5-42fd-8acb-23f743dcafae/d7f255fc-634d-4404-8c6a-ed01b8656c24/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/662bbcda-dd50-4fec-8c22-4baef744432f/9d438a03-efc5-42fd-8acb-23f743dcafae/f9c9b0a6-c4aa-49d0-acb4-03050201400a/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/1a762a17-3c36-46fe-a99a-7c815947ae12/9d438a03-efc5-42fd-8acb-23f743dcafae/20dc2655-190d-4ecd-8ec4-5f464fca0f80/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/321f5e8e-75e0-4029-8483-5661aca565ba/9d438a03-efc5-42fd-8acb-23f743dcafae/0cce7c2c-8d7a-45ad-b495-073879f2acf8/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/51533519-151d-425f-88c5-5185df7e84f5/9d438a03-efc5-42fd-8acb-23f743dcafae/0b62b5d1-0ca2-42e6-91e4-a5733f6c7699/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/265359e0-7172-4e5d-9ace-11d11c431308/9d438a03-efc5-42fd-8acb-23f743dcafae/456f6dce-b8bc-47d7-ac0c-bd02af4b79cd/slot/2.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "4",
        slug: "tata-harrier-fearless-plus-2022",

        brand: "Tata",
        model: "Harrier",
        variant: "Fearless Plus AT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 27000,

        engine: "1956 cc",
        mileage: 16,

        color: "Oberon Black",

        originalPrice: 2550000,
        discountedPrice: 2280000,
        emi: 43800,

        badge: "Great Deal",

        rating: 4.8,
        inspectionScore: 96,

        featured: true,

        description:
            "Premium Tata Harrier automatic with panoramic sunroof and luxury interior package.",

        features: [
            "Panoramic Sunroof",
            "Ventilated Seats",
            "360 Camera",
            "ADAS",
            "Wireless Charger",
            "JBL Audio",
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2027-10-30",

        postedDate: "2026-05-15",

        location: {
            city: "Pune",
            state: "Maharashtra",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/b5dc983e-4860-11f1-bd55-02ede2007fbe/5b1b96d5-dc3a-4d16-92fd-f64692e1610b/f0cff070-0db0-45cf-b507-b63c2d5ba45f/c38bceb3-990e-4bbc-b685-913ef2f23d82/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/f4727774-67e7-467f-8394-a1c5715d29d4/f0cff070-0db0-45cf-b507-b63c2d5ba45f/2d25fd8c-6a8e-41ce-b042-e63359328b73/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e53e975e-049a-46cc-a78e-d6accb860ec9/f0cff070-0db0-45cf-b507-b63c2d5ba45f/b0577db3-b7a8-412a-a2e9-31612b0853b2/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/5a1f4a6d-62d8-4b73-9171-0a6d57751eac/f0cff070-0db0-45cf-b507-b63c2d5ba45f/874159d3-c016-47bb-bfe7-7965d2ef57d9/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/48f1bb6f-7529-4047-baa1-0f6e077a5d55/f0cff070-0db0-45cf-b507-b63c2d5ba45f/29859a29-75e6-4fc7-b4a5-02585dbb6357/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/3c099832-8aef-4759-988e-ea34409c35ae/f0cff070-0db0-45cf-b507-b63c2d5ba45f/0dc6b0d0-54a8-4038-b2b9-a402afb39cce/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/9ae64414-9c40-4da0-8194-85701092d228/f0cff070-0db0-45cf-b507-b63c2d5ba45f/274ddc71-6fb6-4534-a04d-14e183af2fd5/slot/2.jpg?w=700&format=auto&dpr=2"

        ],
    },

    {
        id: "5",
        slug: "honda-city-zx-cvt-2021",

        brand: "Honda",
        model: "City",
        variant: "ZX CVT",

        year: 2021,
        registrationYear: 2021,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 22000,

        engine: "1498 cc",
        mileage: 18,

        color: "Platinum White",

        originalPrice: 1750000,
        discountedPrice: 1499000,
        emi: 28800,

        badge: "Assured",

        rating: 4.9,
        inspectionScore: 97,

        featured: true,

        description:
            "Top-end Honda City ZX CVT with premium features and immaculate maintenance record.",

        features: [
            "Sunroof",
            "Lane Watch Camera",
            "Cruise Control",
            "Push Button Start",
            "Wireless Charging",
            "Android Auto",
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-12-31",

        postedDate: "2026-04-25",

        location: {
            city: "Bengaluru",
            state: "Karnataka",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/2ffe8ae4-3afd-11f1-bd54-02ede2007fbe/m/1dfc8cc3-fb62-4996-9312-01e22a3ffa24/e7213ad2-6c37-4cad-be10-a304b528f632/45c98b84-e73f-4349-a41d-b5b57a2724f7/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ba1d9369-989e-4b5b-8742-396440f5e83f/e7213ad2-6c37-4cad-be10-a304b528f632/2341c54e-04f3-4543-8396-7b0c4949747f/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/3d7862c6-8e72-4b42-bce7-3a26d3e4c2eb/e7213ad2-6c37-4cad-be10-a304b528f632/2264a5d4-6231-47aa-b036-8b55fae8fa98/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/41b3dc94-c8ad-4a54-b542-62afbec8efae/e7213ad2-6c37-4cad-be10-a304b528f632/d2b1a484-0857-4620-86bc-1b306b6d9bdf/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ff816f57-ea65-489c-8080-30e029b39fbb/e7213ad2-6c37-4cad-be10-a304b528f632/24df149c-a695-4120-ba96-3904619e3c64/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/22315add-ea01-4271-a7f9-0b58e5d87873/e7213ad2-6c37-4cad-be10-a304b528f632/c3567067-7f6e-4846-a965-37c82ab9062b/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/1fc1a374-3b00-44af-a1e6-dee26ca0fcff/e7213ad2-6c37-4cad-be10-a304b528f632/b134c7f3-3016-4cce-94fa-3c5fb8f60dcf/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },
    {
        id: "6",
        slug: "hyundai-verna-sx-o-turbo-2023",

        brand: "Hyundai",
        model: "Verna",
        variant: "SX(O) Turbo DCT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 12000,

        engine: "1482 cc",
        mileage: 20,

        color: "Fiery Red",

        originalPrice: 1950000,
        discountedPrice: 1765000,
        emi: 33900,

        badge: "Top Pick",

        rating: 4.9,
        inspectionScore: 96,

        featured: true,

        description:
            "Latest-generation Hyundai Verna Turbo with ADAS, digital cockpit and low mileage.",

        features: [
            "ADAS",
            "Ventilated Seats",
            "Sunroof",
            "Bose Audio",
            "Wireless Charging",
            "360 Camera",
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-02-20",

        postedDate: "2026-06-05",

        location: {
            city: "Delhi",
            state: "Delhi",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/mainimage/FrontRightSide-Transparent/shadowBackground/1778504797396AGS9QH.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/mainimage/FrontRightSide-Transparent/virtualBackground/1778504797396AGS9QH.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/exterior/RearLeftSide/virtualBackground/1778504869278OLX0F4.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/exterior/RightMain/virtualBackground/1778504869299YR1ALJ.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/exterior/FrontMain/virtualBackground/17785048692628DO5NX.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/exterior/RearRightSide/virtualBackground/1778504869288OX6QU7.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10095292154/exterior/FrontLeftSide/virtualBackground/1778504869268AZEHEK.webp?w=700&format=auto&dpr=2"

        ],
    },

    {
        id: "7",
        slug: "hyundai-i20-asta-o-2022",

        brand: "Hyundai",
        model: "i20",
        variant: "Asta (O) IVT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Hatchback",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 18000,

        engine: "1197 cc",
        mileage: 19,

        color: "Starry Night",

        originalPrice: 1180000,
        discountedPrice: 1025000,
        emi: 19700,

        badge: "Great Deal",

        rating: 4.7,
        inspectionScore: 91,

        featured: false,

        description:
            "Premium hatchback with connected features, sunroof and automatic transmission.",

        features: [
            "Sunroof",
            "Wireless Charging",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Cruise Control",
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-09-15",

        postedDate: "2026-05-18",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/5d952590-389f-11f1-bd53-02ede2007fbe/6ff6b530-c3b4-402a-9b98-7b52495af55f/462ec452-1708-4741-983c-eee3e42e9c54/fbee2998-3f94-4514-8ab5-405d393622a9/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/9724cd6d-3893-4f6f-823c-ae1ad902535a/462ec452-1708-4741-983c-eee3e42e9c54/c2813000-3851-4399-a76b-761801efb853/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/5331ae5d-3ad5-47ba-90bd-2c85eec2fd22/462ec452-1708-4741-983c-eee3e42e9c54/760ce448-e52d-4bc1-afb1-41863c69ccec/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e7c4aac6-3b13-4cb0-9977-a25bbe916a6d/462ec452-1708-4741-983c-eee3e42e9c54/56dcba87-34b6-49e5-838b-5986ce34e877/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/7ed388d9-0104-4147-8a53-5fcd9cc3d867/462ec452-1708-4741-983c-eee3e42e9c54/850d111b-d66a-497e-aec5-f6dfafb3dec6/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/57af4cfb-3bac-456a-a261-b44f3dbdd536/462ec452-1708-4741-983c-eee3e42e9c54/bc5e0f19-39d5-451f-a5a6-1067f1b25079/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/b6ba3561-0a9d-41be-a88a-76595f9fe589/462ec452-1708-4741-983c-eee3e42e9c54/508da017-f5cf-493f-a914-84c474dff3a2/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "8",
        slug: "tata-punch-creative-2023",

        brand: "Tata",
        model: "Punch",
        variant: "Creative AMT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 14000,

        engine: "1199 cc",
        mileage: 19,

        color: "Tornado Blue",

        originalPrice: 1185000,
        discountedPrice: 1065000,
        emi: 20450,

        badge: "Assured",

        rating: 4.6,
        inspectionScore: 90,

        featured: false,

        description:
            "Compact SUV with 5-star safety rating and smooth AMT gearbox.",

        features: [
            "Rear Camera",
            "Android Auto",
            "Apple CarPlay",
            "Auto Climate Control",
            "Cruise Control",
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-01-30",

        postedDate: "2026-05-22",

        location: {
            city: "Vadodara",
            state: "Gujarat",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/mainimage/FrontRightSide-Transparent/shadowBackground/1774256288259OGZOQB.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/mainimage/FrontRightSide-Transparent/virtualBackground/1774256288259OGZOQB.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/exterior/RearLeftSide/virtualBackground/177425635939314TCR9.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/exterior/RightMain/virtualBackground/1774256359414L8VFG7.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/exterior/FrontMain/virtualBackground/1774256359378SWR7TH.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/exterior/RearRightSide/virtualBackground/1774256359404P67LU6.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/11063769763/exterior/FrontLeftSide/virtualBackground/1774256359384ZTNSPJ.webp?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "9",
        slug: "tata-altroz-xz-plus-2022",

        brand: "Tata",
        model: "Altroz",
        variant: "XZ Plus",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Hatchback",
        fuelType: "Diesel",
        transmission: "Manual",

        ownership: "1st Owner",

        kmDriven: 23000,

        engine: "1497 cc",
        mileage: 23,

        color: "Arcade Grey",

        originalPrice: 1125000,
        discountedPrice: 985000,
        emi: 18950,

        badge: "Great Deal",

        rating: 4.6,
        inspectionScore: 92,

        featured: false,

        description:
            "Fuel-efficient premium hatchback with excellent highway comfort and safety.",

        features: [
            "Cruise Control",
            "Rear Camera",
            "Android Auto",
            "Apple CarPlay",
            "Air Purifier",
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-12-10",

        postedDate: "2026-04-15",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/56228a26-4954-11f1-bd55-02ede2007fbe/m/a4d83b9e-5f50-4d6a-be10-79749a859416/03f2e1a3-a7d0-41d7-b120-243ab682413c/3397275d-209b-4bc6-a502-e52db0d03c3e/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/90a3749a-f6a0-4d09-8558-1f3b7092e981/03f2e1a3-a7d0-41d7-b120-243ab682413c/0b7c7d20-b7bd-4694-affe-9a96b9fdab1b/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c5610b93-96e0-4b42-91d8-6e984d5ec05e/03f2e1a3-a7d0-41d7-b120-243ab682413c/f0b78ed7-0006-429d-a65a-299a26457a87/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e6ded1aa-d2e3-4881-8edd-bcd4e14c48a3/03f2e1a3-a7d0-41d7-b120-243ab682413c/8d1b2c0b-594b-4185-9fc2-0b7d3b4348de/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/85f34204-ea63-4282-95df-d842a5cd4a8c/03f2e1a3-a7d0-41d7-b120-243ab682413c/c6043107-296f-408f-956e-216591c84e10/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/cbb4cc1e-0640-41c8-99c9-73181dde371f/03f2e1a3-a7d0-41d7-b120-243ab682413c/d1214e93-6f29-4622-8cd5-26478a960775/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/43244be3-587d-4b65-90c5-40f75df39c20/03f2e1a3-a7d0-41d7-b120-243ab682413c/0e72a50a-5013-413c-9363-f98a5d0638e9/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "10",
        slug: "honda-amaze-vx-cvt-2022",

        brand: "Honda",
        model: "Amaze",
        variant: "VX CVT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 21000,

        engine: "1199 cc",
        mileage: 18,

        color: "black",

        originalPrice: 1050000,
        discountedPrice: 925000,
        emi: 17750,

        badge: "Assured",

        rating: 4.5,
        inspectionScore: 89,

        featured: false,

        description:
            "Reliable Honda Amaze CVT with excellent city driving comfort and mileage.",

        features: [
            "Push Button Start",
            "Rear Camera",
            "Cruise Control",
            "Android Auto",
            "Apple CarPlay",
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-10-25",

        postedDate: "2026-05-08",

        location: {
            city: "Pune",
            state: "Maharashtra",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/b5a5c4a2-534c-11f1-bd55-02ede2007fbe/m/fb10ddb6-1447-4e33-b739-2e4afcc19654/702734be-610a-44c2-9e84-4aa6b9fb083b/8e52dc81-5daa-43ad-9ce2-39d31ef63993/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/1c279e62-0dc2-42a2-accb-d6cf42c0a84e/702734be-610a-44c2-9e84-4aa6b9fb083b/7f9df536-dcd5-4fca-8958-c12269cd1209/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e5dac480-24a9-4696-ad9b-7e9606dd6b56/702734be-610a-44c2-9e84-4aa6b9fb083b/a0972b9a-fc04-4a46-a34b-c7b4095572c6/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/541038ec-0630-44b9-915d-cc92407065b6/702734be-610a-44c2-9e84-4aa6b9fb083b/f972c9e2-a385-458d-99a1-755d4d800ad2/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/829fead2-ab67-48e0-a559-e0d0c0696fe6/702734be-610a-44c2-9e84-4aa6b9fb083b/5adefbd6-0910-483a-a84e-4f440146a7f2/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/836ae13f-664f-4544-8823-4c0c02556d75/702734be-610a-44c2-9e84-4aa6b9fb083b/3c547ef2-6969-46e5-bc83-07f5692a90c6/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/bddae214-1c0d-42d6-b3a3-c7dabe7ac401/702734be-610a-44c2-9e84-4aa6b9fb083b/9ed08b13-aade-4233-a718-d896bf98173b/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/2d1f214c-645a-47e1-9206-518be0562ef1/702734be-610a-44c2-9e84-4aa6b9fb083b/07c96187-4404-4fcd-8e59-a79a7782bdb2/slot/4.jpg?w=700&format=auto&dpr=2"
        ],
    },
    {
        id: "11",
        slug: "honda-wr-v-vx-diesel-2021",

        brand: "Honda",
        model: "WR-V",
        variant: "VX Diesel",

        year: 2021,
        registrationYear: 2021,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Manual",

        ownership: "1st Owner",

        kmDriven: 34000,

        engine: "1498 cc",
        mileage: 23,

        color: "Radiant Red",

        originalPrice: 1180000,
        discountedPrice: 995000,
        emi: 19150,

        badge: "Great Deal",

        rating: 4.5,
        inspectionScore: 90,

        featured: false,

        description:
            "Honda WR-V diesel with excellent mileage and complete service history.",

        features: [
            "Sunroof",
            "Cruise Control",
            "Rear Camera",
            "Android Auto",
            "Apple CarPlay"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-08-10",

        postedDate: "2026-05-02",

        location: {
            city: "Indore",
            state: "Madhya Pradesh",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/baa6ff60-59ab-11f1-bd55-02ede2007fbe/m/40ce32ce-9091-4cd5-bbf7-1ac75d146f46/70feb75f-ea12-4676-9efd-5b068063a469/a605d73f-0f5b-47ee-9c89-1158fe445fa2/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/1c224145-d372-4a5b-a9c8-9b329895b1b9/70feb75f-ea12-4676-9efd-5b068063a469/4a77e506-0ea2-4c83-908d-743094d42b35/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/1c224145-d372-4a5b-a9c8-9b329895b1b9/70feb75f-ea12-4676-9efd-5b068063a469/4a77e506-0ea2-4c83-908d-743094d42b35/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/eb765265-c814-4833-92ff-b9d66f1eaf37/70feb75f-ea12-4676-9efd-5b068063a469/2ea5775a-909c-4f83-9a13-e87cb181e825/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/5fe13f61-78e2-493b-ba4d-b43dc40763eb/70feb75f-ea12-4676-9efd-5b068063a469/8277e814-1eb3-4f08-bf8d-89cacb5f5606/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/30d60573-f360-4e4f-82c3-a0cdd9d7f197/70feb75f-ea12-4676-9efd-5b068063a469/f7a38c8c-a7b2-4a06-a29c-3bbfb070ad99/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/80322902-8813-4fae-b41f-44faabf9d22e/70feb75f-ea12-4676-9efd-5b068063a469/b293fade-a8cc-45f6-9607-bc33accd0497/slot/2.jpg?w=700&format=auto&dpr=2"

        ],
    },

    {
        id: "12",
        slug: "maruti-swift-zxi-amt-2023",

        brand: "Maruti",
        model: "Swift",
        variant: "ZXI AMT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "Hatchback",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 12000,

        engine: "1197 cc",
        mileage: 22,

        color: "Pearl Arctic White",

        originalPrice: 980000,
        discountedPrice: 875000,
        emi: 16800,

        badge: "Top Pick",

        rating: 4.7,
        inspectionScore: 93,

        featured: true,

        description:
            "Popular hatchback with low mileage and excellent fuel efficiency.",

        features: [
            "Push Button Start",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera",
            "Automatic Climate Control"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-01-31",

        postedDate: "2026-06-02",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/10ca97d6-4d1c-11f1-bd55-02ede2007fbe/34fe01ae-c0c9-4404-839a-f0b3e051fd8e/54a492eb-78ad-40fa-acf4-37bc37cdea50/210df043-7212-4cca-bfb1-f2e6223549f8/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/1f744794-3f03-4489-b044-3d17a63aeec9/54a492eb-78ad-40fa-acf4-37bc37cdea50/740d3e4c-2a6b-47c3-938a-9cc9837952e8/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/f68a008a-526c-4323-8b8b-b7ab450cd10f/54a492eb-78ad-40fa-acf4-37bc37cdea50/f309335a-c423-40d0-a273-2beb0a5b766a/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/d5d7a448-bce0-464e-af2f-e2ba7cc0895b/54a492eb-78ad-40fa-acf4-37bc37cdea50/81af18d6-39be-4248-b625-cc8c8c348a8f/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/d9fa98a6-5349-4915-b946-48054402561b/54a492eb-78ad-40fa-acf4-37bc37cdea50/c4148b81-0910-4c6e-a12d-daf8081f7032/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/296d740a-3987-483e-82dc-3f78583f6dab/54a492eb-78ad-40fa-acf4-37bc37cdea50/903947b5-29f7-47d7-94d2-850f63544000/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ab337841-190f-4df6-9897-c5df286dfb7c/54a492eb-78ad-40fa-acf4-37bc37cdea50/eb879bcf-01bf-42c7-9a0e-b67a6ea2f97d/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "13",
        slug: "maruti-baleno-alpha-cvt-2022",

        brand: "Maruti",
        model: "Baleno",
        variant: "Alpha CVT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Hatchback",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 17000,

        engine: "1197 cc",
        mileage: 22,

        color: "Nexa Blue",

        originalPrice: 1120000,
        discountedPrice: 995000,
        emi: 19100,

        badge: "Assured",

        rating: 4.6,
        inspectionScore: 91,

        featured: false,

        description:
            "Premium hatchback with spacious cabin and smooth CVT gearbox.",

        features: [
            "Heads-Up Display",
            "360 Camera",
            "Android Auto",
            "Apple CarPlay",
            "LED Headlamps"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-12-15",

        postedDate: "2026-05-10",

        location: {
            city: "Rajkot",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/05030240-4c71-11f1-bd55-02ede2007fbe/17f70eba-fee0-438d-8b91-141391a32eac/e2765753-69fa-48e6-8589-f63b562463a6/05c311b0-e25b-473b-89af-e4662cad5786/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/78d767a3-e1d8-4e7a-8d7e-c0928eea6a71/e2765753-69fa-48e6-8589-f63b562463a6/b98132d7-4593-46a2-aecd-f68fbf4ede18/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/a84e34cf-996d-4b6b-a38d-1e4fae105513/e2765753-69fa-48e6-8589-f63b562463a6/0f21d8da-5e4c-4c18-a2a7-4132da97b470/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ebdef5a8-750c-43c7-8e40-45d4453493b1/6a008181fb080baf2f0037af/57cdb771-82b3-4bc0-9c6f-b2ea20f35403/slot/Right-Side-View---Processed.png?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/f4281a5f-d557-48e2-9494-f51949626a2f/e2765753-69fa-48e6-8589-f63b562463a6/c14f9f34-5427-4930-80d9-3aa4df9f8813/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ec5bfddd-40da-4f49-a2fe-95c504134f44/e2765753-69fa-48e6-8589-f63b562463a6/efaefb26-889b-4f99-834a-613ce7698cbb/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ed2da759-b9a8-4a9d-b096-ee0c2a8f7cbe/e2765753-69fa-48e6-8589-f63b562463a6/3dc58381-6627-458a-b8e1-674b310365fb/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "14",
        slug: "maruti-brezza-zxi-plus-at-2023",

        brand: "Maruti",
        model: "Brezza",
        variant: "ZXI Plus AT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 15000,

        engine: "1462 cc",
        mileage: 19,

        color: "Brave Khaki",

        originalPrice: 1650000,
        discountedPrice: 1450000,
        emi: 27850,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 95,

        featured: true,

        description:
            "Top-end Brezza with sunroof and automatic transmission in excellent condition.",

        features: [
            "Sunroof",
            "Heads-Up Display",
            "360 Camera",
            "Cruise Control",
            "Wireless Charging"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-03-15",

        postedDate: "2026-06-04",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/mainimage/FrontRightSide-Transparent/shadowBackground/1778053429080QYH7KX.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/mainimage/FrontRightSide-Transparent/virtualBackground/1778053429080QYH7KX.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/exterior/RearLeftSide/virtualBackground/1778053503960HHSTD6.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/exterior/RightMain/virtualBackground/1778053503979TYUHFT.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/exterior/FrontMain/virtualBackground/1778053503946IRIMCX.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/exterior/RearRightSide/virtualBackground/1778053503969BCZZOF.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10075998150/exterior/FrontLeftSide/virtualBackground/1778053503951J6B2N5.webp?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "15",
        slug: "maruti-dzire-zxi-plus-amt-2022",

        brand: "Maruti",
        model: "Dzire",
        variant: "ZXI Plus AMT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 21000,

        engine: "1197 cc",
        mileage: 23,

        color: "Magma Grey",

        originalPrice: 1080000,
        discountedPrice: 945000,
        emi: 18150,

        badge: "Great Deal",

        rating: 4.6,
        inspectionScore: 92,

        featured: false,

        description:
            "Reliable family sedan with excellent mileage and low maintenance costs.",

        features: [
            "Cruise Control",
            "Push Button Start",
            "Rear Camera",
            "Android Auto",
            "Apple CarPlay"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-11-20",

        postedDate: "2026-05-14",

        location: {
            city: "Vadodara",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/fb6a6bc6-160e-11f1-bd51-02ede2007fbe/5ee1df85-98df-4814-b5d8-cf7139d48c9d/146bfb34-1605-4be1-b053-52db44680073/c7672a64-d51a-4c03-8b59-9fe2f72bdb0b/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/00c844f6-c6e8-4755-a285-8885a3e74835/146bfb34-1605-4be1-b053-52db44680073/93dc1dab-aa90-422c-bf27-c7294934a70f/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/6f27ba60-37fe-4870-9195-28cdbd65be25/146bfb34-1605-4be1-b053-52db44680073/263cf399-3468-447b-8ad9-77175831f855/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e35af88e-7cfc-4536-b9c9-b5e037609049/146bfb34-1605-4be1-b053-52db44680073/c5a9e9d5-a49f-4db0-a1f5-3414d4c9d158/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/fc09dd5f-f28f-4333-828b-cd7c2c937b32/146bfb34-1605-4be1-b053-52db44680073/8dcbaf7e-deec-4644-a8a1-565a1b9546a4/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/0e62a16d-d434-431c-aee0-e4b837f1e58e/146bfb34-1605-4be1-b053-52db44680073/8d134121-b2dc-42b8-8953-0a9d500621e1/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/1b215134-aa97-47c8-b183-5220c9b9f962/146bfb34-1605-4be1-b053-52db44680073/412968b7-6281-4253-a51f-c354a84d3fba/slot/5.jpg?w=700&format=auto&dpr=2"
        ],
    },
    {
        id: "16",
        slug: "maruti-fronx-alpha-turbo-at-2024",

        brand: "Maruti",
        model: "Fronx",
        variant: "Alpha Turbo AT",

        year: 2024,
        registrationYear: 2024,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 8000,

        engine: "998 cc",
        mileage: 21,

        color: "Earthen Blue",

        originalPrice: 1525000,
        discountedPrice: 1395000,
        emi: 26750,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 95,

        featured: true,

        description:
            "Almost new Fronx Turbo automatic with premium interiors and connected car technology.",

        features: [
            "Heads-Up Display",
            "360 Camera",
            "Wireless Charging",
            "Cruise Control",
            "Android Auto",
            "Apple CarPlay"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2029-01-15",

        postedDate: "2026-06-08",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/6bf31090-583c-11f1-bd55-02ede2007fbe/m/4f726538-45a9-45d7-8fe6-520930914e2a/54977db3-77fe-4cb7-9189-0349f0e5f6e7/257d03d7-7af3-492f-8bfe-cfdfa7847d44/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/7a29cbc2-bc1f-40d9-bae3-1174a3b4d612/54977db3-77fe-4cb7-9189-0349f0e5f6e7/cdcd1915-f113-4ae8-ab39-ee01a9c4fbbd/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/77642233-7b15-49f8-b126-8051e4f90667/54977db3-77fe-4cb7-9189-0349f0e5f6e7/8320d09d-69dc-480e-846c-598abf723182/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/4c0c6dcd-8739-4981-a27f-1deece0731ab/54977db3-77fe-4cb7-9189-0349f0e5f6e7/2ada7cd9-de5d-4ad0-8955-bcb863cbd1c9/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/94648785-5d22-4758-87ce-aae7ca89e789/54977db3-77fe-4cb7-9189-0349f0e5f6e7/e19e624f-8104-4b6d-b345-7f6df60866ee/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/d7f2fd53-92b7-4488-bbfc-7afbe221ccbc/54977db3-77fe-4cb7-9189-0349f0e5f6e7/a9de41f4-553a-4cbe-9c73-fb39bcfeb729/slot/5.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "17",
        slug: "maruti-ertiga-zxi-plus-2022",

        brand: "Maruti",
        model: "Ertiga",
        variant: "ZXI Plus",

        year: 2022,
        registrationYear: 2022,

        bodyType: "MUV",
        fuelType: "Petrol",
        transmission: "Manual",

        ownership: "1st Owner",

        kmDriven: 29000,

        engine: "1462 cc",
        mileage: 20,

        color: "Pearl White",

        originalPrice: 1380000,
        discountedPrice: 1195000,
        emi: 22900,

        badge: "Assured",

        rating: 4.6,
        inspectionScore: 90,

        featured: false,

        description:
            "Spacious 7-seater family MUV with complete service history and excellent condition.",

        features: [
            "Cruise Control",
            "Rear Camera",
            "Android Auto",
            "Apple CarPlay",
            "Automatic Climate Control"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-12-20",

        postedDate: "2026-05-22",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/mainimage/FrontRightSide-Transparent/shadowBackground/17777258194541I8FUH.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/mainimage/FrontRightSide-Transparent/virtualBackground/17777258194541I8FUH.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/exterior/RearLeftSide/virtualBackground/17777258906543SE9S0.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/exterior/RightMain/virtualBackground/1777725890672NOWOZO.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/exterior/FrontMain/virtualBackground/1777725890640LGVVLM.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/exterior/RearRightSide/virtualBackground/1777725890663J5MK2K.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10053390115/exterior/FrontLeftSide/virtualBackground/1777725890644RUGZ8J.webp?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "18",
        slug: "maruti-wagonr-zxi-cng-2021",

        brand: "Maruti",
        model: "WagonR",
        variant: "ZXI CNG",

        year: 2021,
        registrationYear: 2021,

        bodyType: "Hatchback",
        fuelType: "CNG",
        transmission: "Manual",

        ownership: "2nd Owner",

        kmDriven: 42000,

        engine: "1197 cc",
        mileage: 31,

        color: "Silky Silver",

        originalPrice: 720000,
        discountedPrice: 585000,
        emi: 11250,

        badge: "Great Deal",

        rating: 4.4,
        inspectionScore: 87,

        featured: false,

        description:
            "Fuel-efficient WagonR CNG ideal for daily commuting and city driving.",

        features: [
            "Rear Parking Sensors",
            "Touchscreen",
            "Android Auto",
            "Apple CarPlay",
            "Dual Airbags"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-08-31",

        postedDate: "2026-04-30",

        location: {
            city: "Rajkot",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/f224bd44-3cf5-4578-a397-00b2406b9de9/daf5b816-36c4-4931-b09f-a3a3149dd7af/slot/thumbnail.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/f224bd44-3cf5-4578-a397-00b2406b9de9/daf5b816-36c4-4931-b09f-a3a3149dd7af/slot/thumbnail.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/24ab15be-d4ed-45cb-973f-38bc8c98a2b7/a29198c7-6182-4bdf-b839-94056b5ee661/18273780-bb32-4316-a0f0-b780f7014ede/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/6c5d3760-e0c0-47bf-83a5-7c2829cb43bb/a29198c7-6182-4bdf-b839-94056b5ee661/13583c41-e2ce-4acc-8dae-5cebd1fa802c/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/6c5d3760-e0c0-47bf-83a5-7c2829cb43bb/a29198c7-6182-4bdf-b839-94056b5ee661/13583c41-e2ce-4acc-8dae-5cebd1fa802c/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/5179adeb-2e81-4df0-bfea-e50ac30de08b/a29198c7-6182-4bdf-b839-94056b5ee661/5e33d4e2-3fa2-4b75-aa8d-ff02d04672b5/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/bd299559-5b1c-48f9-98cc-d9b1f8a22778/a29198c7-6182-4bdf-b839-94056b5ee661/e4a91958-f843-42ab-af20-20ff231295d8/slot/5.jpg?w=700&format=auto&dpr=2"

        ],
    },

    {
        id: "19",
        slug: "mahindra-xuv700-ax7-l-at-2023",

        brand: "Mahindra",
        model: "XUV700",
        variant: "AX7 L AT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 16000,

        engine: "1999 cc",
        mileage: 15,

        color: "Midnight Black",

        originalPrice: 3050000,
        discountedPrice: 2795000,
        emi: 53650,

        badge: "Top Pick",

        rating: 4.9,
        inspectionScore: 97,

        featured: true,

        description:
            "Flagship XUV700 loaded with ADAS, panoramic sunroof and premium interiors.",

        features: [
            "ADAS",
            "Panoramic Sunroof",
            "Sony Audio",
            "360 Camera",
            "Wireless Charger",
            "Ventilated Seats"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-05-20",

        postedDate: "2026-06-01",

        location: {
            city: "Mumbai",
            state: "Maharashtra",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/2cf1ed88-60a4-11f1-bd55-02ede2007fbe/92f9f4e8-2fcf-44d8-99c5-97e24e1f5636/3c7a582f-3a8c-4377-966f-07fed2793824/8cc159df-96c9-42c8-81ef-cb1e9c50c897/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/d28577ce-28f9-4525-a317-a2d6867eb56e/3c7a582f-3a8c-4377-966f-07fed2793824/b21d9064-5692-4642-9f71-0a0906fda892/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/3cd73ccd-846a-4a7b-9895-39ae9bac4b8d/3c7a582f-3a8c-4377-966f-07fed2793824/93003de7-1e66-4b0d-91d2-ff268ab24946/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/ff4723b4-1e1d-487f-8535-c9092c8d81bf/3c7a582f-3a8c-4377-966f-07fed2793824/7e688cc8-ea06-4928-a2db-d8f6dbb87b0f/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/943a91cf-0908-49c0-9243-adf2caa477f2/3c7a582f-3a8c-4377-966f-07fed2793824/cadce7f5-86e2-4919-a0a5-470880fbedad/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/fd992c28-caec-4e32-8a13-bf0d2d884d28/3c7a582f-3a8c-4377-966f-07fed2793824/c4f1da53-a873-470c-8e93-05ef1df36e0d/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/0baa5438-3762-4c14-ba85-eb17474954fe/3c7a582f-3a8c-4377-966f-07fed2793824/b70eb780-a3cf-4830-8c19-0cb5af8abf55/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "20",
        slug: "mahindra-scorpio-n-z8l-at-2023",

        brand: "Mahindra",
        model: "Scorpio N",
        variant: "Z8L AT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 18000,

        engine: "2198 cc",
        mileage: 16,

        color: "Deep Forest",

        originalPrice: 2950000,
        discountedPrice: 2695000,
        emi: 51700,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 96,

        featured: true,

        description:
            "Powerful Scorpio N automatic with rugged capability and premium features.",

        features: [
            "Sunroof",
            "Sony Audio",
            "360 Camera",
            "Cruise Control",
            "Wireless Charging",
            "Push Button Start"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-04-10",

        postedDate: "2026-05-28",

        location: {
            city: "Pune",
            state: "Maharashtra",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/mainimage/FrontRightSide-Transparent/shadowBackground/177633410742055RYO8.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/mainimage/FrontRightSide-Transparent/virtualBackground/177633410742055RYO8.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/exterior/RearLeftSide/virtualBackground/1776334188152AZK59Q.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/exterior/RightMain/virtualBackground/1776334188172DLZNIC.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/exterior/FrontMain/virtualBackground/1776334188137NWZRZX.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/exterior/RearRightSide/virtualBackground/1776334188162G8IKNE.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10033596177/exterior/FrontLeftSide/virtualBackground/17763341881427JJPG6.webp?w=700&format=auto&dpr=2"
        ],
    },
    {
        id: "21",
        slug: "mahindra-thar-lx-at-4x4-2022",

        brand: "Mahindra",
        model: "Thar",
        variant: "LX AT 4x4",

        year: 2022,
        registrationYear: 2022,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 19000,

        engine: "2184 cc",
        mileage: 15,

        color: "Napoli Black",

        originalPrice: 2100000,
        discountedPrice: 1895000,
        emi: 36400,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 95,

        featured: true,

        description:
            "Adventure-ready Mahindra Thar 4x4 with automatic transmission and low mileage.",

        features: [
            "4x4",
            "Cruise Control",
            "Touchscreen",
            "Android Auto",
            "Apple CarPlay",
            "Rear Parking Camera"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-02-15",

        postedDate: "2026-05-18",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/1d3739f8-5801-11f1-bd55-02ede2007fbe/9712df49-586d-49ff-a00e-2cf214cd5bd3/2fe185de-ae64-4231-befe-b420384d550d/ec624f95-5f16-49de-b5ab-fbe913059166/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/feb6dbcc-0f7e-4c46-ab2f-84c09f41078a/2fe185de-ae64-4231-befe-b420384d550d/a769ea8d-5b52-4e24-b766-a928d0034999/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/bee942f7-6aae-41f4-9f87-d2fa8104ee2d/2fe185de-ae64-4231-befe-b420384d550d/9eb828f2-419e-4b26-8c93-a9bf0c9e6857/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e5126551-c475-465a-b238-c83ee70fcd3b/2fe185de-ae64-4231-befe-b420384d550d/8374edb5-e417-46eb-8da2-e53edece2759/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/0d72ff09-2da2-45c6-b439-944bd0f31e3d/2fe185de-ae64-4231-befe-b420384d550d/0b749062-4b88-45ab-8fb6-7919b73cfd3b/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/714d19d4-3195-463b-9438-955f428060dd/2fe185de-ae64-4231-befe-b420384d550d/ac7d904b-d3af-438e-9347-c1f1579ce0a4/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c6f9466d-f8d1-4fe3-a0ac-0c1994981c99/2fe185de-ae64-4231-befe-b420384d550d/9ad66fd5-7e6c-4683-9bb7-51c9b33087d4/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/4751c9ef-beb5-402a-b352-50bf5cffa550/2fe185de-ae64-4231-befe-b420384d550d/7be1b62d-b4cd-4905-854f-3c730881b6b8/slot/3.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "22",
        slug: "mahindra-bolero-neo-n10-2022",

        brand: "Mahindra",
        model: "Bolero Neo",
        variant: "N10",

        year: 2022,
        registrationYear: 2022,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Manual",

        ownership: "1st Owner",

        kmDriven: 31000,

        engine: "1493 cc",
        mileage: 17,

        color: "Diamond White",

        originalPrice: 1450000,
        discountedPrice: 1225000,
        emi: 23500,

        badge: "Assured",

        rating: 4.4,
        inspectionScore: 88,

        featured: false,

        description:
            "Rugged SUV with body-on-frame construction and dependable diesel engine.",

        features: [
            "Cruise Control",
            "Touchscreen",
            "Rear Parking Sensors",
            "Dual Airbags",
            "ABS"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-11-20",

        postedDate: "2026-04-25",

        location: {
            city: "Indore",
            state: "Madhya Pradesh",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10098592188/mainimage/FrontRightSide-Transparent/shadowBackground/1779882876882MV4RT4.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10098592188/mainimage/FrontRightSide-Transparent/virtualBackground/1779882876882MV4RT4.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10098592188/exterior/RightMain/virtualBackground/1779882947192TISSGA.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10098592188/exterior/FrontMain/virtualBackground/1779882947154IQJN5P.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10098592188/exterior/RearRightSide/virtualBackground/1779882947181GBMYJX.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10098592188/exterior/RearMain/virtualBackground/1779882947176RT210A.png?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "23",
        slug: "mahindra-xuv-3xo-ax5-at-2024",

        brand: "Mahindra",
        model: "XUV 3XO",
        variant: "AX5 AT",

        year: 2024,
        registrationYear: 2024,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 6000,

        engine: "1197 cc",
        mileage: 18,

        color: "Galaxy Grey",

        originalPrice: 1695000,
        discountedPrice: 1545000,
        emi: 29650,

        badge: "Great Deal",

        rating: 4.7,
        inspectionScore: 93,

        featured: false,

        description:
            "Nearly new XUV 3XO with panoramic sunroof and premium technology package.",

        features: [
            "Panoramic Sunroof",
            "360 Camera",
            "Wireless Charging",
            "ADAS",
            "Android Auto",
            "Apple CarPlay"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2029-04-15",

        postedDate: "2026-06-10",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/58d29dc4-5f75-11f1-bd55-02ede2007fbe/m/21db0327-ae7b-4e82-8189-ef2784a8e9f0/31c31d0e-1fc0-4399-814e-34a2e1aec891/d2494a11-23fc-46f1-9793-421fe4faaaf1/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/c502ee4c-9e44-4794-8954-d9c5e04bc971/31c31d0e-1fc0-4399-814e-34a2e1aec891/031c0617-d01f-4b8c-bca5-9ce5331433fc/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/82030c9f-52cf-433f-aedf-db3ade66dbe6/31c31d0e-1fc0-4399-814e-34a2e1aec891/7b484af4-bdb0-439e-9f06-5d6697cbf066/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/21cb90ba-5231-4674-a925-552a210f50f2/31c31d0e-1fc0-4399-814e-34a2e1aec891/b30e3187-6083-4b60-885c-ed0688e28cfa/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/21cb90ba-5231-4674-a925-552a210f50f2/31c31d0e-1fc0-4399-814e-34a2e1aec891/b30e3187-6083-4b60-885c-ed0688e28cfa/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/21cb90ba-5231-4674-a925-552a210f50f2/31c31d0e-1fc0-4399-814e-34a2e1aec891/b30e3187-6083-4b60-885c-ed0688e28cfa/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/21cb90ba-5231-4674-a925-552a210f50f2/31c31d0e-1fc0-4399-814e-34a2e1aec891/b30e3187-6083-4b60-885c-ed0688e28cfa/slot/3.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "24",
        slug: "toyota-fortuner-legender-4x4-at-2022",

        brand: "Toyota",
        model: "Fortuner",
        variant: "Legender 4x4 AT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 28000,

        engine: "2755 cc",
        mileage: 14,

        color: "Pearl White",

        originalPrice: 5200000,
        discountedPrice: 4695000,
        emi: 90150,

        badge: "Top Pick",

        rating: 4.9,
        inspectionScore: 98,

        featured: true,

        description:
            "Premium Fortuner Legender with powerful diesel engine and legendary reliability.",

        features: [
            "4x4",
            "Ventilated Seats",
            "Wireless Charging",
            "JBL Audio",
            "Cruise Control",
            "360 Camera"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-06-30",

        postedDate: "2026-05-26",

        location: {
            city: "Mumbai",
            state: "Maharashtra",
        },

        images: [
            "https://marketplace-cdn.cars24.com/production/10043993155/main%20image/2026-05-09/car_replace_bg_414129b4-7c2a-43e0-bf96-ce5c843fe887.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://c2c-marketplace.s3.ap-south-1.amazonaws.com/production/10043993155/exterior/2026-05-09/UILd04FEjTFfpo6o7vOfhNNSvc3kVqxC0jSxu6EeL-E?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10043993155/exterior/RearLeftSide/virtualBackground/1778320404431IOQ8BN.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10043993155/exterior/RightMain/virtualBackground/17783204044514AFGOI.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10043993155/exterior/FrontMain/virtualBackground/1778320404416LYN9LW.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10043993155/exterior/RearRightSide/virtualBackground/1778320404441UBIQBY.webp?w=700&format=auto&dpr=2"
        ],
    }, {
        id: "25",
        slug: "toyota-innova-crysta-zx-2021",

        brand: "Toyota",
        model: "Innova Crysta",
        variant: "ZX AT",

        year: 2021,
        registrationYear: 2021,

        bodyType: "MUV",
        fuelType: "Diesel",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 42000,

        engine: "2393 cc",
        mileage: 14,

        color: "Silver Metallic",

        originalPrice: 3100000,
        discountedPrice: 2695000,
        emi: 51700,

        badge: "Assured",

        rating: 4.8,
        inspectionScore: 95,

        featured: true,

        description:
            "Top-end Innova Crysta with captain seats, automatic transmission and excellent comfort.",

        features: [
            "Captain Seats",
            "Rear AC Vents",
            "Cruise Control",
            "Push Button Start",
            "Touchscreen",
            "Rear Camera"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-10-31",

        postedDate: "2026-04-28",

        location: {
            city: "Bengaluru",
            state: "Karnataka",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/mainimage/FrontRightSide-Transparent/shadowBackground/1776508826569UVRJZF.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/mainimage/FrontRightSide-Transparent/shadowBackground/1776508826569UVRJZF.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/exterior/RearLeftSide/virtualBackground/1776508913249I0CRUN.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/exterior/RightMain/virtualBackground/1776508913268EW99JM.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/exterior/FrontMain/virtualBackground/1776508913234ENMQDU.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/exterior/RearRightSide/virtualBackground/1776508913258UIW8LV.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10088599178/exterior/FrontLeftSide/virtualBackground/1776508913239O7LVKE.webp?w=700&format=auto&dpr=2"
        ],
    },
    {
        id: "26",
        slug: "toyota-hyryder-v-hybrid-at-2023",

        brand: "Toyota",
        model: "Hyryder",
        variant: "V Hybrid AT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 17000,

        engine: "1490 cc",
        mileage: 27,

        color: "Cafe White",

        originalPrice: 2350000,
        discountedPrice: 2095000,
        emi: 40200,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 94,

        featured: true,

        description:
            "Strong hybrid Toyota Hyryder offering exceptional mileage and premium comfort.",

        features: [
            "Panoramic Sunroof",
            "360 Camera",
            "Heads Up Display",
            "Wireless Charging",
            "Ventilated Seats",
            "Cruise Control"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-04-15",

        postedDate: "2026-05-28",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/mainimage/FrontRightSide-Transparent/shadowBackground/1778826524641GQTCPU.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/mainimage/FrontRightSide-Transparent/virtualBackground/1778826524641GQTCPU.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/exterior/RearLeftSide/virtualBackground/1778826591704UOYVNP.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/exterior/RearLeftSide/virtualBackground/1778826591704UOYVNP.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/exterior/FrontMain/virtualBackground/1778826591687QH1ALD.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/exterior/RearRightSide/virtualBackground/1778826591716LWL8YO.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10017994187/exterior/LeftMain/virtualBackground/17788265916982FZU6D.png?w=700&format=auto&dpr=2"

        ],
    },

    {
        id: "27",
        slug: "toyota-glanza-v-cvt-2022",

        brand: "Toyota",
        model: "Glanza",
        variant: "V CVT",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Hatchback",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 22000,

        engine: "1197 cc",
        mileage: 22,

        color: "White",

        originalPrice: 1120000,
        discountedPrice: 975000,
        emi: 18700,

        badge: "Assured",

        rating: 4.5,
        inspectionScore: 90,

        featured: false,

        description:
            "Premium hatchback with Toyota reliability and smooth CVT transmission.",

        features: [
            "Heads Up Display",
            "360 Camera",
            "Android Auto",
            "Apple CarPlay",
            "Rear Camera"
        ],

        serviceHistory: true,
        warrantyAvailable: false,
        rcAvailable: true,

        insuranceValidTill: "2027-09-30",

        postedDate: "2026-04-18",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/e0d7b6a8-60a8-11f1-bd55-02ede2007fbe/m/b55cb9a8-9cb2-4541-bf5e-0b9ba0a9b0a8/b3f4c41d-744e-4d95-8f24-9335ec79ae82/0e868c29-94f2-40f2-85d2-8216f333fcc9/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/789e88d4-a543-4234-8295-8d13cae98018/b3f4c41d-744e-4d95-8f24-9335ec79ae82/3c5440bd-9d83-4691-8e16-d6891e585968/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/05d34df0-14d3-4bf2-92f9-54de7f44f71d/b3f4c41d-744e-4d95-8f24-9335ec79ae82/a78b5b21-7fa4-4ffa-9e39-6a3396f27158/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/be1d7913-9db4-47ee-a21f-5efded477a42/b3f4c41d-744e-4d95-8f24-9335ec79ae82/30c6f588-8401-4a9f-a11e-aff1c91b9c8b/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/7b24fe57-eb07-4baf-b7a0-60d255b30ddc/b3f4c41d-744e-4d95-8f24-9335ec79ae82/efc0e744-1d91-4c2a-8e03-5c0ec428c096/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/a718d4e2-9378-4b9e-9055-607539141183/b3f4c41d-744e-4d95-8f24-9335ec79ae82/654121f2-e60e-44a2-81cf-4e5555fe92e0/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/443dcbaa-70e1-42e8-9861-9b6ebe6665d3/b3f4c41d-744e-4d95-8f24-9335ec79ae82/e4ac22a5-08aa-4985-be05-64c73c546774/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "28",
        slug: "kia-seltos-gtx-plus-dct-2023",

        brand: "Kia",
        model: "Seltos",
        variant: "GTX Plus DCT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 14000,

        engine: "1482 cc",
        mileage: 17,

        color: "brown",

        originalPrice: 2450000,
        discountedPrice: 2195000,
        emi: 42100,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 95,

        featured: true,

        description:
            "Feature-loaded Kia Seltos GTX Plus with ADAS and panoramic displays.",

        features: [
            "ADAS",
            "Panoramic Sunroof",
            "360 Camera",
            "Ventilated Seats",
            "BOSE Audio",
            "Wireless Charging"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-05-31",

        postedDate: "2026-06-02",

        location: {
            city: "Mumbai",
            state: "Maharashtra",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/d7e972b8-3e37-11f1-bd54-02ede2007fbe/m/7cffc5c5-e893-4420-aefa-81d80e4ee117/6788add5-8ab3-498a-9fff-c890be86da02/84e8c278-9928-4889-9363-feca591e3d20/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/m/1da9f11a-a6e9-4a0a-8c4c-3d88a8b69257/6788add5-8ab3-498a-9fff-c890be86da02/f9832efe-9960-4386-be71-0f35fd4f725a/slot/2.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/fd41f22f-9cc5-4eab-bc7a-2274ff722bf1/6788add5-8ab3-498a-9fff-c890be86da02/46e16351-2471-486a-a6a0-2a094fd227a2/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/2638c1e6-18fa-49ae-a696-d7c01452af1b/6788add5-8ab3-498a-9fff-c890be86da02/c4cee7c8-2b08-4c38-95c9-5226c5ee9c04/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/8fbd3ee4-92a8-4ef7-8606-4d1ee0356694/6788add5-8ab3-498a-9fff-c890be86da02/477124f7-1ee3-4a12-831c-61f054f7e113/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c808b0be-8866-42c6-b35f-70cb72d342b8/6788add5-8ab3-498a-9fff-c890be86da02/d61ac694-b8e3-4b52-812d-e594a587eee7/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c808b0be-8866-42c6-b35f-70cb72d342b8/6788add5-8ab3-498a-9fff-c890be86da02/d61ac694-b8e3-4b52-812d-e594a587eee7/slot/5.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "29",
        slug: "kia-sonet-htx-dct-2023",

        brand: "Kia",
        model: "Sonet",
        variant: "HTX DCT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 16000,

        engine: "998 cc",
        mileage: 18,

        color: "Aurora Black",

        originalPrice: 1625000,
        discountedPrice: 1425000,
        emi: 27300,

        badge: "Great Deal",

        rating: 4.7,
        inspectionScore: 92,

        featured: false,

        description:
            "Compact SUV with sporty styling, connected tech and premium cabin.",

        features: [
            "Ventilated Seats",
            "Air Purifier",
            "Wireless Charging",
            "Cruise Control",
            "Android Auto",
            "Apple CarPlay"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-03-20",

        postedDate: "2026-05-21",

        location: {
            city: "Pune",
            state: "Maharashtra",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/4cbfff58-59b8-11f1-bd55-02ede2007fbe/da8b8b0e-8ca4-4267-bcdf-8f93bc5efd96/dad09db0-5985-4a3c-b678-6660d2d20e59/200174aa-63ca-4e98-8c77-d7cd5567eb0b/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/db941422-63a6-4e19-8314-30cb7ea093fd/dad09db0-5985-4a3c-b678-6660d2d20e59/bd14e062-84ac-4979-8039-9c2204454340/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/4086b194-ff88-40ea-b834-a5d34fb6e987/dad09db0-5985-4a3c-b678-6660d2d20e59/134867da-652e-41ae-b0f5-9fa1fe9abe8f/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e9795e19-314d-4b99-a35f-9f92933fb728/dad09db0-5985-4a3c-b678-6660d2d20e59/5634833a-1046-4fc8-8f31-bf5036684f1f/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/463eb00b-f40c-458d-a05f-fc3196912dfd/dad09db0-5985-4a3c-b678-6660d2d20e59/2da0a64e-f3b7-41ed-a648-2a21ca2629e8/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/463eb00b-f40c-458d-a05f-fc3196912dfd/dad09db0-5985-4a3c-b678-6660d2d20e59/2da0a64e-f3b7-41ed-a648-2a21ca2629e8/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c1932eaa-b534-48d3-9b25-b55d7e4ca932/dad09db0-5985-4a3c-b678-6660d2d20e59/88df2fa4-cacf-41e8-b262-019e9c18fb79/slot/7.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "30",
        slug: "kia-carens-luxury-plus-dct-2023",

        brand: "Kia",
        model: "Carens",
        variant: "Luxury Plus DCT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "MUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 19000,

        engine: "1482 cc",
        mileage: 17,

        color: "Glacier White",

        originalPrice: 2250000,
        discountedPrice: 1995000,
        emi: 38300,

        badge: "Assured",

        rating: 4.7,
        inspectionScore: 94,

        featured: true,

        description:
            "Premium 6-seater Kia Carens with captain seats and top-end features.",

        features: [
            "Captain Seats",
            "Ventilated Seats",
            "BOSE Audio",
            "Sunroof",
            "Wireless Charging",
            "Air Purifier"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-04-25",

        postedDate: "2026-05-30",

        location: {
            city: "Bengaluru",
            state: "Karnataka",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10080194110/mainimage/FrontRightSide-Transparent/shadowBackground/1777635049830LWYFBJ.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://c2c-marketplace.s3.ap-south-1.amazonaws.com/production/10080194110/exterior/2026-05-01/CKAzWufAfoOb3vCmrmyBMD3XBFYK43gAA-9FvysQ0MY?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10080194110/exterior/FrontMain/virtualBackground/1777635119471CJCP5H.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10080194110/exterior/RearRightSide/virtualBackground/1777635119499WCDCTY.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10080194110/exterior/FrontLeftSide/virtualBackground/1777635119477GE5RSH.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10080194110/exterior/FrontLeftSide/virtualBackground/1777635119477GE5RSH.webp?w=700&format=auto&dpr=2",

        ],
    },
    {
        id: "31",
        slug: "bmw-x1-sdrive18i-2023",

        brand: "BMW",
        model: "X1",
        variant: "sDrive18i M Sport",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 14000,

        engine: "1499 cc",
        mileage: 17,

        color: "Alpine White",

        originalPrice: 5800000,
        discountedPrice: 5295000,
        emi: 101500,

        badge: "Top Pick",

        rating: 4.9,
        inspectionScore: 98,

        featured: true,

        description:
            "Luxury BMW X1 with panoramic sunroof, digital cockpit and premium interiors.",

        features: [
            "Panoramic Sunroof",
            "Digital Cockpit",
            "Wireless Charging",
            "360 Camera",
            "Connected Drive",
            "ADAS"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-06-15",

        postedDate: "2026-06-01",

        location: {
            city: "Mumbai",
            state: "Maharashtra",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/mainimage/FrontRightSide-Transparent/shadowBackground/1772102217357SPR6DD.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/mainimage/FrontRightSide-Transparent/virtualBackground/1772102217357SPR6DD.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/exterior/RearLeftSide/virtualBackground/177210230365124A9IY.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/exterior/RightMain/virtualBackground/1772102303671A1JXL9.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/exterior/FrontMain/virtualBackground/1772102303637AKRP7K.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/exterior/RearRightSide/virtualBackground/1772102303661BR5B6I.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10378160742/exterior/FrontLeftSide/virtualBackground/1772102303642LY5OGU.webp?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "32",
        slug: "bmw-3-series-gran-limousine-2022",

        brand: "BMW",
        model: "3 Series",
        variant: "Gran Limousine 330Li",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 22000,

        engine: "1998 cc",
        mileage: 15,

        color: "Mineral White",

        originalPrice: 6500000,
        discountedPrice: 5795000,
        emi: 111200,

        badge: "Top Pick",

        rating: 4.9,
        inspectionScore: 97,

        featured: true,

        description:
            "Executive luxury sedan with premium comfort, performance and rear seat space.",

        features: [
            "Sunroof",
            "Harman Kardon Audio",
            "Wireless Charging",
            "360 Camera",
            "ADAS",
            "Ambient Lighting"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-03-20",

        postedDate: "2026-05-20",

        location: {
            city: "Delhi",
            state: "Delhi",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/mainimage/FrontRightSide-Transparent/shadowBackground/1779967256857SBOH51.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/mainimage/FrontRightSide-Transparent/virtualBackground/1779967256857SBOH51.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/exterior/RearLeftSide/virtualBackground/1779967327796VN1ZZC.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/exterior/RightMain/virtualBackground/1779967327817WTUHAT.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/exterior/FrontMain/virtualBackground/1779967327779CYIRPZ.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/exterior/FrontMain/virtualBackground/1779967327779CYIRPZ.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10395695130/exterior/FrontLeftSide/virtualBackground/1779967327785UVJXQD.png?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "33",
        slug: "bmw-5-series-530i-m-sport-2022",

        brand: "BMW",
        model: "5 Series",
        variant: "530i M Sport",

        year: 2022,
        registrationYear: 2022,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 18000,

        engine: "1998 cc",
        mileage: 14,

        color: "Carbon Black",

        originalPrice: 7600000,
        discountedPrice: 6795000,
        emi: 130500,

        badge: "Top Pick",

        rating: 5,
        inspectionScore: 99,

        featured: true,

        description:
            "Luxury executive sedan with powerful turbo engine and premium comfort package.",

        features: [
            "Adaptive LED Headlamps",
            "360 Camera",
            "Wireless Charging",
            "Sunroof",
            "Harman Kardon Audio",
            "ADAS"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-04-10",

        postedDate: "2026-05-28",

        location: {
            city: "Bengaluru",
            state: "Karnataka",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10331495159/mainimage/FrontRightSide-Transparent/shadowBackground/1778060378131QPCEKU.webp?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10331495159/mainimage/FrontRightSide-Transparent/virtualBackground/1778060378131QPCEKU.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10331495159/exterior/RearLeftSide/virtualBackground/1778060451561PMGPNC.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10331495159/exterior/RightMain/virtualBackground/1778060451581HR5V6U.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10331495159/exterior/FrontMain/virtualBackground/1778060451546GWVPJ1.webp?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10331495159/exterior/RearMain/virtualBackground/1778060451567N1CCDJ.webp?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "34",
        slug: "hyundai-alcazar-signature-at-2023",

        brand: "Hyundai",
        model: "Alcazar",
        variant: "Signature AT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 15000,

        engine: "1482 cc",
        mileage: 18,

        color: "Titan Grey",

        originalPrice: 2450000,
        discountedPrice: 2195000,
        emi: 42100,

        badge: "Assured",

        rating: 4.8,
        inspectionScore: 95,

        featured: false,

        description:
            "Premium 6-seater SUV with panoramic sunroof and ventilated seats.",

        features: [
            "Panoramic Sunroof",
            "Ventilated Seats",
            "360 Camera",
            "Bose Audio",
            "Wireless Charging",
            "ADAS"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-02-15",

        postedDate: "2026-05-18",

        location: {
            city: "Ahmedabad",
            state: "Gujarat",
        },

        images: [
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/a7d17f8a-4d2d-11f1-bd55-02ede2007fbe/0f7c4b63-3b1a-4a56-88a4-fb55f9a9992e/6a678b4c-6616-4164-a72c-75f39919fc0a/0fafa5ba-3966-4cc2-a9b2-64a5c065d0fc/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/no_bg/a7d17f8a-4d2d-11f1-bd55-02ede2007fbe/0f7c4b63-3b1a-4a56-88a4-fb55f9a9992e/6a678b4c-6616-4164-a72c-75f39919fc0a/0fafa5ba-3966-4cc2-a9b2-64a5c065d0fc/slot/1.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/c79c484a-6965-4b5a-835f-2b1028113e8f/6a678b4c-6616-4164-a72c-75f39919fc0a/75a186f3-3494-4a03-8e55-8d85e31b5512/slot/1.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/185076e5-c8e1-420e-b30c-6f5c6804bcca/6a678b4c-6616-4164-a72c-75f39919fc0a/d996b09a-4cd6-400f-884e-13a4dac49f1c/slot/3.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/328edd25-9fd0-4eef-9af6-e48d8112dd6c/6a678b4c-6616-4164-a72c-75f39919fc0a/cfdbc51c-9570-4863-9100-59e26050e96d/slot/4.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/e17e1142-0849-4e1a-a030-1d25ea0d5025/6a678b4c-6616-4164-a72c-75f39919fc0a/f70b225d-ee0e-4f60-87f3-6b3b79d5ee09/slot/5.jpg?w=700&format=auto&dpr=2",
            "https://media.cars24.com/hello-ar/dev/transformed/uploads/dc29e3a5-c53a-47fc-b4af-4f9117123e9b/6a678b4c-6616-4164-a72c-75f39919fc0a/acef37f1-e1de-4a67-acce-eb8c114ff965/slot/6.jpg?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "35",
        slug: "hyundai-exter-sx-o-2024",

        brand: "Hyundai",
        model: "Exter",
        variant: "SX(O)",

        year: 2024,
        registrationYear: 2024,

        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 7000,

        engine: "1197 cc",
        mileage: 19,

        color: "Atlas White",

        originalPrice: 1250000,
        discountedPrice: 1145000,
        emi: 22000,

        badge: "Great Deal",

        rating: 4.6,
        inspectionScore: 91,

        featured: false,

        description:
            "Compact SUV with sunroof, connected features and low running costs.",

        features: [
            "Sunroof",
            "Dashcam",
            "Rear Camera",
            "Cruise Control",
            "Android Auto",
            "Apple CarPlay"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2029-01-31",

        postedDate: "2026-06-05",

        location: {
            city: "Surat",
            state: "Gujarat",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/mainimage/FrontRightSide-Transparent/shadowBackground/1779629119132U5SHUD.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/mainimage/FrontRightSide-Transparent/shadowBackground/1779629119132U5SHUD.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/exterior/RearLeftSide/virtualBackground/1779629183529U9J2L6.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/exterior/RightMain/virtualBackground/1779629183550YGBDBH.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/exterior/FrontMain/virtualBackground/1779629183514MAKIAV.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/exterior/RearRightSide/virtualBackground/1779629183539OC0LD3.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/exterior/FrontLeftSide/virtualBackground/1779629183519CSNQMY.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10390962707/exterior/LeftMain/virtualBackground/1779629183524R56RT0.png?w=700&format=auto&dpr=2"
        ],
    },

    {
        id: "36",
        slug: "tata-safari-accomplished-plus-at-2023",

        brand: "Tata",
        model: "Safari",
        variant: "Accomplished Plus AT",

        year: 2023,
        registrationYear: 2023,

        bodyType: "SUV",
        fuelType: "Diesel",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 19000,

        engine: "1956 cc",
        mileage: 16,

        color: "Cosmic Gold",

        originalPrice: 3150000,
        discountedPrice: 2845000,
        emi: 54600,

        badge: "Top Pick",

        rating: 4.8,
        inspectionScore: 96,

        featured: true,

        description:
            "Premium Tata Safari with ADAS, panoramic sunroof and captain seats.",

        features: [
            "ADAS",
            "Panoramic Sunroof",
            "360 Camera",
            "Ventilated Seats",
            "Captain Seats",
            "JBL Audio"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-05-15",

        postedDate: "2026-05-30",

        location: {
            city: "Pune",
            state: "Maharashtra",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10328892139/mainimage/FrontRightSide-Transparent/shadowBackground/17802311213250BGZZM.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://marketplace-cdn.cars24.com/visio/prod/10328892139/mainimage/FrontRightSide-Transparent/virtualBackground/17802311213250BGZZM.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10328892139/exterior/RearLeftSide/virtualBackground/1780231215851CYYQME.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10328892139/exterior/RearLeftSide/virtualBackground/1780231215851CYYQME.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10328892139/exterior/RearLeftSide/virtualBackground/1780231215851CYYQME.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10328892139/exterior/RearLeftSide/virtualBackground/1780231215851CYYQME.png?w=700&format=auto&dpr=2",

        ],
    },
    {
        id: "37",
        slug: "toyota-camry-hybrid-2023",

        brand: "Toyota",
        model: "Camry",
        variant: "Hybrid",

        year: 2023,
        registrationYear: 2023,

        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",

        ownership: "1st Owner",

        kmDriven: 12000,

        engine: "2487 cc",
        mileage: 23,

        color: "Attitude Black",

        originalPrice: 5600000,
        discountedPrice: 5150000,
        emi: 98800,

        badge: "Top Pick",

        rating: 4.9,
        inspectionScore: 97,

        featured: true,

        description:
            "Luxury hybrid sedan with unmatched comfort and fuel efficiency.",

        features: [
            "JBL Audio",
            "Ventilated Seats",
            "Wireless Charging",
            "360 Camera",
            "Sunroof",
            "ADAS"
        ],

        serviceHistory: true,
        warrantyAvailable: true,
        rcAvailable: true,

        insuranceValidTill: "2028-06-20",

        postedDate: "2026-05-22",

        location: {
            city: "Chennai",
            state: "Tamil Nadu",
        },

        images: [
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/mainimage/FrontRightSide-Transparent/shadowBackground/1779009609014EPIMTH.png?w=200&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
            "https://c2c-marketplace.s3.ap-south-1.amazonaws.com/production/10185193184/exterior/2026-05-17/9O8sTFRhdEO17ea-sKDwDIQ5IJNyNiY8MjolOj9fpfw?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/RearLeftSide/virtualBackground/1779009676522HMBBZ9.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/RightMain/virtualBackground/1779009676543KH7CUU.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/RightMain/virtualBackground/1779009676543KH7CUU.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/RightMain/virtualBackground/1779009676543KH7CUU.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/FrontLeftSide/virtualBackground/1779009676512DD4TIS.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/LeftMain/virtualBackground/1779009676517VDW8RL.png?w=700&format=auto&dpr=2",
            "https://marketplace-cdn.cars24.com/visio/prod/10185193184/exterior/LeftMain/virtualBackground/1779009676517VDW8RL.png?w=700&format=auto&dpr=2"
        ],
    },

];