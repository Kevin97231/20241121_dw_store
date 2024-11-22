import { useState } from "react";
import { ProductList } from "../components/ProductList";
import { Titre } from "../components/Titre";
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const { get } = useAxios();

  useEffect(() => {
    get()
      .then((response) => {
        setProducts(response);
        console.log(products);
      })
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <>
      <Titre>Mes produits</Titre>
      <ProductList products={products} />
    </>
  );
};
