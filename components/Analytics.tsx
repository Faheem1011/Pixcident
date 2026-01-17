import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
        fbq: (...args: any[]) => void;
        _fbq: any;
    }
}

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize Google Analytics
        if (GA_MEASUREMENT_ID) {
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                window.dataLayer.push(args);
            }
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID);
            window.gtag = gtag;
        }

        // Initialize Facebook Pixel
        if (FB_PIXEL_ID) {
            // @ts-ignore
            !function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            window.fbq('init', FB_PIXEL_ID);
            window.fbq('track', 'PageView');
        }
    }, []);

    // Track Page Views on Route Change
    useEffect(() => {
        if (GA_MEASUREMENT_ID && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: location.pathname + location.search,
            });
        }

        if (FB_PIXEL_ID && window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [location]);

    return null;
};

export default Analytics;
