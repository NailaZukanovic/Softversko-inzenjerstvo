import { useDispatch, useSelector } from "react-redux";
import CartSingleAdd from "./CartSingleAdd";

const ProductSingle = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const handleAddToCart = (e)=> {
    console.log('dodaj u korpu', item.naziv);
    let jsxModalContent = (
      <CartSingleAdd item={item} />
    );
    dispatch({
      type: 'DODAJ_U_KORPU_MODAL',
      payload: {
        modalContent: jsxModalContent
      }
    });
  };

  return (
    <div className="product-item">
      <h3>{item.naziv}</h3>
      <img className="product-img" src={item.slika} />
      <div>Kategorija: {item.kategorija}</div>
      <div>{item.cena} RSD</div>
      <button className="btn-round" onClick={handleAddToCart}><i className="fa fa-plus" aria-hidden="true"></i> Dodaj u korpu</button>
    </div>
  );
};

export default ProductSingle;
