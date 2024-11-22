import { useState } from "react";
import { ProductList } from "../components/ProductList";
import { Titre } from "../components/Titre";
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { Pagination } from "../components/Pagination";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const { getPaginate, setPage, setPerPage, page, perPage } = useAxios();

  const [responseObject, setResponseObject] = useState({ pages: 0, items: 0 });

  useEffect(() => {
    getPaginate()
      .then((response) => {
        console.log(response);
        setResponseObject({ pages: response.pages, items: response.items });
        setProducts(response.data);
      })
      .catch((e) => console.error(e.message));
  }, [page, perPage]);

  const clickOnPaginationButton = (number) => {
    setPage(number);
  };

  return (
    <div className="w-full">
      <Titre>Mes produits</Titre>
      <ProductList products={products} />
      <div className="m-auto my-5 w-fit">
        <Pagination
          nbrButton={responseObject.pages}
          clickOnPaginationButton={clickOnPaginationButton}
        />
      </div>
    </div>
  );
};
