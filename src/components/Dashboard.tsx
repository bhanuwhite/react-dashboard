import { DashboardBarChart } from "./DashboardBarChart";
import { DashboardLineChart } from "./DashboardLineChart";
import { IData } from "./Interface";
import chatData from "../data.json";

const ChartData: IData[] = chatData.map((d: any) => {
  return {
    label: d.label,
    value: d.value,
  };
});

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_header">Marketing Dashboard</div>
      <div className="dashboard_top">
        <div className="date">
          Current Date
          <div>
            <input id="dateRequired" type="month" name="dateRequired" />
          </div>
        </div>
        <div className="dashboard_top_item">
          Services
          <div>
            <select name="selectList" id="selectList">
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="dashboard_top_item">
          Posts
          <div>
            <select name="selectList" id="selectList">
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="dashboard_middle">
        <div>
          Amount 1<div className="dashboard_middle_item">Rs 1000</div>
        </div>
        <div>
          Amount 2<div className="dashboard_middle_item">Rs 2000</div>
        </div>
        <div>
          Amount 3<div className="dashboard_middle_item">Rs 3000</div>
        </div>
        <div>
          Amount 4<div className="dashboard_middle_item">Rs 4000</div>
        </div>
      </div>
      <div className="dashboard_bottom">
        <div>
          <div className="dashboardBarChart_title">Chart 1</div>
          <DashboardBarChart data={ChartData} />
        </div>
        <div>
          <div className="dashboardBarChart_title">Chart 2</div>
          <DashboardLineChart data={ChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
