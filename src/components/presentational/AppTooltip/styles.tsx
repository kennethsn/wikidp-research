import { type Theme } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';


export const styles = ({ theme }: { theme: Theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    color: theme.palette.text.primary,
    fontSize: 11,
    padding: theme.spacing(2),
  },
});

export default styles;
