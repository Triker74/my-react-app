import {
    ChartContainer,
    ChartsXAxis,
    ChartsYAxis,
    ChartsLegend,
    ChartsTooltip,
    BarPlot,
    LinePlot,
    MarkPlot,
} from '@mui/x-charts';
import { FC } from 'react';
import { chartData, ChartPoint } from './components/ChartData/ChartData';

import './BarLineChart.css';

const BarLineChart: FC = () => {
    const xLabels = chartData.map((point: ChartPoint) => point.label);
    const fixedValueColumnData = chartData.map(() => 100);
    const totalData = chartData.map((point: ChartPoint) => point.total);
    const accidentData = chartData.map((point: ChartPoint) => point.accident);
    const lineData = chartData.map((point: ChartPoint) => point.result);

    return (
        <div className="chartContainerWrapper">
            <h2 className="chartTitle">По автотранспорту с 10.02.25-16.02.25 (выход, ремонт, дтп, итог) ДТП-0.</h2>

            <ChartContainer
                width={900}
                height={400}
                series={[
                    {
                        type: 'bar',
                        data: fixedValueColumnData,
                        label: '1',
                        color: '#a9cce3',
                    },
                    {
                        type: 'bar',
                        data: totalData,
                        label: 'Без ремонта',
                        color: '#808080',
                    },
                    {
                        type: 'bar',
                        data: accidentData,
                        label: 'ДТП',
                        color: '#d32f2f',
                    },
                    {
                        type: 'line',
                        data: lineData,
                        label: 'Итог',
                        color: '#ff0000',
                        showMark: true,
                    },
                ]}
                xAxis={[
                    {
                        id: 'x-axis',
                        scaleType: 'band',
                        data: xLabels,
                    },
                ]}
                yAxis={[{ id: 'y-axis', min: 0, max: 120 }]}
            >
                <BarPlot />
                <LinePlot />
                <MarkPlot />
                <ChartsXAxis labelStyle={{ fontSize: 14 }} tickLabelStyle={{ fontSize: 12 }} />
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
            </ChartContainer>
        </div>
    );
};

export default BarLineChart;