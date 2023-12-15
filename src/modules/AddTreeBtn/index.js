import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate 钩子
import yourImage from '../../images/addTreeBtnIcon.svg';

const AddTreeBtn = () => {
  const navigate = useNavigate(); // 使用 useNavigate 钩子

  const handleClick = () => {
    navigate('/add-tree'); // 导航到 /add-tree 路径
  };

  return (
    <Button
      onClick={handleClick} // 添加点击事件处理函数
      shape="circle"
      type="primary"
      style={{
        position: 'fixed',
        right: 60,
        bottom: 60,
        width: 90,
        height: 90,
      }}
    >
      <img src={yourImage} alt="Icon" style={{ width: '100%', height: '100%', marginTop: -10 }} />
      <p style={{
        marginTop: -24,
        fontWeight: 600,
        textAlign: 'center',
        fontSize: 11.5,
      }}>
        Add Tree
      </p>
    </Button>
  );
};

export default AddTreeBtn;