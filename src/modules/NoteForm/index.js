import React, { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState('');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <form onSubmit={() => onSubmit(note)}>
      <textarea onChange={handleChange} value={note}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NoteForm;
