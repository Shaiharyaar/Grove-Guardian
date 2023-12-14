import React, { useState } from 'react';

const PhotoUploadForm = ({ onPhotoUploadComplete }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    // 結合新選擇的文件和已有的文件
    if (files.length + e.target.files.length > 10) {
      alert("You can upload a maximum of 10 photos.");
      return;
    }
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const handleRemove = (index) => {
    // 創建一個新數組並刪除指定索引的文件
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="stepImg stepImg2"></div>
      <h2 className="stepTitle">Upload Planting Photos</h2>
      <p className="stepIntro">You have the option to upload photos capturing the tree planting process, serving as a visual record and enabling you to share this meaningful experience with others.</p>
      <div className="contriFormContent">
        <input className="selection" type="file" onChange={handleFileChange} multiple />
        <div className="photo-preview">
          {files.map((file, index) => (
            <div key={index} className="preview-item">
              <img src={URL.createObjectURL(file)} alt={`preview ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
        <button className="selectionSubmit" type="button" onClick={onPhotoUploadComplete}>Next Step</button>
      </div>
    </>
  );
};

export default PhotoUploadForm;
