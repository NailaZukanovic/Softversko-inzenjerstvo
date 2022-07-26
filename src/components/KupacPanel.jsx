import Cart from "./Cart";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import Restorani from "./Restorani";

const KupacPanel = () => {
  const dispatch = useDispatch();
  const odabraniRestoran = useSelector(state => state.odabraniRestoran);

  const handlePonistiIzborRestorana = (e) => {
    dispatch({
      type: 'ODABRAN_RESTORAN',
      payload: null
    });
  };

  return (
    <div className="kupac-panel">
      {
        !odabraniRestoran && (
          <Restorani />
        )
      }
      {
        odabraniRestoran && (
          <>
            <p onClick={handlePonistiIzborRestorana}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i> Vrati se na izbor restorana
            </p>
            <div className="main-columns">
              <Products />
              <Cart />
            </div>
          </>
        )
      }
    </div>
  );
};

export default KupacPanel;
