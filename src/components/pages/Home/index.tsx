import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { APP_NAME, WIKIDP_WIKIBASE_URL } from '../../../constants';
import AppLayout from '../../layout/AppLayout';
import useStyles from './useStyles';

const HomePage = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <Grid container>
        <Grid
          item
          xs={12}
        >
          <div className={classes.titleSection}>
            <Typography
              color="primary"
              variant="h2"
            >
              { APP_NAME }
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
            >
              Welcome to the WikiDP Research Site. To learn more about the knowledgebase
              and our initiatives, visit the
              <a
                className={classes.link}
                href={WIKIDP_WIKIBASE_URL}
                rel="noreferrer"
                target="_blank"
              >
                Wikibase homepage
              </a>
              .
            </Typography>
          </div>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default HomePage;
