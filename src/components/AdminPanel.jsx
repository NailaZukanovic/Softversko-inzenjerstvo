import { useSelector } from "react-redux";
import AdminPanelLoginForm from "./AdminPanelLoginForm";
import AdminPanelSections from "./AdminPanelSections";


const AdminPanel = () => {

  const adminLoggedRestoran = useSelector(state => state.adminLoggedRestoran);

  return (
    <div className="admin-panel-wrapper">
      <h1>Admin panel</h1>

      <div className="admin-panel">
        {
          adminLoggedRestoran ? (
            <AdminPanelSections />
          ) : (
            <AdminPanelLoginForm />
          )
        }
      </div>

    </div >
  );
};

export default AdminPanel;
