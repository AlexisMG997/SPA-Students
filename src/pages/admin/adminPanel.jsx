import Header from "../../components/header/header";
import DataGroup from "../../components/dataGroup/dataGroup";
import Thumbnail from "../../components/thumbnail/thumbnail";
import Dashboard from "../../components/dashboard/dashboard";
import "./adminPanel.scss";

const AdminPanel = () => {
  return (
    <div className="home">
      <Header />
      <DataGroup />
      <Thumbnail />
      <Dashboard />
    </div>
  );
};

export default AdminPanel;
