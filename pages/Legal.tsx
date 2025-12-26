import React from 'react';
import { useLocation } from 'react-router-dom';

const Legal: React.FC = () => {
    const location = useLocation();
    const isPrivacy = location.pathname.includes('privacy');
    const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

    return (
        <div className="bg-brand-black min-h-screen pt-32 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-white mb-8">{title}</h1>
                <div className="prose prose-invert prose-orange max-w-none">
                    <p className="text-zinc-400">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-white text-2xl mt-8 mb-6 font-bold">Terms and Conditions</h2>
                    <h3 className="text-white text-xl mt-8 mb-4">1. Introduction</h3>
                    <p className="text-zinc-400 mb-4">
                        Welcome to Pixcident. By accessing our website and services, you agree to be bound by these {title}.
                    </p>

                    <h3 className="text-white text-xl mt-8 mb-4">2. Intellectual Property</h3>
                    <p className="text-zinc-400 mb-4">
                        All content, including 3D assets, animations, code, and design, are the exclusive property of Pixcident unless otherwise stated in a specific client agreement.
                    </p>

                    <h3 className="text-white text-xl mt-8 mb-4">3. {isPrivacy ? 'Data Collection' : 'Usage License'}</h3>
                    <p className="text-zinc-400 mb-4">
                        {isPrivacy
                            ? "We collect minimal data necessary to improve our services. We do not sell your personal data to third parties."
                            : "Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only."}
                    </p>

                    <h3 className="text-white text-xl mt-8 mb-4">4. Contact</h3>
                    <p className="text-zinc-400 mb-4">
                        For any legal inquiries, please contact legal@pixcident.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Legal;