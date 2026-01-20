import './FeatureCard.css';

function FeatureCard({ feature }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const isRecent = (dateString) => {
        const releaseDate = new Date(dateString);
        const now = new Date();
        const daysDiff = (now - releaseDate) / (1000 * 60 * 60 * 24);
        return daysDiff <= 60; // Consider features from last 60 days as recent
    };

    return (
        <div className="feature-card card animate-fade-in">
            <div className="feature-header">
                <span className={`badge ${feature.platform === 'snowflake' ? 'badge-snowflake' : 'badge-databricks'}`}>
                    {feature.platform === 'snowflake' ? '❄️ Snowflake' : '🧱 Databricks'}
                </span>
                {isRecent(feature.releaseDate) && (
                    <span className="badge badge-new">✨ New</span>
                )}
            </div>

            <h3 className="feature-title">{feature.title}</h3>

            <div className="feature-category">
                <span className="category-badge">{feature.category}</span>
            </div>

            <p className="feature-description">{feature.description}</p>

            <div className="feature-meta">
                <div className="release-date">
                    <span className="meta-icon">📅</span>
                    <span>Released: {formatDate(feature.releaseDate)}</span>
                </div>
            </div>

            <div className="feature-links">
                <a
                    href={feature.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    📖 Docs
                </a>
                {feature.trainingUrl && (
                    <a
                        href={feature.trainingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${feature.platform === 'snowflake' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        🎓 Tutorial
                    </a>
                )}
            </div>
        </div>
    );
}

export default FeatureCard;
