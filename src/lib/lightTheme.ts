import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#d05ce3',
      dark: '#6a0080',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
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
      color: '#757575',
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
          backgroundColor: '#1E2753',
          '&:hover': {
            backgroundColor: '#1E2770',
          },
        },
        outlinedPrimary: {
          borderColor: '#1976d2',
          color: '#1976d2',
          '&:hover': {
            borderColor: '#115293',
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
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

  spacing: 8, // 1 spacing unit = 8px
});

const lightTheme = responsiveFontSizes(baseTheme);

export default lightTheme;
