import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h2>Robot Vision Dashboard</h2>
    </header>
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
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center'
  }
};

export default Header;
