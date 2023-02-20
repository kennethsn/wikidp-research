import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { WIKIDP_WIKIBASE_URL } from '../../../constants';
import MultiLingualTableContainer from '../../containers/MultiLingualTable';
import AppLayout from '../../layout/AppLayout';
import PageTitle from '../../layout/PageTitle';
import useStyles from './useStyles';

const MultiLingualTablePage = () => {
  const classes = useStyles();
  return (
    <AppLayout>
      <PageTitle title="Multi-lingual Labels Table" />
      <Grid container>
        <Grid
          className={classes.header}
          item
          xs={12}
        >
          <Typography
            color="primary"
            variant="h3"
          >
            Multi-lingual Table
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle1"
          >
            Comparing label translations across sources used for the
            <a
              className={classes.link}
              href={WIKIDP_WIKIBASE_URL}
              rel="noreferrer"
              target="_blank"
            >
              WikiDP Knowledge-graph
            </a>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <MultiLingualTableContainer />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default MultiLingualTablePage;
