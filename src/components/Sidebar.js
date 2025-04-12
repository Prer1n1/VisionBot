// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>🤖 RoboVision</h2>
      <ul style={styles.menu}>
        <li>📷 Upload</li>
        <li>🔍 Detect</li>
        <li>📊 Sensors</li>
      </ul>
    </div>
  );
}

const styles = {
  panel: {
    backgroundColor: '#1e1e1e',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #333',
    boxShadow: '0 0 12px rgba(0,0,0,0.5)',
    width: '100%',
    maxWidth: '400px',
    flex: '1',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  sidebar: {
    width: '220px',
    height: '100vh',
    backgroundColor: '#111',
    color: '#fff',
    padding: '1rem',
    position: 'fixed',
    left: 0,
    top: 0,
    borderRight: '1px solid #222',
  },
  logo: {
    fontSize: '1.5rem',
    color: '#90caf9',
    marginBottom: '2rem',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1rem',
    lineHeight: '2rem',
  },
};

export default Sidebar;
