
/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors"


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary': '#C00100',
        'secondary': '#006E21',
        'tertiary': '#705C2E',
        'error': '#BA1A1A',
        'primary-container': '#FFDAD4',
        'on-primary-container': '#410000',
        'secondary-container': '#7DFD86',
        'on-secondary-container': '#002105',
        'tertiary-container': '#FBDFA6',
        'on-tertiary-container': '#251A00',
        'error-container': '#FFDAD6',
        'on-error-container': '#410002',
        'primary-fixed': '#FFDAD4',
        'primary-fixed-dim': '#FFB4A8',
        'on-primary-fixed': '#930100',
        'secondary-fixed': '#7DFD86',
        'secondary-fixed-dim': '#60E06D',
        'on-secondary-fixed': '#005317',
        'tertiary-fixed': '#FBDFA6',
        'tertiary-fixed-dim': '#DEC48C',
        'on-tertiary-fixed': '#564419',
        'surface-dim': '#E4D7D5',
        'surface': '#FFF8F6',
        'surface-bright': '#FFF8F6',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#FEF1EE',
        'surface-container': '#F8EBE9',
        'surface-container-high': '#F3E5E3',
        'surface-container-highest': '#EDE0DD',
        'on-surface': '#201A19',
        'on-surface-variant': '#534341',
        'outline': '#857370',
        'outline-variant': '#D8C2BE',
        'inverse-surface': '#362F2E',
        'inverse-on-surface': '#FBEEEC',
        'inverse-primary': '#FFB4A8',
        'scrim': '#000000',
        'light': '#FEFAFF',
      },
      fontSize: {
        'body-small': '12px',
        'body-medium': '14px',
        'body-large': '16px',
        'label-small': '11px',
        'label-medium': '12px',
        'label-large': '14px',
        'title-small': '14px',
        'title-medium': '16px',
        'title-large': '22px',
        'headline-small': '24px',
        'headline-medium': '28px',
        'headline-large': '32px',
        'display-small': '36px',
        'display-medium': '45px',
        'display-large': '57px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '40': '40px',
        '42': '42px',
        '20': '20px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    createThemes({
      light: {
        background: "#FFFBFF",
        primary: {
          color: "#C00100",
          on: "#FFFFFF",
          container: "#FFDAD4",
          onContainer: "#410000",
          fixed: "#FFDAD4",
          fixedDim: "#FFB4A8",
          onFixed: "#410000",
          onFixedVariant: "#930100"
        },
        secondary: {
          color: "#006E21",
          on: "#FFFFFF",
          container: "#7DFD86",
          onContainer: "#002105",
          fixed: "#002105",
          fixedDim: "#60E06D",
          onFixed: "#002105",
          onFixedVariant: "#005317"
        },
        tertiary: {
          color: "#705C2E",
          on: "#FFFFFF",
          container: "#FBDFA6",
          onContainer: "#251A00",
          fixed: "#FBDFA6",
          fixedDim: "#DEC48C",
          onFixed: "#251A00",
          onFixedVariant: "#564419"
        },
        error: {
          color: "#BA1A1A",
          on: "#FFFFFF",
          container: "#FFDAD6",
          onContainer: "#410002",
        },
        surface: {
          dim: "#E4D7D5",
          color: "#FFF8F6",
          bright: "#FFF8F6",
          container: {
            lowest: "#FFFFFF",
            low: "#FEF1EE",
            color: "#F8EBE9",
            hight: "#F3E5E3",
            highest: "#EDE0DD"
          },
          on: "#201A19",
          onVariant: "#534341",
          inverse: {
            color: "#362F2E",
            onSurface: "#FBEEEC",
            primary: "#FFB4A8"
          }
        },
        outline: {
          color: "#857370",
          variant: "#D8C2BE"
        },
        scrim: "#000000",
        shadow: "#000000"
      },
      dark: {
        primary: {
          color: "#FFB4A8",
          on: "#690100",
          container: "#930100",
          onContainer: "#FFDAD4",
          fixed: "#FFDAD4",
          fixedDim: "#FFB4A8",
          onFixed: "#410000",
          onFixedVariant: "#930100"
        },
        secondary: {
          color: "#60E06D",
          on: "#00390D",
          container: "#005317",
          onContainer: "#7DFD86",
          fixed: "#002105",
          fixedDim: "#60E06D",
          onFixed: "#002105",
          onFixedVariant: "#005317"
        },
        tertiary: {
          color: "#DEC48C",
          on: "#3E2E04",
          container: "#564419",
          onContainer: "#FBDFA6",
          fixed: "#FBDFA6",
          fixedDim: "#DEC48C",
          onFixed: "#251A00",
          onFixedVariant: "#564419"
        },
        error: {
          color: "#FFB4AB",
          on: "#690005",
          container: "#93000A",
          onContainer: "#FFDAD6",
        },
        surface: {
          dim: "#181211",
          color: "#181211",
          bright: "#3F3736",
          container: {
            lowest: "#120D0C",
            low: "#201A19",
            color: "#251E1D",
            hight: "#2F2827",
            highest: "#3B3332"
          },
          on: "#D0C4C2",
          onVariant: "#D8C2BE",
          inverse: {
            color: "#EDE0DD",
            onSurface: "#201A19",
            primary: "#C00100"
          }
        },
        outline: {
          color: "#A08C89",
          variant: "#534341"
        },
        scrim: "#000000",
        shadow: "#000000"
      }
    })
  ],
}

