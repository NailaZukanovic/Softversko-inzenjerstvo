import { useSelector } from "react-redux";
import AdminPanelLoginForm from "./AdminPanelLoginForm";
import AdminPanelSections from "./AdminPanelSections";


const AdminPanel = () => {

  const adminLoggedRestoran = useSelector(state => state.adminLoggedRestoran);

  return (
    <div className="admin-panel-wrapper">
      <div className="admin-panel">
        <h1>Admin panel</h1>

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
