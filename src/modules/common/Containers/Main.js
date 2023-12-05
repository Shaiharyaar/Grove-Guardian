import React from 'react'
import { theme } from 'antd'
const AppContainer = ({ children }) => {
  const { token } = theme.useToken()
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: token.colorPrimaryBg,
      }}
    >
      {children}
    </div>
  )
}

export default AppContainer
