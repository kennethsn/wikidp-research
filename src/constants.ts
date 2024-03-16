export const {
  OPENAI_API_KEY,
  STORIES_SERVICES_API_BASE_URL,
  STORIES_SERVICES_DISABLED,
} = process.env;
export const APP_NAME = 'WikiDP Research';
export const CLASSNAME_PRODUCTION_PREFIX = 'prod';
export const CLASSNAME_SEED = 'wikidp-r';
export const DEFAULT_PAGE_TITLE = APP_NAME;
export enum Images {
  collectionHeader = '/images/banner-image.jpg',
  openAI = '/images/openai-logo.svg',
  wikidata = '/images/wikidata-logo.svg',
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
  ChatWikiDP = '/chat-wikidp',
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
  { path: RoutePaths.ChatWikiDP, title: 'ChatWikiDP'}
];

const _envBool = (envVar: string | undefined) => envVar?.toLowerCase() === 'true';

export const storiesServicesAPIIsEnabled = (
  !_envBool(STORIES_SERVICES_DISABLED) && !!STORIES_SERVICES_API_BASE_URL
);

export const WikibaseChatDomain =
  'digital preservation of software, file formats, operating systems, emulators, etc.';
export const WikibaseChatSampleMessages = [
  'What can QGIS be used for?',
  'Can I use steam on a linux laptop?',
  'Write a paragraph about 3D Slicer',
  'List readable file formats of PrintMaster Silver 15',
  'Show me the bulleted release history of OpenOffice Writer',
  'What language is wikidataintegrator in and what is the license?',
  'What\'s the history of FLOW-MATIC',
];

export const WikidataPropId = {
  importedFromWikimediaProject: 'P143',
  inferredFrom: 'P3452',
  referenceURL: 'P854',
  statedIn: 'P248',
} as const;

export type WikidataPropIdType = typeof WikidataPropId[keyof typeof WikidataPropId]

export const URLValueWikidataPropIds = new Set<WikidataPropIdType>([
  WikidataPropId.referenceURL,
])

export const WikidataPropLabel: Record<WikidataPropIdType, string> = {
  [WikidataPropId.importedFromWikimediaProject]: 'Stated in',
  [WikidataPropId.inferredFrom]: 'Inferred from',
  [WikidataPropId.referenceURL]: 'URL',
  [WikidataPropId.statedIn]: 'Stated in'
}
