import { ThemeConfig } from 'antd'
import { colors, darkContainer, darkText, lightContainer, lightText } from './colors'

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary,
    colorFillSecondary: colors.secondary,
    colorPrimaryBg: lightContainer.primary,
    colorText: lightText.primary,
  },
}

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary,
    colorFillSecondary: colors.secondary,
    colorPrimaryBg: darkContainer.primary,
    colorText: darkText.primary,
  },
}
