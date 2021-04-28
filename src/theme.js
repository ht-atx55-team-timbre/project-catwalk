import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, red } from '@material-ui/core/colors';

const theme = createMuiTheme ({
  palette: {
    type: 'light',
    primary: {
      light: deepOrange[100],
      main: deepOrange[200],
      dark: deepOrange[300],
      contrastText: "#181E34",
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
      '"Nunito"',
      'Sans-Serif'
    ].join(','),
    // fontSize: 24
    body1: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    body2: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    h1: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    h2: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    h3: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    h4: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    h5: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    h6: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    },
    subtitle1: {
      color: "#181E34",
      fontFamily: [
        '"Nunito"',
        'Sans-Serif'
      ],
      fontSize: 16
    }
  },
});

export default theme;
