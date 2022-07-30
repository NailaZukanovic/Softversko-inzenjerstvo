import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminPanelOrderSingle from "./AdminPanelOrderSingle";
import { makeUrlPrefix } from "../utils/api-utils";


const AdminPanelOrders = () => {
  const adminLoggedRestoran = useSelector(state => state.adminLoggedRestoran);

  const [orders, setOrders] = useState([]);

  const ordersZaRestoran = orders.filter((item) => {
    if (item.restoran === adminLoggedRestoran) {
      return true;
    }
    return false;
  });

  const refresh = () => {
    // const api = 'http://localhost:3001/api/order/get/all';
    const api = makeUrlPrefix() + '/api/order/get/all';
    axios.get(api)
      .then(res => {
        console.log('api orders get all', res);
        if (res && res.data && res.data.is_success) {
          setOrders(res.data.payload.orders);
        }
      })
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Administracija narudžbi za restoran {adminLoggedRestoran}</h2>

      <button onClick={(e) => { refresh() }}>Osveži</button>

      <table>
        <thead>
          <tr>
            <th>Narudžba</th>
            <th>Stavke narudžbe</th>
          </tr>
        </thead>
        <tbody>
          {
            ordersZaRestoran.map((item) => {
              return (
                <AdminPanelOrderSingle key={item._id} item={item} refresh={refresh} />
              );
            })
          }
        </tbody>
      </table>

    </div>
  );
};

export default AdminPanelOrders;
