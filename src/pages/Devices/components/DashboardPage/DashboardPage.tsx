import React from 'react';
import BarLineChart from '../BarLineChart/BarLineChart';
import { chartData as chartData1 } from '../BarLineChart/components/ChartData/ChartData'
import BarChart from '../BarChart/BarChart';
import { barChartData } from '../BarChart/components/BarChartData/BarChartData';

import './DashboardPage.css';

const DashboardPage: React.FC = () => {
    return (
        <div className="dashboardPageContainer">
            <h1 className="dashboardPageTitle">СПРАВКА ИНФОРМАЦИОННО-ОПЕРАТИВНОГО ДИСПЕТЧЕРСКОГО ОТДЕЛА ЗА ПЕРИОД С 10.02.2025 по 16.02.2025 </h1>
            <div className="chartsContainerVertical">
                <BarLineChart
                    title="По автотранспорту с 10.02.25-16.02.25 (выход, ремонт, дтп, итог) ДТП-0."
                    chartData={chartData1}
                />
                <BarChart
                    title="Время доезда"
                    chartData={barChartData}
                />
            </div>
        </div>
    );
};

export default DashboardPage;