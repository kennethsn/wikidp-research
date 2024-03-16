import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { WIKIDP_WIKIBASE_URL } from '../../constants';
import MultiLingualTableContainer from
  '../../components/containers/MultiLingualTableContainer/MultiLingualTableContainer';
import AppLayout from '../../components/layout/AppLayout/AppLayout';
import styles from './styles';


const MultiLingualTablePage = () => (
  <AppLayout title="Multi-lingual Labels Table">
    <Grid container>
      <Grid
        sx={styles.header}
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
          sx={styles.subtitle}
          variant="subtitle1"
        >
          Comparing label translations across sources used for the
          <a
            href={WIKIDP_WIKIBASE_URL}
            rel="noreferrer"
            target="_blank"
          >
            WikiDP Knowledge-graph
          </a>
        </Typography>
      </Grid>
      <Grid xs={12}>
        <MultiLingualTableContainer />
      </Grid>
    </Grid>
  </AppLayout>
);

export default MultiLingualTablePage;
