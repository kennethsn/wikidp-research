import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import { When } from 'react-if';

import {
  TextAnnotation,
  TextAnnotationReference,
  TextAnnotationSource,
  TextAnnotationSourceValue,
} from '../../../types';
import AnnotationReferenceItem from '../AnnotationReferenceItem/AnnotationReferenceItem';
import styles from './styles';


interface AnnotationMenuProps {
  annotation: TextAnnotation;
}

const refKey = (reference: TextAnnotationReference, index: number) => (
  `${reference.property.id}-${index}`
);
const sourceKey = (id: TextAnnotationSource['property_id'], index: number) =>  `${id}-${index}`;
const valueKey = (label: TextAnnotationSourceValue['label'], index: number) => `${label}-${index}`;

export default function AnnotationMenu({ annotation: { sources } }: AnnotationMenuProps) {
  return (
    <Grid sx={styles.root}>
      <Grid>
        <Grid>
          <Typography
            sx={styles.header}
            variant="subtitle1"
          >
            Verified in Wikidata  
            <AutoFixHighOutlinedIcon
              fontSize="inherit"
              sx={styles.headerIcon}
            />
          </Typography>
        </Grid>
        {sources.map(({
          property_id: propertyId,
          property_label: propertyLabel,
          values,
          wikibase_url,
        }, i) => (
          <Grid
            key={sourceKey(propertyId, i)}
            sx={styles.source}
          >
            <Typography
              sx={styles.sourceTitle}
              variant="overline"
            >
              Source
              <When condition={sources.length > 1}>
                #{i + 1}
              </When>
            </Typography>
            <Grid sx={styles.sourceLabel}>
              <Link
                href={wikibase_url}
                target='_blank'
              >
                <Typography variant="overline">
                  <TravelExploreOutlinedIcon sx={styles.sourceLabelIcon} />
                  {propertyLabel}
                </Typography>
              </Link>
              <Grid sx={styles.sourceValueContainer}>
                {values.map(({ description, label, references }, valueIndex) => (
                  <Grid
                    key={valueKey(label, valueIndex)}
                    sx={styles.sourceValue}
                  >
                    <Typography
                      sx={styles.sourceValueText}
                      variant="subtitle2"
                    >
                      <When condition={values.length > 1}>
                        {valueIndex + 1}.
                      </When>
                      {label}
                    </Typography>
                    <Typography variant="finePrint">
                      {description}
                    </Typography>
                    {references.map((reference, refIndex) => (
                      <AnnotationReferenceItem
                        key={refKey(reference, refIndex)}
                        reference={reference}
                      />
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
