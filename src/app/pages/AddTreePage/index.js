
import React, { useState } from 'react';
import { Typography } from 'antd'
import Header from '../../../modules/common/Header';
import StepIndicator from '../../../modules/StepIndicator';
import TreeInfoForm from '../../../modules/TreeInfoForm';
import PhotoUploadForm from '../../../modules/PhotoUploadForm';
import NoteForm from '../../../modules/NoteForm';
import AddTreeBtn from '../../../modules/AddTreeBtn';
import './style.css';


const AddTreePage = () => {
  const { Title, Text } = Typography
  const [currentStep, setCurrentStep] = useState(1);
  const [treeInfo, setTreeInfo] = useState({
    country: '',
    date: '',
    species: '',
    number: 0,
  });
  const [photos, setPhotos] = useState([]);
  const [note, setNote] = useState('');

  const handleTreeInfoSubmit = (info) => {
    setTreeInfo(info);
    setCurrentStep(2);
  };


  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleNoteSubmit = (newNote) => {
    setNote(newNote);

    console.log(treeInfo, photos, note);

  };

  return (
    <div className="contributionSec">
      {/* <Header /> */}
      <div className="container">

        <div className="introContri">
          <Title className="contriTitle">Share Your Tree-planting Record</Title>
          <Text className="contriText">With just a few simple steps, you can share the joy of planting trees with the entire world and document your contributions to environmental sustainability. Share the delight of tree-planting and record your commitment to a sustainable future.</Text>
        </div>
        <div className="contriForm">
          <StepIndicator currentStep={currentStep} />
          {currentStep === 1 && <TreeInfoForm onSubmit={handleTreeInfoSubmit} />}
          {currentStep === 2 && <PhotoUploadForm onPhotoUploadComplete={handleNextStep} />}
          {currentStep === 3 && <NoteForm onSubmit={handleNoteSubmit} />}
        </div>
      </div>
      <AddTreeBtn />
    </div>
  );
};



export default AddTreePage
