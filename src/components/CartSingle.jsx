import { useDispatch } from "react-redux";
import CartSingleEdit from "./CartSingleEdit";


// TODO: za sledeci put izdvoijiti priloge u posebnu komponentu CartSingleOpcije i napravtii funkcije da cuva sta je odabrano u cartu.


const CartSingle = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const handleDeleteFromCart = (e) => {
    console.log('dodaj u korpu', item.naziv);
    dispatch({
      type: 'OBRISI_IZ_KORPE',
      payload: item.cart_item_id
    });
  };

  const handleEditCartItem = (e) => {
    console.log('izmeni iz korpe', item.naziv);
    let jsxModalContent = (
      <CartSingleEdit item={item} />
    );
    dispatch({
      type: 'IZMENI_IZ_KORPE_MODAL',
      payload: {
        item,
        modalContent: jsxModalContent
      }
    });
  };

  const handleCartPlus = (e) => {
    console.log('dodaj u korpu', item.naziv);
    dispatch({
      type: 'KORPA_PLUS',
      payload: item.cart_item_id
    });
  };

  const handleCartMinus = (e) => {
    console.log('dodaj u korpu', item.naziv);
    dispatch({
      type: 'KORPA_MINUS',
      payload: item.cart_item_id
    });
  };

  let samoOdabranePriloziNiz = []
  Object.keys(item.odabrane_opcije_obj).forEach((opcija) => {
    if (item.odabrane_opcije_obj[opcija] === true) {
      samoOdabranePriloziNiz.push(opcija);
    }
  });
  const jsxPrilozi = samoOdabranePriloziNiz.join(', ');

  return (
    <div className="cart-item">
      <div className="bar">
        <div><b>{item.kolicina}x</b> {item.naziv}</div>
        <div className="flex-1"></div>
        <div>{(item.cena * item.kolicina)} RSD</div>
      </div>
      {/*<div>Kategorija: {item.kategorija}</div>*/}
      <div className="opcije"><span>Odabrani prilozi: </span><b>{jsxPrilozi}</b>
      </div>
      <div className="bar">
        <span>
          <button onClick={handleCartMinus}>-</button>&nbsp;
          <button onClick={handleCartPlus}>+</button>
        </span>
        <button onClick={handleEditCartItem}>Izmeni</button>
        <button onClick={handleDeleteFromCart}>Obriši</button>
      </div>
    </div>
  );
};

export default CartSingle;
