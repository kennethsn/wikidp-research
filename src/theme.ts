import '@fontsource/roboto/100.css';
import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/900-italic.css';
import { blue, green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface TypeBackground {
    grey: string;
    lightGrey: string;
  }

  interface PletteOptions {
    palette: {
      background: {
        grey: string;
        lightGrey: string;
      };
    }
  }

  interface TypographyVariants {
    finePrint: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    finePrint?: React.CSSProperties;
  }

}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    finePrint: true;
  }
}

const theme = createTheme({
  palette: {
    background: {
      grey: grey[100],
      lightGrey: grey[50],
    },
    primary: {
      main: blue[600],
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: grey[800],
    },
  },
  typography: {
    finePrint: {
      color: grey[600],
      fontStyle: 'italic',
      fontSize: 10,
      fontWeight: 400,
    },
    overline: {
      lineHeight: 1,
    }
  },
});

export default theme;
