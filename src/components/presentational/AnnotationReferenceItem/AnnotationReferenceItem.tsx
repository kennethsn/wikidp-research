import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Case,
  Default,
  Switch,
  When,
} from 'react-if';

import {
  URLValueWikidataPropIds,
  WikidataPropId,
  WikidataPropIdType,
  WikidataPropLabel,
} from '../../../constants';
import { TextAnnotationReference } from '../../../types';
import styles from './styles';


interface TextAnnotationReferenceItemProps {
  reference: TextAnnotationReference;
}

const RenderableWikidataPropIds = new Set<WikidataPropIdType>(Object.values(WikidataPropId));
const canRenderWikidataPropId = (propId: WikidataPropIdType) => RenderableWikidataPropIds.has(propId);
const showWikidataValueAsLink = (propId: WikidataPropIdType) => URLValueWikidataPropIds.has(propId);

export default function TextAnnotationReferenceItem({ reference }: TextAnnotationReferenceItemProps) {
  const { property: { id }, value: { description, label } } = reference;
  const propId = id as WikidataPropIdType;
  const hasDescription = !!description;
  const propLabel = WikidataPropLabel[propId];

  return canRenderWikidataPropId(propId) ? (
    <Grid sx={styles.root}>
      <AssuredWorkloadOutlinedIcon
        fontSize="inherit"
        sx={styles.headerIcon}
      />
      <Typography
        sx={styles.propLabel}
        variant="caption"
      >
        {propLabel}:
      </Typography>
      <Typography
        sx={styles.label}
        variant="caption"
      >
        <Switch>
          <Case condition={showWikidataValueAsLink(propId)}>
            <Link
              href={label}
              sx={styles.link}
              target="_blank"
            >
              {label}
            </Link>
          </Case>
          <Default>
            {label}
          </Default>
        </Switch>
      </Typography>
      <When condition={hasDescription}>
        <Typography
          sx={styles.description}
          variant="finePrint"
        >
          ({description})
        </Typography>
      </When>
    </Grid>
  ) : null;
}
