import { useSelector } from "react-redux";


const Products = () => {

  const products = useSelector(state => state.products);

  const handleAddToCart = (e)=> {
    console.log('dodaj u korpu');
  };

  return (
    <div className="products">
      <h1>Artikli</h1>
      <div>
        {
          products.map((item)=>{
            return (
              <div className="item">
                <h3>{item.naziv}</h3>
                <div>Kategorija: {item.kategorija}</div>
                <div>{item.cena}</div>
                <button onClick={handleAddToCart}>Dodaj u korpu</button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Products;
