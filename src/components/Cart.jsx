import { useSelector } from "react-redux";
import CartSingle from "./CartSingle";
import Narucivanje from "./Narucivanje";


const Cart = () => {
  const cart = useSelector(state => state.cart);

  let ukupnaZaPlatiti = 0;
  let brojStavkiUKorpi = 0;
  cart.forEach(item => {
    ukupnaZaPlatiti += item.cena;
    brojStavkiUKorpi++;
  });


  return (
    <div className="cart">
      <h1>Vaša korpa ({brojStavkiUKorpi})</h1>
      <div className="product-list">
        {
          cart.map((item, index)=>{
            return(
              <CartSingle key={index} item={item} />
            );
          })
        }
      </div>
      <h3>Ukupno za platiti: {ukupnaZaPlatiti}</h3>
      <p>Molimo vas da pregledate jesu li svi prilozi kako ste želeli</p>
      <Narucivanje />
    </div>
  );
}

export default Cart;
