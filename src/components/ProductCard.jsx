import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="flex shadow-xl card bg-base-100 w-96">
      <figure>
        <div className="h-40">
          <img src={product.image} alt={product.title} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div className="m-auto w-fit">
        <button className="mb-5 btn btn-primary" onClick={navigateToDetail}>
          Voir
        </button>
      </div>
    </div>
  );
};
