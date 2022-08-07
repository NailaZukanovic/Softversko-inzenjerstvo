import { useEffect, useState } from "react";
import axios from "axios";
import { makeUrlPrefix } from "../utils/api-utils";


const AdminPanelOrderSingleItems = (props) => {
  const order_id = props.order_id;
  const [ordersItems, setOrderItems] = useState([]);

  const refresh = () => {
    // const api = 'http://localhost:3001/api/orderitems/get/' + order_id;
    const api = makeUrlPrefix() + '/api/orderitems/get/' + order_id;
    axios.get(api)
      .then(res => {
        console.log('api order items get by order_id', order_id, res);
        if (res && res.data && res.data.is_success) {
          setOrderItems(res.data.payload.order_items);
        }
      })
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="order-items">

      {
        ordersItems.map((item, index) => {
          const jsxPrilozi = item.odabrane_opcije.join(', ');
          return (
            <div>stavka #{index + 1}
              <table className="order-items-table">
                <tbody>
                  <tr>
                    <td>order_id</td>
                    <td>{item.order_id}</td>
                  </tr>
                  <tr>
                    <td>Kategorija</td>
                    <td>{item.kategorija}</td>
                  </tr>
                  <tr>
                    <td>Naziv</td>
                    <td><b>{item.naziv}</b></td>
                  </tr>
                  <tr>
                    <td>Količina</td>
                    <td><b>{item.kolicina}</b></td>
                  </tr>
                  <tr>
                    <td>Prilozi</td>
                    <td><b>{jsxPrilozi}</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      }

    </div >
  );
};

export default AdminPanelOrderSingleItems;
