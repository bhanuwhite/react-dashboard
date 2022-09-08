import { DashboardBarChart } from "./DashboardBarChart.tsx";
import { DashboardLineChart } from "./DashboardLineChart";
import { DashboardStockChart } from "./DashboardStockChart.tsx";
import { IData, IStockData } from "./Interface";
import chartData from "../../assets/data/chartData.json";
import stockData from "../../assets/data/stockData.json";
import styles from "./Dashboard.module.scss";

const ChartData: IData[] = chartData.map((d: any) => {
  return {
    label: d.label,
    value: d.value,
  };
});

const StockData: IStockData[] = stockData.map((d: any) => {
  return {
    label: d.label,
    value: d.value,
  };
});

const Dashboard = () => {
  const date = new Date();
  const currentDate = date.toISOString().slice(0,10);
  
  return (
    <div className={styles.container}>
    <div className={styles.dashboard}>
      <div className={styles.dashboard_header}>Marketing Dashboard</div>
      <div className={styles.dashboard_top}>
        <div className={styles.date}>
          Current Date
          <div>
            <input className={styles.dateRequired} type="date" name="dateRequired" value={currentDate}  />
          </div>
        </div>
        <div className={styles.dashboard_top_item}>
          Services
          <div>
            <select name="selectList" className={styles.selectList}>
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
            </select>
          </div>
        </div>
        <div className={styles.dashboard_top_item}>
          Posts
          <div>
            <select name="selectList" className={styles.selectList}>
              <option value="option 1">Option 1</option>
              <option value="option 2">Option 2</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_middle}>
        <div>
          Amount 1<div className={styles.dashboard_middle_item}>Rs 1000</div>
        </div>
        <div>
          Amount 2<div className={styles.dashboard_middle_item}>Rs 2000</div>
        </div>
        <div>
          Amount 3<div className={styles.dashboard_middle_item}>Rs 3000</div>
        </div>
        <div>
          Amount 4<div className={styles.dashboard_middle_item}>Rs 4000</div>
        </div>
      </div>
      <div className={styles.dashboard_bottom}>
        <div>
          <div className={styles.dashboardChart_title}>Chart 1</div>
          <DashboardBarChart data={ChartData} />
        </div>
        <div>
          <div className={styles.dashboardChart_title}>Chart 2</div>
          <DashboardLineChart data={ChartData} />
        </div>
      </div>
      <div className={styles.dashboard_bottom}>
        <div>
          <div className={styles.dashboardChart_title}>Chart 3</div>
           
        </div>
        <div>
          <div className={styles.dashboardChart_title}>Chart 4</div>
          <DashboardStockChart data={StockData} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
