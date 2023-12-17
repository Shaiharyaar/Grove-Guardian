import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Card, List, Pagination, Space, Typography, Image } from 'antd'
import React, { useState } from 'react'
import './index.css'
import AddTreeBtn from '../../../modules/AddTreeBtn'
import image1 from '../../../../src/images/1.jpg';
import image2 from '../../../../src/images/2.jpg';
import image3 from '../../../../src/images/3.jpg';
import image4 from '../../../../src/images/4.jpg';
import image5 from '../../../../src/images/5.jpg';
import image6 from '../../../../src/images/6.jpg';
import image7 from '../../../../src/images/7.jpg';
import image8 from '../../../../src/images/8.jpg';
import image9 from '../../../../src/images/9.jpg';
import image10 from '../../../../src/images/10.jpg';
import image11 from '../../../../src/images/11.jpg';
import image12 from '../../../../src/images/12.jpg';
import image13 from '../../../../src/images/13.jpg';
import image14 from '../../../../src/images/14.jpg';
import image15 from '../../../../src/images/15.jpg';
import image16 from '../../../../src/images/16.jpg';
import image17 from '../../../../src/images/17.jpg';
import image18 from '../../../../src/images/18.jpg';
import image19 from '../../../../src/images/19.jpg';
import image20 from '../../../../src/images/20.jpg';
import image21 from '../../../../src/images/21.jpg';

const contributors = [
  {
    id: 1,
    name: 'John Doe',
    treesPlanted: 150,
    avatar: image1,
    location: 'San Francisco, CA',
    bio: 'I am an environmental activist who has focused on urban tree planting to create green spaces within the city.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    treesPlanted: 200,
    avatar: image2,
    location: 'Portland, OR',
    bio: 'I have spearheaded various community-driven afforestation projects to combat climate change.'
  },
  {
    id: 3,
    name: 'Carolyn White',
    treesPlanted: 75,
    location: 'Portland, OR',
    avatar: image3,
    bio: 'Me, a retired school teacher, dedicates my free time to educating young children about the importance of trees.'
  },
  {
    id: 4,
    name: 'David Jones',
    treesPlanted: 200,
    location: 'San Francisco, CA',
    avatar: image4,
    bio: 'My engineering background brings a technical edge to my tree-planting strategies, optimizing growth in urban settings.'
  },
  {
    id: 5,
    name: 'Evelyn Lee',
    treesPlanted: 60,
    location: 'Austin, TX',
    avatar: image5,
    bio: 'Me, with my love for native wildflowers and trees, has transformed numerous backyards into oases for local wildlife.'
  },
  {
    id: 6,
    name: 'Frank Wilson',
    treesPlanted: 140,
    location: 'Denver, CO',
    avatar: image6,
    bio: 'I am a climber and naturalist who advocates for the restoration of indigenous forests in the mountain regions.'
  },
  {
    id: 7,
    name: 'Grace Liu',
    treesPlanted: 190,
    location: 'Phoenix, AZ',
    avatar: image7,
    bio: 'I have a deep passion for desert ecosystems and works to protect and expand the urban canopy in arid environments.'
  },
  {
    id: 8,
    name: 'Henry Miller',
    treesPlanted: 85,
    location: 'Miami, FL',
    avatar: image8,
    bio: "My efforts in coastal reforestation have played a crucial role in preserving the natural beauty of beachfronts."
  },
  {
    id: 9,
    name: 'Alice Brown',
    treesPlanted: 120,
    location: 'Vancouver, BC',
    avatar: image9,
    bio: 'I am an urban planner who integrates sustainable practices and green spaces into city development plans.'
  },
  {
    id: 10,
    name: 'Bob Smith',
    treesPlanted: 98,
    location: 'Seattle, WA',
    avatar: image10,
    bio: 'I am known for my weekend tree-planting workshops, where I teaches communities about the joy and benefits of planting trees.'
  },
  {
    id: 11,
    name: 'Julia King',
    treesPlanted: 92,
    location: 'Atlanta, GA',
    avatar: image11,
    bio: 'I am a botanist who has dedicated my life to studying tree species and their impact on local ecosystems.'
  },
  {
    id: 12,
    name: 'Karl Johnson',
    treesPlanted: 80,
    location: 'Nashville, TN',
    avatar: image12,
    bio: 'I am known for my volunteer work with community gardens, helping spread the joy of tree planting.'
  },
  {
    id: 13,
    name: 'Laura Adams',
    treesPlanted: 75,
    location: 'Charlotte, NC',
    avatar: image13,
    bio: 'I work with local schools to develop educational programs about deforestation and reforestation.'
  },
  {
    id: 14,
    name: 'Michael Brown',
    treesPlanted: 65,
    location: 'Virginia Beach, VA',
    avatar: image14,
    bio: 'An advocate for coastal reforestation, I aims to protect shorelines through strategic tree planting.'
  },
  {
    id: 15,
    name: 'Nancy Green',
    treesPlanted: 59,
    location: 'Oakland, CA',
    avatar: image15,
    bio: 'My initiatives in urban forestry have been pivotal in transforming city spaces into green havens.'
  },
  {
    id: 16,
    name: 'Oliver Martinez',
    treesPlanted: 102,
    location: 'Columbus, OH',
    avatar: image16,
    bio: 'My non-profit organization focuses on planting trees to revitalize neglected neighborhoods.'
  },
  {
    id: 17,
    name: 'Patricia Gonzalez',
    treesPlanted: 78,
    location: 'Fort Worth, TX',
    avatar: image17,
    bio: 'As a landscape artist, I integrates tree planting into my designs, promoting both beauty and sustainability.'
  },
  {
    id: 18,
    name: 'Quincy Alexander',
    treesPlanted: 89,
    location: 'Indianapolis, IN',
    avatar: image18,
    bio: 'My research on tree-root systems has led to improved planting techniques in urban areas.'
  },
  {
    id: 19,
    name: 'Rachel Jackson',
    treesPlanted: 94,
    location: 'San Jose, CA',
    avatar: image19,
    bio: 'My passion lies in restoring native forests and I actively participates in regional reforestation efforts.'
  },
  {
    id: 20,
    name: 'Steven Hall',
    treesPlanted: 120,
    location: 'Austin, TX',
    avatar: image20,
    bio: 'I champions the use of technology in monitoring tree growth and health, ensuring thriving green spaces.'
  },
  {
    id: 21,
    name: 'Tina Morgan',
    treesPlanted: 110,
    location: 'Jacksonville, FL',
    avatar: image21,
    bio: 'With a focus on fruit trees, I has helped supply local food banks with fresh produce from community orchards.'
  },
  {
    id: 22,
    name: 'Umar Khan',
    treesPlanted: 115,
    location: 'San Francisco, CA',
    avatar: image1,
    bio: 'I am actively involved in reforestation projects that aim to offset carbon emissions in the tech industry.'
  },
  {
    id: 23,
    name: 'Victoria Ellis',
    treesPlanted: 105,
    location: 'New York, NY',
    avatar: image2,
    bio: 'A green infrastructure consultant, I advises on integrating tree canopies into city planning.'
  },
  {
    id: 24,
    name: 'Walter James',
    treesPlanted: 95,
    location: 'Los Angeles, CA',
    avatar: image3,
    bio: "My environmental art installations often include live trees to raise awareness about deforestation."
  },
  {
    id: 25,
    name: 'Xena Clark',
    treesPlanted: 88,
    location: 'Chicago, IL',
    avatar: image4,
    bio: 'I organizes community planting days, bringing people together to beautify their neighborhoods.'
  },
  {
    id: 26,
    name: 'Yusuf Ahmed',
    treesPlanted: 76,
    location: 'Houston, TX',
    avatar: image5,
    bio: 'My expertise in tropical trees has contributed greatly to the diversification of urban forestry projects.'
  },
  {
    id: 27,
    name: 'Zoe Carter',
    treesPlanted: 99,
    location: 'Philadelphia, PA',
    avatar: image6,
    bio: 'My commitment to planting trees in parks has earned me numerous awards from the city council.'
  },
  {
    id: 28,
    name: 'Alan Brewer',
    treesPlanted: 70,
    location: 'San Antonio, TX',
    avatar: image7,
    bio: 'My work with historical tree preservation has helped protect some of the oldest trees in my state.'
  },
  {
    id: 29,
    name: 'Betty Cooper',
    treesPlanted: 85,
    location: 'Phoenix, AZ',
    avatar: image8,
    bio: 'My focus on xeriscaping has revolutionized how trees are integrated into arid climates.'
  },
  {
    id: 30,
    name: 'Charlie Daniels',
    treesPlanted: 93,
    location: 'Las Vegas, NV',
    avatar: image9,
    bio: 'I am a vocal advocate for using native species to improve urban air quality.'
  }
];

