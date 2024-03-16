import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import AppLayout from '../../components/layout/AppLayout/AppLayout';
import { APP_NAME, WIKIDP_WIKIBASE_URL } from '../../constants';
import styles from './styles';


const Home = () => {
  return (
    <AppLayout>
      <Grid container>
        <Grid
          sx={styles.titleSection}
          xs={12}
        >
          <div>
            <Typography
              color="primary"
              variant="h2"
            >
              { APP_NAME }
            </Typography>
            <Typography
              color="textSecondary"
              sx={styles.text}
              variant="subtitle1"
            >
              Welcome to the WikiDP Research Site. To learn more about the knowledgebase
              and our initiatives, visit the
              <a
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

export default Home;
