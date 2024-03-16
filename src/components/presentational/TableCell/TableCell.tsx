import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import styles from './styles';


export interface Props {
  color?: string;
  label: string;
  tooltip: string;
}

const TableCell = ({ color, label, tooltip }: Props) => {
  return (
    <Tooltip title={(
      <Typography variant="caption">
        {tooltip}
      </Typography>
    )}>
      <Box sx={styles.root({ color }) as SxProps}>
        <Typography>
          {label}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export default TableCell;
