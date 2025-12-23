import React, { useState } from 'react';
import { DONATION_TIERS } from '../../constants';
import { Check, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <Heart size={32} fill="currentColor" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase">Support Our Vision</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                Your contributions help us remain independent, experiment with new technologies, and build tools for the open-source creative community.
            </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16 bg-zinc-900 rounded-full p-1 border border-zinc-800">
            <div className="flex justify-between text-xs text-zinc-500 mb-2 px-4 pt-2">
                <span>Raised: $12,450</span>
                <span>Goal: $50,000</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden relative">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '25%' }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full"
                />
            </div>
        </div>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DONATION_TIERS.map((tier) => (
                <div 
                    key={tier.name}
                    className={`relative p-8 rounded-xl border transition-all cursor-pointer ${
                        selectedAmount === tier.amount 
                        ? 'bg-zinc-900 border-brand-orange ring-1 ring-brand-orange' 
                        : 'bg-zinc-950 border-zinc-800 hover:border-zinc-600'
                    }`}
                    onClick={() => setSelectedAmount(tier.amount)}
                >
                    {tier.popular && (
                        <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                            Popular
                        </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-display font-bold text-white mb-6">
                        ${tier.amount}
                    </div>
                    <ul className="space-y-3 mb-8">
                        {tier.perks.map(perk => (
                            <li key={perk} className="flex items-center gap-3 text-zinc-400 text-sm">
                                <Check size={16} className="text-brand-orange" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full py-3 rounded font-bold uppercase tracking-wider transition-colors ${
                        selectedAmount === tier.amount
                        ? 'bg-brand-orange text-white'
                        : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700'
                    }`}>
                        Select
                    </button>
                </div>
            ))}
        </div>

        {/* Custom Amount */}
        <div className="mt-12 p-8 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
            <h3 className="text-white font-bold mb-4">Or enter a custom amount</h3>
            <div className="flex justify-center gap-4 max-w-md mx-auto">
                <span className="text-2xl text-zinc-500 py-3">$</span>
                <input 
                    type="number" 
                    placeholder="0.00" 
                    className="bg-transparent border-b-2 border-zinc-700 text-3xl text-white w-full py-2 focus:outline-none focus:border-brand-orange text-center"
                />
            </div>
            <button className="mt-8 bg-white text-black px-12 py-3 rounded font-bold uppercase hover:bg-zinc-200 transition-colors">
                Donate Now
            </button>
            <p className="mt-4 text-xs text-zinc-500">Payments are secure and encrypted. Tax deductible where applicable.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;