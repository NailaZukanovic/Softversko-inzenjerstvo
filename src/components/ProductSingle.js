
const ProductSingle = (props) => {
  const item = props.item;

  const handleAddToCart = (e)=> {
    console.log('dodaj u korpu', item.naziv);
  };

  return (
    <div className="item">
      <h3>{item.naziv}</h3>
      <div>Kategorija: {item.kategorija}</div>
      <div>{item.cena}</div>
      <button onClick={handleAddToCart}>Dodaj u korpu</button>
    </div>
  );
};

export default ProductSingle;
