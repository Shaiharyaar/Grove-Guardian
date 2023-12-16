import React, { useState, useRef } from 'react';
import { Typography, Steps, Flex, Card, Button, Icon} from 'antd';

import './index.css';
import customIcon1 from './icon1.png';
import customIcon2 from './icon2.png';
import customIcon3 from './icon3.png';
import {HeartOutlined} from '@ant-design/icons';

const { Step } = Steps;

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


const { Meta } = Card;



const StatisticsPage = () => {
  const topSpecies = (
    <div className='center'>
      <Card
      hoverable
      style={{ width: 200, margin: (0, 40)}}
      cover={<img alt="example" src="1.png" />}
      >
      <Meta title="Cypress" description="Top 1" />
      </Card>
      <Card
      hoverable
      style={{ width: 200 , margin: (0, 40)}}
      cover={<img alt="example" src="2.png" />}
      >
      <Meta title="Camphor" description="Top 2" />
      </Card>
      <Card
      hoverable
      style={{ width: 200 , margin: (0, 40)}}
      cover={<img alt="example" src="3.png" />}
      >
      <Meta title="Pine" description="Top 3" />
      </Card>
    </div>
  );
  

  const topCountries = (
    <div className='center'>
      <Card
      hoverable
      style={{ width: 200, margin: (0, 40)}}
      cover={<img alt="example" src="4.png" />}
      >
      <Meta title="Finland" description="Top 1" />
      </Card>
      <Card
      hoverable
      style={{ width: 200 , margin: (0, 40)}}
      cover={<img alt="example" src="5.png" />}
      >
      <Meta title="Poland" description="Top 2" />
      </Card>
      <Card
      hoverable
      style={{ width: 200 , margin: (0, 40)}}
      cover={<img alt="example" src="6.png" />}
      >
      <Meta title="Germany" description="Top 3" />
      </Card>
    </div>
  );
  const description = 'This is a description.';
  
  return (
    <>

    <Header />

    <div className="statistic-page">
      
        <Title level={2} className="title">Statistic</Title>

        <div className='cardVision'>
        <Card style={{width:800,height:239}} bodyStyle={{ padding:0}}>
        <Flex justify="center">
        <img
        alt="avatar"
        src='Handprints.png'
        style={{display:'block',height:239}}
        />
        <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
          <Typography.Title level={2}>
            Congratulations!
          </Typography.Title>
          <Typography.Text>
            You have made 8 Hand Prints.
          </Typography.Text>
          <Typography.Text>
            You Helped Carbon Neutrality!
          </Typography.Text>
          <Button type="primary" href="/add-tree" target="_blank">
          Plant Now
          </Button>
        </Flex>
        </Flex>
        </Card>
        </div>

        <Title level={3} className="title">My Timeline</Title>
        <div className='timeLine'>
        <Steps current={6} initial={4}>
        <Step status='finish' title="May" description="3 Pines" icon={<img src={customIcon1} alt="Custom Icon 1" />} />
        <Step status='finish' title="June" description="1 Cypress" icon={<img src={customIcon2} alt="Custom Icon 1" />} />
        <Step status='process' title="July" description="2 Cypresses" icon={<img src={customIcon3} alt="Custom Icon 1" />} />
        <Step status='wait' title="August" description="Plant more trees!" icon={<HeartOutlined />} />
        
        </Steps>
        </div>

        <Title level={3} className="title">World Ranking</Title>
        <div>
        <Paragraph>
          <Accordion question="Top3 Species" answer={topSpecies} />

          <Accordion question="Top3 Countries" answer={topCountries} />
        </Paragraph>
        </div>
        
        
        
      
    </div>
    </>
  )
}

export default StatisticsPage
