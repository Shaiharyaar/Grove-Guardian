import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Col, Input, Row, Typography, App, theme } from 'antd'
import React, { useState } from 'react'
import Container from '../../../modules/common/Containers/Container'
import './style.css'
const LoginPage = () => {
  const { token } = theme.useToken()
  const { message } = App.useApp()

  const { Title, Text, Link } = Typography

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailStatus, setEmailStatus] = useState(null)
  const [passwordStatus, setPasswordStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onLogin = () => {
    setLoading(true)
    setTimeout(() => {
      if (email === 'contributor@gmail.com' && password === 'asd123') {
        message.success('You have logged in successfully!')
      }
    }, 1000)
    setTimeout(() => {
      if (email === 'contributor@gmail.com' && password === 'asd123') {
        message.success('You have logged in successfully!')
        window.location.href = '/'
      } else {
        message.error('You email or password is incorrect!')
      }
      setLoading(false)
    }, 1500)
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const validatePassword = (password) => {
    if (password.length < 6) {
      return false
    } else if (password.length > 50) {
      return false
    } else if (password.search(/\d/) === -1) {
      return false
    } else if (password.search(/[a-zA-Z]/) === -1) {
      return false
    } else if (password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
      return false
    }
    return true
  }

  const onEmailBlur = (e) => {
    if (!validateEmail(e.target.value)) {
      setEmailStatus('error')
    }
  }

  const onEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (emailStatus && validateEmail(value)) {
      setEmailStatus(null)
    }
  }

  const onPasswordBlur = (e) => {
    if (!validatePassword(e.target.value)) {
      setPasswordStatus('error')
    }
  }

  const onPasswordChange = (e) => {
    const value = e.target.value
    setPassword(value)
    if (passwordStatus && validatePassword(value)) {
      setPasswordStatus(null)
    }
  }

  return (
    <Container className={'login-page-container'}>
      <Row style={{ backgroundColor: `${token.colorPrimaryBg}99` }} className={'login-container'}>
        <Col className={'col'} span={24}>
          <Title level={2}>{'Login'}</Title>
        </Col>
        <Col className={'col'} span={24}>
          <div>
            <Title level={5}>{'Email'}</Title>
            <Input
              status={emailStatus}
              value={email}
              placeholder='Enter your email (example@email.com)'
              onChange={onEmailChange}
              size={'large'}
              onBlur={onEmailBlur}
              style={{ marginBottom: 5 }}
            />
            {emailStatus && <Text type={'danger'}>{'Email is invalid'}</Text>}
          </div>
        </Col>
        <Col className={'col'} span={24}>
          <div>
            <Title level={5}>{'Password'}</Title>
            <Input.Password
              status={passwordStatus}
              value={password}
              size={'large'}
              onChange={onPasswordChange}
              placeholder='Enter your password'
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              style={{ marginBottom: 5 }}
              onBlur={onPasswordBlur}
            />
            {passwordStatus && (
              <Text type={'danger'}>
                {
                  'Password should be 6 characters in length and include at least one number and 1 letter'
                }
              </Text>
            )}
          </div>
        </Col>
        <Col className={'col'} span={24} style={{ marginTop: 5 }}>
          <Checkbox>Remember me</Checkbox>
        </Col>
        <Col className={'col'} span={24} style={{ marginTop: 20, marginBottom: 40 }}>
          <Button type='primary' size={'large'} block loading={loading} onClick={onLogin}>
            {loading ? 'Logging in' : 'Login'}
          </Button>
          <div style={{ marginTop: 10 }}>
            <Text type={'secondary'}>{`Don't have an account? `}</Text>
            <Link>{'Create an account'}</Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
