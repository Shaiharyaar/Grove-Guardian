import { EditOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, List, Row, Space, Typography, Upload, message } from 'antd'
import React, { useRef, useState } from 'react'
import AddTreeBtn from '../../../modules/AddTreeBtn'
import './style.css'
import noDataSvg from './undraw_empty_re_opql.svg'

const contributions = [
  { id: 11, name: 'Shaiharyaar Ahmad', treesPlanted: 92, location: 'Atlanta, GA', avatar: 'J' },
  { id: 12, name: 'Shaiharyaar Ahmad', treesPlanted: 80, location: 'Nashville, TN', avatar: 'K' },
  { id: 13, name: 'Shaiharyaar Ahmad', treesPlanted: 75, location: 'Charlotte, NC', avatar: 'L' },
  {
    id: 14,
    name: 'Shaiharyaar Ahmad',
    treesPlanted: 65,
    location: 'Virginia Beach, VA',
    avatar: 'M',
  },
  { id: 15, name: 'Shaiharyaar Ahmad', treesPlanted: 59, location: 'Oakland, CA', avatar: 'N' },
  { id: 16, name: 'Shaiharyaar Ahmad', treesPlanted: 102, location: 'Columbus, OH', avatar: 'O' },
]

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const ProfilePage = () => {
  const [myContributions, setMyContributions] = useState(contributions)
  const [firstName, setFirstName] = useState('Shaiharyaar')
  const firstNameRef = useRef('Shaiharyaar')
  const lastNameRef = useRef('Ahmad')
  const bioRef = useRef(
    `I'm Shaiharyaar Ahmad, an avid environmentalist with a deep-rooted passion for tree planting. Armed with a background in Environmental Science, I strive to combat deforestation and contribute to a healthier planet. Let's work together to nurture a greener, more sustainable future.`
  )
  const [lastName, setLastName] = useState('Ahmad')
  const [bio, setBio] = useState(
    `I'm Shaiharyaar Ahmad, an avid environmentalist with a deep-rooted passion for tree planting. Armed with a background in Environmental Science, I strive to combat deforestation and contribute to a healthier planet. Let's work together to nurture a greener, more sustainable future.`
  )
  const { Title, Text } = Typography

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(
    'https://incovade.com/wp-content/themes/cera/assets/images/avatars/user-avatar.png'
  )
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const handleFirstName = (e) => {
    if (firstNameRef.current.length > 20) {
      message.error('First name length cannot exceed 20 characters!')
    } else if (firstNameRef.current?.trim() !== '') {
      setFirstName(firstNameRef.current)
      message.success('First name successfully updated!')
    } else {
      message.error('First name cannot be empty!')
    }
  }
  const handleLastName = () => {
    if (lastNameRef.current.length > 20) {
      message.error('Last name length cannot exceed 20 characters!')
    } else if (lastNameRef.current?.trim() !== '') {
      setLastName(lastNameRef.current)
      message.success('Last name successfully updated!')
    } else {
      message.error('Last name cannot be empty!')
    }
  }

  const handleBio = () => {
    if (bioRef.current.length > 20) {
      message.error('Bio length cannot exceed 300 characters!')
    } else if (bioRef.current?.trim() !== '') {
      setBio(bioRef.current)
      message.success('Bio successfully updated!')
    } else {
      message.error('Bio cannot be empty!')
    }
  }

  return (
    <div className={'profile-container'}>
      <div className={'profile-info-wrapper-bg'} />

      <Row align={'middle'} className={'profile-info-wrapper'}>
        <Col xs={24} md={6} className={'avatar-container'}>
          <div className={'image-container'}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              <div className={'image-wrapper'}>
                <div className={'image-wrapper-overlay'}>
                  <EditOutlined />
                </div>
                <Avatar
                  size={{ xs: 100, sm: 150, md: 200, lg: 200, xl: 250, xxl: 250 }}
                  src={imageUrl}
                />
              </div>
            </Upload>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <div className={'info-container'}>
            <div className={'card'}>
              <Title level={4}>{'First name'}</Title>
              <Title
                editable={{
                  tooltip: 'Edit first name',
                  onChange: (e) => (firstNameRef.current = e),
                  onEnd: handleFirstName,
                  editing:true
                }}
                level={5}
              >
                {firstName}
              </Title>
            </div>
            <div className={'card'}>
              <Title level={4}>{'Last name'}</Title>
              <Title
                editable={{
                  tooltip: 'Edit last name',
                  onChange: (e) => (lastNameRef.current = e),
                  onEnd: handleLastName,
                }}
                level={5}
              >
                {lastName}
              </Title>
            </div>
          </div>
          <div className={'bio-container'}>
            <div className={'card'}>
              <Title level={3}>{'Bio'}</Title>
              <Text
                editable={{
                  tooltip: 'Edit bio name',
                  onChange: (e) => (bioRef.current = e),
                  onEnd: handleBio,
                }}
              >
                {bio}
              </Text>
            </div>
          </div>
        </Col>
      </Row>

      <div className={'contribution-container'}>
        <div
          style={{
            display: 'flex',
            gap: 10,
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <Title level={2}>{'Your Contributions'}</Title>
          <Button type={'link'} onClick={() => setMyContributions([])}>
            {'Clear Contributions'}
          </Button>
        </div>
        {myContributions.length === 0 ? (
          <NoContribution />
        ) : (
          <>
            <List
              className={'contribution-list'}
              itemLayout='horizontal'
              dataSource={myContributions}
              renderItem={(contributor) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} src={imageUrl} />}
                    title={`${firstName} ${lastName}`}
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
          </>
        )}
      </div>
      <AddTreeBtn />
    </div>
  )
}

const NoContribution = () => <img className={'no-contribution-img'} src={noDataSvg} alt='no data' />

export default ProfilePage
