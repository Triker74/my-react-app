import * as React from 'react';
import { useRef, useState } from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';
import { BarSeriesType } from '@mui/x-charts/models';
import { BarChartPoint } from './components/BarChartData/BarChartData';
import useResizeObserver from '@react-hook/resize-observer';

import '../Styles/Charts.css';

interface BarChartProps {
    title?: string;
    chartData: BarChartPoint[];
}

const BarChart: React.FC<BarChartProps> = ({ title, chartData }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(800);

    useResizeObserver(containerRef, (entry) => {
        setWidth(entry.contentRect.width);
    });

    const categories = chartData.map((item) => item.label);
    const data = chartData.map((item) => item.value);

    const colors = [
        '#FF5733',
        '#33FF57',
        '#3357FF',
        '#FF33A1',
        '#FF8F33',
        '#33FFF5',
        '#B833FF',
        '#FF3333',
        '#33FFAA',
        '#8833FF',
        '#33D4FF',
        '#FF33D4',
        '#FFD433',
        '#33FF66',
    ];

    const series: BarSeriesType[] = [
        {
            type: 'bar',
            data,
        },
    ];

    return (
        <div className="chartOuterWrapper">
            <div className="chartContainerWrapper" ref={containerRef}>
                {title && <h2 className="chartTitle">{title}</h2>}
                <MuiBarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: categories,
                            scaleType: 'band',
                            colorMap: {
                                type: 'ordinal',
                                colors,
                            },
                        },
                    ]}
                    series={series}
                    width={width}
                    height={400}
                    barLabel="value"
                />
            </div>
        </div>
    );
};

export default BarChart;
