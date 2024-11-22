import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid w-full grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};
