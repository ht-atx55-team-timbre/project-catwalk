import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, red } from '@material-ui/core/colors';

const theme = createMuiTheme ({
  palette: {
    primary: {
      light: deepOrange[100],
      main: deepOrange[200],
      dark: deepOrange[300],
    },
    secondary: {
      light: red[700],
      main: red[800],
      dark: red[900],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Libre Baskerville',
      'Serif',
      'Nunito',
      'Sans-Serif'
    ].join(','),
    // fontSize: 24
  },
});

export default theme;