import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';
import { trackEvent } from '../components/Analytics';

const ContactInfoCard = ({ icon: Icon, title, content, link, label }: any) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-brand-orange/40 transition-all group"
    >
        <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
            <Icon size={24} />
        </div>
        <div>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{title}</p>
            <p className="text-lg font-bold text-white uppercase">{content}</p>
            <p className="text-xs text-zinc-400 mt-1">{label}</p>
        </div>
    </motion.a>
);

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            trackEvent('contact_form_submitted');
        }, 1500);
    };

    return (
        <>
            <EnhancedSEO
                title="Contact - Let's Build Your Vision"
                description="Connect with Faheem Fiaz and the Pixcident team. Available for high-end 3D visualization, Unreal Engine development, and AI automation projects."
                keywords={['hire 3d artist', 'unreal engine studio', 'creative technology agency', 'pixcident contact']}
            />

            <StructuredData
                type="LocalBusiness"
                data={{
                    name: "Pixcident",
                    address: {
                        "@type": "PostalAddress",
                        "streetAddress": "74 Summer St #366",
                        "addressLocality": "Kingston",
                        "addressRegion": "MA",
                        "postalCode": "02364",
                        "addressCountry": "US"
                    },
                    telephone: "+1-781-588-9205",
                    email: "Contact@pixcident.com",
                    sameAs: [
                        "https://linkedin.com/company/pixcident",
                        "https://twitter.com/pixcident"
                    ]
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
                                Start a <span className="text-brand-orange text-glow">Briefing</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                                We're ready to transform your technical requirements into immersive digital reality. Choose your preferred channel below.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Direct Contact Methods */}
                        <div className="space-y-6">
                            <ContactInfoCard
                                icon={Mail}
                                title="Primary Email"
                                content="Contact@pixcident.com"
                                link="mailto:Contact@pixcident.com"
                                label="Average response time: &lt; 4 hours"
                            />
                            <ContactInfoCard
                                icon={Phone}
                                title="WhatsApp Business"
                                content="+1 (781) 588-9205"
                                link="https://wa.me/17815889205"
                                label="Instant messaging & quick calls"
                            />
                            <ContactInfoCard
                                icon={MapPin}
                                title="Studio Address"
                                content="Kingston, MA"
                                link="https://maps.google.com/?q=74%20Summer%20St%20%23366%20Kingston,%20MA%2002364"
                                label="74 Summer St #366, 02364"
                            />

                            <div className="pt-10">
                                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Social Ecosystem</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Linkedin, link: 'https://linkedin.com/company/pixcident' },
                                        { icon: Twitter, link: 'https://twitter.com/pixcident' },
                                        { icon: Github, link: 'https://github.com/pixcident' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-brand-orange hover:text-brand-orange transition-all"
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Briefing Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
                        >
                            {isSubmitted ? (
                                <div className="text-center py-20">
                                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold mb-4 uppercase">Transmission Received</h2>
                                    <p className="text-zinc-400">Thank you for the briefing. Our strategist will review your requirements and reach out shortly.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-10 text-brand-orange font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all"
                                    >
                                        Send another message <ArrowRight size={18} />
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Work Email</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="email@company.com"
                                                className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Project Category</label>
                                        <select
                                            className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                                        >
                                            <option>3D Visualization & Animation</option>
                                            <option>Web Ecosystem Development</option>
                                            <option>AI Solutions & Automation</option>
                                            <option>Unreal Engine Environments</option>
                                            <option>Something Else</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Project Brief</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Tell us about your goals and technical requirements..."
                                            className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-brand-orange text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Transmitting...' : 'Submit Briefing'}
                                        {!isSubmitting && <Send size={20} />}
                                    </button>

                                    <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest">
                                        Protected by end-to-end encryption & privacy standards
                                    </p>
                                </form>
                            )}

                            {/* Background decoration */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-orange/5 blur-[100px] pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;