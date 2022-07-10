import { useDispatch } from "react-redux";

const CartSingle = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const handleDeleteFromCart = (e)=> {
    console.log('dodaj u korpu', item.naziv);
    dispatch({
      type: 'OBRISI_IZ_KORPE',
      payload: item.cart_item_id
    });
  };

  return (
    <div className="item">
      <h3>{item.naziv}</h3>
      <img className="product-img" src={'/static/img/' + item.slika} />
      <div>Kategorija: {item.kategorija}</div>
      <div>{item.cena}</div>
      <button onClick={handleDeleteFromCart}>&times;</button>
    </div>
  );
};

export default CartSingle;
