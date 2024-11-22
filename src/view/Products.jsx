import { useState } from "react";
import { ProductList } from "../components/ProductList";
import { Titre } from "../components/Titre";
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const { getPaginate, setPage, setPerPage, page, perPage } = useAxios();

  useEffect(() => {
    getPaginate()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.error(e.message));
  }, [page, perPage]);

  return (
    <div className="w-full">
      <Titre>Mes produits</Titre>
      <ProductList products={products} />
      <div className="m-auto my-5 w-fit">
        <Pagination nbrButton={5} />
      </div>
    </div>
  );
};
