import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with Pixcident for your next 3D, VFX, or Unreal Engine project. We're hiring and open to collaborations."
            />
            <div className="py-12 bg-zinc-950 border-b border-zinc-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-display font-bold text-white mb-4 uppercase"
                    >
                        Get In Touch
                    </motion.h1>
                    <p className="text-zinc-400">Ready to start your next project? We're listening.</p>
                </div>
            </div>
            <ContactSection />

            {/* Office Locations */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50">
                            <h3 className="text-white font-bold mb-2">San Francisco (HQ)</h3>
                            <p className="text-zinc-500 text-sm">500 Terry Francois Street<br />San Francisco, CA 94158</p>
                        </div>
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50">
                            <h3 className="text-white font-bold mb-2">London</h3>
                            <p className="text-zinc-500 text-sm">123 Oxford Street<br />London, UK W1D 1LT</p>
                        </div>
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50">
                            <h3 className="text-white font-bold mb-2">Tokyo</h3>
                            <p className="text-zinc-500 text-sm">Shibuya Crossing<br />Tokyo, Japan</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;