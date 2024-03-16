import Typography from '@mui/material/Typography';
import { Else, If, Then } from 'react-if';

import { TextAnnotation } from '../../../types';
import AppTooltip from '../AppTooltip/AppTooltip';
import AnnotationMenu from '../AnnotationMenu/AnnotationMenu';
import styles from './styles';


interface AnnotationProps {
  annotation: TextAnnotation;
}

export default function AnnotationText({ annotation }: AnnotationProps) {
  const { content, sources } = annotation;
  return (
    <If condition={sources.length!!}>
      <Then>
        <AppTooltip
          title={(
            <AnnotationMenu annotation={annotation} />
          )}
        >
          <Typography sx={styles.annotated}>
            {content}
          </Typography>
        </AppTooltip>
      </Then>
      <Else>
        <Typography sx={styles.text}>
          {content}
        </Typography>
      </Else>
    </If>
  );
}
