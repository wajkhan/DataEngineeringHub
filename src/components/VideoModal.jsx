import { useEffect } from 'react';
import './VideoModal.css';

function VideoModal({ url, title, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Helper to extract YouTube ID
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(url);
    const isYouTube = !!videoId;
    const embedUrl = isYouTube ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="btn-close" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    {isYouTube ? (
                        <>
                            <div className="video-container">
                                <iframe
                                    src={embedUrl}
                                    title={title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-fallback" style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary text-sm hover:text-white"
                                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}
                                >
                                    Problem playing? Watch on YouTube ↗
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="external-content">
                            <p>This content cannot be embedded directly.</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Open in New Tab ↗
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoModal;
