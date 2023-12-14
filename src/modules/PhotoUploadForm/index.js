import React, { useState } from 'react';

const PhotoUploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload(file);
  };

  return (
    <>
    <div className="stepImg stepImg2"></div>
    <h2 className="stepTitle">Upload Planting Photos</h2>
    <p className="stepIntro">You have the option to upload photos capturing the tree planting process, serving as a visual record and enabling you to share this meaningful experience with others.</p>
    <form className="contriFormContent" onSubmit={handleSubmit}>
      <input className="selection" type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
    </>
  );
};

export default PhotoUploadForm;
