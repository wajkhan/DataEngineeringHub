import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <section className="hero-section section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title animate-fade-in">
                            Your Central Platform Intelligence Hub
                        </h1>
                        <p className="hero-description animate-fade-in">
                            Everything you need to stay updated on Snowflake and Databricks -
                            training resources, feature announcements, and documentation in one place.
                        </p>

                        <div className="hero-stats grid grid-3 animate-fade-in">
                            <div className="stat-card glass">
                                <div className="stat-icon">❄️</div>
                                <h3>Snowflake</h3>
                                <p>Comprehensive training paths and latest features</p>
                                <Link to="/snowflake" className="btn btn-primary">Explore →</Link>
                            </div>

                            <div className="stat-card glass">
                                <div className="stat-icon">🧱</div>
                                <h3>Databricks</h3>
                                <p>Lakehouse platform resources and updates</p>
                                <Link to="/databricks" className="btn btn-secondary">Explore →</Link>
                            </div>

                            <div className="stat-card glass">
                                <div className="stat-icon">✨</div>
                                <h3>Latest Features</h3>
                                <p>20+ new features and announcements</p>
                                <Link to="/features" className="btn btn-outline">View All →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quick-links-section section">
                <div className="container">
                    <h2 className="section-title">Quick Access</h2>
                    <div className="quick-links grid grid-2">
                        <div className="quick-link-card gradient-border">
                            <div className="gradient-border-content">
                                <h3>🎓 Training Paths</h3>
                                <p>Curated learning resources from fundamentals to advanced topics</p>
                                <ul className="link-list">
                                    <li><Link to="/snowflake">Snowflake Training →</Link></li>
                                    <li><Link to="/databricks">Databricks Training →</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="quick-link-card gradient-border">
                            <div className="gradient-border-content">
                                <h3>🚀 New Features</h3>
                                <p>Stay current with platform innovations and enhancements</p>
                                <ul className="link-list">
                                    <li><Link to="/features">All Features →</Link></li>
                                    <li><a href="https://docs.snowflake.com/en/release-notes" target="_blank" rel="noopener noreferrer">Snowflake Release Notes →</a></li>
                                    <li><a href="https://docs.databricks.com/en/release-notes/product/" target="_blank" rel="noopener noreferrer">Databricks Release Notes →</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-section section">
                <div className="container">
                    <h2 className="section-title">Why This Hub?</h2>
                    <div className="why-grid grid grid-3">
                        <div className="why-card glass">
                            <div className="why-icon">🎯</div>
                            <h3>Centralized Knowledge</h3>
                            <p>No more hunting across multiple sites. Everything in one place.</p>
                        </div>
                        <div className="why-card glass">
                            <div className="why-icon">📚</div>
                            <h3>Curated Content</h3>
                            <p>Hand-picked training resources from beginner to expert level.</p>
                        </div>
                        <div className="why-card glass">
                            <div className="why-icon">⚡</div>
                            <h3>Always Current</h3>
                            <p>Latest features and announcements with direct links to docs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
