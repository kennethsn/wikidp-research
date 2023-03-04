export const APP_NAME = 'WikiDP Research';
export const CLASSNAME_PRODUCTION_PREFIX = 'prod';
export const CLASSNAME_SEED = 'wikidp-r';
export const DEFAULT_PAGE_TITLE = APP_NAME;
export enum Images {
  collectionHeader = '/images/banner-image.jpg',
  wikidp = '/favicon-512x512.png',
  yale = '/images/yale-logo.png',
}
export const MULTILINGUAL_FILES = [
  'checksum__Wikidata_Item_Labels.csv',
  'checksum__Wikidata_Property_Labels.csv',
  'checksum__Wikipedia_Articles.csv',
  'data_integrity__Wikidata_Item_Labels.csv',
  'data_integrity__Wikipedia_Articles.csv',
  'file_format__Lexemes.csv',
  'file_format__Wikidata_Item_Labels.csv',
  'file_format__Wikidata_Property_Labels.csv',
  'file_format__Wikipedia_Articles.csv',
  'license__Lexemes.csv',
  'license__Wikidata_Item_Labels.csv',
  'license__Wikidata_Property_Labels.csv',
  'license__Wikipedia_Articles.csv',
  'operating_system__Lexemes.csv',
  'operating_system__Wikidata_Item_Labels.csv',
  'operating_system__Wikidata_Property_Labels.csv',
  'operating_system__Wikipedia_Articles.csv',
  'reproducibility__Lexemes.csv',
  'reproducibility__Wikidata_Item_Labels.csv',
  'software__Lexemes.csv',
  'software__Wikidata_Item_Labels.csv',
  'software__Wikipedia_Articles.csv',
];
export enum RoutePaths {
  Home = '/',
  MultiLingualTable = '/multi-lingual-table',
}
export const WIKIDP_WIKIBASE_URL = 'https://wikidp.wikibase.cloud';
export const FooterLinks = [
  { name: 'Wikidata for Digital Preservation', logo: Images.wikidp, url: WIKIDP_WIKIBASE_URL },
  { name: 'Yale University Library', logo: Images.yale, url: 'https://library.yale.edu' },
];
export const NavLinks = [
  { path: RoutePaths.Home, title: 'Home' },
  { href: WIKIDP_WIKIBASE_URL, title: 'Wikibase' },
  { path: RoutePaths.MultiLingualTable, title: 'Multi-lingual Table' },
];
