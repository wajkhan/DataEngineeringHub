import { snowflakeTraining } from '../src/data/snowflakeTraining.js';
import { databricksTraining } from '../src/data/databricksTraining.js';
import axios from 'axios';

const flattenVideos = (data) => {
    let videos = [];
    Object.values(data).forEach(category => {
        if (category.videos) {
            videos = [...videos, ...category.videos];
        }
    });
    return videos;
};

const sfVideos = flattenVideos(snowflakeTraining);
const dbxVideos = flattenVideos(databricksTraining);
const allVideos = [...sfVideos, ...dbxVideos];

console.log(`Found ${allVideos.length} videos to validate...`);

async function validate() {
    let broken = 0;
    for (const video of allVideos) {
        try {
            // Small delay to be nice
            await new Promise(r => setTimeout(r, 200));

            const response = await axios.head(video.url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
                },
                timeout: 5000,
                validateStatus: (status) => status < 400 || status === 403 || status === 405 // 403/405 often mean "valid but bot blocked"
            });

            console.log(`✅ [${response.status}] ${video.title.substring(0, 30)}...`);
        } catch (e) {
            console.error(`❌ ${video.title}: ${video.url} - ${e.message}`);
            // Special logic: Udemy often blocks HEAD or returns 403, we count 404 as definitely broken
            if (e.response && e.response.status === 404) {
                broken++;
            }
        }
    }
    console.log(`\nValidation Complete. ${broken} confirmed broken links.`);
}

validate();
