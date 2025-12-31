import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works - Movie Rating Pro Guide",
    description: "Learn how to use Movie Rating Pro's AI-powered features. A step-by-step guide to automatic title detection, custom rating fields, and data management.",
    keywords: ["how to use movie rating pro", "movie rating guide", "AI movie detection tutorial", "chrome extension guide", "movie tracking tutorial"],
    openGraph: {
        title: "How It Works - Movie Rating Pro Guide",
        description: "Master the art of movie rating with our AI-powered tools. Complete guide to features and usage.",
        url: "https://movie-pro.32d.one/how-it-works",
        type: "article",
    },
};

// HowTo Schema for AEO
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Rate Movies with AI Precision using Movie Rating Pro",
    "description": "A comprehensive guide to using the Movie Rating Pro Chrome extension for automatic movie tracking and detailed scoring.",
    "step": [
        {
            "@type": "HowToStep",
            "name": "Install the Extension",
            "text": "Download Movie Rating Pro from the Chrome Web Store or install it manually from GitHub.",
            "image": "https://movie-pro.32d.one/assets/install-step.jpg",
            "url": "https://movie-pro.32d.one/how-it-works#install"
        },
        {
            "@type": "HowToStep",
            "name": "Navigate to a Movie",
            "text": "Open Netflix, Prime Video, or any streaming site and start playing a movie. The AI will automatically detect the title and genre.",
            "image": "https://movie-pro.32d.one/assets/detect-step.jpg",
            "url": "https://movie-pro.32d.one/how-it-works#detection"
        },
        {
            "@type": "HowToStep",
            "name": "Rate and Save",
            "text": "Use the popup interface to rate the movie on various criteria, add custom notes, and save it to your local database.",
            "image": "https://movie-pro.32d.one/assets/rate-step.jpg",
            "url": "https://movie-pro.32d.one/how-it-works#rating"
        }
    ],
    "tool": [
        {
            "@type": "HowToTool",
            "name": "Movie Rating Pro Chrome Extension"
        },
        {
            "@type": "HowToTool",
            "name": "Google Chrome Browser"
        }
    ]
};

// Breadcrumb Schema for better navigation structure
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://movie-pro.32d.one"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "How It Works",
        "item": "https://movie-pro.32d.one/how-it-works"
    }]
};

export default function HowItWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
