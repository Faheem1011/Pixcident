/**
 * Utility to convert local asset paths to jsDelivr CDN URLs for faster loading.
 * Configured for the Pixcident GitHub repository.
 */

const GITHUB_USER = 'Faheem1011';
const GITHUB_REPO = 'Pixcident';
const GITHUB_BRANCH = 'main'; // Use 'main' or the specific commit hash for immutability

const CDN_BASE_URL = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}@${GITHUB_BRANCH}`;

/**
 * Transforms a local asset path into a CDN URL.
 * 
 * @param path - The local path (e.g., "/assets/projects/image.png" or "assets/projects/image.png")
 * @returns The full CDN URL string.
 */
export const getAssetUrl = (path: string): string => {
    // If it's already a full URL or doesn't look like a local asset, return as is
    if (path.startsWith('http') || path.startsWith('//') || path.startsWith('data:')) {
        return path;
    }

    // Determine if we are running locally
    const isLocal = typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    // Clean up the path (remove leading slash if present)
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Use local path for development to ensure images load even before git push
    if (isLocal) {
        return `/${cleanPath}`;
    }

    // Prefix with 'public/' because the assets are in the public folder but referenced relative to it in development
    // In production, Vite serves files from 'public' at the root level.
    // However, on GitHub, they are literally in the 'public' folder.
    return `${CDN_BASE_URL}/public/${cleanPath}`;
};
