import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import SnowflakeTraining from './pages/SnowflakeTraining';
import DatabricksTraining from './pages/DatabricksTraining';
import Features from './pages/Features';
import { features as staticFeatures } from './data/features';
import './index.css';

function App() {
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [featuresData, setFeaturesData] = useState(staticFeatures);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to fetch features from backend
  const fetchFeatures = async () => {
    setIsRefreshing(true);
    try {
      console.log('Fetching live features from backend...');
      // In development, the backend is on port 3001
      const response = await fetch('http://localhost:3001/api/features');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Received data:', data);
      setFeaturesData(data);
    } catch (error) {
      console.error('Failed to fetch features:', error);
      // Fallback to static data is already handled by initial state,
      // but we could show a toast/notification here
    } finally {
      setIsRefreshing(false);
    }
  };

  // Auto-refresh on component mount (when website opens)
  useEffect(() => {
    console.log('Dashboard loaded at:', new Date().toLocaleString());
    fetchFeatures();
  }, []);

  // Manual refresh function
  const handleRefresh = () => {
    console.log('Manual refresh triggered');
    setLastRefresh(new Date());
    fetchFeatures();
  };

  return (
    <Router>
      <div className="app">
        <Header onRefresh={handleRefresh} isRefreshing={isRefreshing} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/snowflake" element={<SnowflakeTraining />} />
            <Route path="/databricks" element={<DatabricksTraining />} />
            <Route
              path="/features"
              element={<Features features={featuresData} />}
            />
          </Routes>
        </main>
        <footer className="app-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Snowflake Resources</h3>
                <ul>
                  <li><a href="https://docs.snowflake.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                  <li><a href="https://community.snowflake.com" target="_blank" rel="noopener noreferrer">Community</a></li>
                  <li><a href="https://quickstarts.snowflake.com" target="_blank" rel="noopener noreferrer">Quickstarts</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Databricks Resources</h3>
                <ul>
                  <li><a href="https://docs.databricks.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                  <li><a href="https://community.databricks.com" target="_blank" rel="noopener noreferrer">Community</a></li>
                  <li><a href="https://www.databricks.com/resources/learn" target="_blank" rel="noopener noreferrer">Learning</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <p className="footer-note">
                  Last refreshed: {lastRefresh.toLocaleString()}
                </p>
                <p className="footer-credit">
                  Built for Data Platform Managers 📊
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
