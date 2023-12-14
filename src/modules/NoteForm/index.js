import React, { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState('');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <>
      <div className="stepImg stepImg3"></div>
      <h2 className="stepTitle">Make Some Notes!</h2>
      <p className="stepIntro">Feel free to share your enriching tree-planting experience by providing a brief and thoughtful description or record of your reflections on the process.</p>
      <p className="stepIntro noteLabel">Comment and Note:</p>
      <form className="contriFormContent" onSubmit={() => onSubmit(note)}>
        <textarea className="textarea" placeholder=" Make some notes or comments" onChange={handleChange} value={note}></textarea>
        <button className="selectionSubmit" type="submit">Submit</button>
      </form>
    </>
  );
};

export default NoteForm;
