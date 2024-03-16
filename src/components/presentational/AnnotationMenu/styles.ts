const styles = {
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  headerIcon: {
    ml: 1,
    verticalAlign: 'text-top',
  },
  root: {
    maxHeight: '50vh',
    overflowY: 'scroll',
  },
  source: {
    bgcolor: 'background.lightGrey',
    my: 2,
    '&:hover': {
      bgcolor: 'background.grey',
    }
  },
  sourceTitle: {
    bgcolor: 'success.main',
    color: 'success.contrastText',
    px: 1,
    py: 0.5,
  },
  sourceLabel: {
    px: 1,
    py: 2,
  },
  sourceLabelIcon: {
    color: 'inherit',
    fontSize: 'inherit',
    mr: 1,
  },
  sourceValueContainer: {
    mt: 1,
  },
  sourceValue: {
    mb: 2,
  },
  sourceValueText: {
    lineHeight: 1,
  },
};

export default styles;
