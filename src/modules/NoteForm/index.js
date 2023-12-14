import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState('');

  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const { TextArea } = Input;

  return (
    <>
      <div className="stepImg stepImg3"></div>
      <h2 className="stepTitle">Make Some Notes!</h2>
      <p className="stepIntro">Feel free to share your enriching tree-planting experience by providing a brief and thoughtful description or record of your reflections on the process.</p>
      <p className="stepIntro noteLabel">Comment and Note:</p>
      <Form.Item label="">
          <TextArea  placeholder="Make some notes or comments" rows={6} />
          <div className="noteBtnSec">
            <Button className="selectionSubmit" type="primary" htmlType="submit">
              Submit!
            </Button>
          </div>
        </Form.Item>
        
    </>
  );
};

export default NoteForm;
