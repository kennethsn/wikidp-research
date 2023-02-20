import { makeStyles } from '@material-ui/core/styles';

interface Props {
  color?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: ({ color }: Props) => color,
    border: '1px solid',
    borderColor: ({ color }: Props) => color || '#dbdbdb',
    borderRadius: '20%',
    color: ({ color }: Props) => color ? theme.palette.getContrastText(color) : undefined,
    display: 'flex',
    justifyContent: 'center',
    height: theme.spacing(5),
    textAlign: 'center',
    width: theme.spacing(5),
  },
}));

export default useStyles;
