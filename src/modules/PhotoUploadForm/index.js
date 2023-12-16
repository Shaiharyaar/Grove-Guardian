import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Upload } from 'antd';

const PhotoUploadForm = ({ onPhotoUploadComplete }) => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = (file) => {
    if (fileList.length >= 8) {
      alert("You can upload a maximum of 8 photos.");
      return false;
    }
    return true;
  };

  const onFinish = () => {
    onPhotoUploadComplete(fileList); // Assume this function handles the photo upload process
  };

  return (
    <>
      <div className="stepImg stepImg2"></div>
      <h2 className="stepTitle">Upload Planting Photos</h2>
      <p className="stepIntro">You can upload photos capturing the tree planting process, serving as a visual record and enabling you to share this meaningful experience with others.</p>

      <Form onFinish={onFinish} className="contriFormContent">
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={({ fileList }) => fileList}
          rules={[
            { 
              required: true, 
              message: 'Please upload at least one photo!',
              type: 'array',
              min: 1,
            }
          ]}
        >
          <Upload
            action="/upload.do"
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={beforeUpload}
          >
            {fileList.length < 8 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
        <Button className="selectionSubmit" type="primary" htmlType="submit">
          Next Step
        </Button>
      </Form.Item>
      </Form>
    </>
  );
};

export default PhotoUploadForm;