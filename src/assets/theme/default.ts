const defaultTheme = {
  color: {
    primary: '#FF385C',
    secondary: '#00848A',
    border: '#DDDDDD'
  },
  font: {
    size: {
      small: '12px',
      medium: '14px',
      large: '16px'
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 600
    }
  },
  containerWitdh: '1320px',
  shadow: `
    transition: box-shadow 250ms ease;

    &:hover {
      box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    }
  `,
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  }
}

export default defaultTheme
