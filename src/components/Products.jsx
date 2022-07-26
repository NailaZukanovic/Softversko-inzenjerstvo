import { useSelector } from "react-redux";
import ProductSingle from "./ProductSingle";


const Products = () => {
  const odabraniRestoran = useSelector(state => state.odabraniRestoran);
  const productsunfiltered = useSelector(state => state.products);

  const products = productsunfiltered.filter((item)=>{
    if (item.restoran === odabraniRestoran) {
      return true; // zadrzavamo samo one koji su za taj restoran koji smo odabrali
    }
    return false; // sve ostali se ne prikazuju u cartu.
  });

  return (
    <div className="products">
      <h1>Meni restorana {odabraniRestoran}</h1>
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
