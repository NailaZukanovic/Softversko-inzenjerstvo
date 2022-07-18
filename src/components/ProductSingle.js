import { useDispatch, useSelector } from "react-redux";

const ProductSingle = (props) => {
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
      <button onClick={handleAddToCart}>Dodaj u korpu</button>
    </div>
  );
};

export default ProductSingle;
