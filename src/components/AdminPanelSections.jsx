import { useDispatch, useSelector } from "react-redux";
import AdminPanelOrders from "./AdminPanelOrders";
import AdminPanelProducts from "./AdminPanelProducts";


const AdminPanelSections = () => {
  const dispatch = useDispatch();

  const adminRoute = useSelector(state => state.adminRoute);


  return (
    <div className="">
      <div>

      <div>
        <button onClick={(e) => {
          dispatch({
            type: 'ADMIN_ROUTE_SET',
            payload: 'ADMIN_ORDERS'
          })
        }}>Administracija narudžbi</button>
        <button onClick={(e) => {
          dispatch({
            type: 'ADMIN_ROUTE_SET',
            payload: 'ADMIN_PRODUCTS'
          })
        }}>Administracija menija</button>
        <button onClick={(e) => {
          dispatch({ type: 'ADMIN_LOGOUT' })
        }}>Logout</button>
        </div>
        <br />
        <br />

        <div className="admin-panel-sections">

          {
            (adminRoute === 'ADMIN_ORDERS') && (
              <AdminPanelOrders />
            )
          }

          {
            (adminRoute === 'ADMIN_PRODUCTS') && (
              <AdminPanelProducts />
            )
          }

        </div>

      </div>
    </div >
  );
};

export default AdminPanelSections;
