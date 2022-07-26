import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import AdminPanelProductFormEdit from "./AdminPanelProductFormEdit";


const AdminPanelProductSingle = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  const refresh = props.refresh;

  useEffect(() => {
    refresh();
  }, []);

  const _handleDelete = (id) => {
    if (window.confirm('Jeste li sigurni da želite da obrišete proizvod?')) {
      const api = 'http://localhost:3001/api/product/delete/' + id;
      axios.delete(api)
        .then(res => {
          console.log('api product delete', res);
          if (res && res.data && res.data.is_success) {
            refresh();
          }
        })

    }
  };

  const _handleIzmeni = (item) => {
    let jsxModalContent = (
      <AdminPanelProductFormEdit item={item} refresh={refresh} />
    );
    dispatch({
      type: 'ADMIN_DODAJ_PROIZVOD_MODAL',
      payload: {
        modalContent: jsxModalContent
      }
    });
  };

  const jsxPrilozi = item.opcije.join(', ');

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
                <td>Kategorija</td>
                <td>{item.kategorija}</td>
              </tr>
              <tr>
                <td>Naziv</td>
                <td>{item.naziv}</td>
              </tr>
              <tr>
                <td>Cena</td>
                <td>{item.cena}</td>
              </tr>
              <tr>
                <td>Opcije</td>
                <td>{jsxPrilozi}</td>
              </tr>
              <tr>
                <td>Vreme kreiranja</td>
                <td>{item.date_created}</td>
              </tr>
              <tr>
                <td>Vreme izmene</td>
                <td>{item.date_modified}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
      <td>
        <img className="product-img" src={item.slika} />
      </td>
      <td>
        <button onClick={(e) => { _handleIzmeni(item) }}>Izmeni proizvod</button>
        &nbsp;
        <button onClick={(e) => { _handleDelete(item._id) }}>Obriši proizvod</button>
      </td>
    </tr>
  );
};

export default AdminPanelProductSingle;
