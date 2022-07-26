import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AdminPanelProductSingle from "./AdminPanelProductSingle";
import AdminPanelProductFormAdd from "./AdminPanelProductFormAdd";


const AdminPanelProducts = () => {
  const dispatch = useDispatch();
  const adminLoggedRestoran = useSelector(state => state.adminLoggedRestoran);

  const [products, setProducts] = useState([]);

  const productsZaRestoran = products.filter((item) => {
    if (item.restoran === adminLoggedRestoran) {
      return true;
    }
    return false;
  });

  const refresh = () => {
    const api = 'http://localhost:3001/api/product/get/all';
    axios.get(api)
      .then(res => {
        console.log('api product get all', res);
        if (res && res.data && res.data.is_success) {
          setProducts(res.data.payload.products);
        }
      })
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleAddProduct = (e) => {
    let jsxModalContent = (
      <AdminPanelProductFormAdd refresh={refresh} />
    );
    dispatch({
      type: 'ADMIN_DODAJ_PROIZVOD_MODAL',
      payload: {
        modalContent: jsxModalContent
      }
    });
  };

  return (
    <div className="admin-panel">
      <h2>Administracija menija/proizvoda/cenovnika za restoran {adminLoggedRestoran}</h2>

      <button onClick={(e) => { refresh() }}>Osveži</button>
      <button onClick={(e) => { handleAddProduct() }}>Dodaj novi proizvod</button>

      <table>
        <thead>
          <tr>
            <th>Proizvod</th>
            <th>Slika</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            productsZaRestoran.map((item) => {
              return (
                <AdminPanelProductSingle key={item._id} item={item} refresh={refresh} />
              );
            })
          }
        </tbody>
      </table>

    </div>
  );
};

export default AdminPanelProducts;
