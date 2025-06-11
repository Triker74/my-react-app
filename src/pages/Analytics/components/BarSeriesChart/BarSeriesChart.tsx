import {
  ResponsiveChartContainer,
  ChartsXAxis,
  ChartsYAxis,
  ChartsLegend,
  ChartsTooltip,
  BarPlot,
} from '@mui/x-charts';
import { FC } from 'react';
import { chartSeriesData, ChartPoint } from './components/ChartData/ChartSeriesData'

import '../Styles/Charts.css';

interface BarSeriesChartProps {
  title: string;
  chartData: ChartPoint[];
}

const BarSeriesChart: FC<BarSeriesChartProps> = ({ title, chartData }) => {
  const xLabels = chartData.map((point: ChartPoint) => point.label);
  const totalData = chartData.map((point: ChartPoint) => point.total);
  const total2Data = chartData.map((point: ChartPoint) => point.total2);


  return (
    <div className="chartOuterWrapper">
      <div className="chartContainerWrapper">
        <h2 className="chartTitle">{title}</h2>

        <ResponsiveChartContainer
          height={400}
          margin={{ top: 20, right: 20, bottom: 100, left: 60 }}
          series={[

            {
              type: 'bar',
              data: totalData,
              label: (date) => date === 'tooltip' ? '20.01-26.01.2025' : 'Всего 417 20.01-26.01.2025',
              color: '#808080',
            },
            {
              type: 'bar',
              data: total2Data,
              label: (date) => date === 'tooltip' ? '27.01-02.02.2025' : 'Всего 462 27.01-02.02.2025',
              color: '#d32f2f',
            },
          ]}
          xAxis={[
            {
              id: 'x-axis',
              scaleType: 'band',
              data: xLabels,
            },
          ]}
          yAxis={[{ id: 'y-axis', min: 0, max: 6 }]}
        >
          <BarPlot />

          <ChartsXAxis labelStyle={{ fontSize: 14 }}
            tickLabelStyle={{
              fontSize: 12,
              angle: -45,
              textAnchor: 'end',
            }} />
          <ChartsYAxis />
          <ChartsLegend
            position={{ vertical: 'bottom', horizontal: 'middle' }}
            slotProps={{
              legend: {
                padding: { top: 30, bottom: 0 },
              },
            }}
          />
          <ChartsTooltip trigger="item" />
        </ResponsiveChartContainer>
      </div>
    </div>
  );
};

export default BarSeriesChart;