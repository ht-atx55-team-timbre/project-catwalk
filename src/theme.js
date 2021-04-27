import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F7F8F8',
      dark: '#121626'
    },
    secondary: {
      main: '#F7F7F8',
      dark: '#1D243E'
    }
  },
  text: {
    primary: '#181E34',
    secondary: '#FBE7D5',
  }
})

export default theme