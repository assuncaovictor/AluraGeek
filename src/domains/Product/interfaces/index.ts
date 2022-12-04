interface Product {
    name: string;
    price: number;
    description?: string;
    image: string;
    id: string;
}

interface ListProducts {
    category: string;
    url: string;
    id: string;
    products: Product[];
}

export type { Product, ListProducts };
