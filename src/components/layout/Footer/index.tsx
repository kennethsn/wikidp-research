import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { FooterLinks } from '../../../constants';
import useStyles from './useStyles';

const Footer = () => {
  const classes = useStyles();
  const copyDate = `© ${new Date().getFullYear()}`;
  return (
    <footer className={classes.root}>
      <Grid
        alignItems="center"
        className={classes.container}
        container
        justifyContent="center"
      >
        {FooterLinks.map(({ logo, name, url }) => (
          <Grid
            item
            key={`footer-${name}`}
            lg={4}
            md={6}
            sm={12}
          >
            <Button
              className={classes.button}
              href={url}
              target="_blank"
            >
              <img
                alt={name}
                className={classes.logo}
                src={logo}
              />
            </Button>
          </Grid>
        ))}
        <Grid
          className={classes.credit}
          item
          xs={10}
        >
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {copyDate}
            , collaborative research project by Kat Thornton and Kenneth Seals-Nutt.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
