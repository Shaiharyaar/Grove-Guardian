// import { ThemeConfig } from 'antd'
import { colors, darkContainer, darkText, lightContainer, lightText } from './colors'

export const lightTheme = {
  token: {
    colorPrimary: colors.primary,
    colorFillSecondary: colors.secondary,
    colorPrimaryBg: lightContainer.primary,
    colorText: lightText.primary,
    fontFamily: "Inter"
  },
}

export const darkTheme = {
  token: {
    colorPrimary: colors.primary,
    colorFillSecondary: colors.secondary,
    colorPrimaryBg: darkContainer.primary,
    colorText: darkText.primary,
    fontFamily: "Inter"
  },
}
