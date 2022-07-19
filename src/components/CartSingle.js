import { useDispatch } from "react-redux";


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

  const _handleChangeOpcija = (cart_item_id, opcija, checked) => {
    console.log('onchange se desio', cart_item_id, opcija, checked);
    dispatch({
      type: 'ODABRANA_OPCIJA_PROIZVODA',
      payload: {
        cart_item_id,
        opcija,
        checked
      }
    });
  };

  let jsxPrilozi = null;
  if (item.opcije) {
    jsxPrilozi = (
      <>
        <h6>Prilozi</h6>
        <div>
          {
            item.opcije.map((opcija) => {
              return (
                <div key={'cart' + item.cart_item_id + opcija}>
                  <label>
                    <input 
                    type="checkbox" 
                    onChange={(e) => { _handleChangeOpcija(item.cart_item_id, opcija, e.target.checked) }} 
                    checked={item.odabrane_opcije_obj[opcija] === true}
                    />{opcija}
                  </label>
                </div>
              );
            })
          }
        </div>
      </>
    );
  }

  return (
    <div className="item">
      <h3>{item.naziv}</h3>
      <img className="product-img" src={'/static/img/' + item.slika} />
      <div>Kategorija: {item.kategorija}</div>
      <div>{item.cena}</div>
      <div className="opcije">
        {jsxPrilozi}
      </div>
      <button onClick={handleDeleteFromCart}>&times;</button>
    </div>
  );
};

export default CartSingle;
