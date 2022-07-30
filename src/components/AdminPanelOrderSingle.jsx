import { useEffect, useState } from "react";
import axios from "axios";
import AdminPanelOrderSingleItems from "./AdminPanelOrderSingleItems";
import { makeUrlPrefix } from "../utils/api-utils";


const AdminPanelOrderSingle = (props) => {
  const item = props.item;
  const refresh = props.refresh;

  const [status, setStatus] = useState(item.status);

  const handleChangeStatus = (e) => {
    const value = e.target.value;
    setStatus(value);
  };

  useEffect(() => {
    setStatus(item.status);
  }, [item.status]);

  useEffect(() => {
    refresh();
  }, []);

  const _handleDelete = (id) => {
    // const api = 'http://localhost:3001/api/order/delete/' + id;
    const api = makeUrlPrefix() + '/api/order/delete/' + id;
    axios.delete(api)
      .then(res => {
        console.log('api orders delete', res);
        if (res && res.data && res.data.is_success) {
          refresh();
        }
      })
  };

  const _handleIzmeniStatus = (id, status) => {
    // const api = 'http://localhost:3001/api/order/status/update/' + id;
    const api = makeUrlPrefix() + '/api/order/status/update/' + id;
    axios.patch(api, {
      formData: {
        status: status
      }
    })
      .then(res => {
        console.log('api orders status update', res);
        if (res && res.data && res.data.is_success) {
          refresh();
        }
      })
  };

  return (
    <tr key={item._id}>
      <td>
        <div>

          <table>
            <tbody>
              <tr>
                <td>_id</td>
                <td>{item._id}</td>
              </tr>
              <tr>
                <td>Restoran</td>
                <td>{item.restoran}</td>
              </tr>
              <tr>
                <td>Ime i prezime</td>
                <td>{item.ime_i_prezime}</td>
              </tr>
              <tr>
                <td>Adresa</td>
                <td>{item.adreea}</td>
              </tr>
              <tr>
                <td>Telefon</td>
                <td>{item.telefon}</td>
              </tr>
              <tr>
                <td>Napomena</td>
                <td>{item.napomena}</td>
              </tr>
              <tr>
                <td>Vreme narudžbe</td>
                <td>{item.date_created}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{item.status}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <span>Status narudžbe: </span>
            <select
              status={status}
              onChange={handleChangeStatus}
            >
              <option value="Na čekanju">Na čekanju</option>
              <option value="U pripremi">U pripremi</option>
              <option value="Završeno">Završeno</option>
            </select>
            <button onClick={(e) => { _handleIzmeniStatus(item._id, status) }}>Izmeni status</button>
            <button onClick={(e) => { _handleDelete(item._id) }}>Obriši narudžbu</button>
          </div>
        </div>
      </td>
      <td>
        <AdminPanelOrderSingleItems order_id={item._id} />
      </td>
    </tr>
  );
};

export default AdminPanelOrderSingle;
