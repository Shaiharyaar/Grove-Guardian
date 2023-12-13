import React, { useState, useRef } from 'react';
import { Typography, Steps } from 'antd';
import './index.css';
import Header from '../../../modules/common/Header';

const { Step } = Steps;
const Help = () => {
  return (
    <div>
      <Title level={2} className="title">How to Use This Page</Title>
      <div className="how-to-use-page">
        <Steps current={-1} direction="vertical" >
          <Step className="custom-step-title"
            title="Register or Log In"
            description="To start using our tree-planting tracker, please register for an account or log in if you already have one."
          />
          <Step className="custom-step-title"
            title="Add Your Tree Planting Record"
            description="Navigate to the 'Add Tree' tab to input details of the trees you've planted."
          />
          <Step className="custom-step-title"
            title="Review Your Contributions"
            description="Review all your contributions under the 'My Contributions' section."
          />
          <Step className="custom-step-title"
            title="Edit or Delete Records"
            description="If you need to make changes to any entry, click the 'Edit' button next to the record.
            To remove a record, click the 'Delete' button. Please note that this action cannot be undone."
          />
          <Step className="custom-step-title"
            title="Explore the Community"
            description="Head over to the 'Community' tab to see the collective impact of all users on the platform. You can view the number of trees planted and find out who the most active contributors are."
          />
          <Step className="custom-step-title"
            title="Get Support"
            description="Have questions or need assistance? Visit our 'FAQ' section for answers to common questions.
            For further help, reach out to us through the 'Contact Us' link at the bottom of the page."
          />
         </Steps>
       </div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div>
      <Title level={2} className="title">Contact Us</Title>
      <Paragraph>Phone number: +358 123123123<br/>
        Email: GroveGuardian@aalto.fi<br/>
        Aalto University 
        P.O. Box 11000 (Otakaari 1B)<br/>
        FI-00076 AALTO</Paragraph>
    </div>
  );
};

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const panelRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);

    const panel = panelRef.current;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else if (panel) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div>
      <button className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        {question}
      </button>
      <div ref={panelRef} className="panel">
        {answer}
      </div>
    </div>
  );
};

const {Title, Paragraph} = Typography;

const FAQPage = () => {
  return (
    <>
    <Header />
      <div className="faq-page">
        <Title level={2} className="title">Frequently Asked Questions</Title>
        <Paragraph>
          <Accordion question="How do I log the trees I have planted on the website?" answer="To log the trees you have planted, first sign in to your account, then click on the Add Tree button. Fill out the form with details such as the species of tree, quantity, and location. Once submitted, this information will be recorded in your My Contributions section." />
          <Accordion question="How can I view all the trees I have planted?" answer="After signing in, click on the 'My Contributions' tab in the navigation bar to see a list of all the trees you have planted." />
          <Accordion question="Can I add photos for each tree I plant?" answer="Absolutely, we encourage you to add photos for each tree. You can upload one or several photos while adding or editing your tree planting entry." />
          <Accordion question="What should I do if I find an error in my submitted tree planting record?" answer="If you need to correct any details, you can navigate to your 'My Contributions' page, find the respective entry, and click the edit button to make changes." />
        </Paragraph>
        <Help />
        <Contacts />
    </div>
    </>
  )
}

export default FAQPage

