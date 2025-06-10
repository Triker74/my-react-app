import React, { useRef, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { PieChartData, PieChartPoint } from './components/PieChartData/PieChartData';
import useResizeObserver from '@react-hook/resize-observer';

import './PieChart.css';

interface PieChartProps {
    title: string;
    chartData: PieChartPoint[];
}

const colors = [
    '#1E90FF', '#FF4500', '#A9A9A9', '#FFD700',
    '#9ACD32', '#4169E1', '#B22222', '#2F4F4F',
    '#8B4513', '#DAA520', '#CD5C5C', '#6A5ACD', '#ADFF2F',
];

const PieChartComponent: React.FC<PieChartProps> = ({ title, chartData }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(700);

    useResizeObserver(containerRef, (entry) => {
        setWidth(entry.contentRect.width);
    });

    return (
        <div className="chartOuterWrapper">
            <div className="chartContainerWrapper" ref={containerRef}>
                {title && <h2 className="chartTitle">{title}</h2>}
                <PieChart
                    series={[
                        {
                            data: chartData,
                            innerRadius: 60,
                            outerRadius: 200,
                            cornerRadius: 5,
                            paddingAngle: 2,
                            valueFormatter: (item) => `${item.label}: ${item.value}`,
                            arcLabel: (item) => `${item.value}`,
                            arcLabelMinAngle: 0,
                        },
                    ]}
                    width={width}
                    height={500}
                    colors={colors}
                    slotProps={{
                        legend: {
                            hidden: false,
                            position: { vertical: 'middle', horizontal: 'right' },
                            padding: 70,
                            direction: 'column',
                            itemMarkWidth: 10,
                            itemMarkHeight: 10,
                            labelStyle: {
                                fontSize: 14,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default PieChartComponent;