import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as cheerio from 'cheerio';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Import our curated data as fallback
const FALLBACK_FEATURES = [
    {
        id: 1,
        title: "Snowflake Cortex Agents (Public Preview)",
        platform: "snowflake",
        releaseDate: "2026-01-15",
        description: "Build production-ready AI agents with advanced reasoning capabilities.",
        status: "new",
        category: "AI/ML",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/snowflake-cortex-agents"
    },
    {
        id: 9,
        title: "Agent Bricks (Beta)",
        platform: "databricks",
        releaseDate: "2026-01-12",
        description: "Framework for operationalizing AI agents with built-in security.",
        status: "new",
        category: "AI/ML",
        documentationUrl: "https://docs.databricks.com/en/generative-ai/agent-bricks.html"
    },
    {
        id: 20251201,
        title: "Snowflake Dynamic Tables (General Availability)",
        platform: "snowflake",
        releaseDate: "2025-12-10",
        description: "Declarative data pipelines with automatic refresh and simplified orchestration.",
        status: "update",
        category: "Data Engineering",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/dynamic-tables-intro"
    },
    {
        id: 20251115,
        title: "Databricks Mosaic AI Gateway",
        platform: "databricks",
        releaseDate: "2025-11-15",
        description: "Unified interface for managing and querying LLMs with governance.",
        status: "update",
        category: "AI/ML",
        documentationUrl: "https://docs.databricks.com/en/generative-ai/mosaic-ai-gateway.html"
    },
    {
        id: 20251020,
        title: "Old Feature (Should be filtered out)",
        platform: "snowflake",
        releaseDate: "2025-09-01",
        description: "This feature is too old and should not appear in the filtered list.",
        status: "archive",
        category: "Legacy",
        documentationUrl: "#"
    }
];

// Formatting helper
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/api/features', async (req, res) => {
    console.log('Received request for feature updates...');

    // Helper to determine status based on date (last 30 days = new)
    const getStatus = (dateStr) => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30 ? 'new' : 'update';
    };

    try {
        const snowflakeUrl = 'https://docs.snowflake.com/en/release-notes/new-features';
        // User requested this specific URL for Databricks
        const databricksUrl = 'https://docs.databricks.com/aws/en/release-notes/';

        console.log('Fetching data from documentation sources...');
        const [sfRes, dbxRes] = await Promise.allSettled([
            axios.get(snowflakeUrl, { timeout: 5000 }),
            axios.get(databricksUrl, { timeout: 5000 })
        ]);

        let scrapedFeatures = [];

        // --- Parse Snowflake ---
        if (sfRes.status === 'fulfilled') {
            try {
                const $ = cheerio.load(sfRes.value.data);
                // Look for the "Recent feature updates" section and the list following it
                // Pattern seen in docs: lists with links containing date prefixes

                $('li').each((i, el) => {
                    const text = $(el).text().trim();
                    // Pattern: "Jan 16, 2026: Feature Name"
                    const dateMatch = text.match(/^([A-Z][a-z]{2} \d{1,2}, \d{4})[:—]\s*(.+)/);

                    if (dateMatch) {
                        const dateStr = dateMatch[1];
                        const title = dateMatch[2];
                        const link = $(el).find('a').attr('href');
                        const fullLink = link ? (link.startsWith('http') ? link : `https://docs.snowflake.com${link.startsWith('/') ? '' : '/'}${link}`) : snowflakeUrl;

                        scrapedFeatures.push({
                            id: `sf-${i}-${Date.now()}`,
                            title: title,
                            platform: 'snowflake',
                            releaseDate: new Date(dateStr).toISOString().split('T')[0],
                            description: "New feature update from Snowflake documentation.",
                            status: getStatus(dateStr),
                            category: "Platform Update",
                            documentationUrl: fullLink
                        });
                    }
                });
                console.log(`Scraped ${scrapedFeatures.filter(f => f.platform === 'snowflake').length} Snowflake features`);
            } catch (e) {
                console.error("Error parsing Snowflake data:", e);
            }
        }

        // --- Parse Databricks ---
        if (dbxRes.status === 'fulfilled') {
            try {
                const $ = cheerio.load(dbxRes.value.data);
                // Databricks release notes page often links to specific release pages.
                // We'll look for recent links in the content.
                // Strategy: Find links that look like release notes with dates or versions

                $('a').each((i, el) => {
                    const text = $(el).text().trim();
                    const href = $(el).attr('href');

                    // broad match for "Release notes" or date-like text in links
                    if (text.includes('Release notes') || text.match(/[A-Z][a-z]+ \d{4}/)) {
                        if (href && href.includes('release-notes')) {
                            // This is a bit loose, but works for an aggregator
                            scrapedFeatures.push({
                                id: `dbx-${i}-${Date.now()}`,
                                title: text,
                                platform: 'databricks',
                                releaseDate: new Date().toISOString().split('T')[0], // Default to today since finding date in main TOC is hard
                                description: "Latest release note entry from Databricks docs.",
                                status: 'update',
                                category: "Platform Update",
                                documentationUrl: href.startsWith('http') ? href : `https://docs.databricks.com${href.startsWith('/') ? '' : '/'}${href}`
                            });
                        }
                    }
                });
                console.log(`Scraped ${scrapedFeatures.filter(f => f.platform === 'databricks').length} Databricks items`);
            } catch (e) {
                console.error("Error parsing Databricks data:", e);
            }
        }

        // Deduplicate and Sort
        scrapedFeatures = scrapedFeatures.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);
        scrapedFeatures.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

        // If we found nothing (e.g. scraping broke), fallback to our hardcoded list
        if (scrapedFeatures.length === 0) {
            console.log("Scraping yielded no results, using fallback data.");
            res.json(FALLBACK_FEATURES);
        } else {
            // Limit to reasonable amount
            res.json(scrapedFeatures.slice(0, 20)); // Top 20 most recent
        }

    } catch (error) {
        console.error('General Scraping error:', error);
        res.status(500).json(FALLBACK_FEATURES);
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
