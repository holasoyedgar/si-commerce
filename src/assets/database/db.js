const allProducts = [{
        "id": 1,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "stock": 34,
        "category": 1,
        "image": "https://i.dummyjson.com/data/products/2/1.jpg"
    },
    {
        "id": 2,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "stock": 32,
        "category": 1,
        "image": "https://i.dummyjson.com/data/products/5/1.jpg"
    },
    {
        "id": 3,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "stock": 83,
        "category": 2,
        "image": "https://i.dummyjson.com/data/products/6/1.png"
    },
    {
        "id": 4,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "stock": 50,
        "category": 2,
        "image": "https://i.dummyjson.com/data/products/7/1.jpg"
    },
    {
        "id": 5,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "stock": 68,
        "category": 2,
        "image": "https://i.dummyjson.com/data/products/8/1.jpg"
    },
    {
        "id": 6,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        "price": 1099,
        "stock": 89,
        "category": 2,
        "image": "https://i.dummyjson.com/data/products/10/1.jpg"
    },
    {
        "id": 7,
        "title": "Perfume",
        "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        "price": 13,
        "stock": 65,
        "category": 3,
        "image": "https://i.dummyjson.com/data/products/11/1.jpg"
    },
    {
        "id": 8,
        "title": "Brown Perfume",
        "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        "price": 40,
        "stock": 52,
        "category": 3,
        "image": "https://i.dummyjson.com/data/products/12/1.jpg"
    },
    {
        "id": 9,
        "title": "Fog Scent Xpressio Perfume",
        "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        "price": 13,
        "stock": 61,
        "category": 3,
        "image": "https://i.dummyjson.com/data/products/13/1.jpg"
    },
    {
        "id": 10,
        "title": "Eau De Perfume Spray",
        "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        "price": 30,
        "stock": 105,
        "category": 3,
        "image": "https://i.dummyjson.com/data/products/15/1.jpg"
    },
    {
        "id": 11,
        "title": "Hyaluronic Acid Serum",
        "description": "L'Oréal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        "price": 19,
        "stock": 110,
        "category": 4,
        "image": "https://i.dummyjson.com/data/products/16/1.png"
    },
    {
        "id": 12,
        "title": "Tree Oil 30ml",
        "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
        "price": 12,
        "stock": 78,
        "category": 4,
        "image": "https://i.dummyjson.com/data/products/17/1.jpg"
    },
    {
        "id": 13,
        "title": "Oil Free Moisturizer 100ml",
        "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        "price": 40,
        "stock": 88,
        "category": 4,
        "image": "https://i.dummyjson.com/data/products/18/1.jpg"
    },
    {
        "id": 14,
        "title": "Skin Beauty Serum.",
        "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        "price": 46,
        "stock": 54,
        "category": 4,
        "image": "https://i.dummyjson.com/data/products/19/1.jpg"
    },
    {
        "id": 15,
        "title": "- Daal Masoor 500 grams",
        "description": "Fine quality Branded Product Keep in a cool and dry place",
        "price": 20,
        "stock": 133,
        "category": 5,
        "image": "https://i.dummyjson.com/data/products/21/1.png"
    },
    {
        "id": 16,
        "title": "Elbow Macaroni - 400 gm",
        "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        "price": 14,
        "stock": 146,
        "category": 5,
        "image": "https://i.dummyjson.com/data/products/22/1.jpg"
    },
    {
        "id": 17,
        "title": "cereals muesli fruit nuts",
        "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        "price": 46,
        "stock": 113,
        "category": 5,
        "image": "https://i.dummyjson.com/data/products/24/1.jpg"
    },
    {
        "id": 18,
        "title": "Plant Hanger For Home",
        "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        "price": 41,
        "stock": 131,
        "category": 6,
        "image": "https://i.dummyjson.com/data/products/26/1.jpg"
    },
    {
        "id": 19,
        "title": "Flying Wooden Bird",
        "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        "price": 51,
        "stock": 17,
        "category": 6,
        "image": "https://i.dummyjson.com/data/products/27/1.jpg"
    },
    {
        "id": 20,
        "title": "Handcraft Chinese style",
        "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        "price": 60,
        "stock": 7,
        "category": 6,
        "image": "https://i.dummyjson.com/data/products/29/1.jpg"
    }
]

export default allProducts;