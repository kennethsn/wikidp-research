import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from './styles';

interface Props {
  label: string;
}

const Header = ({ label }: Props) => (
  <Box sx={styles.root}>
    <Box sx={styles.container}>
      <Typography
        sx={styles.title}
        variant="h4"
      >
        {label}
      </Typography>
    </Box>
  </Box>
);

export default Header;
