import { Button, ConfigProvider } from 'antd'
import './App.css'
import AppContainer from './modules/common/Containers/Main'
import { useApp } from './app/hooks/useApp'
import Navigation from './app/route'
import { HomePage } from './app/pages'
function App() {
  const { themeConfig, toggleTheme } = useApp()

  return (
    <>
      {/* Theme Config will be added here */}
      <ConfigProvider theme={themeConfig}>
        <AppContainer>
          {/* <Button type={'primary'} onClick={toggleTheme}>
            {'Click me to switch theme'}
          </Button> */}
          <Navigation />
        </AppContainer>
      </ConfigProvider>
    </>
  )
}

export default App
