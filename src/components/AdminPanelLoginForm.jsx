import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const AdminPanelLoginForm = () => {
  const dispatch = useDispatch();
  const adminLoggedRestoran = useSelector(state => state.adminLoggedRestoran);

  const [restoran, setRestoran] = useState('');
  const [lozinka, setLozinka] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (restoran !== '') {
      if (
        (restoran === 'Hamburgerko' && lozinka === '1111') ||
        (restoran === 'Pizzeria' && lozinka === '2222') ||
        (restoran === 'Walter' && lozinka === '3333')
      ) {
        dispatch({
          type: 'ADMIN_LOGIN',
          payload: restoran
        });
      } else {
        alert('Lozinka nije tačna');
      }
    } else {
      alert('Restoran mora biti odabran');
    }
  };


  return (
    <div className="admin-panel-login-form">
      <h2>Admin login</h2>

      <form>
        <div className="field">
          <label>Admin za restoran</label>
          <select
            name="restoran"
            value={adminLoggedRestoran}
            onChange={(e) => { setRestoran(e.target.value) }}
          >
            <option value="">--Izaberi retoran--</option>
            <option value="Hamburgerko">Hamburgerko</option>
            <option value="Pizzeria">Pizzeria</option>
            <option value="Walter">Walter</option>
          </select>
        </div>
        <div className="field">
          <label>Lozinka</label>
          <input
            type="password"
            name="lozinka"
            value={lozinka}
            onChange={(e) => { setLozinka(e.target.value) }}
          />
        </div>
        <div>
          <button type="button" onClick={handleAdminLogin}>Uloguj se kao admin za restoran {restoran}</button>
        </div >

        <br/>
        <br/>
        <div>
          <p>Možete se ulogovati kao:</p>
          <p>Hamburgerko (lozinka: 1111)</p>
          <p>Pizzeria (lozinka: 2222)</p>
          <p>Walter (lozinka: 3333)</p>
        </div>
      </form>
    </div >
  );
};

export default AdminPanelLoginForm;
