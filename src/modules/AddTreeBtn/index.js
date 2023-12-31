import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import yourImage from '../../images/addTreeBtnIcon.svg';
import './style.css';

const AddTreeBtn = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/add-contribution')
  }

  return (
    <Button
      onClick={handleClick} 
      shape="circle"
      type="primary"
    >
      <img src={yourImage} alt='Icon' style={{ width: '100%', height: '100%', marginTop: -10 }} />
      <p
        style={{
          marginTop: -24,
          fontWeight: 600,
          textAlign: 'center',
          fontSize: 11.5,
        }}
      >
        Add Tree
      </p>
    </Button>
  )
}

export default AddTreeBtn
