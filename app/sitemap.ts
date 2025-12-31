import { Metadata, Route } from 'next';

const BASE_URL = 'https://movie-pro.32d.one';

export default function sitemap(): Metadata {
    return {
        alternates: {
            canonical: BASE_URL,
        },
    };
}

export async function generateSitemap() {
    const routes = [
        '',
        '/how-it-works',
        '/privacy-policy',
        '/tos',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    return routes;
}
