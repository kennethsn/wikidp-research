import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { NavLink, useLocation } from 'react-router-dom';

import { NavLinks } from '../../../constants';
import styles from './styles';


const AppBar = () => {
  const location = useLocation();
  const activeRoute = (path: string) => location.pathname === path;
  const linkClass = (path: string) => activeRoute(path) ? '--active' : '';
  return (
    <Grid
      container
      sx={styles.root}
    >
      <Grid sx={styles.navLinks}>
        <div>
          {NavLinks.map(({ href, path, title }) => (
            <Button
              sx={styles.button}
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

export default AppBar;
