import { useState } from 'react';
import VideoModal from './VideoModal';
import './TrainingCard.css';

function TrainingCard({ video }) {
    const [showModal, setShowModal] = useState(false);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'beginner':
                return '#10B981';
            case 'intermediate':
                return '#F59E0B';
            case 'advanced':
                return '#EF4444';
            default:
                return '#6B7280';
        }
    };

    const handleWatchClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <div className="training-card card animate-fade-in">
                <div className="training-card-header">
                    <div className="training-type">
                        <span className={`badge ${video.type === 'free' ? 'badge-free' : 'badge-paid'}`}>
                            {video.type === 'free' ? '🎓 Free' : '💎 Paid'}
                        </span>
                    </div>
                    <div
                        className="difficulty-badge"
                        style={{
                            background: getDifficultyColor(video.difficulty),
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}
                    >
                        {video.difficulty}
                    </div>
                </div>

                <h3 className="training-title">{video.title}</h3>
                <p className="training-description">{video.description}</p>

                <div className="training-meta">
                    <div className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        <span className="meta-text">{video.duration}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-icon">👨‍🏫</span>
                        <span className="meta-text">{video.instructor}</span>
                    </div>
                </div>

                <button
                    onClick={handleWatchClick}
                    className="btn btn-primary training-btn"
                >
                    {video.type === 'free' ? 'Watch Now' : 'View Course'} →
                </button>
            </div>

            {showModal && (
                <VideoModal
                    url={video.url}
                    title={video.title}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}

export default TrainingCard;
