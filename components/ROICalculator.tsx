import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import Counter from './Counter';

const ROICalculator: React.FC = () => {
    const [investment, setInvestment] = useState(100000);
    const [exitMultiple, setExitMultiple] = useState(5);
    const [timeframe, setTimeframe] = useState(5);

    const calculateROI = () => {
        const exitValue = investment * exitMultiple;
        const profit = exitValue - investment;
        const annualReturn = ((exitMultiple ** (1 / timeframe) - 1) * 100);
        return { exitValue, profit, annualReturn };
    };

    const { exitValue, profit, annualReturn } = calculateROI();

    return (
        <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-blue-500/30 rounded-2xl p-8 md:p-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <DollarSign className="text-green-400" size={32} />
                    Investment ROI Calculator
                </h3>
                <p className="text-zinc-400 mb-8">
                    Calculate your potential returns based on conservative exit scenarios
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Investment Amount */}
                    <div>
                        <label htmlFor="investment-input" className="block text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">
                            Investment Amount
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg">$</span>
                            <input
                                id="investment-input"
                                type="number"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full bg-zinc-900 border-2 border-zinc-700 focus:border-blue-500 rounded-lg px-10 py-3 text-white text-lg font-mono outline-none transition-colors"
                                aria-label="Investment amount"
                            />
                        </div>
                        <input
                            type="range"
                            min="25000"
                            max="500000"
                            step="25000"
                            value={investment}
                            onChange={(e) => setInvestment(Number(e.target.value))}
                            className="w-full mt-3 accent-blue-500"
                            aria-label="Investment amount slider"
                        />
                    </div>

                    {/* Exit Multiple */}
                    <div>
                        <label htmlFor="exit-input" className="block text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">
                            Exit Multiple
                        </label>
                        <div className="relative">
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">x</span>
                            <input
                                id="exit-input"
                                type="number"
                                value={exitMultiple}
                                onChange={(e) => setExitMultiple(Number(e.target.value))}
                                className="w-full bg-zinc-900 border-2 border-zinc-700 focus:border-green-500 rounded-lg px-4 py-3 text-white text-lg font-mono outline-none transition-colors"
                                min="1"
                                max="20"
                                step="0.5"
                                aria-label="Exit multiple"
                            />
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            step="0.5"
                            value={exitMultiple}
                            onChange={(e) => setExitMultiple(Number(e.target.value))}
                            className="w-full mt-3 accent-green-500"
                            aria-label="Exit multiple slider"
                        />
                    </div>

                    {/* Timeframe */}
                    <div>
                        <label htmlFor="timeframe-input" className="block text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">
                            Timeframe (Years)
                        </label>
                        <input
                            id="timeframe-input"
                            type="number"
                            value={timeframe}
                            onChange={(e) => setTimeframe(Number(e.target.value))}
                            className="w-full bg-zinc-900 border-2 border-zinc-700 focus:border-purple-500 rounded-lg px-4 py-3 text-white text-lg font-mono outline-none transition-colors"
                            min="1"
                            max="10"
                            aria-label="Timeframe in years"
                        />
                        <input
                            type="range"
                            min="1"
                            max="10"
                            step="1"
                            value={timeframe}
                            onChange={(e) => setTimeframe(Number(e.target.value))}
                            className="w-full mt-3 accent-purple-500"
                            aria-label="Timeframe slider"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        key={exitValue}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-500/50 rounded-xl p-6 text-center"
                    >
                        <div className="text-blue-400 text-sm font-mono uppercase tracking-wider mb-2">Exit Value</div>
                        <div className="text-4xl font-bold text-white">
                            $<Counter end={exitValue} decimals={0} />
                        </div>
                    </motion.div>

                    <motion.div
                        key={profit}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-br from-green-900/30 to-green-950/30 border border-green-500/50 rounded-xl p-6 text-center"
                    >
                        <div className="text-green-400 text-sm font-mono uppercase tracking-wider mb-2">Total Profit</div>
                        <div className="text-4xl font-bold text-white">
                            $<Counter end={profit} decimals={0} />
                        </div>
                    </motion.div>

                    <motion.div
                        key={annualReturn}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-500/50 rounded-xl p-6 text-center"
                    >
                        <div className="text-purple-400 text-sm font-mono uppercase tracking-wider mb-2">Annual Return</div>
                        <div className="text-4xl font-bold text-white">
                            <Counter end={annualReturn} decimals={1} suffix="%" />
                        </div>
                    </motion.div>
                </div>

                <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                    <p className="text-xs text-zinc-500 text-center">
                        * Calculations are estimates based on conservative exit scenarios. Actual returns may vary.
                        Past performance does not guarantee future results. Invest at your own risk.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ROICalculator;
