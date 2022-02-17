import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'

const getStyles = theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: 'lightgreen',
  },

  main: { color: 'blue', fontWeight: 'bold' },
  text: { color: 'green', fontWeight: 'bold' },
})

const HelloWorld = props => {
  const theme = useTheme()

  const classes = getStyles(theme)

  return (
    <Box sx={classes.root}>
      <Box sx={classes.main}>HELLO WORLD</Box>
      <Box sx={classes.text}>THIS SHOULD BE GREEN</Box>
    </Box>
  )
}

export default HelloWorld