const { Title } = Typography
const pageSize = 10
const ContributionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentContributors, setCurrentContributors] = useState(contributors.slice(0, pageSize))

  const handlePageChange = (page) => {
    setCurrentPage(page)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    setCurrentContributors(contributors.slice(startIndex, endIndex))
  }
  return (
    <div className='contribution-page'>
      <Title level={1} className='title'>
        Welcome to GroveGuardian!
      </Title>
      <Title level={4} className='paragraph'>
        Let's see who has already contributed to our community.
      </Title>
      <Card title='Contributors in GroveGuardian'>
        <List
          itemLayout='horizontal'
          dataSource={currentContributors}
          renderItem={(contributor) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                //avatar={<Avatar src={contributor.avatar}/>}
                title={contributor.name}
                description={
                  <>
                  <Space>
                    <span>{`Trees planted: ${contributor.treesPlanted}`}</span>
                    <EnvironmentOutlined />
                    <span>{contributor.location}</span>
                  </Space>
                  <div>{contributor.bio}</div>
                  </>
                }
              />
              <Image
                 width={90}
                 height={90}
                 src={contributor.avatar}
                 style={{ marginLeft: 'auto' }} 
                 alt="Plant preview"
              />
            </List.Item>
          )}
        />
        <Pagination
          className='pagination'
          current={currentPage}
          onChange={handlePageChange}
          pageSize={pageSize}
          total={contributors.length}
        />
      </Card>
      <AddTreeBtn />
    </div>
  )
}

export default ContributionsPage
