import Typography from '@material-ui/core/Typography';
import React from 'react';

import useStyles from './useStyles';

interface Props {
  label: string;
}

const Header = ({ label }: Props) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Typography
          className={classes.title}
          variant="h4"
        >
          {label}
        </Typography>
      </div>
    </section>
  );
};

export default Header;
