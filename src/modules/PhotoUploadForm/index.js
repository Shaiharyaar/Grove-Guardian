import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
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

const PhotoUploadForm = ({ onPhotoUploadComplete }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    // 結合新選擇的文件和已有的文件
    if (files.length + e.target.files.length > 8) {
      alert("You can upload a maximum of 8 photos.");
      return;
    }
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const handleRemove = (index) => {
    // 創建一個新數組並刪除指定索引的文件
    setFiles(files.filter((_, i) => i !== index));
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <div className="stepImg stepImg2"></div>
      <h2 className="stepTitle">Upload Planting Photos</h2>
      <p className="stepIntro">You have the option to upload photos capturing the tree planting process, serving as a visual record and enabling you to share this meaningful experience with others.</p>
      <div className="contriFormContent">
      <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile} className="uploadLabel">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
        <Button className="selectionSubmit" type="primary" htmlType="submit"  onClick={onPhotoUploadComplete}>
          Next Step
        </Button>
      </Form.Item>
        </div>
        {/* <button className="selectionSubmit" type="button" onClick={onPhotoUploadComplete}>Next Step</button> */}
        
     
    </>
  );
};

export default PhotoUploadForm;
