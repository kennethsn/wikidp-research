import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { FooterLinks } from '../../../constants';
import styles from './styles';


const Footer = () => {
  const copyDate = `© ${new Date().getFullYear()}`;
  return (
    <Box
      component="footer"
      sx={styles.root}
    >
      <Grid
        container
        sx={styles.container}
      >
        {FooterLinks.map(({ logo, name, url }) => (
          <Grid
            key={`footer-${name}`}
            lg={4}
            md={6}
            sm={12}
          >
            <Button
              href={url}
              target="_blank"
              sx={styles.button}
            >
              <img
                alt={name}
                src={logo}
              />
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Grid
          sx={styles.credit}
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
    </Box>
  );
};

export default Footer;
