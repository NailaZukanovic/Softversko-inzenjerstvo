import { useSelector } from "react-redux";
import ProductSingle from "./ProductSingle";


const Products = () => {

  const products = useSelector(state => state.products);

  return (
    <div className="products">
      <h1>Artikli</h1>
      <div className="product-list">
        {
          products.map((item, index)=>{
            return (
              <ProductSingle key={index} item={item} />
            );
          })
        }
      </div>
    </div>
  );
}

export default Products;
