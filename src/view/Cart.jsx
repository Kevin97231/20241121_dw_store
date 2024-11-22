import { useSelector } from "react-redux";
import { ProductList } from "../components/ProductList";
import { Titre } from "../components/Titre";

export const Cart = () => {
  const cartProducts = useSelector((state) => state.myCart.value);

  return (
    <div>
      <Titre>Mon panier</Titre>

      {cartProducts.length > 0 && <ProductList products={cartProducts} />}
    </div>
  );
};
