import { useSelector } from "react-redux";
import CartSingle from "./CartSingle";
import Narucivanje from "./Narucivanje";


const Cart = () => {
  const odabraniRestoran = useSelector(state => state.odabraniRestoran);
  const cartUnfiltered = useSelector(state => state.cart); // cart items za sve restorane

  const cart = cartUnfiltered.filter((item)=>{
    if (item.restoran === odabraniRestoran) {
      return true; // zadrzavamo samo one koji su za taj restoran koji smo odabrali
    }
    return false; // sve ostali se ne prikazuju u cartu.
  });

  let ukupnaZaPlatiti = 0;
  let brojStavkiUKorpi = 0;
  cart.forEach(item => {
    ukupnaZaPlatiti += item.cena * item.kolicina;
    brojStavkiUKorpi++;
  });


  return (
    <div className="cart">
      <h2>Vaša korpa ({brojStavkiUKorpi})</h2>
      <div className="product-list">
        {
          cart.map((item, index)=>{
            return(
              <CartSingle key={index} item={item} />
            );
          })
        }
      </div>
      {/*
      <h3>Ukupno za platiti: {ukupnaZaPlatiti}</h3>
      <p>Molimo vas da pregledate jesu li svi prilozi kako ste želeli</p>
      */}
      <Narucivanje brojStavkiUKorpi={brojStavkiUKorpi} ukupnaZaPlatiti={ukupnaZaPlatiti} />
    </div>
  );
}

export default Cart;
