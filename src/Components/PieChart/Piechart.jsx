import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";

const Piechart = ({ donated }) => {
    const donatedDataLength = donated.length;

    const data = [
        { name: "Total Donation Left", value: 12 - donatedDataLength},
        { name: "Your Donation", value: donatedDataLength },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="h-[450px] w-full">
            
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex gap-8 justify-center font-medium'>
                <div className='flex gap-3'>
                    <p>Your Donation</p>
                    <p className='border-t-8 border-[#00C49F] w-16 mt-[10px]'></p>
                </div>
                <div className='flex gap-3'>
                    <p>Total Donation</p>
                    <p className='border-t-8 border-[#FF444A] w-16 mt-[10px]'></p>
                </div>
            </div>
        </div>
    );
};

export default Piechart;