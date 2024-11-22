import { useParams } from "react-router-dom";
import { Titre } from "../components/Titre";
import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { addProduct } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  const { getById } = useAxios();

  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getById(productId).then((response) => setProduct(response));
  }, []);

  const addProductInCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <Titre>Détail du produit</Titre>

      {/* TODO: faire un composant pour les détails */}
      <ProductCard product={product} />
      <button className="btn" onClick={addProductInCart}>
        AJOUTER AU PANIER
      </button>
    </>
  );
};
