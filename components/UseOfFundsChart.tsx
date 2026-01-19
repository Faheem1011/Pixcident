import React from 'react';
import { motion } from 'framer-motion';
import { FundingInfo } from '../startup-constants';

interface UseOfFundsChartProps {
    funding: FundingInfo;
}

const UseOfFundsChart: React.FC<UseOfFundsChartProps> = ({ funding }) => {
    const total = funding.useOfFunds.reduce((sum, item) => sum + item.percentage, 0);
    let currentAngle = 0;

    const colorMap = [
        { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-400' },
        { bg: 'bg-green-500', border: 'border-green-500', text: 'text-green-400' },
        { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-400' },
        { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-400' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Donut Chart */}
            <div className="relative">
                <svg className="w-full max-w-sm mx-auto" viewBox="0 0 200 200">
                    <defs>
                        {funding.useOfFunds.map((item, i) => (
                            <linearGradient key={i} id={`gradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={colorMap[i % colorMap.length].bg.replace('bg-', '#')} />
                                <stop offset="100%" stopColor={colorMap[i % colorMap.length].bg.replace('bg-', '#')} stopOpacity="0.6" />
                            </linearGradient>
                        ))}
                    </defs>

                    {funding.useOfFunds.map((item, i) => {
                        const angle = (item.percentage / total) * 360;
                        const startAngle = currentAngle;
                        const endAngle = currentAngle + angle;

                        const startX = 100 + 60 * Math.cos((startAngle - 90) * Math.PI / 180);
                        const startY = 100 + 60 * Math.sin((startAngle - 90) * Math.PI / 180);
                        const endX = 100 + 60 * Math.cos((endAngle - 90) * Math.PI / 180);
                        const endY = 100 + 60 * Math.sin((endAngle - 90) * Math.PI / 180);

                        const largeArcFlag = angle > 180 ? 1 : 0;

                        const path = `
              M 100 100
              L ${startX} ${startY}
              A 60 60 0 ${largeArcFlag} 1 ${endX} ${endY}
              Z
            `;

                        currentAngle += angle;

                        return (
                            <motion.path
                                key={i}
                                d={path}
                                fill={`url(#gradient${i})`}
                                stroke="#18181b"
                                strokeWidth="1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                            />
                        );
                    })}

                    {/* Inner Circle */}
                    <circle cx="100" cy="100" r="40" fill="#0a0a0a" />
                    <text x="100" y="95" textAnchor="middle" className="fill-zinc-400 text-xs font-mono">
                        Use of
                    </text>
                    <text x="100" y="110" textAnchor="middle" className="fill-white text-sm font-bold">
                        Funds
                    </text>
                </svg>
            </div>

            {/* Legend */}
            <div className="space-y-4">
                {funding.useOfFunds.map((item, i) => {
                    const colors = colorMap[i % colorMap.length];
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className={`p-4 bg-zinc-950 border ${colors.border} border-opacity-30 rounded-lg hover:bg-zinc-900 transition-colors`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <span className={`w-3 h-3 ${colors.bg} rounded-full`} />
                                    {item.category}
                                </h4>
                                <span className={`text-2xl font-bold ${colors.text}`}>{item.percentage}%</span>
                            </div>
                            <p className="text-sm text-zinc-400 ml-5">{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default UseOfFundsChart;
