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

      <table>
        <thead>
          <tr>
            {/*<th>_id</th>*/}
            <th>order_id</th>
            <th>Kategorija</th>
            <th>Naziv</th>
            <th>Količina</th>
            <th>Prilozi</th>
          </tr>
        </thead>
        <tbody>
          {
            ordersItems.map((item) => {
              const jsxPrilozi = item.odabrane_opcije.join(', ');
              return (
                <tr key={item._id}>
                  {/*<td>{item._id}</td>*/}
                  <td>{item.order_id}</td>
                  <td>{item.kategorija}</td>
                  <td>{item.naziv}</td>
                  <td>{item.kolicina}</td>
                  <td>{jsxPrilozi}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

    </div>
  );
};

export default AdminPanelOrderSingleItems;
