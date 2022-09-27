import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="smallDashboard ">
        <h1 className="text-3xl font-bold underline">Dashboard 1</h1>
        <h2>Dashboard 2</h2>
        <p>Dashboard 3</p>
      </div>
      <div className="principalDashboard ">
        <p>Principal Dashboard</p>
      </div>
    </div>
  );
};
export default Dashboard;
