import { Theme } from '@mui/material/styles';

interface Props {
  color?: string;
}

const styles = {
  root: ({ color }: Props) => ({ palette, spacing }: Theme) => ({
    alignItems: 'center',
    bgcolor: color,
    border: '1px solid',
    borderColor: color || '#dbdbdb',
    borderRadius: '20%',
    color: color ? palette.getContrastText(color) : undefined,
    display: 'flex',
    height: spacing(5),
    justifyContent: 'center',
    textAlign: 'center',
    width: spacing(5),
  }),
};

export default styles;
