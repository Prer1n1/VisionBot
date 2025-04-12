import React, { useState } from 'react';

function UploadImage({ onImageUpload }) {
  const [imageURL, setImageURL] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImageURL(newImageURL);
      onImageUpload(file);  // send the file to parent (for prediction)
    }
  };

  return (
    <div style={styles.container}>
      <h3>Upload Robot Camera Image</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageURL && (
        <div>
          <img src={imageURL} alt="Uploaded" style={styles.image} />
        </div>
      )}
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
  container: {
    margin: '1rem',
    textAlign: 'center',
  },
  image: {
    marginTop: '1rem',
    maxWidth: '300px',
    borderRadius: '8px',
  },
};

export default UploadImage;
