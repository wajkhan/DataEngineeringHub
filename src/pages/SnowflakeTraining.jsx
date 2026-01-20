import { useState } from 'react';
import TrainingCard from '../components/TrainingCard';
import { snowflakeTraining } from '../data/snowflakeTraining';
import './SnowflakeTraining.css';

function SnowflakeTraining() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Topics' },
        { id: 'fundamentals', label: 'Fundamentals' },
        { id: 'dataEngineering', label: 'Data Engineering' },
        { id: 'administration', label: 'Administration' },
        { id: 'development', label: 'Development' },
        { id: 'advanced', label: 'Advanced Topics' }
    ];

    return (
        <div className="training-page snowflake-page">
            <div className="container">
                <header className="page-header">
                    <div className="platform-badge">
                        <span className="platform-icon">❄️</span>
                        <h1>Snowflake Training</h1>
                    </div>
                    <p className="page-description">
                        Comprehensive learning paths for Snowflake, from beginner fundamentals to advanced topics.
                        Curated mix of free YouTube content and premium courses.
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
                    {Object.entries(snowflakeTraining).map(([key, section]) => {
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

export default SnowflakeTraining;
