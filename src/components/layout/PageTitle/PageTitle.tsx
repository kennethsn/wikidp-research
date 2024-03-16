import Helmet from 'react-helmet';

import { DEFAULT_PAGE_TITLE } from '../../../constants';


interface Props {
  title?: string;
}

const PageTitle = ({ title }: Props) => (
  <Helmet titleTemplate={`%s | ${DEFAULT_PAGE_TITLE}`}>
    <title>
      {title}
    </title>
  </Helmet>
);

PageTitle.defaultProps = {
  title: undefined,
};

export default PageTitle;
