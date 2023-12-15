import React, { useState } from 'react';
import { Typography, List, Card, Avatar, Space, Pagination } from 'antd';
import { UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Header from '../../../modules/common/Header'
import './index.css';

const contributors = [
  {
    id: 1,
    name: 'John Doe',
    treesPlanted: 150,
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Jane Smith',
    treesPlanted: 200,
    location: 'Portland, OR'
  },
  {
    id: 3,
    name: 'Carolyn White',
    treesPlanted: 75,
    location: 'Portland, OR',
    avatar: 'C'
  },
  {
    id: 4,
    name: 'David Jones',
    treesPlanted: 200,
    location: 'San Francisco, CA',
    avatar: 'D'
  },
  {
    id: 5,
    name: 'Evelyn Lee',
    treesPlanted: 60,
    location: 'Austin, TX',
    avatar: 'E'
  },
  {
    id: 6,
    name: 'Frank Wilson',
    treesPlanted: 140,
    location: 'Denver, CO',
    avatar: 'F'
  },
  {
    id: 7,
    name: 'Grace Liu',
    treesPlanted: 190,
    location: 'Phoenix, AZ',
    avatar: 'G'
  },
  {
    id: 8,
    name: 'Henry Miller',
    treesPlanted: 85,
    location: 'Miami, FL',
    avatar: 'H'
  },
  {
    id: 9,
    name: 'Alice Brown',
    treesPlanted: 120,
    location: 'Vancouver, BC',
    avatar: 'A'
  },
  {
    id: 10,
    name: 'Bob Smith',
    treesPlanted: 98,
    location: 'Seattle, WA',
    avatar: 'B'
  },
  { id: 11, name: 'Julia King', treesPlanted: 92, location: 'Atlanta, GA', avatar: 'J' },
  { id: 12, name: 'Karl Johnson', treesPlanted: 80, location: 'Nashville, TN', avatar: 'K' },
  { id: 13, name: 'Laura Adams', treesPlanted: 75, location: 'Charlotte, NC', avatar: 'L' },
  { id: 14, name: 'Michael Brown', treesPlanted: 65, location: 'Virginia Beach, VA', avatar: 'M' },
  { id: 15, name: 'Nancy Green', treesPlanted: 59, location: 'Oakland, CA', avatar: 'N' },
  { id: 16, name: 'Oliver Martinez', treesPlanted: 102, location: 'Columbus, OH', avatar: 'O' },
  { id: 17, name: 'Patricia Gonzalez', treesPlanted: 78, location: 'Fort Worth, TX', avatar: 'P' },
  { id: 18, name: 'Quincy Alexander', treesPlanted: 89, location: 'Indianapolis, IN', avatar: 'Q' },
  { id: 19, name: 'Rachel Jackson', treesPlanted: 94, location: 'San Jose, CA', avatar: 'R' },
  { id: 20, name: 'Steven Hall', treesPlanted: 120, location: 'Austin, TX', avatar: 'S' },
  { id: 21, name: 'Tina Morgan', treesPlanted: 110, location: 'Jacksonville, FL', avatar: 'T' },
  { id: 22, name: 'Umar Khan', treesPlanted: 115, location: 'San Francisco, CA', avatar: 'U' },
  { id: 23, name: 'Victoria Ellis', treesPlanted: 105, location: 'New York, NY', avatar: 'V' },
  { id: 24, name: 'Walter James', treesPlanted: 95, location: 'Los Angeles, CA', avatar: 'W' },
  { id: 25, name: 'Xena Clark', treesPlanted: 88, location: 'Chicago, IL', avatar: 'X' },
  { id: 26, name: 'Yusuf Ahmed', treesPlanted: 76, location: 'Houston, TX', avatar: 'Y' },
  { id: 27, name: 'Zoe Carter', treesPlanted: 99, location: 'Philadelphia, PA', avatar: 'Z' },
  { id: 28, name: 'Alan Brewer', treesPlanted: 70, location: 'San Antonio, TX', avatar: 'A' },
  { id: 29, name: 'Betty Cooper', treesPlanted: 85, location: 'Phoenix, AZ', avatar: 'B' },
  { id: 30, name: 'Charlie Daniels', treesPlanted: 93, location: 'Las Vegas, NV', avatar: 'C' }
];

const {Title, Paragraph} = Typography;
const pageSize = 10; 
const AddContributionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentContributors, setCurrentContributors] = useState(contributors.slice(0, pageSize));


  const handlePageChange = page => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentContributors(contributors.slice(startIndex, endIndex));
  };
  return (
    <>
    <Header/>
    <div className="contribution-page">
      <Title level={1} className='title'>Welcome to GroveGuardian!</Title>
      <Title level={4} className='paragraph'>Let's see who has already contributed to our community.</Title>
      <Card title="Contributors in GroveGuardian">
        <List
          itemLayout="horizontal"
          dataSource={currentContributors}
          renderItem={contributor => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={contributor.name}
                description={
                  <Space>
                    <span>{`Trees planted: ${contributor.treesPlanted}`}</span>
                    <EnvironmentOutlined />
                    <span>{contributor.location}</span>
                  </Space>
                }
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
    </div>
    </>
  );
};

export default AddContributionPage;
