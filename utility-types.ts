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

/*
🧾 মূল Product type
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
}

👉 এখানে একটি product এর সব data আছে:

id
name
price
stock
color (optional → ? মানে থাকতেও পারে, নাও থাকতে পারে)
🚀 Utility Types বুঝি একে একে
1️⃣ Pick 👉 কিছু field নিয়ে নতুন type বানানো
type ProductSummery = Pick<Product, 'id' | 'name' | 'price'>
এর মানে:

👉 Product থেকে শুধু এগুলো নাও:

id
name
price
ফলাফল:
type ProductSummery = {
  id: number;
  name: string;
  price: number;
}
2️⃣ Omit 👉 কিছু field বাদ দেওয়া
type ProductSummeryWithoutStock = Omit<Product, 'stock' | 'color'>
এর মানে:

👉 stock আর color বাদ দাও

ফলাফল:
type ProductSummeryWithoutStock = {
  id: number;
  name: string;
  price: number;
}
3️⃣ Required 👉 সব field বাধ্যতামূলক করা
type ProductSummeryWithColor = Required<Product>
এর মানে:

👉 সব field এখন mandatory (optional আর থাকবে না)

আগে ছিল:
// color?: string (optional)
এখন হবে:
color: string // mandatory হয়ে যাবে
⚠️ Important
type ProductWithColor = Required<Product>

👉 এটা আগেরটার মতোই
👉 same কাজ করছে (duplicate type)

4️⃣ Partial 👉 সব field optional করে দেওয়া
type OptionalProduct = Partial<Product>
এর মানে:

👉 সব field optional হয়ে যাবে

ফলাফল:
type OptionalProduct = {
  id?: number;
  name?: string;
  price?: number;
  stock?: number;
  color?: string;
}
5️⃣ Readonly 👉 value change করা যাবে না
type JustReadOnlyProduct = Readonly<Product>
এর মানে:

👉 একবার set করলে change করা যাবে না

product.id = 10 ❌
6️⃣ আবার Omit example
type ProductSummeryWithoutStock1 = Omit<Product, "stock">

👉 stock বাদ দিলাম শুধু

ফলাফল:
type ProductSummeryWithoutStock1 = {
  id: number;
  name: string;
  price: number;
  color?: string;
}
🎯 এক লাইনে সব মনে রাখো
Utility	মানে
Pick	কিছু field নেওয়া
Omit	কিছু field বাদ দেওয়া
Partial	সব optional করা
Required	সব mandatory করা
Readonly	change করা যাবে না

চল 😄 একদম real-world Ecommerce Cart System দিয়ে Utility Types বুঝি — এতে সব একদম clear হয়ে যাবে 🚀🛒

🛒 1. মূল Product (shop এ যেটা থাকে)
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
}

👉 এটা হলো দোকানের full product data

🧾 2. Cart এ আমরা পুরো product রাখি না (Pick)

Cart এ শুধু দরকার:

id
name
price
type CartItem = Pick<Product, "id" | "name" | "price">;

👉 মানে:

product থেকে শুধু দরকারি info নিয়ে cart বানানো

Cart Item হবে এমন:
{
  id: 1,
  name: "T-shirt",
  price: 500
}
❌ 3. কিছু data বাদ দেওয়া (Omit)

ধরো admin panel এ stock দেখাতে চাই না

type PublicProduct = Omit<Product, "stock">;

👉 মানে:

stock hide করে দেওয়া (customer দের জন্য)

🧺 4. Cart Draft (Partial)

Cart বানানোর সময় সব data একসাথে নাও থাকতে পারে 😄

type CartDraft = Partial<Product>;

👉 মানে:

শুরুতে শুধু কিছু field থাকবে

Example:
const draft: CartDraft = {
  id: 1
}
🔒 5. Order confirm (Readonly)

Order confirm হলে কিছু change করা যাবে না ❌

type Order = Readonly<Product>;

👉 মানে:

একবার order confirm = locked 🔒

order.price = 999 // ❌ error
⚠️ 6. Stock system (Required)

ধরো কিছু product এ color missing ছিল, এখন সব mandatory করতে চাই

type StrictProduct = Required<Product>;

👉 মানে:

সব field বাধ্যতামূলক

🧠 Real Flow (Ecommerce story)
🏪 Product in shop
Product (full data)

⬇️ customer cart এ add করে

🛒 Cart Item (Pick)
Pick<Product, "id" | "name" | "price">

⬇️ checkout এ যায়

🧾 Order (Readonly)
Readonly<Product>

⬇️ admin panel এ show

👁️ Public view (Omit stock)
Omit<Product, "stock">
🎯 একদম simple summary
Situation	Utility
Cart item বানানো	Pick
কিছু field hide করা	Omit
Partial data আসা	Partial
Final order lock	Readonly
সব field বাধ্যতামূলক	Required
*/