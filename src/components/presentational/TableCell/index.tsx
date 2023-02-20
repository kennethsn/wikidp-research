import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import useStyles from './useStyles';

export interface Props {
  color?: string;
  label: string;
  tooltip: string;
}

const TableCell = ({ color, label, tooltip }: Props) => {
  const classes = useStyles({ color });
  return (
    <Tooltip title={(
      <Typography variant="caption">
        {tooltip}
      </Typography>
    )}>
      <div className={classes.root}>
        <Typography>
          {label}
        </Typography>
      </div>
    </Tooltip>
  );
};

export default TableCell;
