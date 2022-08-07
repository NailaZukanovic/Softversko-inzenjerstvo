import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../scss/style.scss";
import { makeUrlPrefix } from "../utils/api-utils";
import AdminPanel from "./AdminPanel";
import KupacPanel from "./KupacPanel";
import Modal from "./Modal";


/*
TODO
- plus ikonica za doaj u korpu https://fontawesome.com/v4/icon/plus
- validator forme za narudzbu
- odmah pri izmenama opcija/priloga treba formirati i onaj niz odabarnih priloga 
*/

const App = () => {
  const dispatch = useDispatch();
  const adminPanelOpened = useSelector(state => state.adminPanelOpened);

  useEffect(() => {
    // INIT
    // inicijalno preuzimanje menija/cenovnika
    // const api = 'http://localhost:3001/api/product/get/all';
    const api = makeUrlPrefix() + '/api/product/get/all';
    axios.get(api)
      .then(res => {
        console.log('api product get all', res);
        if (res && res.data && res.data.is_success) {
          // setProducts(res.data.payload.products);
          dispatch({
            type: 'PROIZVODI_FETCEHD',
            payload: res.data.payload.products
          });
        }
      })

  }, []);

  return (
    <>
      <div className={adminPanelOpened ? "wrapper wrapper-admin" : "wrapper"}>
        <header>
          <h1>BRZA HRANA</h1>
          <div>Naručite dostavu hrane iz raznih restorana</div>
        </header>
        {
          adminPanelOpened ? (
            <div className="main main-admin">
              <AdminPanel />
            </div>
          ) : (
            <div className="main">
              <KupacPanel />
            </div>
          )
        }
        <footer>
          <div onClick={(e) => {
            dispatch({ type: 'ADMIN_PANEL_OPEN' })
          }}>Admin panel</div>
        </footer>
      </div>
      <Modal />
    </>
  );
};

export default App;
