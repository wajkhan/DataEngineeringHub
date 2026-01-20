import { useState } from 'react';
import TrainingCard from '../components/TrainingCard';
import { databricksTraining } from '../data/databricksTraining';
import './SnowflakeTraining.css'; // Reusing the same styles

function DatabricksTraining() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Topics' },
        { id: 'fundamentals', label: 'Fundamentals' },
        { id: 'spark', label: 'Apache Spark' },
        { id: 'dataEngineering', label: 'Data Engineering' },
        { id: 'mlAi', label: 'ML & AI' },
        { id: 'administration', label: 'Administration' }
    ];

    return (
        <div className="training-page databricks-page">
            <div className="container">
                <header className="page-header">
                    <div className="platform-badge">
                        <span className="platform-icon">🧱</span>
                        <h1>Databricks Training</h1>
                    </div>
                    <p className="page-description">
                        Master the Databricks Lakehouse platform with curated learning paths covering Spark,
                        data engineering, machine learning, and administration.
                    </p>
                </header>

                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="training-sections">
                    {Object.entries(databricksTraining).map(([key, section]) => {
                        if (selectedCategory !== 'all' && selectedCategory !== key) return null;

                        return (
                            <section key={key} className="training-section">
                                <div className="section-header">
                                    <h2 className="section-title">{section.title}</h2>
                                    <p className="section-description">{section.description}</p>
                                </div>

                                <div className="training-grid grid grid-3">
                                    {section.videos.map(video => (
                                        <TrainingCard key={video.id} video={video} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DatabricksTraining;
