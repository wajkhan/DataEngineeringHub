import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onRefresh, isRefreshing }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content flex-between">
                    <Link to="/" className="logo">
                        <h2>📊 Data Engineering Hub</h2>
                    </Link>

                    <nav className="nav">
                        <Link to="/" className="nav-link">Dashboard</Link>
                        <Link to="/snowflake" className="nav-link">
                            <span className="snowflake-icon">❄️</span> Snowflake
                        </Link>
                        <Link to="/databricks" className="nav-link">
                            <span className="databricks-icon">🧱</span> Databricks
                        </Link>
                        <Link to="/features" className="nav-link">Features</Link>
                    </nav>

                    <button
                        className="btn btn-refresh"
                        onClick={onRefresh}
                        title="Refresh Content"
                        disabled={isRefreshing}
                    >
                        <span className={`refresh-icon ${isRefreshing ? 'spinning' : ''}`}>🔄</span>
                        {isRefreshing ? 'Refreshing...' : 'Refresh'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
