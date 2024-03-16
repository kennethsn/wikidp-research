import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { When } from 'react-if';

import { WikibaseEntity } from '../../../types';
import styles from './styles';


interface EntityCardProps {
  entity: WikibaseEntity;
}

export default function EntityCard({ entity }: EntityCardProps) {
  const {
    aliases,
    description,
    id: qid,
    image,
    label,
    logo,
    wikibase_url: wikibaseUrl,
  } = entity;
  return (
    <Card
      elevation={0}
      sx={styles.root}
    >
      <When condition={!!image}>
        <CardMedia
          component="img"
          image={image}
          sx={styles.image}
          title={label}
        />
      </When>
      <Box sx={styles.contentContainer}>
        <CardContent>
          <When condition={!!logo}>
            <CardMedia
              component="img"
              image={logo}
              sx={styles.logo}
              title={label}
            />
          </When>
          <Typography
            component="div"
            variant="h5"
          >
            {label}
          </Typography>
          <When condition={!!description}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="body2"
            >
              {description}
            </Typography>
          </When>
          <Typography
            color="text.secondary"
            gutterBottom
            variant="subtitle2"
          >
            Wikidata ID: {qid}
          </Typography>
          <When condition={!!aliases?.length}>
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              Aliases
            </Typography>
            <Box sx={styles.aliases}>
              {aliases.map((name, i) => (
                <Chip
                  icon={(
                    <BadgeOutlinedIcon />
                  )}
                  key={`${name}-${i}`}
                  label={name}
                  size="small"
                  sx={styles.aliasChip}
                />
              ))}
            </Box>
          </When>
        </CardContent>
        <CardActions sx={styles.actions}>
          <Button
            href={wikibaseUrl}
            size="small"
            target="_blank"
          >
            Learn More
          </Button>
        </CardActions>
    </Box>
  </Card>
  );
}
