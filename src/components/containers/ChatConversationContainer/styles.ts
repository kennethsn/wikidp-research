const styles = {
  conversation: {
    maxHeight: 'calc(100vh - 300px)',
    overflowY: 'scroll',
  },
  divider: {
    my: 3,
  },
  input: {
    '& .MuiOutlinedInput-root': {
      background: 'white',
      borderRadius: '30px',
      p: 3,
    },
    '& .MuiFormHelperText-root': {
      textAlign: 'center'
    }
  },
  inputContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    p: 3,
  },
  paper: {
    p: 3,
    pb: 8,
  },
  root: {
    mb: 3,
    px: 3,
  },
  sampleButton: {
    fontSize: '0.6em',
    opacity: 0.6,
    py: 0.7,
    mx: 1,
    my: 0.5,
  },
  sampleButtonIcon: {
    fontSize: '1.5em !important',
    opacity: 0.6,
  },
  sampleMessages: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  titleIcon: {
    fontSize : 'inherit',
    ml: 1,
    mt: 0.5,
    verticalAlign: 'text-top',
  },
  titleTooltip: {
    '& .MuiTooltip-tooltip': {
      maxWidth: 650,
      p: 0,
    },
  },
};

export default styles;
