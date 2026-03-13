export type ProductResponse ={
    id : number;
    title : string;
    price: number;
    description: string;
    category: Category;
    images: string[];
    createAt: string;
    updateAt: string;
}

export type Category = {
    id: number;
    name: string;
    slug: string;
    image: string;
    createAt: string;
    updateAt: string;
}