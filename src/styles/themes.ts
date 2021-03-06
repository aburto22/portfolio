import type { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  colors: {
    background: 'white',
    imageBackground: 'white',
    backgroundGray: '#fbfbfb',
    font: '#3a3a3a',
    spinnerLight: 'white',
    spinnerDark: '#3a3a3a',
    buttonFont: 'white',
    filterButtonBackground: 'white',
    filterButtonBackgroundSelected: '#3a3a3a',
    filterButtonFont: '#3a3a3a',
    filterButtonFontSelected: 'white',
    techIconBackground: 'white',
    tooltipBackground: 'rgb(229, 231, 235)',
    tooltipFont: '#3a3a3a',
    lightGray: 'rgb(229, 231, 235)',
    mediumGray: '#b4b4b4',
    blueLink: '#006baa',
    blueLinkHover: '#4aa6f3',
    green: 'rgb(16, 185, 129)',
    red: 'rgb(239, 68, 68)',
  },
  gradients: {
    blue: 'linear-gradient(to bottom right, #006baa, #59a7de)',
    blueHover: 'linear-gradient(to top left, #006baa, #59a7de)',
    gray: 'linear-gradient(to bottom right, #374151, #6b7280)',
    grayHover: 'linear-gradient(to top left, #374151, #6b7280)',
  },
  boxShadow: {
    form: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    button: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
};

export const dark: DefaultTheme = {
  colors: {
    background: '#1a1a1a',
    imageBackground: 'white',
    backgroundGray: '#232323',
    font: 'white',
    spinnerLight: 'white',
    spinnerDark: '#3a3a3a',
    buttonFont: 'white',
    filterButtonBackground: 'white',
    filterButtonBackgroundSelected: '#3a3a3a',
    filterButtonFont: '#3a3a3a',
    filterButtonFontSelected: 'white',
    techIconBackground: 'white',
    tooltipBackground: 'rgb(229, 231, 235)',
    tooltipFont: '#3a3a3a',
    lightGray: '#3a3a3a',
    mediumGray: '#b4b4b4',
    blueLink: '#5fb9ee',
    blueLinkHover: '#4aa6f3',
    green: 'rgb(16, 185, 129)',
    red: 'rgb(239, 68, 68)',
  },
  gradients: {
    blue: 'linear-gradient(to bottom right, #006baa, #59a7de)',
    blueHover: 'linear-gradient(to top left, #006baa, #59a7de)',
    gray: 'linear-gradient(to bottom right, #374151, #6b7280)',
    grayHover: 'linear-gradient(to top left, #374151, #6b7280)',
  },
  boxShadow: {
    form: '0 1px 3px 0 rgba(256, 256, 256, 0.1), 0 1px 2px 0 rgba(256, 256, 256, 0.06)',
    button: '0 4px 6px -1px rgba(256, 256, 256, 0.1), 0 2px 4px -1px rgba(256, 256, 256, 0.06)',
  },
};
