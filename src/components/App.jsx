import Cart from "./Cart";
import Products from "./Products";
import "../scss/style.scss";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const odabraniRestoran = useSelector(state => state.odabraniRestoran);

  const handleChangeRestoran = (e) => {
    const value = e.target.value;
    console.log('change restoran', value);
    dispatch({
      type: 'ODABRAN_RESTORAN',
      payload: value
    });
  }

  return (
    <div className="App">
      Ovo je app
      <select
        name="odabraniRestoran"
        value={odabraniRestoran}
        onChange={handleChangeRestoran}
      >
        <option value="Hamburgerko">Hamburgerko</option>
        <option value="Walter">Walter</option>
      </select>
      <Products />
      <Cart />
    </div>
  );
};

export default App;
