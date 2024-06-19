function DashboardAnalysis() {
  return (
    <>
      {" "}
      <div className="containr">
        <h1 className="dd">ADMIN DASHBOARD</h1>
        <div className="dashboard">
          <div className="dashboard-analysis grid-4">
            <div className="grid-4-cols dashboard-grid-4-cols">
              <p className="dashboard-description">Total Sales</p>
              <p className="dashboard-amount">6,000</p>
            </div>
            <div className="grid-4-cols dashboard-grid-4-cols">
              <p className="dashboard-description">Total Income</p>
              <p className="dashboard-amount">$15,802</p>
            </div>
            <div className="grid-4-cols dashboard-grid-4-cols">
              <p className="dashboard-description">Orders Paid</p>
              <p className="dashboard-amount">$10,000</p>
            </div>
            <div className="grid-4-cols dashboard-grid-4-cols">
              <p className="dashboard-description">Total Visitors</p>
              <p className="dashboard-amount">100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAnalysis;
