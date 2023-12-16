import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate 钩子

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState('');
  const navigate = useNavigate(); // 使用 useNavigate 钩子
  const { TextArea } = Input;

  const onFinish = () => {
    // 这里可以添加逻辑处理 note 数据
    onSubmit(note); // 假设 onSubmit 函数处理 note 数据

    // 显示成功消息
    message.success('Congrats! Your contribution was added successfully! You will be redirected to the Contributions page in 5 seconds.', 5);

    // 5秒后跳转到 contributions 页面
    setTimeout(() => {
      navigate('../contributions');
    }, 5000);
  };

  return (
    <>
      <div className="stepImg stepImg3"></div>
      <h2 className="stepTitle">Make Some Notes!</h2>
      <p className="stepIntro">Feel free to share your enriching tree-planting experience by providing a brief and thoughtful description or record of your reflections on the process.</p>
      <Form onFinish={onFinish}>
        <Form.Item>
          <TextArea
            placeholder="Make some notes or comments"
            rows={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <div className="noteBtnSec">
            <Button className="selectionSubmit" type="primary" htmlType="submit">
              Submit!
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default NoteForm;