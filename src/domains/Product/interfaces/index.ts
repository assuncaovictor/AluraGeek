interface Product {
    name: string;
    price: number;
    description?: string;
    url?: string;
}

interface ListProducts {
    category: string;
    url: string;
    products: Product[];
}

export type { Product, ListProducts };
