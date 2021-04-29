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
      light: red[400],
      main: red[500],
      dark: red[600],
    },
    background: {
      default: '#F7F8F8',
    }
  },
  props: {
    MuiGrid: {
      spacing: 2
    }
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        height: 10,
        width: '100%',
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: 'lightgray',
      },
      barColorPrimary: {
        borderRadius: 5,
        backgroundColor: '#46A46C',
      }
    },
    MuiPaper: {
      root: {
        flexGrow: 1,
        padding: '16px',
        textAlign: 'left',
      },
    },
    MuiSlider: {
      root: {
        height: 10,
      },
      track: {
        height: 10,
        borderRadius:0,
      },
      markActive: {
        opacity: 1,
      },
      mark: {
        backgroundColor: '#FFFFFF',
        height: 10,
        width: 4,
        borderRadius:0,
      },
      rail: {
        height: 10,
        color: '#4E5255',
        borderRadius:0,
      },
      thumb: {
        backgroundColor: '#fff',
        borderRadius: '0',
        borderBottom: '10px solid #4E5255',
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderTop: '1px solid transparent',
        transform: 'rotate(180deg)',
        "&$disabled": {
          "marginTop": "-11px"
        }
      },
    }
  }
});

export default theme;
