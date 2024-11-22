export const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid w-full gap-4 grids-cols-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};
