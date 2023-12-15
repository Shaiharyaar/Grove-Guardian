import React from 'react'
import { theme } from 'antd'

const Container = (props) => {
  const { token } = theme.useToken()

  return (
    <div
      {...props}
      style={{
        ...props?.style,
        backgroundColor: token.colorPrimaryBg,
      }}
    ></div>
  )
}

export default Container
