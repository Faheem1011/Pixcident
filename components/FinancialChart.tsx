import React from 'react';
import { motion } from 'framer-motion';
import { FinancialYear } from '../startup-constants';

interface FinancialChartProps {
    projections: FinancialYear[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({ projections }) => {
    // Calculate max value for scaling
    const maxRevenue = Math.max(...projections.map(p => p.annualRevenue));
    const scale = 200 / maxRevenue;

    // Generate path for revenue line
    const generatePath = () => {
        const points = projections.map((p, i) => {
            const x = (i / (projections.length - 1)) * 100;
            const y = 100 - (p.annualRevenue * scale * 100 / 200) * 100;
            return `${x},${y}`;
        });
        return `M ${points.join(' L ')}`;
    };

    return (
        <div className="space-y-6">
            {/* Revenue Chart */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    3-Year Revenue Projection
                </h4>

                <div className="h-64 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        {[0, 25, 50, 75, 100].map((y) => (
                            <line
                                key={y}
                                x1="0"
                                y1={y}
                                x2="100"
                                y2={y}
                                stroke="#27272a"
                                strokeWidth="0.2"
                                strokeDasharray="1 1"
                            />
                        ))}

                        {/* Area Gradient */}
                        <defs>
                            <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Area Fill */}
                        <motion.path
                            d={`${generatePath()} L 100,100 L 0,100 Z`}
                            fill="url(#revenueGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Revenue Line */}
                        <motion.path
                            d={generatePath()}
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />

                        {/* Data Points */}
                        {projections.map((p, i) => {
                            const x = (i / (projections.length - 1)) * 100;
                            const y = 100 - (p.annualRevenue * scale * 100 / 200) * 100;
                            return (
                                <motion.circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r="0.8"
                                    fill="#10b981"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2 + i * 0.2 }}
                                />
                            );
                        })}
                    </svg>

                    {/* Y-Axis Labels */}
                    <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-xs text-zinc-500 -ml-12">
                        <span>${(maxRevenue / 1000000).toFixed(1)}M</span>
                        <span>${(maxRevenue * 0.75 / 1000000).toFixed(1)}M</span>
                        <span>${(maxRevenue * 0.5 / 1000000).toFixed(1)}M</span>
                        <span>${(maxRevenue * 0.25 / 1000000).toFixed(1)}M</span>
                        <span>$0</span>
                    </div>

                    {/* X-Axis Labels */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-zinc-500 -mb-6">
                        {projections.map((p) => (
                            <span key={p.year}>Year {p.year}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Metrics Table */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-800">
                            <th className="px-6 py-3 text-left text-xs font-mono uppercase text-zinc-400">Year</th>
                            <th className="px-6 py-3 text-right text-xs font-mono uppercase text-zinc-400">Customers</th>
                            <th className="px-6 py-3 text-right text-xs font-mono uppercase text-zinc-400">ARPU</th>
                            <th className="px-6 py-3 text-right text-xs font-mono uppercase text-zinc-400">Revenue</th>
                            <th className="px-6 py-3 text-right text-xs font-mono uppercase text-zinc-400">Expenses</th>
                            <th className="px-6 py-3 text-right text-xs font-mono uppercase text-zinc-400">Net</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projections.map((p, i) => (
                            <motion.tr
                                key={p.year}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b border-zinc-800 hover:bg-zinc-900/50"
                            >
                                <td className="px-6 py-4 text-white font-bold">Year {p.year}</td>
                                <td className="px-6 py-4 text-right text-zinc-300">{p.customers.toLocaleString()}</td>
                                <td className="px-6 py-4 text-right text-zinc-300">${p.arpu}</td>
                                <td className="px-6 py-4 text-right text-green-400 font-mono">${(p.annualRevenue / 1000000).toFixed(2)}M</td>
                                <td className="px-6 py-4 text-right text-red-400 font-mono">${(p.expenses / 1000000).toFixed(2)}M</td>
                                <td className={`px-6 py-4 text-right font-mono font-bold ${p.net >= 0 ? 'text-green-400' : 'text-orange-400'}`}>
                                    ${(Math.abs(p.net) / 1000000).toFixed(2)}M
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Descriptions */}
            <div className="space-y-2">
                {projections.map((p) => (
                    <div key={p.year} className="bg-zinc-900/50 border border-zinc-800 rounded p-3">
                        <span className="text-sm font-mono text-zinc-500">Year {p.year}:</span>{' '}
                        <span className="text-sm text-zinc-400">{p.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinancialChart;
