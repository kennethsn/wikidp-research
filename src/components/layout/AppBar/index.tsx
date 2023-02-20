import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

import { NavLinks } from '../../../constants';
import useStyles from './useStyles';

const AppBar = ({ location }: RouteComponentProps) => {
  const classes = useStyles();
  const activeRoute = (path: string) => location.pathname === path;
  const linkClass = (path: string) => (
    activeRoute(path) ? `${classes.linkActive} ${classes.link}` : classes.link
  );
  return (
    <Grid
      alignItems="flex-end"
      className={classes.root}
      container
      justifyContent="space-between"
    >
      <Grid item>
        <div className={classes.navLinks}>
          {NavLinks.map(({ href, path, title }) => (
            <Button
              className={linkClass(path || href || '')}
              color="primary"
              component={path ? NavLink : 'a'}
              href={href}
              key={title}
              target={href && '_blank'}
              to={path}
            >
              { title }
            </Button>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(AppBar);
