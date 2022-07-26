import { useState } from "react";
import { useDispatch } from "react-redux";


const CartSingleAdd = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const [kolicina, setKolicina] = useState(1);
  const [odabraneOpcijeObj, setOabraneOpcijeObj] = useState({});

  const handleCartPlus = (e) => {
    setKolicina(kolicina + 1);
  };

  const handleCartMinus = (e) => {
    if (kolicina > 1) {
      setKolicina(kolicina - 1);
    }
  };

  const _handleChangeOpcija = (opcija, checked) => {
    console.log('onchange se desio', opcija, checked);
    setOabraneOpcijeObj({
      ...odabraneOpcijeObj,
      [opcija]: checked
    })
  };

  const handleAddToCart = (e) => {
    console.log('dodaj u korpu', item.naziv);
    dispatch({
      type: 'DODAJ_U_KORPU',
      payload: {
        ...item,
        kolicina: kolicina,
        odabrane_opcije_obj: odabraneOpcijeObj
      }
    });
  };

  let jsxPrilozi = null;
  if (item.opcije) {
    jsxPrilozi = (
      <>
        <p><b>Izaberi priloge</b></p>
        <div>
          {
            item.opcije.map((opcija) => {
              return (
                <div key={'cart' + item.cart_item_id + opcija}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => { _handleChangeOpcija(opcija, e.target.checked) }}
                      checked={odabraneOpcijeObj[opcija] === true}
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
    <div className="modal-cart-item">
      <div className="bar">
        <div><b>{kolicina}x</b> {item.naziv}</div>
        <div className="flex-1"></div>
        <div>{(item.cena * kolicina)} RSD</div>
      </div>
      <img className="product-img" src={item.slika} />
      {/*<div>Kategorija: {item.kategorija}</div>*/}
      <div className="opcije">
        {jsxPrilozi}
      </div>
      <br />
      <button onClick={handleCartMinus}>-</button>
      <span> <b>{kolicina}</b> </span>
      <button onClick={handleCartPlus}>+</button>
      <br />
      <br />
      <button className="btn-round" onClick={handleAddToCart}><i className="fa fa-plus" aria-hidden="true"></i> Dodaj u korpu</button>
    </div>
  );
};

export default CartSingleAdd;
