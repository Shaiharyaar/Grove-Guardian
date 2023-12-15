import { theme } from '../../modules/infrastructure'
import { useMemo, useState } from 'react'

export const useApp = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const toggleTheme = () => setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  const themeConfig = useMemo(
    () => (currentTheme === 'light' ? theme.lightTheme : theme.darkTheme),
    [currentTheme]
  )
  return {
    themeConfig,
    toggleTheme,
  }
}
