// Utility types
type Product={
    id:number;
    name: string;
    price: number;
    stock:number;
    color?:string;
}
type ProductSummery=Pick<Product, 'id'|'name'|'price'>;
type ProductSummeryWithoutStock=Omit<Product, 'stock'|'color'>;
type ProductSummeryWithColor=Required<Product>;
type ProductWithColor=Required<Product>;
type OptionalProduct=Partial<Product>;
type JustReadOnlyProduct=Readonly<Product>;
type ProductSummeryWithoutStock1 = Omit<Product, "stock" >;


const emptyObj:Record<string,unknown>={}
const product1={
    id:123,
    name: 'watch',
    price: 1230
}