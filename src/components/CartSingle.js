import { useDispatch } from "react-redux";

const CartSingle = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const handleAddToCart = (e)=> {
    console.log('dodaj u korpu', item.naziv);
    dispatch({
      type: 'DODAJ_U_KORPU',
      payload: item
    });
  };

  return (
    <div className="item">
      <h3>{item.naziv}</h3>
      <img className="product-img" src={'/static/img/' + item.slika} />
      <div>Kategorija: {item.kategorija}</div>
      <div>{item.cena}</div>
      <button>-</button>
      <button onClick={handleAddToCart}>+</button>
    </div>
  );
};

export default CartSingle;
