import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-center px-4">
            <SEO title="404 - Page Not Found" />
            <h1 className="text-9xl font-display font-bold text-brand-orange mb-4">404</h1>
            <h2 className="text-3xl text-white font-bold mb-6">Page Not Found</h2>
            <p className="text-zinc-400 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
