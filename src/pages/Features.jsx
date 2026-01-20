
import { useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import './Features.css';

// Now accepting features as a prop
function Features({ features: propFeatures = [] }) {
    const [platformFilter, setPlatformFilter] = useState('all');
    const [sortBy, setSortBy] = useState('date-desc');

    // Use props if available, otherwise fallback will be empty array
    let filteredFeatures = [...propFeatures];

    // Filter by date (Last 3 months)
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    // Filter out features older than 3 months
    filteredFeatures = filteredFeatures.filter(f => {
        const featureDate = new Date(f.releaseDate);
        return featureDate >= threeMonthsAgo;
    });

    // Filter by platform
    if (platformFilter !== 'all') {
        filteredFeatures = filteredFeatures.filter(f => f.platform === platformFilter);
    }

    // Sort
    filteredFeatures.sort((a, b) => {
        if (sortBy === 'date-desc') {
            return new Date(b.releaseDate) - new Date(a.releaseDate);
        } else {
            return new Date(a.releaseDate) - new Date(b.releaseDate);
        }
    });

    const stats = {
        total: propFeatures.length,
        snowflake: propFeatures.filter(f => f.platform === 'snowflake').length,
        databricks: propFeatures.filter(f => f.platform === 'databricks').length,
    };

    return (
        <div className="features-page">
            <div className="container">
                <header className="page-header">
                    <h1>Platform Features & Announcements</h1>
                    <p className="page-description">
                        Stay updated with the latest features, enhancements, and capabilities from Snowflake and Databricks.
                        Each feature includes release dates, documentation, and training resources.
                    </p>
                </header>

                <div className="features-stats grid grid-3">
                    <div className="stat-box glass">
                        <div className="stat-number">{stats.total}</div>
                        <div className="stat-label">Total Features</div>
                    </div>
                    <div className="stat-box glass">
                        <div className="stat-number snowflake-color">{stats.snowflake}</div>
                        <div className="stat-label">❄️ Snowflake</div>
                    </div>
                    <div className="stat-box glass">
                        <div className="stat-number databricks-color">{stats.databricks}</div>
                        <div className="stat-label">🧱 Databricks</div>
                    </div>
                </div>

                <div className="features-controls">
                    <div className="filter-group">
                        <label>Platform:</label>
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${platformFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setPlatformFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-btn ${platformFilter === 'snowflake' ? 'active' : ''}`}
                                onClick={() => setPlatformFilter('snowflake')}
                            >
                                ❄️ Snowflake
                            </button>
                            <button
                                className={`filter-btn ${platformFilter === 'databricks' ? 'active' : ''}`}
                                onClick={() => setPlatformFilter('databricks')}
                            >
                                🧱 Databricks
                            </button>
                        </div>
                    </div>

                    <div className="sort-group">
                        <label>Sort by:</label>
                        <select
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="date-desc">Newest First</option>
                            <option value="date-asc">Oldest First</option>
                        </select>
                    </div>
                </div>

                <div className="features-grid grid grid-3">
                    {filteredFeatures.map(feature => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>

                {filteredFeatures.length === 0 && (
                    <div className="no-results">
                        <p>No features found matching your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Features;
