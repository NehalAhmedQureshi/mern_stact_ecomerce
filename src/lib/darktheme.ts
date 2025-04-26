import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const darkBaseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: '#000',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
      contrastText: '#000',
    },
    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
      disabled: '#757575',
    },
  },

  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    caption: {
      fontSize: '0.75rem',
      color: '#bdbdbd',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
        containedPrimary: {
          backgroundColor: '#90caf9',
          color: '#000',
          '&:hover': {
            backgroundColor: '#64b5f6',
          },
        },
        outlinedPrimary: {
          borderColor: '#90caf9',
          color: '#90caf9',
          '&:hover': {
            borderColor: '#64b5f6',
            backgroundColor: 'rgba(144, 202, 249, 0.08)',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#1e1e1e',
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },

  shape: {
    borderRadius: 8,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  spacing: 8,
});

const darkTheme = responsiveFontSizes(darkBaseTheme);

export default darkTheme;
