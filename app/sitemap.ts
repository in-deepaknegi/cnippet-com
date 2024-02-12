import { MetadataRoute } from 'next'

const urls = [
    'https://cnippet.com/',
]

export default function sitemap(): MetadataRoute.Sitemap {
    
    console.log(urls.length)

    const allUrls: MetadataRoute.Sitemap =  urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://cnippet.com/' ? 1 : 0.8,
    }));

    return allUrls;
}