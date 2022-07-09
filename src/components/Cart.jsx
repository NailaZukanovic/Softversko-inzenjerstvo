import { useSelector } from "react-redux";
import CartSingle from "./CartSingle";


const Cart = () => {
  const cart = useSelector(state => state.cart);

  let ukupnaZaPlatiti = 0;
  cart.forEach(item => {
    ukupnaZaPlatiti += item.cena;
  });


  return (
    <div className="cart">
      <h1>Vaša korpa</h1>
      <div className="product-list">
        {
          cart.map((item, index)=>{
            return(
              <CartSingle key={index} item={item} />
            );
          })
        }
      </div>
      <div>Ukupno za platiti: {ukupnaZaPlatiti}</div>
    </div>
  );
}

export default Cart;
